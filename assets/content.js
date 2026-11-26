export const address = '서울특별시 마포구 월드컵로10길 36';
export const booking = 'https://www.booking.com/hotel/kr/stay-abode';
export const timetable = 'https://www.airportrailroad.com/train/normal/info/030/0';
export const airportBus = 'https://www.airportlimousine.co.kr/sub/sub01.php?cat_no=6';
export const nightBus = 'https://www.airportlimousine.co.kr/sub/sub01.php?cat_no=82';

const hongikTransfer = [
  '어보드에서 합정역까지 걸어간 뒤, 지하철 2호선으로 한 정거장 이동해 홍대입구역에서 내리세요.',
  'Walk from ABODE to Hapjeong Station. Take Subway Line 2 one stop to Hongik Univ. Station.',
  'ABODEから合井駅まで歩き、地下鉄2号線で1駅先の弘大入口駅までお進みください。',
  '从 ABODE 步行至合井站，乘地铁 2 号线一站到弘大入口站。',
  '從 ABODE 步行至合井站，搭乘捷運 2 號線一站到弘大入口站。',
];

const airportTerminalStop = [
  '항공편에 맞춰 인천공항 1터미널 또는 2터미널에서 내리세요.',
  'Get off at Incheon Airport Terminal 1 or Terminal 2, as shown on your flight booking.',
  'フライトに合わせて仁川空港第1または第2ターミナルで降りてください。',
  '按航班信息在仁川机场 1 号或 2 号航站楼下车。',
  '依航班資訊在仁川機場第 1 或第 2 航廈下車。',
];

