import { airportBus, arrival, address, booking, cover, courses, nightBus, photoRooms, photos, places, rooms, timetable } from './content.js';
import { applianceAreas, helpTopics, matchHelp, normalize } from './guest-tools.js';
import { label, languages, translate } from './i18n.js';
import { buildingMaps, faq, guides, parking, wifiNetworks } from './operations.js';

const paths = {
  home:'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z',
  room:'M3 17v3m18-3v3M3 17h18v-5H3zM5 12V6h14v6M8 12V9h8v3',
  photos:'M6 17H3V6m3-3h15v15H6zM6 15l4-4 3 3 2-2 6 5m-5-10h.01',
  map:'m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2zm6-2v16m6-14v16',
  pin:'M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0ZM12 10m-2.5 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0',
  guide:'M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14',
  compass:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4 5-2 6-6 2 2-6 6-2Z',
  calendar:'M4 5h16v15H4zM4 9h16M8 3v4m8-4v4m-7 8 2 2 4-4',
  clock:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2',
  key:'M12 10a4.5 4.5 0 1 1 3 3l-6 6H5v-4l2-2h3l2-3Z',
  entry:'M11 4h8v16h-8M3 12h11m-4-4 4 4-4 4',
  appliances:'M3 17h18M5 14a7 7 0 0 1 14 0H5Zm7-7V5',
  wifi:'M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0m-4 4h.01',
  list:'M5 3h14v18H5zM8 8h8m-8 4h8m-8 4h5',
  bag:'M6 7h12a2 2 0 0 1 2 2v10H4V9a2 2 0 0 1 2-2Zm3 0V4h6v3m-7 3v7m8-7v7',
  laundry:'M4 3h16v18H4zM4 7h16m-8 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8Z',
  waste:'M4 6h16m-14 0 1 15h10l1-15M9 6V3h6v3m-5 4v7m4-7v7',
  car:'M5 17v3m14-3v3M3 12l2-6h14l2 6v5H3zm0 0h18M6 14h2m8 0h2',
  plane:'M21 5c0-1.5-1.5-2-2.5-1L13 9.5 5 8l-2 2 6 3.5-2 2H4l-1 1 4 2 2 3 1-1v-3l2-2 3.5 6 2-2-1.5-8L21 5Z',
  food:'M4 3v6c0 2 1 3 3 3s3-1 3-3V3m-3 0v18m12-18c-3 1-5 5-5 9h5m0-9v18',
  down:'m6 9 6 6 6-6', left:'m15 6-6 6 6 6', right:'m9 6 6 6-6 6',
  close:'m6 6 12 12M18 6 6 18', copy:'M8 8h12v12H8zM16 4H4v12',
  expand:'M14 4h6v6m0-6-6 6M4 14v6h6m-6 0 6-6',
  search:'M10.5 3a7.5 7.5 0 1 0 0 15 7.5 7.5 0 1 0 0-15Zm5.3 12.8L21 21',
  message:'M4 4h16v12h-9l-5 4v-4H4Zm4 5h8m-8 3h5',
};

const navigation = [['home','home'], ['rooms','room'], ['location','pin'], ['guide','guide'], ['local','compass'], ['booking','calendar']];
const extraRoutes = ['location/airport', 'location/parking', 'local/food', 'local/tours', 'guide/check-in/checkout'];
const main = document.querySelector('#main');
const menu = document.querySelector('#menu');
const lightbox = document.querySelector('#lightbox');
const helpPanel = document.querySelector('#help-panel');
const helpTrigger = document.querySelector('#help-trigger');
const languagePicker = document.querySelector('#language');
const photoById = new Map(photos.map((photo) => [photo.id, photo]));
const filters = ['all','bedroom','living','bath','exterior'];
const formatNumber = (number) => String(number).padStart(2, '0');

let storedLanguage;
try { storedLanguage = localStorage.getItem('abode-language'); } catch { /* Storage is optional. */ }
let language = languages.some(({ code }) => code === storedLanguage) ? storedLanguage : 'ko';
let route = 'home';
let slideIndex = 0;
let galleryFilter = 'all';
let galleryRoom = 'all';
let placeFilter = 'all';
let placeQuery = '';
let lightboxIndex = 0;
let lightboxPhotos = [];
let toastTimeout;

