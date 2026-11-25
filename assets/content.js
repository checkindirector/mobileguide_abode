export const address = '서울특별시 마포구 월드컵로10길 36';
export const booking = 'https://www.booking.com/hotel/kr/stay-abode';
export const timetable = 'https://www.airportrailroad.com/train/normal/info/030/0';

export const photos = [
  { id:'bedroom-dining', group:'bedroom', caption:['원형 테이블이 있는 객실','Bedroom with a round table','丸テーブルのある客室','带圆桌的客房','附圓桌的客房'] },
  { id:'lounge', group:'living', caption:['소파와 우드 테이블이 놓인 라운지','Lounge with a sofa and wood table','ソファと木のテーブルのあるラウンジ','带沙发和木桌的休息室','附沙發和木桌的休息室'] },
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
];

export const cover = [
  { id:'bedroom-dining', position:'57% 50%' },
  { id:'lounge', position:'48% 52%' },
  { id:'facade', position:'50% 52%' },
];

export const rooms = [
  { count:14, name:['수페리어 패밀리룸','Superior Family Room','スーペリア ファミリールーム','高级家庭间','高級家庭房'] },
  { count:12, name:['패밀리 스위트룸','Family Suite','ファミリースイート','家庭套房','家庭套房'] },
  { count:6, name:['트리플룸','Triple Room','トリプルルーム','三人间','三人房'] },
  { count:4, name:['트윈룸','Twin Room','ツインルーム','双床间','雙床房'] },
];

export const guides = [
  {
    id:'check-in', icon:'key', title:['체크인·체크아웃','Check-in & check-out','チェックイン・アウト','入住与退房','入住與退房'],
    lead:['입실은 오후 4시부터 자정까지, 퇴실은 오전 11시까지입니다.','Check in from 4:00 PM to midnight and check out by 11:00 AM.','チェックインは16:00から24:00まで、チェックアウトは11:00までです。','入住时间为 16:00 至午夜，退房时间为上午 11:00 前。','入住時間為 16:00 至午夜，退房時間為上午 11:00 前。'],
    items:[
      [['도착 전','Before you arrive','ご到着前','抵达前','抵達前'],['예약 메시지에서 객실과 입실 방법을 확인해 주세요. 자정 이후 도착 예정이라면 호스트에게 미리 문의해 주세요.','Check your booking messages for your room and entry instructions. If you expect to arrive after midnight, please contact your host in advance.','予約メッセージで客室と入室方法をご確認ください。深夜0時を過ぎる場合は、事前にホストへご連絡ください。','请在预订消息中查看客房及入内方式。若预计午夜以后抵达，请提前联系房东。','請在預訂訊息中查看客房及入內方式。若預計午夜以後抵達，請提前聯絡房東。']],
      [['퇴실 전','Before you leave','ご出発前','退房前','退房前'],['개인 소지품을 챙기고, 늦은 퇴실이 필요하면 호스트에게 가능 여부를 확인해 주세요.','Take your belongings and ask your host in advance if you need a later check-out.','お忘れ物がないかご確認ください。レイトチェックアウトをご希望の場合は、事前にホストへご相談ください。','请带齐个人物品。若需延迟退房，请提前向房东确认。','請帶齊個人物品。若需延後退房，請提前向房東確認。']],
    ],
  },
  {
    id:'wifi', icon:'wifi', title:['Wi-Fi 연결','Connect to Wi-Fi','Wi-Fiに接続','连接 Wi-Fi','連線 Wi-Fi'],
    lead:['숙소에서 무료 Wi-Fi를 이용할 수 있습니다.','Free Wi-Fi is available at the property.','館内で無料Wi-Fiをご利用いただけます。','住宿提供免费 Wi-Fi。','住宿提供免費 Wi-Fi。'],
    items:[[['연결 방법','How to connect','接続方法','连接方式','連線方式'],['예약 메시지나 객실 안내에서 네트워크 이름과 비밀번호를 확인한 뒤, 기기의 Wi-Fi 설정에서 해당 네트워크를 선택해 주세요. 안내를 찾기 어렵다면 예약 채널로 호스트에게 문의해 주세요.','Find the network name and password in your booking messages or in-room information, then select that network in your device settings. If you cannot find the details, message your host through your booking platform.','予約メッセージまたは客室案内でネットワーク名とパスワードをご確認のうえ、端末のWi-Fi設定から選択してください。見つからない場合は予約サイトからホストにお問い合わせください。','请在预订消息或客房说明中查看网络名称和密码，再在设备的 Wi-Fi 设置中选择对应网络。若找不到信息，请通过预订平台联系房东。','請在預訂訊息或客房說明中查看網路名稱和密碼，再於裝置的 Wi-Fi 設定中選擇對應網路。若找不到資訊，請透過預訂平台聯絡房東。']]],
  },
  {
    id:'facilities', icon:'room', title:['공용 공간·편의시설','Shared spaces & amenities','共用スペース・設備','公共空间与设施','公共空間與設施'],
    lead:['공용 라운지와 주방을 이용할 수 있습니다.','A shared lounge and kitchen are available.','共用のラウンジとキッチンをご利用いただけます。','住宿设有共用休息室与厨房。','住宿設有共用休息室與廚房。'],
    items:[
      [['주방 및 다이닝','Kitchen and dining','キッチンとダイニング','厨房与用餐区','廚房與用餐區'],['공용 주방에는 전기 주전자와 식탁이 있습니다. 주방 기기의 사용 방법이나 객실별 비품은 투숙 안내에서 확인해 주세요.','The shared kitchen has an electric kettle and a dining table. Check your stay instructions for appliance use and room-specific amenities.','共用キッチンには電気ケトルとダイニングテーブルがあります。家電の使い方や客室ごとの備品は宿泊案内をご確認ください。','共用厨房配有电热水壶和餐桌。电器使用方法及各客房用品请查看入住说明。','共用廚房備有電熱水壺和餐桌。電器使用方法及各客房用品請查看入住說明。']],
      [['욕실과 주차','Bathrooms and parking','バスルームと駐車場','浴室与停车','浴室與停車'],['일부 객실에는 전용 욕실이 있습니다. 차량을 가져오실 경우 주차 위치와 이용 가능 여부를 호스트에게 미리 확인해 주세요.','Some rooms have a private bathroom. If you are bringing a car, confirm parking location and availability with your host in advance.','一部の客室には専用バスルームがあります。車でお越しの場合は駐車場所と空き状況を事前にホストへご確認ください。','部分客房设有独立浴室。如自驾前来，请提前向房东确认停车位置及可用情况。','部分客房設有獨立浴室。如自行開車前來，請提前向房東確認停車位置及可用情況。']],
    ],
  },
  {
    id:'rules', icon:'list', title:['이용 수칙','House rules','ハウスルール','住宿规定','住宿規定'],
    lead:['모두가 편안하게 머물 수 있도록 예약 조건과 현장 안내를 확인해 주세요.','Please check your booking conditions and on-site guidance for a comfortable stay for everyone.','皆さまに快適にお過ごしいただけるよう、予約条件と館内案内をご確認ください。','请查看预订条件和现场说明，让每位宾客都能舒适入住。','請查看預訂條件與現場說明，讓每位旅客都能舒適入住。'],
    items:[
      [['파티와 행사','Parties and events','パーティー・イベント','派对与活动','派對與活動'],['숙소에서 파티와 행사는 허용되지 않습니다.','Parties and events are not allowed.','館内でのパーティーやイベントはご遠慮ください。','住宿内不允许举办派对或活动。','住宿內不得舉辦派對或活動。']],
      [['반려동물','Pets','ペット','宠物','寵物'],['반려동물 동반 투숙은 불가합니다.','Pets are not permitted.','ペット同伴でのご宿泊はできません。','不可携带宠物入住。','不可攜帶寵物入住。']],
      [['세탁·분리배출','Laundry and waste','洗濯・ごみの分別','洗衣与垃圾分类','洗衣與垃圾分類'],['세탁 시설의 이용 가능 여부와 분리배출 장소는 객실 안내를 확인하거나 호스트에게 문의해 주세요.','Check your room information or ask your host about laundry availability and where to put sorted waste.','洗濯設備の利用可否とごみの分別場所は、客室案内またはホストにご確認ください。','请查看客房说明或向房东确认洗衣设施和垃圾分类投放地点。','請查看客房說明或向房東確認洗衣設備與資源回收投放地點。']],
    ],
  },
];

