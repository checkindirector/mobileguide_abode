import { arrival } from './content.js';
import { guides, parking } from './operations.js';

export const applianceAreas = [
  { id:'room', icon:'room', title:['객실 안내','In your room','客室案内','客房指南','客房指南'], hint:['냉난방·프로젝터·스피커','Heating, projector and speaker','冷暖房・プロジェクター・スピーカー','冷暖设备、投影仪与音箱','冷暖設備、投影機與喇叭'] },
  { id:'kitchen', icon:'food', title:['주방·가전','Kitchen appliances','キッチン・家電','厨房与电器','廚房與家電'], hint:['인덕션·환풍기·정수기','Induction hob, fan and water dispensers','IH調理器・換気扇・浄水器','电磁炉、排风扇和净水器','電磁爐、排風扇與飲水機'] },
  { id:'supplies', icon:'bag', title:['공용 비품','Shared supplies','共用備品','公共备品','公共備品'], hint:['수건과 2층 게스트 박스','Towels and the floor 2 guest box','タオルと2階のゲストボックス','毛巾和 2 楼客用备品箱','毛巾與 2 樓旅客備品箱'] },
];

const getGuide = (id) => guides.find((guide) => guide.id === id);
const checkin = getGuide('check-in');
const facilities = getGuide('facilities');

export const helpTopics = [
  { id:'checkin', route:'guide/check-in', title:['체크인 시간','Check-in time','チェックイン時刻','入住时间','入住時間'], words:'체크인시간|입실시간|몇시부터|check in time|checkin starts|arrival time|チェックイン時刻|入室時間|入住时间|入住時間', answer:checkin.lead },
  { id:'kiosk', route:'guide/check-in', title:['체크인 방법','How to check in','チェックイン方法','如何入住','入住方式'], words:'키오스크|여권|신분증|체크인방법|출입번호|현관비밀번호|도어락|출입|카드키|check in|kiosk|passport|key card|entry|door code|how to check in|チェックイン|端末|パスポート|入室|自助入住|入住|护照|護照', answer:checkin.items[0].steps[1] },
  { id:'early', route:'guide/luggage', title:['얼리 체크인','Early check-in','早めのチェックイン','提前入住','提前入住'], words:'얼리체크인|일찍도착|조기입실|early check in|arrive early|早め|アーリーチェックイン|提前入住|提早抵達', answer:getGuide('luggage').lead },
  { id:'checkout', route:'guide/check-in/checkout', title:['체크아웃 시간','Check-out time','チェックアウト時刻','退房时间','退房時間'], words:'체크아웃|퇴실|몇시까지|check out|departure time|チェックアウト|退室|退房', answer:checkin.lead },
  { id:'luggage', route:'guide/luggage', title:['짐 보관','Luggage storage','荷物預かり','行李寄存','行李寄存'], words:'짐보관|짐맡|짐|캐리어|가방|레이트체크아웃|luggage|baggage|suitcase|bags|late checkout|荷物|レイト|行李|延后退房|延後退房', answer:getGuide('luggage').lead },
  { id:'supplies', route:'guide/facilities/supplies', title:['공용 비품','Shared supplies','共用備品','公共备品','公共備品'], words:'수건|타월|비품|게스트박스|towel|guest box|supplies|タオル|備品|毛巾|备品|備品', answer:facilities.items.find(({ area }) => area === 'supplies').text },
  { id:'wifi', route:'guide/wifi', title:['Wi-Fi 연결','Wi-Fi connection','Wi-Fi接続','连接 Wi-Fi','連線 Wi-Fi'], words:'와이파이|wifi|인터넷|비밀번호|internet|wi-fi|password|パスワード|网络|網路|密码|密碼', answer:getGuide('wifi').items[0].text },
  { id:'parking', route:'location/parking', title:['주차 안내','Parking','駐車場','停车','停車'], words:'주차|parking|駐車|停车|停車', answer:parking },
  { id:'laundry', route:'guide/laundry', title:['세탁·건조','Laundry & drying','洗濯・乾燥','洗衣与烘干','洗衣與烘乾'], words:'세탁|건조|드럼|laundry|washer|dryer|洗濯|乾燥|洗衣|烘干|烘乾', answer:getGuide('laundry').lead },
  { id:'waste', route:'guide/waste', title:['쓰레기 분리배출','Waste & recycling','ごみの分別','垃圾分类','垃圾分類'], words:'쓰레기|분리배출|재활용|음식물|garbage|waste|trash|recycle|recycling|ごみ|分別|垃圾|廚餘|厨余', answer:getGuide('waste').lead },
  { id:'arrival', route:'location', title:['숙소 위치','Location','アクセス','住宿位置','住宿位置'], words:'주소|망원역|합정역|위치|찾아오는길|address|location|station|アクセス|住所|地址|位置', answer:arrival.subway },
  { id:'airport', route:'location/airport', title:['공항으로 가는 길','Getting to the airport','空港への行き方','前往机场','前往機場'], words:'공항|인천|김포|6002|공항철도|airport|arex|incheon|gimpo|空港|仁川|金浦|机场|機場', answer:arrival.returnTrain },
  { id:'heat', route:'guide/facilities/room', title:['냉난방과 객실 기기','Room appliances','客室の家電','客房设备','客房設備'], words:'난방|냉방|에어컨|전기장판|프로젝터|스피커|heating|aircon|projector|speaker|冷暖房|投影|空调|空調', answer:facilities.lead },
];

export const normalize = (value) => value.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');

export function matchHelp(value) {
  const query = normalize(value);
  if (!query) return [];
  const scored = helpTopics.map((item) => {
    const matches = item.words.split('|').map(normalize).map((word) => {
      if (query.includes(word)) return word.length + 8;
      return query.length >= 2 && word.startsWith(query) ? query.length : 0;
    });
    return { item, score:Math.max(...matches) };
  });
  return scored.filter(({ score }) => score > 0).sort((a,b) => b.score - a.score).slice(0,3).map(({ item }) => item);
}