const t = (key) => label(key, language);
const localize = (value) => translate(value, language);
const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]}"/></svg>`;
const imagePath = (id) => `assets/images/${id}.webp`;
const caption = (id) => localize(photoById.get(id).caption);
const image = (id, className = '') => `<img class="${className}" src="${imagePath(id)}" alt="${caption(id)}" loading="lazy" decoding="async">`;
const brandMark = '<img src="assets/abode-logo.png" width="980" height="236" alt="ABODE">';
const link = (href, text, className = '') => `<a class="${className}" href="${href}">${text}</a>`;
const external = (href, text, className = 'button button-outline') => `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
const action = (name, text, className = '', value = '') => `<button type="button" class="${className}" data-action="${name}" data-value="${value}">${text}</button>`;
const iconAction = (name, iconName, accessible, className, value = '') => `<button type="button" class="${className}" data-action="${name}" data-value="${value}" aria-label="${accessible}">${icon(iconName)}</button>`;
const walking = (origin, destination) => `https://www.google.com/maps/dir/?api=1&amp;origin=${encodeURIComponent(origin)}&amp;destination=${encodeURIComponent(destination)}&amp;travelmode=walking`;
const naver = (query) => `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
const google = (query) => `https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(query)}`;
const bookingLink = () => `${booking}.${({ ko:'ko', en:'en-gb', ja:'ja', 'zh-Hans':'zh-cn', 'zh-Hant':'zh-tw' })[language]}.html`;

function pageHeading(english, title, description = '') {
  return `<header class="page-heading"><p class="eyebrow">${english}</p><h1>${title}</h1>${description ? `<p class="body-copy">${description}</p>` : ''}</header>`;
}

function sectionHeading(english, title, description = '') {
  return `<p class="eyebrow">${english}</p><h2>${title}</h2>${description ? `<p class="body-copy">${description}</p>` : ''}`;
}

function siteFooter() {
  return `<footer class="footer"><a class="wordmark" href="#home" aria-label="${t('brand')} · ${t('home')}">${brandMark}</a><p>${t('addresses')}</p><p>${t('stayBrand')}</p></footer>`;
}

function bookingBlock(isPage = false) {
  const heading = isPage ? 'h1' : 'h2';
  return `<section class="section booking-section"><p class="eyebrow">RESERVATIONS</p><${heading}>${t('bookTitle')}</${heading}><p class="body-copy">${t('bookText')}</p>
  <nav class="booking-actions" aria-label="${t('booking')}">${external(bookingLink(),t('bookLink'),'button button-light')}</nav>
  <h3>${t('help')}</h3><p class="body-copy">${localize(arrival.help)}</p></section>`;
}

function quickLinks() {
  const items = [
    ['guide/check-in','key',t('checkin'),'16:00'],
    ['guide/check-in/checkout','clock',t('checkout'),'11:00'],
    ['guide/luggage','bag',t('luggage'),t('luggageShort')],
    ['guide/wifi','wifi',t('wifi'),t('wifiShort')],
    ['location','pin',t('location'),t('addressShort')],
    ['location/parking','car',t('parking'),t('parkingShort')],
  ];
  return `<div class="quick-grid">${items.map(([href, symbol, title, detail]) => `<a href="#${href}" class="quick-card">${icon(symbol)}<strong>${title}</strong><span>${detail}</span></a>`).join('')}</div>`;
}

function guideLinks() {
  return `<div class="guide-rows">${guides.map((item) => `<a href="#guide/${item.id}" class="guide-row"><span class="guide-icon">${icon(item.icon)}</span><span class="item-copy"><strong>${localize(item.title)}</strong><small>${localize(item.hint)}</small></span>${icon('right')}</a>`).join('')}</div>`;
}

function faqBlock() {
  return `<section class="section faq" aria-labelledby="faq-title"><p class="eyebrow">BEFORE YOUR STAY</p><h2 id="faq-title">${t('faq')}</h2><div class="faq-items">${faq.map(({ question,route,answer }) => {
    return `<details><summary>${localize(question)}${icon('down')}</summary><p class="body-copy">${localize(answer)}</p>${link(`#${route}`,t('guideMore'),'text-link')}</details>`;
  }).join('')}</div></section>`;
}

function helpForm(id) {
  return `<div class="help-widget"><p class="body-copy">${t('helpHint')}</p><form class="search-field" data-help-form role="search" aria-label="${t('helpTitle')}">
    <label class="visually-hidden" for="${id}">${t('helpTitle')}</label><input id="${id}" name="query" type="search" maxlength="110" placeholder="${t('helpPlaceholder')}"><button type="submit" aria-label="${t('search')}">${icon('search')}</button></form>
    <div class="help-chips">${helpTopics.slice(0,6).map(({ id:topic,title }) => action('help-topic',localize(title),'',topic)).join('')}</div>
    <div class="help-results" aria-live="polite"></div></div>`;
}

function showHelp(widget, matches) {
  const results = widget.querySelector('.help-results');
  results.innerHTML = matches.map(({ route:href,title,answer }) => `<article><strong>${localize(title)}</strong><p class="body-copy">${localize(answer)}</p>${link(`#${href}`,t('guideMore'),'text-link')}</article>`).join('') || `<p class="body-copy">${t('helpNoResult')}</p>`;
}

function home() {
  const first = cover[slideIndex];
  return `<section class="hero" aria-labelledby="home-title" data-swipe="hero">
    <img id="hero-image" class="hero-photo" src="${imagePath(first.id)}" alt="${caption(first.id)}" style="--position:${first.position}" fetchpriority="high">
    <div class="hero-copy"><p class="eyebrow">SEOUL · SEOGYO</p><h1 id="home-title" class="hero-title"><span>STAY</span> <span>ABODE</span></h1><p class="hero-tagline">${t('tagline')}</p></div>
    <div class="slide-buttons">${iconAction('slide','left',t('prev'),'slide-button','-1')}${iconAction('slide','right',t('next'),'slide-button','1')}</div>
    <div class="hero-controls">
      <button type="button" class="discover" data-action="discover" aria-label="${t('scroll')}">SCROLL${icon('down')}</button>
      <div class="slide-indicators">${cover.map((_,i) => `<button type="button" data-action="select-slide" data-value="${i}" aria-label="${formatNumber(i+1)} / ${formatNumber(cover.length)}" aria-pressed="${slideIndex === i}"></button>`).join('')}<span id="slide-count" class="visually-hidden" aria-live="polite">${formatNumber(slideIndex + 1)} / ${formatNumber(cover.length)}</span></div>
    </div>
  </section>
  <section class="section quick-help" id="quick-help">${sectionHeading('STAY HELP',t('quickHelp'))}${helpForm('home-help-query')}</section>
  <section class="section essentials">${sectionHeading('STAY ESSENTIALS',t('essentials'))}${quickLinks()}</section>
  <section class="section intro" id="intro">${sectionHeading('STAY ABODE',t('introTitle'),t('introText'))}</section>
  <section class="section home-rooms">${sectionHeading('ROOMS & SPACES',t('roomTitle'),t('roomIntro'))}
    <div class="room-preview">${link('#rooms', image('triple-beds'))}${link('#rooms', image('dining'))}</div>
    ${link('#rooms', t('galleryLink'), 'button button-outline')}
  </section>
  <section class="section location-teaser">${sectionHeading('GETTING HERE',t('location'),t('addresses'))}${image('entrance','feature-photo')}<div class="map-actions">${link('#location',t('location'),'button button-outline')}${link('#location/airport',t('airportReturn'),'button button-outline')}</div></section>
  ${nearbyPreview('food',t('food'),t('localFoodIntro'))}
  ${nearbyPreview('tours',t('tours'),t('toursIntro'))}
  ${faqBlock()}
  <section class="section guide-teaser">${sectionHeading('GUEST GUIDE',t('know'))}${guideLinks()}</section>
  ${bookingBlock()}`;
}

function filterButtons(keys, selected, operation) {
  return `<div class="filters" role="group" aria-label="${t('filter')}">${keys.map((key) => `<button type="button" data-action="${operation}" data-value="${key}" aria-pressed="${key === selected}">${t(key)}</button>`).join('')}</div>`;
}

function visiblePhotos() {
  return photos.filter(({ id,group }) => (galleryRoom === 'all' || photoRooms[id] === galleryRoom) && (galleryFilter === 'all' || group === galleryFilter));
}

function photoCards() {
  return visiblePhotos().map(({ id }) => `<button type="button" class="photo-card" data-action="photo" data-value="${id}" aria-label="${t('enlarge')} · ${caption(id)}"><span class="photo-thumbnail">${image(id)}<span class="photo-expand">${icon('expand')}</span></span><span class="photo-caption">${caption(id)}</span></button>`).join('');
}

function galleryFilters() {
  const units = [...new Set(Object.values(photoRooms))].sort();
  const categories = filters.filter((filter) => filter === 'all' || photos.some(({ id,group }) => group === filter && (galleryRoom === 'all' || photoRooms[id] === galleryRoom)));
  return `<label class="room-filter">${t('roomFilter')}<select id="room-filter"><option value="all">${t('allRooms')}</option>${units.map((room) => `<option value="${room}"${room === galleryRoom ? ' selected' : ''}>${room}</option>`).join('')}</select></label>${filterButtons(categories,galleryFilter,'gallery-filter')}`;
}

function roomsPage() {
  return `${pageHeading('ROOMS & SPACES',t('roomTitle'),t('roomIntro'))}
  <section class="section content-section">
    <div class="gallery-feature">${image('bedroom-dining')}</div>
    <div class="gallery-filters">${galleryFilters()}</div><div class="gallery-grid" id="photo-cards">${photoCards()}</div></section>
  <section class="section room-types">${sectionHeading('ROOM TYPES',t('roomTypes'),t('roomNote'))}
    <ul>${rooms.map(({ count,name,layout }) => `<li><span class="item-copy">${localize(name)}${layout ? `<small>${localize(layout)}</small>` : ''}</span><strong>${t('guests').replace('{n}',count)}</strong></li>`).join('')}</ul>${link('#booking',t('booking'),'button')}
  </section>`;
}

function busLink(night = false) {
  const number = night ? 'N6002' : '6002';
  const title = localize([`${number}번 리무진 시간표`, `Bus ${number} timetable`, `空港バス${number}番の時刻表`,`${number} 路机场巴士时刻表`,`${number} 路機場巴士時刻表`]);
  return external(night ? nightBus : airportBus,title);
}

function disclosure(title, hint, body, open = false) {
  return `<details class="guide-disclosure"${open ? ' open' : ''}><summary><span class="item-copy"><strong>${title}</strong>${hint ? `<small>${hint}</small>` : ''}</span>${icon('down')}</summary><div class="disclosure-body">${body}</div></details>`;
}

function transportBody(text, links) {
  return `<p class="body-copy">${localize(text)}</p><div class="map-actions">${links}</div>`;
}

function locationPage(detail) {
  const station = (name) => external(walking(name,address),name === '망원역' ? localize(['망원역 도보 경로','Walk from Mangwon','望遠駅からの徒歩ルート','从望远站步行','從望遠站步行']) : localize(['합정역 도보 경로','Walk from Hapjeong','合井駅からの徒歩ルート','从合井站步行','從合井站步行']));
  const trainLink = external(timetable,t('train'));
  const busStop = (name) => external(naver(name),t('naver')) + external(google(name),t('google'));
  if (detail === 'airport') {
    const toHapjeong = external(walking(address,'합정역'),localize(['합정역까지 도보 경로','Walk to Hapjeong Station','合井駅までの徒歩ルート','步行至合井站','步行至合井站']));
    const incheon = transportBody(arrival.returnTrain,trainLink + toHapjeong) + transportBody(arrival.returnBus,busLink() + busStop('합정역 공항버스 정류장 6002 인천공항 방면')) + transportBody(arrival.nightDeparture,busLink(true) + busStop('홍대입구 공항버스 정류장 인천공항 방면'));
    return `${pageHeading('TO THE AIRPORT',t('airportReturn'))}<section class="section content-section">
      ${disclosure(t('incheon'),'AREX · 6002 · N6002',incheon,true)}
      ${disclosure(t('gimpo'),'Metro Line 2 · AREX',transportBody(arrival.gimpoReturn,trainLink + toHapjeong))}
      ${link('#location',t('location'),'button button-outline')}
    </section>`;
  }
  const incheon = transportBody(arrival.airport,trainLink) + transportBody(arrival.bus,busLink()) + transportBody(arrival.nightArrival,busLink(true));
  return `${pageHeading('GETTING HERE',t('locationHeading'),t('addresses'))}
  <section class="section content-section">
    <div class="map-actions">${external(buildingMaps.naver,t('naver'))}${external(buildingMaps.google,t('google'))}${action('copy-address',`${icon('copy')}${t('copy')}`,'button button-cream')}</div>
    <article class="information parking-info" id="parking" aria-labelledby="parking-title" tabindex="-1">
      <h2 id="parking-title">${icon('car')}${t('parkingHeading')}</h2>
      <p class="body-copy">${localize(parking)}</p>
    </article>
    <article class="information">${sectionHeading('ENTRANCE',t('entrance'),localize(arrival.entrance))}${image('entrance','feature-photo')}${link('#guide/check-in',t('checkin'),'text-link')}</article>
    ${disclosure(t('subway'),localize(['망원역 약 5분 · 합정역 약 8분','Mangwon about 5 min · Hapjeong about 8 min','望遠駅から約5分・合井駅から約8分','望远站约 5 分钟、合井站约 8 分钟','望遠站約 5 分鐘、合井站約 8 分鐘']),transportBody(arrival.subway,station('망원역') + station('합정역')),true)}
    ${disclosure(t('incheon'),'AREX · 6002 · N6002',incheon)}
    ${disclosure(t('gimpo'),'AREX all-stop',transportBody(arrival.airport,trainLink))}
    <div class="map-actions">${link('#location/airport',t('airportReturn'),'button button-outline')}</div>
  </section>`;
}

function guideArticle({ title,text,steps,model,image: id,manuals }, fold = false, open = false) {
  const heading = localize(title);
  const body = `${model && !fold ? `<p class="device-model">${model}</p>` : ''}
    ${id ? `<img class="guide-photo" src="${imagePath(id)}" alt="${heading}" loading="lazy" decoding="async">` : ''}
    ${text ? `<p class="body-copy">${localize(text)}</p>` : ''}
    ${steps ? `<ol class="steps">${steps.map((step) => `<li>${localize(step)}</li>`).join('')}</ol>` : ''}
    ${manuals ? `<div class="map-actions">${manuals.map(([brand,url]) => external(url,`${brand} · ${t('manual')}`)).join('')}</div>` : ''}`;
  return fold ? disclosure(heading,model,body,open) : `<article class="information guide-detail"><h2>${heading}</h2>${body}</article>`;
}

function appliancePage(guide, areaId) {
  const area = applianceAreas.find(({ id }) => id === areaId);
  const list = `<div class="guide-rows">${applianceAreas.map(({ id,icon:symbol,title,hint }) => `<a class="guide-row" href="#guide/facilities/${id}"><span class="guide-icon">${icon(symbol)}</span><span class="item-copy"><strong>${localize(title)}</strong><small>${localize(hint)}</small></span>${icon('right')}</a>`).join('')}</div>`;
  const visible = area ? guide.items.filter((item) => item.area === area.id) : [];
  return `${pageHeading('APPLIANCE GUIDE',area ? localize(area.title) : t('applianceTitle'),area ? localize(area.hint) : localize(guide.lead))}<section class="section content-section">${area ? visible.map((item,i) => guideArticle(item,true,i === 0)).join('') + link('#guide/facilities',t('areaGuides'),'button button-outline') : list}</section>`;
}

function guidePage(detail) {
  const [guideId,areaId] = detail.split('/');
  const item = guides.find(({ id }) => id === guideId);
  if (!item) {
    return `${pageHeading('GUEST GUIDE',t('guide'),t('guideIntro'))}<section class="section content-section">${guideLinks()}<article class="information"><h2>${t('help')}</h2><p class="body-copy">${localize(arrival.help)}</p></article></section>`;
  }
  if (item.id === 'facilities') return appliancePage(item,areaId);
  const quickTimes = `<div class="guide-timing"><div><span>${t('checkin')}</span><strong>16:00</strong></div><div><span>${t('checkout')}</span><strong>11:00</strong></div></div>`;
  const networks = `<ul class="networks">${wifiNetworks.map((name) => `<li><strong>${name}</strong><button class="button button-cream" type="button" data-action="copy-network" data-value="${name}" aria-label="${t('copyNetwork')} · ${name}">${icon('copy')}${t('copyNetwork')}</button></li>`).join('')}</ul>`;
  return `${pageHeading('GUEST GUIDE',localize(item.title),localize(item.lead))}<section class="section content-section">
    ${item.id === 'check-in' ? quickTimes : ''}${item.id === 'wifi' ? networks : ''}
    ${item.items.map((entry,i) => guideArticle(entry,item.id === 'check-in',i === (areaId === 'checkout' ? 1 : 0))).join('')}
    ${item.id === 'check-in' ? `<div class="map-actions">${link('#location/parking',t('parking'),'button button-outline')}${link('#location',t('location'),'button button-outline')}</div>` : ''}
    ${link('#guide',t('backToGuide'),'button button-outline')}
  </section>`;
}

function placesFor(detail) {
  if (detail === 'food') return places.filter(({ group }) => group === 'food');
  if (detail === 'tours') return places.filter(({ group }) => group === 'walk');
  return places;
}

function nearbyPreview(detail, title, intro) {
  const featured = placesFor(detail).filter((place) => place.featured).slice(0,3);
  return `<section class="section local-teaser">${sectionHeading(detail === 'food' ? 'NEARBY FOOD' : 'NEARBY TOURS',title,intro)}
    <ul class="preview-list">${featured.map((place) => `<li><strong>${localize(place.name)}</strong><span>${t(place.category)}</span></li>`).join('')}</ul>
    ${link(`#local/${detail}`,t('allPlaces'),'button button-outline')}</section>`;
}

function placeCards(detail) {
  const query = normalize(placeQuery);
  const results = placesFor(detail).filter((place) => {
    const filterMatch = placeFilter === 'all' || (placeFilter === 'picks' && place.featured) || [place.category,place.group].includes(placeFilter);
    const keywords = [place.query,...place.name,localize(place.about),t(place.category)].map(normalize);
    return filterMatch && (!query || keywords.some((value) => value.includes(query)));
  });
  return results.map((place) => `<article class="place">
    <p class="place-type">${t(place.category)}</p><h2>${localize(place.name)}</h2><p class="body-copy">${localize(place.about)}</p>
    <div class="map-actions">${external(naver(place.query),t('naver'))}${external(google(place.query),t('google'))}${place.source ? external(place.source,place.sourceLabel ?? t('official'),'text-link') : ''}</div></article>`).join('') || `<p class="body-copy">${t('placeEmpty')}</p>`;
}

function localPage(detail) {
  const walkingCourses = `<section class="section courses">${sectionHeading('WALKING ROUTES',t('course'))}${courses.map(({ name,stops }) => `<article class="course"><h3>${localize(name)}</h3><ol>${stops.map((i) => `<li>${external(naver(places[i].query),localize(places[i].name),'text-link')}</li>`).join('')}</ol></article>`).join('')}</section>`;
  const views = {
    food:['NEARBY FOOD','food','localFoodIntro',['market','meals','cafes']],
    tours:['NEARBY TOURS','tours','toursIntro',['walk','history','culture']],
  };
  const [heading,title,intro,categories] = views[detail] ?? ['LOCAL NOTES','localTitle','localIntro',['food','walk']];
  return `${pageHeading(heading,t(title),t(intro))}<section class="section content-section">
    ${filterButtons(['picks','all',...categories],placeFilter,'local-filter')}
    <form class="search-field place-search" data-place-form role="search" aria-label="${t('placeSearch')}"><label for="place-query" class="visually-hidden">${t('placeSearch')}</label><input id="place-query" type="search" placeholder="${t('placeSearch')}" maxlength="80"><button type="submit" aria-label="${t('search')}">${icon('search')}</button></form>
    <div id="places" aria-live="polite">${placeCards(detail)}</div></section>${detail !== 'food' ? walkingCourses : ''}`;
}

function getRoute() {
  const fragment = location.hash.slice(1);
  if (fragment === 'guide/parking') return 'location/parking';
  if (extraRoutes.includes(fragment) || navigation.some(([name]) => name === fragment) || guides.some(({ id }) => `guide/${id}` === fragment)) return fragment;
  if (applianceAreas.some(({ id }) => fragment === `guide/facilities/${id}`)) return fragment;
  return 'home';
}

function menuLinks() {
  const tourCount = placesFor('tours').length;
  const entries = [
    ['home','home',t('home'),localize(['어보드 처음 화면','ABODE home page','ABODEのホーム画面','ABODE 首页','ABODE 首頁'])],
    ['rooms','photos',localize(['객실 둘러보기','Room gallery','客室ギャラリー','浏览客房','瀏覽客房']),localize(['공용 공간·객실·욕실 사진','Shared areas, rooms and bathrooms','共用スペース・客室・浴室の写真','公共空间、客房与浴室照片','公共空間、客房與浴室照片'])],
    ['location','map',t('location'),localize(['공항과 역에서 숙소까지','From the airports and stations','空港・駅から宿まで','从机场及车站前往住宿','從機場及車站前往住宿'])],
    ['location/airport','plane',t('airportReturn'),localize(['숙소에서 인천·김포공항까지','From ABODE to Incheon or Gimpo','宿から仁川・金浦空港まで','从住宿前往仁川或金浦机场','從住宿前往仁川或金浦機場'])],
    ['guide/check-in','entry',localize(['체크인 · 체크아웃 안내','Check-in and check-out','チェックイン・チェックアウト','入住与退房指南','入住與退房指南']),localize(['입실·퇴실 방법과 이용 안내','Arrival and departure instructions','入室・退室の手続きとご案内','入住、退房方式及使用指南','入住、退房方式及使用指南'])],
    ['guide/wifi','wifi','Wi-Fi',localize(['네트워크 정보와 연결 방법','Network details and how to connect','ネットワーク情報と接続方法','网络信息与连接方法','網路資訊與連線方法'])],
    ['guide/facilities','appliances',localize(['냉난방 · 주방기기 · 비품 안내','Appliances and supplies','冷暖房・キッチン家電・備品','冷暖设备、厨房电器与备品','冷暖設備、廚房家電與備品']),localize(['냉난방·주방기기·객실 비품 안내','Heating, kitchen appliances and room supplies','冷暖房・キッチン家電・客室備品のご案内','冷暖设备、厨房电器与客房备品','冷暖設備、廚房家電與客房備品'])],
    ['guide/laundry','laundry',localize(['세탁 안내','Laundry guide','ランドリー案内','洗衣指南','洗衣指南']),localize(['세탁기·건조기 사용법','How to use the washer and dryer','洗濯機・乾燥機の使い方','洗衣机与烘干机用法','洗衣機與烘乾機用法'])],
    ['guide/waste','waste',localize(['쓰레기 배출','Waste disposal','ごみの出し方','垃圾投放','垃圾投放']),localize(['분리수거와 배출 안내','Sorting and disposal instructions','分別とごみ出しのご案内','垃圾分类与投放指南','垃圾分類與投放指南'])],
    ['guide/rules','list',localize(['숙소 이용 규칙','House rules','宿泊ルール','住宿规则','住宿規則']),localize(['함께 지키는 숙소 이용 규칙','House rules for all guests','皆さまにお守りいただくルール','全体住客须遵守的规则','全體住客須遵守的規則'])],
    ['local/food','food',localize(['주변 맛집','Nearby restaurants','周辺の飲食店','周边美食','周邊美食']),localize(['어보드가 고른 주변 맛집','Local dining picked by ABODE','ABODEが選んだ周辺の飲食店','ABODE 精选周边餐厅','ABODE 精選周邊餐廳'])],
    ['local/tours','compass',localize(['추천 근교 투어','Recommended local tours','おすすめ近郊ツアー','推荐周边游','推薦周邊遊']),localize([`서울에서 만나는 추천 ${tourCount}곳`,`${tourCount} places to explore in Seoul`,`ソウルのおすすめ ${tourCount} か所`,`首尔 ${tourCount} 个推荐去处`,`首爾 ${tourCount} 個推薦去處`])],
  ];
  const active = route.split('/').slice(0,2).join('/');
  return entries.map(([href,symbol,title,hint]) => `<a href="#${href}"${active === href ? ' aria-current="page"' : ''}><span class="drawer-icon">${icon(symbol)}</span><span class="drawer-copy"><strong>${title}</strong><small>${hint}</small></span>${icon('right')}</a>`).join('');
}

function renderChrome() {
  const active = route.split('/')[0];
  const bottom = document.querySelector('#bottom');
  document.documentElement.lang = language;
  document.querySelector('.skip').textContent = t('skip');
  document.querySelector('.topbar .wordmark').setAttribute('aria-label', `${t('brand')} · ${t('home')}`);
  document.querySelector('.menu-trigger').setAttribute('aria-label', t('menuOpen'));
  languagePicker.querySelector('summary').setAttribute('aria-label', t('language'));
  document.querySelector('#active-language').textContent = languages.find(({ code }) => code === language).short;
  document.querySelector('#language-options').innerHTML = languages.map(({ code, name }) => `<button type="button" lang="${code}" data-action="language" data-value="${code}" aria-pressed="${code === language}">${name}</button>`).join('');
  bottom.setAttribute('aria-label',t('quick'));
  bottom.innerHTML = navigation.filter(([name]) => name !== 'location').map(([name, symbol]) => `<a href="#${name}"${active === name ? ' aria-current="page"' : ''}>${icon(symbol)}<span>${t(name)}</span></a>`).join('');
  bottom.hidden = false;
  menu.innerHTML = `<div class="drawer-inner"><div class="drawer-header"><h2 id="menu-label" class="visually-hidden">${t('menu')}</h2><div class="drawer-brand">${brandMark}</div>${iconAction('close-menu','close',t('menuClose'),'icon-button drawer-close')}</div><nav aria-label="${t('menu')}">${menuLinks()}</nav><div class="drawer-footer"><strong>STAY ABODE</strong><small>SEOUL · SEOGYO</small></div></div>`;
  helpTrigger.innerHTML = `${icon('message')}<span>${t('helpTitle')}</span>`;
  helpTrigger.hidden = false;
  helpPanel.innerHTML = `<div class="help-panel-inner"><div class="help-panel-head"><h2 id="help-title">${t('helpTitle')}</h2>${iconAction('close-help','close',t('close'),'icon-button')}</div>${helpForm('dialog-help-query')}</div>`;
  lightbox.setAttribute('aria-label',t('enlarge'));
}

function updateTopbar() {
  const isHome = route === 'home';
  document.querySelector('#topbar').classList.toggle('over-photo',isHome && window.scrollY < 44);
  document.querySelector('#bottom').classList.toggle('over-cover',isHome && window.scrollY < 120);
  helpTrigger.classList.toggle('over-cover',isHome && window.scrollY < 120);
}

function render({ resetScroll = false, focus = false } = {}) {
  const before = route;
  route = getRoute();
  if (route !== before) {
    placeQuery = '';
    placeFilter = route.startsWith('local/') ? 'picks' : 'all';
  }
  const homeTitle = language === 'ko' ? '스테이 어보드 · STAY ABODE | 서울 서교동 숙소' : 'STAY ABODE | A stay in Seogyo, Seoul';
  renderChrome();
  const pages = { home, rooms:roomsPage, location:locationPage, guide:guidePage, local:localPage, booking:() => bookingBlock(true) + faqBlock() };
  const [key,...segments] = route.split('/');
  main.dataset.page = route;
  main.innerHTML = pages[key](segments.join('/')) + siteFooter();
  document.title = route === 'home' ? homeTitle : `${main.querySelector('h1').textContent.replace(/\s+/g,' ')} · STAY ABODE`;
  const search = document.querySelector('#place-query');
  if (search) search.value = placeQuery;
  main.classList.toggle('internal', key !== 'home');
  const target = route === 'location/parking' ? document.querySelector('#parking') : null;
  if (target) target.scrollIntoView({ block:'start', behavior:'instant' });
  else if (resetScroll) window.scrollTo({ top:0, behavior:'instant' });
  if (focus) (target ?? main).focus({ preventScroll:true });
  updateTopbar();
}

function showSlide(index) {
  slideIndex = (index + cover.length) % cover.length;
  const { id, position } = cover[slideIndex];
  const coverImage = document.querySelector('#hero-image');
  coverImage.src = imagePath(id);
  coverImage.alt = caption(id);
  coverImage.style.setProperty('--position', position);
  document.querySelectorAll('.slide-indicators button').forEach((button, i) => button.setAttribute('aria-pressed', i === slideIndex));
  document.querySelector('#slide-count').textContent = `${formatNumber(slideIndex + 1)} / ${formatNumber(cover.length)}`;
}

function displayPhoto(index) {
  lightboxIndex = (index + lightboxPhotos.length) % lightboxPhotos.length;
  const photo = lightboxPhotos[lightboxIndex];
  lightbox.querySelector('img').src = imagePath(photo.id);
  lightbox.querySelector('img').alt = caption(photo.id);
  lightbox.querySelector('#photo-caption').textContent = caption(photo.id);
  lightbox.querySelector('#photo-count').textContent = `${lightboxIndex + 1} / ${lightboxPhotos.length}`;
}

function openPhoto(id) {
  lightboxPhotos = visiblePhotos();
  lightbox.innerHTML = `<div class="lightbox-inner" data-swipe="lightbox"><div class="lightbox-head"><span id="photo-count" aria-live="polite"></span>${iconAction('close-photo','close',t('close'),'icon-button')}</div>
    <figure><img alt=""><figcaption id="photo-caption"></figcaption></figure>
    <div class="lightbox-controls"${lightboxPhotos.length === 1 ? ' hidden' : ''}>${iconAction('photo-step','left',t('prev'),'icon-button','-1')}${iconAction('photo-step','right',t('next'),'icon-button','1')}</div></div>`;
  displayPhoto(lightboxPhotos.findIndex((photo) => photo.id === id));
  lightbox.showModal();
}

function updateFilter(button, update) {
  button.closest('.filters').querySelectorAll('button').forEach((node) => node.setAttribute('aria-pressed', node === button));
  update();
}

function updatePlaceSearch(value) {
  placeQuery = value;
  if (normalize(value) && placeFilter === 'picks') {
    placeFilter = 'all';
    document.querySelectorAll('[data-action="local-filter"]').forEach((item) => item.setAttribute('aria-pressed',item.dataset.value === 'all'));
  }
  document.querySelector('#places').innerHTML = placeCards(route.split('/')[1]);
}

async function copyText(value, success, failure) {
  const toast = document.querySelector('#toast');
  try {
    await navigator.clipboard.writeText(value);
    toast.textContent = t(success);
  } catch {
    toast.textContent = t(failure);
  }
  toast.classList.add('visible');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('visible'), 2500);
}

document.addEventListener('click', (event) => {
  if (languagePicker.open && !event.target.closest('#language')) languagePicker.open = false;
  if (event.target.closest('.skip')) {
    event.preventDefault();
    main.focus();
    return;
  }
  const anchor = event.target.closest('a[href^="#"]');
  if (anchor) {
    if (menu.open) menu.close();
    if (helpPanel.open) helpPanel.close();
    if (anchor.hash === location.hash && anchor.hash === '#home') window.scrollTo({ top:0 });
    if (anchor.hash === location.hash && anchor.hash === '#location/parking') {
      const target = document.querySelector('#parking');
      target.scrollIntoView({ block:'start', behavior:'instant' });
      target.focus({ preventScroll:true });
    }
  }
  if (event.target === menu) menu.close();
  if (event.target === lightbox) lightbox.close();
  if (event.target === helpPanel) helpPanel.close();
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const value = button.dataset.value;
  switch (button.dataset.action) {
    case 'menu':
      menu.showModal();
      button.setAttribute('aria-expanded', 'true');
      break;
    case 'close-menu': menu.close(); break;
    case 'open-help': helpPanel.showModal(); break;
    case 'close-help': helpPanel.close(); break;
    case 'help-topic':
      showHelp(button.closest('.help-widget'),helpTopics.filter((topic) => topic.id === value));
      break;
    case 'language':
      language = value;
      try { localStorage.setItem('abode-language', language); } catch { /* Storage is optional. */ }
      languagePicker.open = false;
      render();
      languagePicker.querySelector('summary').focus({ preventScroll:true });
      break;
    case 'discover': document.querySelector('#quick-help').scrollIntoView({ block:'start' }); break;
    case 'slide': showSlide(slideIndex + Number(value)); break;
    case 'select-slide': showSlide(Number(value)); break;
    case 'copy-address': void copyText(address,'copied','copyError'); break;
    case 'copy-network': void copyText(value,'networkCopied','networkCopyError'); break;
    case 'gallery-filter':
      galleryFilter = value;
      updateFilter(button, () => { document.querySelector('#photo-cards').innerHTML = photoCards(); });
      break;
    case 'local-filter':
      placeFilter = value;
      updateFilter(button, () => { document.querySelector('#places').innerHTML = placeCards(route.split('/')[1]); });
      break;
    case 'photo': openPhoto(value); break;
    case 'photo-step': displayPhoto(lightboxIndex + Number(value)); break;
    case 'close-photo': lightbox.close(); break;
  }
});

document.addEventListener('submit', (event) => {
  if (event.target.matches('[data-help-form]')) {
    event.preventDefault();
    const widget = event.target.closest('.help-widget');
    const value = event.target.elements.query.value;
    if (normalize(value)) showHelp(widget,matchHelp(value));
    else widget.querySelector('.help-results').replaceChildren();
  }
  if (event.target.matches('[data-place-form]')) {
    event.preventDefault();
    updatePlaceSearch(event.target.querySelector('input').value);
  }
});

document.addEventListener('input', (event) => {
  if (event.target.id === 'place-query') updatePlaceSearch(event.target.value);
});

document.addEventListener('change', (event) => {
  if (event.target.id !== 'room-filter') return;
  galleryRoom = event.target.value;
  galleryFilter = 'all';
  document.querySelector('.gallery-filters').innerHTML = galleryFilters();
  document.querySelector('#photo-cards').innerHTML = photoCards();
  document.querySelector('#room-filter').focus({ preventScroll:true });
});

menu.addEventListener('close', () => document.querySelector('.menu-trigger').setAttribute('aria-expanded','false'));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && languagePicker.open) {
    languagePicker.open = false;
    languagePicker.querySelector('summary').focus();
  }
  if (lightbox.open && ['ArrowLeft','ArrowRight'].includes(event.key)) {
    event.preventDefault();
    displayPhoto(lightboxIndex + (event.key === 'ArrowRight' ? 1 : -1));
  }
});

let touchStart;
document.addEventListener('touchstart', (event) => {
  const surface = event.target.closest('[data-swipe]');
  if (!surface || event.touches.length !== 1) return;
  const { clientX, clientY } = event.touches[0];
  touchStart = { clientX, clientY, surface:surface.dataset.swipe };
}, { passive:true });
document.addEventListener('touchend', (event) => {
  if (!touchStart) return;
  const { clientX, clientY, surface } = touchStart;
  touchStart = undefined;
  const x = event.changedTouches[0].clientX - clientX;
  const y = event.changedTouches[0].clientY - clientY;
  if (Math.abs(x) < 45 || Math.abs(x) <= Math.abs(y)) return;
  const offset = x < 0 ? 1 : -1;
  if (surface === 'hero' && route === 'home') showSlide(slideIndex + offset);
  if (surface === 'lightbox' && lightbox.open) displayPhoto(lightboxIndex + offset);
}, { passive:true });
document.addEventListener('touchcancel', () => { touchStart = undefined; }, { passive:true });

window.addEventListener('scroll', updateTopbar, { passive:true });
window.addEventListener('hashchange', () => {
  if (menu.open) menu.close();
  if (lightbox.open) lightbox.close();
  if (helpPanel.open) helpPanel.close();
  render({ resetScroll:true, focus:true });
});
render();