export const airportGuide = {
  arrivalHeading: ['공항에서 어보드로', 'From the airport to ABODE', '空港からABODEへ', '从机场前往 ABODE', '從機場前往 ABODE'],
  incheonHint: ['공항철도 일반열차 · 주간·심야 리무진', 'All-stop airport train · Day and night buses', '空港鉄道の一般列車・昼間と深夜のバス', '机场铁路普通列车 · 日间及深夜巴士', '機場鐵路普通列車 · 日間及深夜巴士'],
  gimpoArrivalHint: ['공항철도 일반열차로 홍대입구역까지', 'All-stop airport train to Hongik Univ. Station', '空港鉄道の一般列車で弘大入口駅へ', '乘机场铁路普通列车至弘大入口站', '搭機場鐵路普通列車至弘大入口站'],
  gimpoDepartureHint: ['홍대입구역에서 공항철도 일반열차', 'All-stop airport train from Hongik Univ. Station', '弘大入口駅から空港鉄道の一般列車', '在弘大入口站换乘机场铁路普通列车', '在弘大入口站轉乘機場鐵路普通列車'],
  trainTitle: ['공항철도 일반열차 (AREX)', 'All-stop airport train (AREX)', '空港鉄道の一般列車（AREX）', '机场铁路普通列车（AREX）', '機場鐵路普通列車（AREX）'],
  dayBusTitle: ['주간 공항 리무진 6002번', 'Daytime airport bus 6002', '昼間の空港バス 6002番', '日间机场巴士 6002 路', '日間機場巴士 6002 路'],
  nightBusTitle: ['심야 공항 리무진 N6002번', 'Late-night airport bus N6002', '深夜の空港バス N6002番', '深夜机场巴士 N6002 路', '深夜機場巴士 N6002 路'],
  arrivalDayBusTitle: ['주간 리무진 6002번 · 합정역 하차', 'Daytime bus 6002 to Hapjeong', '昼間の6002番バス・合井駅下車', '日间巴士 6002 路 · 合井站下车', '日間巴士 6002 路 · 合井站下車'],
  arrivalNightBusTitle: ['심야 리무진 N6002번 · 홍대입구 하차', 'Late-night bus N6002 to Hongik Univ.', '深夜のN6002番バス・弘大入口下車', '深夜巴士 N6002 路 · 弘大入口下车', '深夜巴士 N6002 路 · 弘大入口下車'],
  terminalOneTimetable: ['1터미널 열차 시간표', 'Terminal 1 train times', '第1ターミナルの列車時刻表', '1 号航站楼列车时刻表', '第 1 航廈列車時刻表'],
  terminalTwoTimetable: ['2터미널 열차 시간표', 'Terminal 2 train times', '第2ターミナルの列車時刻表', '2 号航站楼列车时刻表', '第 2 航廈列車時刻表'],
  abodeMap: ['어보드 지도', 'ABODE on Google Maps', 'ABODEの地図', 'ABODE 地图', 'ABODE 地圖'],
  arrivalTrain: [
    [
      '공항에서 공항철도(AREX) 표지판을 따라가세요. 서울역 방면 일반열차를 타고 홍대입구역에서 내리세요.',
      'Follow signs for the Airport Railroad (AREX). Take a Seoul Station-bound all-stop train and get off at Hongik Univ. Station.',
      '空港で空港鉄道（AREX）の案内に従い、ソウル駅方面の一般列車に乗って弘大入口駅で降りてください。',
      '在机场沿机场铁路（AREX）标识，搭乘开往首尔站的普通列车，在弘大入口站下车。',
      '在機場沿機場鐵路（AREX）指標，搭乘開往首爾站的普通列車，在弘大入口站下車。',
    ],
    [
      '홍대입구역에서 지하철 2호선으로 환승하세요. 한 정거장 뒤 합정역에서 내려 어보드까지 약 8분 걸어오시면 됩니다.',
      'Transfer to Subway Line 2 and get off at Hapjeong, one stop away. It’s about an 8-minute walk to ABODE.',
      '地下鉄2号線に乗り換え、1駅先の合井駅で降りてください。ABODEまで徒歩約8分です。',
      '换乘地铁 2 号线，一站后在合井站下车。步行约 8 分钟即可到达 ABODE。',
      '轉乘捷運 2 號線，一站後在合井站下車。步行約 8 分鐘即可到達 ABODE。',
    ],
  ],
  arrivalDayBus: [
    [
      '인천공항 1터미널은 1층 6A-1, 2터미널은 지하 1층 30번에서 타세요. 2터미널에서는 매표소나 발권기에서 승차권을 먼저 구입하세요.',
      'Board at Terminal 1, Level 1, stop 6A-1, or Terminal 2, Level B1, stop 30. At Terminal 2, buy your ticket first at a counter or machine.',
      '第1ターミナルは1階6A-1番、第2ターミナルは地下1階30番乗り場です。第2ターミナルでは先に窓口または券売機で乗車券を購入してください。',
      '在 1 号航站楼 1 层 6A-1 号或 2 号航站楼地下 1 层 30 号站台乘车。在 2 号航站楼请先到售票柜台或自助机购票。',
      '在第 1 航廈 1 樓 6A-1 號或第 2 航廈地下 1 樓 30 號月台搭車。在第 2 航廈請先至售票櫃台或自助機購票。',
    ],
    [
      '합정역 정류장에서 내리세요. 여기서 어보드까지 약 8분 걸어오시면 됩니다.',
      'Get off at Hapjeong Station. It’s about an 8-minute walk to ABODE.',
      '合井駅のバス停で降りてください。ABODEまで徒歩約8分です。',
      '在合井站巴士站下车，步行约 8 分钟即可到达 ABODE。',
      '在合井站公車站牌下車，步行約 8 分鐘即可到達 ABODE。',
    ],
  ],
  arrivalNightBus: [
    [
      '열차가 끊긴 시간에는 N6002번 운행 시간을 확인하세요. 인천공항 매표소나 발권기에서 승차권을 구입한 뒤 서울행 심야버스 승차장에서 타세요.',
      'If the trains have stopped running, check the N6002 timetable. Buy a ticket at an airport counter or machine, then board at the Seoul night bus stop.',
      '終電後はN6002番の時刻をご確認ください。空港の窓口または券売機で乗車券を購入し、ソウル方面の深夜バス乗り場からお乗りください。',
      '末班列车过后，请查看 N6002 路时刻表。在机场售票柜台或自助机购票后，前往首尔方向的深夜巴士站台乘车。',
      '末班列車過後，請查看 N6002 路時刻表。在機場售票櫃台或自助機購票後，前往首爾方向的深夜巴士月台搭車。',
    ],
    [
      '홍대입구 정류장(머큐어호텔·L7호텔 인근)에서 내리세요. 숙소까지는 어보드 지도를 열어 이동하세요.',
      'Get off at the Hongik Univ. bus stop near Mercure and L7 hotels. Open the ABODE map for the rest of the trip.',
      '弘大入口のバス停（メルキュール・L7ホテル付近）で降りてください。ABODEまでは地図をご利用ください。',
      '在弘大入口巴士站（美居酒店及 L7 酒店附近）下车，打开 ABODE 地图继续前往住宿。',
      '在弘大入口公車站牌（美居酒店及 L7 酒店附近）下車，開啟 ABODE 地圖繼續前往住宿。',
    ],
  ],
  departureIncheonTrain: [
    hongikTransfer,
    [
      '홍대입구역에서 종착역이 인천공항2터미널인 공항철도 일반열차로 환승하세요. 항공편에 맞춰 1터미널역 또는 2터미널역에서 내리세요.',
      'Transfer to an AREX all-stop train terminating at Incheon Airport Terminal 2. Get off at Terminal 1 or Terminal 2, as shown on your flight booking.',
      '弘大入口駅で仁川空港第2ターミナル行きの空港鉄道一般列車に乗り換え、フライトに合わせて第1または第2ターミナル駅で降りてください。',
      '在弘大入口站换乘终点为仁川机场 2 号航站楼的机场铁路普通列车。按航班信息在 1 号或 2 号航站楼站下车。',
      '在弘大入口站轉乘終點為仁川機場第 2 航廈的機場鐵路普通列車。依航班資訊在第 1 或第 2 航廈站下車。',
    ],
  ],
  departureGimpoTrain: [
    hongikTransfer,
    [
      '홍대입구역에서 인천공항 방면 공항철도 일반열차로 환승하세요. 김포공항역에서 내려 국내선 또는 국제선 터미널 표지판을 따라가세요.',
      'Transfer to an AREX all-stop train in the Incheon Airport direction. Get off at Gimpo Airport Station and follow the signs for Domestic or International Departures.',
      '弘大入口駅で仁川空港方面の空港鉄道一般列車に乗り換えます。金浦空港駅で降り、国内線または国際線の案内に従ってお進みください。',
      '在弘大入口站换乘仁川机场方向的机场铁路普通列车，在金浦机场站下车。跟随标识前往国内线或国际线航站楼。',
      '在弘大入口站轉乘仁川機場方向的機場鐵路普通列車，在金浦機場站下車。依指標前往國內線或國際線航廈。',
    ],
  ],
  departureDayBus: [
    [
      '합정역의 인천공항 방면 정류장에서 6002번을 타세요. 시간표에서 ‘공항방면’을 선택한 뒤 ‘합정역’을 누르면 승차 위치와 출발 시간을 볼 수 있어요.',
      'Board bus 6002 at the Incheon Airport-bound stop at Hapjeong Station. In the timetable, select the airport direction and then Hapjeong Station for the stop and departure times.',
      '合井駅の仁川空港方面のバス停で6002番に乗ります。時刻表で空港方面を選び、合井駅を押すと乗り場と発車時刻を確認できます。',
      '在合井站的仁川机场方向站点乘坐 6002 路。在时刻表中选择机场方向，再点选合井站查看站点及发车时间。',
      '在合井站的仁川機場方向站牌搭乘 6002 路。在時刻表中選擇機場方向，再點選合井站查看站牌及發車時間。',
    ],
    airportTerminalStop,
  ],
  departureNightBus: [
    [
      '홍대입구의 도로 가운데에 있는 버스 정류장에서 인천공항 방면 N6002번을 타세요. 출발 전 시간표에서 홍대입구 출발 시간을 확인하세요.',
      'Take the Incheon Airport-bound N6002 from the stop in the middle of the road at Hongik Univ. Station. Check the timetable for departures from this stop.',
      '弘大入口の道路中央にあるバス停から仁川空港方面のN6002番に乗ります。出発前に弘大入口の発車時刻をご確認ください。',
      '在弘大入口站道路中央的巴士站搭乘仁川机场方向的 N6002 路。出发前请查询弘大入口站的发车时间。',
      '在弘大入口站道路中央的公車站牌搭乘仁川機場方向的 N6002 路。出發前請查詢弘大入口站的發車時間。',
    ],
    airportTerminalStop,
  ],
  expressTip: [
    '인천공항에서는 ‘일반열차 / All Stop Train’ 표지를 찾으세요. 직통열차는 홍대입구역을 통과해 서울역으로 갑니다.',
    'At Incheon Airport, look for “All Stop Train” signs. The Express Train goes straight to Seoul Station and skips Hongik Univ. Station.',
    '仁川空港では「一般列車 / All Stop Train」の表示を目印にしてください。直通列車は弘大入口駅を通過してソウル駅へ向かいます。',
    '在仁川机场请找“普通列车 / All Stop Train”标识。直达列车会经过弘大入口站，直接开往首尔站。',
    '在仁川機場請找「普通列車 / All Stop Train」指標。直達列車會通過弘大入口站，直接開往首爾站。',
  ],
};

