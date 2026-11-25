import { arrival, address, booking, cover, courses, guides, photos, places, rooms, timetable } from './content.js';
import { label, languages, translate } from './i18n.js';

const paths = {
  home:'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z',
  room:'M3 17v3m18-3v3M3 17h18v-5H3zM5 12V6h14v6M8 12V9h8v3',
  pin:'M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0ZM12 10m-2.5 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0',
  guide:'M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14',
  compass:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4 5-2 6-6 2 2-6 6-2Z',
  calendar:'M4 5h16v15H4zM4 9h16M8 3v4m8-4v4m-7 8 2 2 4-4',
  clock:'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 2',
  key:'M12 10a4.5 4.5 0 1 1 3 3l-6 6H5v-4l2-2h3l2-3Z',
  wifi:'M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-11 4a6 6 0 0 1 8 0m-4 4h.01',
  list:'M5 3h14v18H5zM8 8h8m-8 4h8m-8 4h5',
  down:'m6 9 6 6 6-6', left:'m15 6-6 6 6 6', right:'m9 6 6 6-6 6',
  close:'m6 6 12 12M18 6 6 18', copy:'M8 8h12v12H8zM16 4H4v12',
  expand:'M14 4h6v6m0-6-6 6M4 14v6h6m-6 0 6-6',
};

const navigation = [['home','home'], ['rooms','room'], ['location','pin'], ['guide','guide'], ['local','compass'], ['booking','calendar']];
const main = document.querySelector('#main');
const menu = document.querySelector('#menu');
const lightbox = document.querySelector('#lightbox');
const languagePicker = document.querySelector('#language');
const photoById = new Map(photos.map((photo) => [photo.id, photo]));
const filters = ['all','bedroom','living','bath','exterior'];
const localFilters = ['all','food','walk'];
const formatNumber = (number) => String(number).padStart(2, '0');

let storedLanguage;
try { storedLanguage = localStorage.getItem('abode-language'); } catch { /* Storage is optional. */ }
let language = languages.some(({ code }) => code === storedLanguage) ? storedLanguage : 'ko';
let route = 'home';
let slideIndex = 0;
let galleryFilter = 'all';
let localFilter = 'all';
let lightboxIndex = 0;
let lightboxPhotos = [];
let toastTimeout;