export const arrival = {
  subway:['합정역(2·6호선) 또는 망원역(6호선)에서 출발할 수 있습니다. 현재 위치에서 편한 출구와 도보 동선을 지도에서 확인해 주세요.','Hapjeong Station (Lines 2 and 6) and Mangwon Station (Line 6) are options. Check the map for the most convenient exit and walking route.','合井駅（2・6号線）または望遠駅（6号線）からお越しいただけます。便利な出口と徒歩ルートは地図でご確認ください。','可从合井站（2、6号线）或望远站（6号线）步行前往。请在地图上查看方便的出口和步行路线。','可從合井站（2、6號線）或望遠站（6號線）步行前往。請在地圖上查看方便的出口和步行路線。'],
  airport:['인천공항·김포공항에서 공항철도 일반열차를 타고 홍대입구역에서 내리세요. 2호선으로 갈아타고 한 정거장 뒤 합정역에서 내려 숙소까지 걸어오실 수 있습니다.','Take the AREX all-stop train from Incheon or Gimpo Airport to Hongik Univ. Station. Transfer to Line 2, ride one stop to Hapjeong, and walk to the property.','仁川・金浦空港から空港鉄道の一般列車で弘大入口駅へ。2号線に乗り換え、1駅先の合井駅から徒歩でお越しいただけます。','从仁川或金浦机场搭乘机场铁路普通列车至弘大入口站，换乘 2 号线坐一站到合井站，再步行前往住宿。','從仁川或金浦機場搭乘機場鐵路普通列車至弘大入口站，轉乘 2 號線一站到合井站，再步行前往住宿。'],
  entrance:['월드컵로10길에서 검은 출입문 위 ABODE 간판을 찾으세요. 도착 후에는 예약 메시지에 받은 입실 안내를 따라 주세요.','On World Cup-ro 10-gil, look for the ABODE sign above the black entrance. Follow the entry instructions sent with your booking.','ワールドカップ路10ギルで、黒い入口の上にあるABODEの看板をお探しください。到着後は予約時の入室案内に従ってください。','在世界杯路10街寻找黑色入口上方的 ABODE 标志。抵达后请按照预订消息中的入住说明操作。','在世界盃路10街尋找黑色入口上方的 ABODE 招牌。抵達後請依預訂訊息中的入住說明操作。'],
  help:['예약하신 플랫폼에서 예약 내역을 열고 호스트에게 메시지를 보내 주세요.','Open your reservation on the platform you booked with and send a message to your host.','ご予約のサイトで予約内容を開き、ホストへメッセージをお送りください。','打开预订平台上的订单，给房东发送消息。','開啟預訂平台上的訂單，傳送訊息給房東。'],
};