export const photos = [
  { id:'room-202', group:'bedroom', caption:['202호 침실과 다이닝','Room 202 bedroom and dining area','202号室の寝室とダイニング','202 号房的卧室与用餐区','202 號房的臥室與用餐區'] },
  { id:'bedroom-dining', group:'bedroom', caption:['원형 테이블이 있는 객실','Bedroom with a round table','丸テーブルのある客室','带圆桌的客房','附圓桌的客房'] },
  { id:'lounge', group:'living', caption:['301호 거실','Room 301 living area','301号室のリビング','301 号房的起居区','301 號房的起居區'] },
  { id:'facade', group:'exterior', caption:['가로수 너머로 보이는 어보드 외관','ABODE façade beyond the street trees','街路樹越しのABODE外観','街树后的 ABODE 外观','行道樹後方的 ABODE 外觀'] },
  { id:'triple-beds', group:'bedroom', caption:['나란히 놓인 세 개의 침대','Three beds side by side','ベッドが3台並ぶ客室','三张并排的床','三張並排的床'] },
  { id:'bunks', group:'bedroom', caption:['우드 계단이 있는 이층 침대','Bunk beds with wooden steps','木の階段が付いた二段ベッド','带木质阶梯的双层床','附木質階梯的雙層床'] },
  { id:'suite-bedroom', group:'bedroom', caption:['간접조명이 비추는 침실','Bedroom with warm indirect lighting','間接照明が灯る寝室','暖色间接照明的卧室','暖色間接照明的臥室'] },
  { id:'window-bedroom', group:'bedroom', caption:['창가에 침대 두 개가 놓인 객실','Two beds by the window','窓辺にベッドが2台ある客室','窗边有两张床的客房','窗邊有兩張床的客房'] },
  { id:'dining', group:'living', caption:['긴 다이닝 테이블과 주방','Long dining table and kitchen','大きなダイニングテーブルとキッチン','长餐桌与厨房','長餐桌與廚房'] },
  { id:'kitchen', group:'living', caption:['검은 하부장과 우드 마감의 주방','Kitchen with charcoal cabinets and wood finishes','黒い収納と木の仕上げのキッチン','黑色橱柜搭配木质装饰的厨房','黑色櫥櫃搭配木質裝飾的廚房'] },
  { id:'bathroom', group:'bath', caption:['밝은 타일로 마감한 욕실','Bathroom with light tiles','明るいタイルのバスルーム','浅色瓷砖浴室','淺色磁磚浴室'] },
  { id:'tile-shower', group:'bath', caption:['타일 샤워 공간','Tiled shower area','タイル張りのシャワー','瓷砖淋浴间','磁磚淋浴間'] },
  { id:'washbasin', group:'bath', caption:['석재 무늬가 드러나는 세면대','Stone-patterned washbasin','石目模様の洗面台','石纹洗手台','石紋洗手台'] },
  { id:'entrance', group:'exterior', caption:['ABODE 간판 아래의 건물 입구','Building entrance beneath the ABODE sign','ABODEの看板がある建物の入口','ABODE 标志下的大楼入口','ABODE 招牌下的建築入口'] },
  { id:'hall', group:'exterior', caption:['객실 안내판과 엘리베이터','Room directory and elevator','客室案内板とエレベーター','客房导览牌与电梯','客房導覽牌與電梯'] },
  { id:'room-101', group:'bedroom', caption:['101호 침실과 주방','Room 101 bedroom and kitchen','101号室の寝室とキッチン','101 号房的卧室与厨房','101 號房的臥室與廚房'] },
  { id:'room-201', group:'bedroom', caption:['201호 객실과 조명','Room 201 and its lighting','201号室と照明','201 号房及室内灯光','201 號房及室內燈光'] },
  { id:'room-301', group:'bedroom', caption:['301호 창가 침실','Room 301 window-side bedroom','301号室の窓辺の寝室','301 号房的窗边卧室','301 號房的窗邊臥室'] },
  { id:'room-401', group:'bedroom', caption:['401호 창가 침실','Room 401 window-side bedroom','401号室の窓辺の寝室','401 号房的窗边卧室','401 號房的窗邊臥室'] },
  { id:'lobby', group:'living', caption:['건물 라운지의 우드 선반','Wood shelving in the building lounge','建物ラウンジの木の棚','大楼休息区内的木质置物架','大樓休息區內的木質置物架'] },
];