const t = (key) => label(key, language);
const localize = (value) => translate(value, language);
const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]}"/></svg>`;
const imagePath = (id) => `assets/images/${id}.webp`;
const caption = (id) => localize(photoById.get(id).caption);
const image = (id, className = '') => `<img class="${className}" src="${imagePath(id)}" alt="${caption(id)}" loading="lazy" decoding="async">`;
const link = (href, text, className = '') => `<a class="${className}" href="${href}">${text}</a>`;
const external = (href, text, className = 'button button-outline') => `<a class="${className}" href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
const action = (name, text, className = '', value = '') => `<button type="button" class="${className}" data-action="${name}" data-value="${value}">${text}</button>`;
const iconAction = (name, iconName, accessible, className, value = '') => `<button type="button" class="${className}" data-action="${name}" data-value="${value}" aria-label="${accessible}">${icon(iconName)}</button>`;
const google = (query) => `https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(query)}`;
const walking = (origin, destination) => `https://www.google.com/maps/dir/?api=1&amp;origin=${encodeURIComponent(origin)}&amp;destination=${encodeURIComponent(destination)}&amp;travelmode=walking`;
const naver = (query) => `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
const bookingLink = () => `${booking}.${({ ko:'ko', en:'en-gb', ja:'ja', 'zh-Hans':'zh-cn', 'zh-Hant':'zh-tw' })[language]}.html`;

function pageHeading(english, title, description = '') {
  return `<header class="page-heading"><p class="eyebrow">${english}</p><h1>${title}</h1>${description ? `<p class="body-copy">${description}</p>` : ''}</header>`;
}

function sectionHeading(english, title, description = '') {
  return `<p class="eyebrow">${english}</p><h2>${title}</h2>${description ? `<p class="body-copy">${description}</p>` : ''}`;
}

function siteFooter() {
  return `<footer class="footer"><a class="wordmark" href="#home"><span>EXTAY</span> ABODE</a><p>${t('addresses')}</p><p>${t('stayBrand')}</p></footer>`;
}

function bookingBlock(isPage = false) {
  const heading = isPage ? 'h1' : 'h2';
  return `<section class="section booking-section"><p class="eyebrow">RESERVATIONS</p><${heading}>${t('bookTitle')}</${heading}><p class="body-copy">${t('bookText')}</p>${external(bookingLink(), t('bookLink'), 'button button-light')}<h3>${t('help')}</h3><p class="body-copy">${localize(arrival.help)}</p></section>`;
}

function quickLinks() {
  const items = [
    ['guide/check-in','key',t('checkin'),'16:00–24:00'],
    ['guide/check-in','clock',t('checkout'),'11:00'],
    ['location','pin',t('location'),t('addressShort')],
    ['guide/wifi','wifi',t('wifi'),t('wifiShort')],
  ];
  return `<div class="quick-grid">${items.map(([href, symbol, title, detail]) => `<a href="#${href}" class="quick-card">${icon(symbol)}<strong>${title}</strong><span>${detail}</span></a>`).join('')}</div>`;
}

function guideLinks() {
  return `<div class="guide-rows">${guides.map((item) => `<a href="#guide/${item.id}" class="guide-row"><span class="guide-icon">${icon(item.icon)}</span><strong>${localize(item.title)}</strong>${icon('right')}</a>`).join('')}</div>`;
}

function home() {
  const first = cover[slideIndex];
  return `<section class="hero" aria-labelledby="home-title" data-swipe="hero">
    <img id="hero-image" class="hero-photo" src="${imagePath(first.id)}" alt="${caption(first.id)}" style="--position:${first.position}" fetchpriority="high">
    <div class="hero-copy"><p class="eyebrow">SEOUL · SEOGYO</p><h1 id="home-title">ABODE</h1><p class="hero-tagline">${t('tagline')}</p></div>
    <div class="hero-controls">
      ${action('discover', `${t('scroll')}${icon('down')}`, 'discover')}
      <div class="slide-buttons">${iconAction('slide','left',t('prev'),'slide-button','-1')}<span id="slide-count" aria-live="polite">${formatNumber(slideIndex + 1)} / ${formatNumber(cover.length)}</span>${iconAction('slide','right',t('next'),'slide-button','1')}</div>
    </div>
  </section>
  <section class="section intro" id="intro">${sectionHeading('STAY ABODE',t('introTitle'),t('introText'))}</section>
  <section class="section essentials">${sectionHeading('STAY ESSENTIALS',t('essentials'))}${quickLinks()}</section>
  <section class="section home-rooms">${sectionHeading('ROOMS & SPACES',t('roomTitle'),t('roomIntro'))}
    <div class="room-preview">${link('#rooms', image('triple-beds'))}${link('#rooms', image('dining'))}</div>
    ${link('#rooms', t('galleryLink'), 'button button-outline')}
  </section>
  <section class="section location-teaser">${sectionHeading('GETTING HERE',t('location'),t('addresses'))}${image('entrance','feature-photo')}${link('#location', t('location'), 'button button-outline')}</section>
  <section class="section local-teaser">${sectionHeading('LOCAL NOTES',t('localTitle'),t('localIntro'))}${link('#local',t('localCta'),'button button-outline')}</section>
  <section class="section guide-teaser">${sectionHeading('GUEST GUIDE',t('know'))}${guideLinks()}</section>
  ${bookingBlock()}`;
}

function filterButtons(keys, selected, operation) {
  return `<div class="filters" role="group" aria-label="${t('filter')}">${keys.map((key) => `<button type="button" data-action="${operation}" data-value="${key}" aria-pressed="${key === selected}">${t(key)}</button>`).join('')}</div>`;
}

function visiblePhotos() {
  return photos.filter((photo) => galleryFilter === 'all' || photo.group === galleryFilter);
}

function photoCards() {
  return visiblePhotos().map(({ id }) => `<button type="button" class="photo-card" data-action="photo" data-value="${id}" aria-label="${t('enlarge')} · ${caption(id)}"><span class="photo-thumbnail">${image(id)}<span class="photo-expand">${icon('expand')}</span></span><span class="photo-caption">${caption(id)}</span></button>`).join('');
}

function roomsPage() {
  return `${pageHeading('ROOMS & SPACES',t('roomTitle'),t('roomIntro'))}
  <section class="section content-section">${filterButtons(filters,galleryFilter,'gallery-filter')}<div class="gallery-grid" id="photo-cards">${photoCards()}</div></section>
  <section class="section room-types">${sectionHeading('ROOM TYPES',t('roomTypes'),t('roomNote'))}
    <ul>${rooms.map(({ count, name }) => `<li><span>${localize(name)}</span><strong>${t('guests').replace('{n}',count)}</strong></li>`).join('')}</ul>${link('#booking',t('booking'),'button')}
  </section>`;
}

function locationPage() {
  return `${pageHeading('GETTING HERE',t('locationHeading'),t('addresses'))}
  <section class="section content-section">
    <div class="map-actions">${external(naver(address),t('naver'))}${external(google(address),t('google'))}${action('copy',`${icon('copy')}${t('copy')}`,'button button-cream')}</div>
    <article class="information">${sectionHeading('ENTRANCE',t('entrance'),localize(arrival.entrance))}${image('entrance','feature-photo')}</article>
    <article class="information">${sectionHeading('SUBWAY',t('subway'),localize(arrival.subway))}
    <div class="map-actions">${external(walking('합정역',address),localize(['합정역에서 출발','From Hapjeong','合井駅から','从合井站出发','從合井站出發']))}${external(walking('망원역',address),localize(['망원역에서 출발','From Mangwon','望遠駅から','从望远站出发','從望遠站出發']))}</div></article>
    <article class="information">${sectionHeading('AIRPORT',t('airport'),localize(arrival.airport))}<div class="map-actions">${external(timetable,t('train'))}</div></article>
  </section>`;
}

function guidePage(item) {
  if (!item) {
    return `${pageHeading('GUEST GUIDE',t('guide'),t('guideIntro'))}<section class="section content-section">${guideLinks()}<article class="information"><h2>${t('help')}</h2><p class="body-copy">${localize(arrival.help)}</p></article></section>`;
  }
  return `${pageHeading('GUEST GUIDE',localize(item.title),localize(item.lead))}<section class="section content-section">
    ${item.items.map(([title, detail]) => `<article class="information guide-detail"><h2>${localize(title)}</h2><p class="body-copy">${localize(detail)}</p></article>`).join('')}
    ${link('#guide',t('guide'),'button button-outline')}
  </section>`;
}

function placeCards() {
  return places.filter((place) => localFilter === 'all' || place.group === localFilter).map((place) => `<article class="place">
    <p class="place-type">${t(place.group)}</p><h2>${localize(place.name)}</h2><p class="body-copy">${localize(place.about)}</p>
    <div class="map-actions">${external(naver(place.query),t('map'))}${external(place.source,t('official'),'text-link')}</div></article>`).join('');
}

function localPage() {
  return `${pageHeading('LOCAL NOTES',t('localTitle'),t('localIntro'))}
    <section class="section content-section">${filterButtons(localFilters,localFilter,'local-filter')}<div id="places">${placeCards()}</div></section>
    <section class="section courses">${sectionHeading('WALKING ROUTES',t('course'))}${courses.map(({ name, stops }) => `<article class="course"><h3>${localize(name)}</h3><ol>${stops.map((i) => `<li>${external(naver(places[i].query),localize(places[i].name),'text-link')}</li>`).join('')}</ol></article>`).join('')}</section>`;
}

function getRoute() {
  const fragment = location.hash.slice(1);
  if (navigation.some(([name]) => name === fragment) || guides.some(({ id }) => `guide/${id}` === fragment)) return fragment;
  return 'home';
}

function renderChrome() {
  const active = route.split('/')[0];
  const bottom = document.querySelector('#bottom');
  document.documentElement.lang = language;
  document.querySelector('.skip').textContent = t('skip');
  document.querySelector('.topbar .wordmark').setAttribute('aria-label', `${t('brand')} · ${t('home')}`);
  document.querySelector('.menu-trigger').setAttribute('aria-label', t('menu'));
  languagePicker.querySelector('summary').setAttribute('aria-label', t('language'));
  document.querySelector('#active-language').textContent = languages.find(({ code }) => code === language).short;
  document.querySelector('#language-options').innerHTML = languages.map(({ code, name }) => `<button type="button" lang="${code}" data-action="language" data-value="${code}" aria-pressed="${code === language}">${name}</button>`).join('');
  bottom.setAttribute('aria-label',t('quick'));
  bottom.innerHTML = navigation.filter(([name]) => name !== 'location').map(([name, symbol]) => `<a href="#${name}"${active === name ? ' aria-current="page"' : ''}>${icon(symbol)}<span>${t(name)}</span></a>`).join('');
  bottom.hidden = false;
  menu.innerHTML = `<div class="drawer-inner"><div class="drawer-header"><h2 id="menu-label">${t('menu')}</h2>${iconAction('close-menu','close',t('close'),'icon-button')}</div><nav aria-label="${t('menu')}">${navigation.map(([name, symbol]) => `<a href="#${name}"${active === name ? ' aria-current="page"' : ''}>${icon(symbol)}<span>${t(name)}</span>${icon('right')}</a>`).join('')}</nav></div>`;
  lightbox.setAttribute('aria-label',t('enlarge'));
}

function updateTopbar() {
  document.querySelector('#topbar').classList.toggle('over-photo',route === 'home' && window.scrollY < 44);
}

function render({ resetScroll = false, focus = false } = {}) {
  route = getRoute();
  const homeTitle = language === 'ko' ? '익스테이 어보드 · EXTAY ABODE | 서울 서교동 숙소' : 'EXTAY ABODE | A stay in Seogyo, Seoul';
  document.title = route === 'home' ? homeTitle : `${t(route.split('/')[0])} · EXTAY ABODE`;
  renderChrome();
  const pages = { home, rooms:roomsPage, location:locationPage, guide:guidePage, local:localPage, booking:() => bookingBlock(true) };
  const [key, detail] = route.split('/');
  main.innerHTML = pages[key](guides.find(({ id }) => id === detail)) + siteFooter();
  main.classList.toggle('internal', key !== 'home');
  if (resetScroll) window.scrollTo({ top:0, behavior:'instant' });
  if (focus) main.focus({ preventScroll:true });
  updateTopbar();
}

function showSlide(index) {
  slideIndex = (index + cover.length) % cover.length;
  const { id, position } = cover[slideIndex];
  const coverImage = document.querySelector('#hero-image');
  coverImage.src = imagePath(id);
  coverImage.alt = caption(id);
  coverImage.style.setProperty('--position', position);
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
    <div class="lightbox-controls">${iconAction('photo-step','left',t('prev'),'icon-button','-1')}${iconAction('photo-step','right',t('next'),'icon-button','1')}</div></div>`;
  displayPhoto(lightboxPhotos.findIndex((photo) => photo.id === id));
  lightbox.showModal();
}