export const places = [
  { group:'food', query:'망원시장', name:['망원시장','Mangwon Market','望遠市場','望远市场','望遠市場'], about:['시장 골목에서 간식과 가볍게 먹을 한 끼를 골라 보세요.','Pick up a snack or a casual meal in this neighborhood market.','市場の路地でおやつや軽い食事を探してみましょう。','在街坊市场选些小吃，或简单吃一餐。','在街坊市場挑些小吃，或簡單吃一餐。'], source:'https://access.visitkorea.or.kr/ms/detail.do?cotId=2e79d923-c59c-4058-b6c2-fbe316910e33' },
  { group:'food', query:'망리단길', name:['망리단길','Mangridan-gil','マンリダンギル','望理团路','望理團路'], about:['작은 카페와 상점이 이어지는 망원동 골목입니다.','A Mangwon neighborhood lane lined with small cafés and shops.','小さなカフェや店が並ぶ望遠洞の路地です。','望远洞一条聚集小咖啡馆和店铺的街巷。','望遠洞一條聚集小咖啡館與店舖的街巷。'], source:'https://korean.visitseoul.net/mapo-around/망리단길/KOP041785' },
  { group:'walk', query:'망원한강공원', name:['망원한강공원','Mangwon Hangang Park','望遠漢江公園','望远汉江公园','望遠漢江公園'], about:['강을 따라 걷거나 잔디에 앉아 쉬기 좋은 공원입니다.','Walk along the river or take a break on the lawn.','川沿いの散歩や芝生での休憩にぴったりの公園です。','适合沿江散步，或在草地上休息。','適合沿江散步，或在草地上休息。'], source:'https://hangang.seoul.go.kr/www/contents/668.do?mid=471' },
  { group:'walk', query:'경의선숲길 연남동', name:['경의선숲길','Gyeongui Line Forest Park','京義線スッキル','京义线森林公园','京義線森林公園'], about:['옛 철길을 따라 이어진 산책로를 걸으며 연남동을 둘러보세요.','Follow the former railway path and explore Yeonnam-dong along the way.','旧線路沿いの遊歩道を歩き、延南洞を散策できます。','沿旧铁路步道散步，顺路探索延南洞。','沿舊鐵路步道散步，順路探索延南洞。'], source:'https://korean.visitseoul.net/hallyu/도심-속-쉼터-경의선-숲길/KON017350' },
  { group:'walk', query:'홍대 걷고싶은거리', name:['홍대 걷고싶은거리','Hongdae Walking Street','弘大 散策通り','弘大步行街','弘大步行街'], about:['상점과 거리 공연이 모이는 홍대의 중심 거리입니다.','One of Hongdae’s main streets for shops and street performances.','店やストリートパフォーマンスが集まる弘大の中心通りです。','集聚商店和街头表演的弘大主要街道。','匯集商店和街頭表演的弘大主要街道。'], source:'https://korean.visitkorea.or.kr/detail/ms_detail.do?cotid=cde3497b-dcdc-4dd5-b941-38a69b88d9cc' },
  { group:'walk', query:'문화비축기지', name:['문화비축기지','Oil Tank Culture Park','文化備蓄基地','文化储备基地','文化儲備基地'], about:['옛 석유 저장 시설을 전시와 공연을 위한 공간으로 바꾼 문화 공원입니다.','Former oil storage tanks now house exhibitions and performance spaces.','旧石油備蓄施設が展示や公演の空間に生まれ変わった文化公園です。','旧石油储存设施改建成展览和演出空间的文化公园。','舊石油儲存設施改建成展覽及演出空間的文化公園。'], source:'https://korean.visitseoul.net/area/parksseoul/KOP023543' },
];

export const courses = [
  { name:['망원 시장과 한강','Mangwon Market and the Han River','望遠市場と漢江','望远市场与汉江','望遠市場與漢江'], stops:[0,1,2] },
  { name:['홍대와 연남동','Hongdae and Yeonnam','弘大と延南洞','弘大与延南洞','弘大與延南洞'], stops:[4,3] },
];