export const cover = [
  { id:'room-202', position:'56% 47%' },
  { id:'bedroom-dining', position:'58% 50%' },
  { id:'dining', position:'50% 51%' },
  { id:'room-401', position:'45% 52%' },
  { id:'facade', position:'50% 52%' },
];

const kogl = 'https://www.kogl.or.kr/info/licenseType1.do';
const archive = 'https://archive.visitseoul.net/ko/contents/';

export const airportAccessPhoto = {
  id:'airport-access', width:1024, height:768, author:'MNXANL',
  source:'https://commons.wikimedia.org/wiki/File:202403_AREX_Local_Platform_1,2_of_Incheon_International_Airport_Terminal_1_Station.jpg',
  license:'CC BY-SA 4.0', terms:'https://creativecommons.org/licenses/by-sa/4.0/', adapted:true,
};

export const neighborhoodPhotos = {
  '망원시장': { id:'local-mangwon-market', width:852, height:568, credit:'seoulTourism', source:`${archive}ARP003zw1`, license:'KOGL 1', terms:kogl },
  '망리단길': { id:'local-mangridan', width:852, height:567, credit:'seoulTourism', source:`${archive}ARP003zk1`, license:'KOGL 1', terms:kogl },
  '망원한강공원': { id:'local-mangwon-hangang', width:852, height:568, credit:'seoulTourism', source:`${archive}ARP006zl1`, license:'KOGL 1', terms:kogl },
  '경의선숲길 연남동': { id:'local-gyeongui-forest', width:1024, height:683, credit:'forestPhotographer', source:'https://commons.wikimedia.org/wiki/File:Yeonnam-dong_Gyeongui_Line_Forest_Park_(1).jpg', license:'KOGL 1', terms:kogl },
  '문화비축기지': { id:'local-culture-park', width:864, height:1152, author:'Mvcervi', source:'https://commons.wikimedia.org/wiki/File:Oil-tank-culture-park.jpg', license:'CC BY-SA 4.0', terms:'https://creativecommons.org/licenses/by-sa/4.0/', adapted:true },
};