function updateFilter(button, update) {
  button.closest('.filters').querySelectorAll('button').forEach((node) => node.setAttribute('aria-pressed', node === button));
  update();
}

async function copyAddress() {
  const toast = document.querySelector('#toast');
  try {
    await navigator.clipboard.writeText(address);
    toast.textContent = t('copied');
  } catch {
    toast.textContent = t('copyError');
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
  if (event.target.closest('a[href^="#"]')) {
    if (menu.open) menu.close();
    if (event.target.closest('a').hash === location.hash && event.target.closest('a').hash === '#home') window.scrollTo({ top:0 });
  }
  if (event.target === menu) menu.close();
  if (event.target === lightbox) lightbox.close();
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const value = button.dataset.value;
  switch (button.dataset.action) {
    case 'menu': menu.showModal(); break;
    case 'close-menu': menu.close(); break;
    case 'language':
      language = value;
      try { localStorage.setItem('abode-language', language); } catch { /* Storage is optional. */ }
      languagePicker.open = false;
      render();
      languagePicker.querySelector('summary').focus({ preventScroll:true });
      break;
    case 'discover': document.querySelector('#intro').scrollIntoView({ block:'start' }); break;
    case 'slide': showSlide(slideIndex + Number(value)); break;
    case 'copy': void copyAddress(); break;
    case 'gallery-filter':
      galleryFilter = value;
      updateFilter(button, () => { document.querySelector('#photo-cards').innerHTML = photoCards(); });
      break;
    case 'local-filter':
      localFilter = value;
      updateFilter(button, () => { document.querySelector('#places').innerHTML = placeCards(); });
      break;
    case 'photo': openPhoto(value); break;
    case 'photo-step': displayPhoto(lightboxIndex + Number(value)); break;
    case 'close-photo': lightbox.close(); break;
  }
});

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
  render({ resetScroll:true, focus:true });
});
render();