export const photoRooms = {
  'room-101':'101', washbasin:'101',
  'bedroom-dining':'102', kitchen:'102',
  'room-201':'201',
  'room-202':'202', 'suite-bedroom':'202',
  'room-301':'301', dining:'301', lounge:'301', 'window-bedroom':'301',
  'room-401':'401', 'triple-beds':'401', bunks:'401', bathroom:'401', 'tile-shower':'401',
};

export const rooms = [
  { count:14, name:['패밀리 객실','Family accommodation','ファミリールーム','家庭客房','家庭客房'], layout:['더블침대 7개','7 double beds','ダブルベッド7台','7 张双人床','7 張雙人床'] },
  { count:12, name:['패밀리 객실','Family accommodation','ファミリールーム','家庭客房','家庭客房'], layout:['더블침대 5개, 싱글침대 2개','5 double beds and 2 single beds','ダブルベッド5台とシングルベッド2台','5 张双人床与 2 张单人床','5 張雙人床與 2 張單人床'] },
  { count:6, name:['트리플룸','Triple Room','トリプルルーム','三人间','三人房'] },
  { count:4, name:['트윈룸','Twin Room','ツインルーム','双床间','雙床房'] },
];

export const arrival = {
  subway:['망원역(6호선)에서 도보 약 5분, 합정역(2·6호선)에서 도보 약 8분입니다. 편한 출구와 길은 지도로 확인해 주세요.','About a 5-minute walk from Mangwon Station (Line 6) or 8 minutes from Hapjeong Station (Lines 2 and 6). Check the map for the most convenient exit.','望遠駅（6号線）から徒歩約5分、合井駅（2・6号線）から徒歩約8分です。便利な出口は地図でご確認ください。','从望远站（6 号线）步行约 5 分钟，从合井站（2、6 号线）步行约 8 分钟。请在地图上查看方便的出口。','從望遠站（6 號線）步行約 5 分鐘，從合井站（2、6 號線）步行約 8 分鐘。請在地圖上查看方便的出口。'],
  subwayShort:['도보 · 망원역 약 5분 · 합정역 약 8분','Walk · Mangwon about 5 min · Hapjeong about 8 min','徒歩・望遠駅から約5分・合井駅から約8分','步行 · 望远站约 5 分钟 · 合井站约 8 分钟','步行 · 望遠站約 5 分鐘 · 合井站約 8 分鐘'],
  entrance:['월드컵로10길 대로변에서 루카스 커피 옆 ABODE 간판을 찾으세요. 검은 출입문 안에 셀프 체크인 키오스크가 있습니다.','On World Cup-ro 10-gil, look for the ABODE sign next to Lucas Coffee. The self check-in kiosk is inside the black entrance.','ワールドカップ路10ギルのLucas Coffeeの隣、ABODEの看板が目印です。黒い入口の内側にセルフチェックイン端末があります。','在世界杯路10街寻找 Lucas Coffee 旁的 ABODE 招牌。黑色入口内设有自助入住机。','在世界盃路10街尋找 Lucas Coffee 旁的 ABODE 招牌。黑色入口內設有自助入住機。'],
  returnTrain:['합정역에서 2호선으로 홍대입구역까지 한 정거장 이동하세요. 공항철도 일반열차로 갈아타면 김포공항과 인천공항 1·2터미널에 갈 수 있습니다.','Take Line 2 one stop from Hapjeong to Hongik Univ. Station. Transfer to the AREX all-stop train for Gimpo Airport or Incheon Airport Terminal 1 or 2.','合井駅から2号線で1駅、弘大入口駅へ。空港鉄道の一般列車に乗り換えると、金浦空港と仁川空港第1・第2ターミナルに行けます。','从合井站乘 2 号线一站至弘大入口站，换乘机场铁路普通列车前往金浦机场或仁川机场 1、2 号航站楼。','從合井站搭乘 2 號線一站至弘大入口站，轉乘機場鐵路普通列車前往金浦機場或仁川機場第 1、2 航廈。'],
  help:['예약하신 플랫폼에서 예약 내역을 열고 호스트에게 메시지를 보내 주세요.','Open your reservation on the platform you booked with and send a message to your host.','ご予約のサイトで予約内容を開き、ホストへメッセージをお送りください。','打开预订平台上的订单，给房东发送消息。','開啟預訂平台上的訂單，傳送訊息給房東。'],
};

export const places = [
  { group:'food', category:'market', featured:true, query:'망원시장', name:['망원시장','Mangwon Market','望遠市場','望远市场','望遠市場'], about:['시장 골목에서 간식과 가볍게 먹을 한 끼를 골라 보세요.','Pick up a snack or a casual meal in this neighborhood market.','市場の路地でおやつや軽い食事を探してみましょう。','在街坊市场选些小吃，或简单吃一餐。','在街坊市場挑些小吃，或簡單吃一餐。'], source:'https://access.visitkorea.or.kr/ms/detail.do?cotId=2e79d923-c59c-4058-b6c2-fbe316910e33' },
  { group:'food', category:'cafes', featured:true, query:'망리단길', name:['망리단길','Mangridan-gil','マンリダンギル','望理团路','望理團路'], about:['작은 카페와 상점이 이어지는 망원동 골목입니다.','A Mangwon neighborhood lane lined with small cafés and shops.','小さなカフェや店が並ぶ望遠洞の路地です。','望远洞一条聚集小咖啡馆和店铺的街巷。','望遠洞一條聚集小咖啡館與店舖的街巷。'], source:'https://korean.visitseoul.net/shopping/망리단길_/41785' },
  { group:'walk', category:'walk', featured:true, query:'망원한강공원', area:['마포 · 망원동','Mapo · Mangwon','麻浦・望遠洞','麻浦 · 望远洞','麻浦 · 望遠洞'], name:['망원한강공원','Mangwon Hangang Park','望遠漢江公園','望远汉江公园','望遠漢江公園'], about:['강을 따라 걷거나 잔디에 앉아 쉬기 좋은 공원입니다.','Walk along the river or take a break on the lawn.','川沿いの散歩や芝生での休憩にぴったりの公園です。','适合沿江散步，或在草地上休息。','適合沿江散步，或在草地上休息。'], source:'https://hangang.seoul.go.kr/www/contents/668.do?mid=471' },
  { group:'walk', category:'walk', featured:true, query:'경의선숲길 연남동', area:['마포 · 연남동','Mapo · Yeonnam','麻浦・延南洞','麻浦 · 延南洞','麻浦 · 延南洞'], name:['경의선숲길','Gyeongui Line Forest Park','京義線スッキル','京义线森林公园','京義線森林公園'], about:['옛 철길을 따라 이어진 산책로를 걸으며 연남동을 둘러보세요.','Follow the former railway path and explore Yeonnam-dong along the way.','旧線路沿いの遊歩道を歩き、延南洞を散策できます。','沿旧铁路步道散步，顺路探索延南洞。','沿舊鐵路步道散步，順路探索延南洞。'], source:'https://korean.visitseoul.net/hallyu/도심-속-쉼터-경의선-숲길/KON017350' },
  { group:'walk', category:'walk', query:'홍대 걷고싶은거리', name:['홍대 걷고싶은거리','Hongdae Walking Street','弘大 散策通り','弘大步行街','弘大步行街'], about:['상점과 거리 공연이 모이는 홍대의 중심 거리입니다.','One of Hongdae’s main streets for shops and street performances.','店やストリートパフォーマンスが集まる弘大の中心通りです。','集聚商店和街头表演的弘大主要街道。','匯集商店和街頭表演的弘大主要街道。'], source:'https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=cde3497b-dcdc-4dd5-b941-38a69b88d9cc' },
  { group:'walk', category:'culture', featured:true, query:'문화비축기지', name:['문화비축기지','Oil Tank Culture Park','文化備蓄基地','文化储备基地','文化儲備基地'], about:['옛 석유 저장 시설을 전시와 공연을 위한 공간으로 바꾼 문화 공원입니다.','Former oil storage tanks now house exhibitions and performance spaces.','旧石油備蓄施設が展示や公演の空間に生まれ変わった文化公園です。','旧石油储存设施改建成展览和演出空间的文化公园。','舊石油儲存設施改建成展覽及演出空間的文化公園。'], source:'https://korean.visitseoul.net/area/parksseoul/KOP023543' },
  { group:'food', category:'cafes', featured:true, query:'루카스 초이스 서울 마포구 월드컵로10길 40', name:['루카스 초이스','Lucas Choice','ルーカスチョイス','Lucas Choice 咖啡馆','Lucas Choice 咖啡館'], about:['숙소 옆 월드컵로10길 40에 있는 카페입니다.','A café next to ABODE at 40 World Cup-ro 10-gil.','ABODEの隣、ワールドカップ路10ギル40にあるカフェです。','位于住宿隔壁、世界杯路10街40号的咖啡馆。','位於住宿隔壁、世界盃路10街40號的咖啡館。'] },
  { group:'food', category:'meals', featured:true, query:'망원동즉석우동 본점', name:['망원동즉석우동 본점','Mangwon Instant Udon','望遠洞インスタントうどん本店','望远洞现煮乌冬面总店','望遠洞現煮烏龍麵總店'], about:['망원동에서 우동으로 식사하기 좋은 동네 식당입니다.','A neighborhood spot for an udon meal in Mangwon.','望遠洞でうどんを楽しめる地元の食堂です。','在望远洞吃一餐乌冬面的街坊餐馆。','在望遠洞吃一餐烏龍麵的街坊餐館。'], source:'https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=b0dfec73-b897-4200-9985-686e313060a2' },
  { group:'food', category:'meals', featured:true, query:'소금집델리 망원', name:['소금집델리 망원','Salt House Deli Mangwon','ソグムジプデリ望遠','Salt House Deli 望远','Salt House Deli 望遠'], about:['망원동에서 잠봉뵈르와 샌드위치를 즐길 수 있는 델리입니다.','A Mangwon deli for jambon-beurre and sandwiches.','ジャンボンブールやサンドイッチを楽しめる望遠洞のデリです。','望远洞一家提供火腿黄油法棍和三明治的熟食店。','望遠洞一家供應火腿奶油法棍與三明治的熟食店。'], source:'https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=64a85b30-3bc4-4af0-8a42-f4a0fc6f0a34' },
  { group:'food', category:'meals', query:'옥동식 서울 마포구 양화로7길', name:['옥동식','Okdongsik','オクドンシク','玉同食','玉同食'], about:['합정에서 맑은 국물의 돼지곰탕을 맛볼 수 있는 식당입니다.','A Hapjeong restaurant serving pork and rice in a clear broth.','澄んだスープの豚肉クッパを味わえる合井の食堂です。','在合井品尝清汤猪肉汤饭的餐馆。','在合井品嚐清湯豬肉湯飯的餐館。'], source:'https://guide.michelin.com/kr/ko/seoul-capital-area/kr-seoul/restaurant/okdongsik', sourceLabel:'MICHELIN Guide' },
  { group:'food', category:'market', query:'우이락 망원본점', name:['우이락 망원본점','Wuirak Mangwon','ウイラク望遠本店','Wuirak 望远总店','Wuirak 望遠總店'], about:['망원시장 안에서 고추튀김을 맛볼 수 있는 곳입니다.','A market stop for crispy stuffed peppers.','望遠市場の中で唐辛子の肉詰め揚げを味わえる店です。','在望远市场吃炸酿辣椒的小店。','在望遠市場品嚐炸鑲辣椒的小店。'] },
  { group:'walk', category:'walk', query:'하늘공원 월드컵공원', name:['하늘공원','Haneul Park','ハヌル公園','天空公园','天空公園'], about:['월드컵공원의 언덕 위에서 억새밭과 서울 풍경을 만날 수 있습니다.','See silver grass and views of Seoul from a hill in World Cup Park.','ワールドカップ公園の丘でススキとソウルの景色を楽しめます。','在世界杯公园的山丘上欣赏芒草和首尔景色。','在世界盃公園的山丘上欣賞芒草與首爾景色。'], source:'https://korean.visitseoul.net/attractions/하늘공원/KOP003830' },
  { group:'walk', category:'history', query:'절두산순교성지', name:['절두산순교성지','Jeoldusan Martyrs’ Shrine','切頭山殉教聖地','切头山殉教圣地','切頭山殉教聖地'], about:['합정 한강변에 자리한 한국 천주교 역사 유적입니다.','A site of Korean Catholic history by the river in Hapjeong.','合井の漢江沿いにある韓国カトリックの史跡です。','位于合井汉江边的韩国天主教历史遗址。','位於合井漢江邊的韓國天主教歷史遺址。'], source:'https://english.visitkorea.or.kr/svc/whereToGo/locIntrdn/rgnContentsView.do?vcontsId=107565' },
  { group:'walk', category:'culture', query:'KT&G 상상마당 홍대', name:['KT&G 상상마당 홍대','KT&G Sangsangmadang Hongdae','KT&G サンサンマダン弘大','KT&G 想象广场弘大','KT&G 想像廣場弘大'], about:['홍대에서 전시, 공연, 디자인을 만날 수 있는 복합문화공간입니다.','An arts venue in Hongdae with exhibitions, performances and design.','弘大で展示・公演・デザインを楽しめる複合文化施設です。','弘大一处结合展览、演出与设计的综合文化空间。','弘大一處結合展覽、演出與設計的複合文化空間。'], source:'https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=b5d20b29-5289-42bc-98bf-1c0cf8762349' },
  { group:'walk', category:'history', featured:true, query:'경복궁 서울', name:['경복궁','Gyeongbokgung Palace','景福宮','景福宫','景福宮'], about:['서울 도심에서 조선의 궁궐과 전각을 둘러볼 수 있습니다.','Explore a royal Joseon palace in central Seoul.','ソウル中心部で朝鮮王朝の宮殿を見学できます。','在首尔市中心参观朝鲜王朝的宫殿建筑。','在首爾市中心參觀朝鮮王朝的宮殿建築。'], source:'https://korean.visitseoul.net/attractions/경복궁/KOP000072' },
  { group:'walk', category:'culture', query:'동대문디자인플라자 DDP', name:['동대문디자인플라자','Dongdaemun Design Plaza','東大門デザインプラザ','东大门设计广场','東大門設計廣場'], about:['동대문에서 건축과 디자인 전시를 함께 만날 수 있는 공간입니다.','See distinctive architecture and design exhibitions in Dongdaemun.','東大門で建築やデザイン展を楽しめる施設です。','在东大门欣赏特色建筑与设计展览。','在東大門欣賞特色建築與設計展覽。'], source:'https://korean.visitseoul.net/dongdaemun-around/Dongdaemun-Design-Plaza-kr/KOP024679' },
];

export const courses = [
  { name:['망원 시장과 한강','Mangwon Market and the Han River','望遠市場と漢江','望远市场与汉江','望遠市場與漢江'], stops:[0,1,2] },
  { name:['홍대와 연남동','Hongdae and Yeonnam','弘大と延南洞','弘大与延南洞','弘大與延南洞'], stops:[4,3] },
];
