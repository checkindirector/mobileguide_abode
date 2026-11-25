export const buildingMaps = {
  naver: 'https://naver.me/FlBXF2M4',
  google: 'https://maps.app.goo.gl/j4KpUVcJ6bRxaBtv8',
};
export const wifiNetworks = ['ABODE1', 'ABODE2', 'ABODE3', 'ABODE4'];

const luggage = ['입실 전과 퇴실 후에는 지하 1층 계단 아래 짐 보관소를 이용할 수 있습니다. 얼리 체크인과 레이트 체크아웃은 운영하지 않습니다.', 'You may leave bags beneath the stairs on level B1 before check-in or after check-out. Early check-in and late check-out are unavailable.', '入室前と退室後は、地下1階の階段下にある荷物置き場をご利用いただけます。アーリーチェックインとレイトチェックアウトはできません。', '入住前和退房后均可使用地下一层楼梯下方的行李寄存处。不提供提前入住和延迟退房。', '入住前與退房後皆可使用地下一層樓梯下的行李寄存處。無法提前入住或延後退房。'];
const parking = ['숙소 무료 주차는 최대 3대까지 선착순으로 이용할 수 있으며, 이중 주차가 필요할 수 있습니다. 만차 시 건물 앞 노상 공영주차장의 현장 요금과 운영 시간을 확인해 주세요.', 'Free on-site parking is first come, first served for up to three vehicles. Double parking may be needed. If full, check the posted rates and hours for the public street parking in front.', '宿の無料駐車場は先着3台までで、縦列駐車になる場合があります。満車の場合は、建物前の公営路上駐車場で料金と営業時間をご確認ください。', '住宿提供最多 3 个免费车位，先到先得，可能需要双排停车。车位已满时，请查看楼前市政路边停车位的现场价格和开放时间。', '住宿提供最多 3 個免費車位，先到先得，可能需要併排停車。車位已滿時，請查看樓前公有路邊停車位的現場費率與開放時間。'];

export const guides = [
  {
    id:'check-in', icon:'key', title:['체크인·체크아웃','Check-in & check-out','チェックイン・アウト','入住与退房','入住與退房'],
    hint:['셀프 체크인과 퇴실 순서','Self check-in and departure steps','セルフチェックインと退室手順','自助入住与退房步骤','自助入住與退房步驟'],
    lead:['체크인은 오후 4시부터, 체크아웃은 오전 11시까지입니다.', 'Check in from 4:00 PM and check out by 11:00 AM.', 'チェックインは16:00から、チェックアウトは11:00までです。', '下午 4 点起入住，上午 11 点前退房。', '下午 4 點起入住，上午 11 點前退房。'],
    items:[
      { title:['키오스크에서 셀프 체크인','Self check-in at the kiosk','端末でセルフチェックイン','在自助机办理入住','在自助機辦理入住'],
        steps:[
          ['체크인 전날 오후 6시에 발송되는 예약 메시지에서 입실 안내를 확인해 주세요.', 'Check the entry instructions sent via your booking platform at 6 PM the day before arrival.', 'ご到着前日の18時に予約サイトから届く入館案内をご確認ください。', '查看入住前一天下午 6 点通过预订平台发送的入内说明。', '查看入住前一天下午 6 點透過預訂平台傳送的入內說明。'],
          ['여권 또는 신분증을 준비한 뒤 건물 입구의 키오스크에서 화면 안내를 따라 체크인해 주세요.', 'Have your passport or ID ready and follow the instructions on the kiosk at the entrance.', 'パスポートまたは身分証を用意し、建物入口の端末の案内に従ってチェックインしてください。', '准备护照或身份证件，按建筑入口处自助机的提示办理入住。', '備妥護照或身分證件，依大樓入口處自助機的指示辦理入住。'],
          ['객실 안내를 확인하고 엘리베이터로 해당 층으로 이동해 주세요.', 'Check your room information and take the elevator to your floor.', '客室案内を確認し、エレベーターで該当階へお上がりください。', '确认客房信息后，搭电梯前往对应楼层。', '確認客房資訊後，搭電梯前往對應樓層。'],
        ], image:'guide-kiosk' },
      { title:['퇴실 전 체크리스트','Check-out checklist','退室前のチェックリスト','退房检查清单','退房檢查清單'],
        steps:[
          ['사용한 식기를 씻고 수건은 회수 바구니에 담아 주세요.', 'Wash used dishes and put used towels in the collection basket.', '使った食器を洗い、使用済みのタオルは回収かごに入れてください。', '洗净用过的餐具，将用过的毛巾放入回收篮。', '洗淨用過的餐具，將用過的毛巾放入回收籃。'],
          ['쓰레기를 종류별로 나누고, 3·4층에서는 엘리베이터 밖 분리수거함을 이용해 주세요.', 'Sort your waste. On floors 3 and 4, use the bins outside the elevator.', 'ごみを分別してください。3・4階ではエレベーター外の分別用ごみ箱をご利用ください。', '请分类垃圾。3、4 楼住客请使用电梯外的分类垃圾桶。', '請分類垃圾。3、4 樓住客請使用電梯外的分類垃圾桶。'],
          ['냉난방 전원을 끄고 카드키를 뽑은 뒤 객실문을 닫고 오전 11시까지 퇴실해 주세요.', 'Turn off heating and cooling, remove the key card, close the room door and leave by 11 AM.', '冷暖房を切り、カードキーを抜いて客室のドアを閉め、11時までにご退室ください。', '关闭空调与暖气，取出房卡，关好房门，于上午 11 点前离开。', '關閉冷暖氣、取出房卡、關好房門，並於上午 11 點前退房。'],
        ] },
      { title:['짐 보관과 입·퇴실 시간','Luggage and arrival times','手荷物と入退室時間','行李与入住退房时间','行李與入住退房時間'], text:luggage },
    ],
  },
  {
    id:'luggage', icon:'bag', title:['짐 보관','Luggage storage','荷物預かり','行李寄存','行李寄存'],
    hint:['지하 1층 보관소 이용','Storage on level B1','地下1階の荷物置き場','地下一层寄存处','地下一層寄存處'],
    lead:luggage,
    items:[],
  },
  {
    id:'wifi', icon:'wifi', title:['Wi-Fi 연결','Connect to Wi-Fi','Wi-Fiに接続','连接 Wi-Fi','連線 Wi-Fi'],
    hint:['네트워크 이름과 연결 방법','Network names and connection','ネットワーク名と接続方法','网络名称与连接方法','網路名稱與連線方式'],
    lead:['투숙 중 무료 Wi-Fi를 이용할 수 있습니다.', 'Free Wi-Fi is available during your stay.', 'ご滞在中は無料Wi-Fiをご利用いただけます。', '入住期间可免费使用 Wi-Fi。', '入住期間可免費使用 Wi-Fi。'],
    items:[{ title:['연결 방법','How to connect','接続方法','连接方法','連線方式'], text:['기기 설정에서 객실 안내에 표시된 네트워크를 선택하세요. 비밀번호는 객실 안내나 예약 메시지에서 확인해 주세요. 연결이 어려우면 예약 채널에서 호스트에게 문의해 주세요.', 'Select the network shown in your room information in your device settings. Find the password in your room information or booking messages. Message your host if you have trouble connecting.', '端末の設定で客室案内にあるネットワークを選択してください。パスワードは客室案内または予約メッセージに記載されています。接続できない場合は予約サイトからホストへご連絡ください。', '在设备设置中选择客房说明所示的网络。密码见客房说明或预订消息。连接困难时，请通过预订平台联系房东。', '在裝置設定中選擇客房說明所示的網路。密碼請見客房說明或預訂訊息。若連線困難，請透過預訂平台聯絡房東。'] }],
  },
  {
    id:'facilities', icon:'room', title:['가전·시설 안내','Appliances & facilities','家電・設備案内','电器与设施','家電與設施'],
    hint:['프로젝터·정수기·주방·비품','Projector, water dispensers and amenities','プロジェクター・浄水器・備品','投影仪、净水器、厨房与备品','投影機、飲水機、廚房與備品'],
    lead:['객실의 주요 기기와 투숙 중 필요한 비품을 확인하세요.', 'Find the room appliances and supplies you may need during your stay.', '客室の主な家電や滞在中に使う備品をご確認ください。', '查看入住期间可能用到的客房电器及备品。', '查看入住期間可能用到的客房家電與備品。'],
    items:[
      { title:['4층 빔프로젝터','Floor 4 projector','4階のプロジェクター','4 楼投影仪','4 樓投影機'], model:'MAXELL MP-JU4001', image:'guide-projector',
        steps:[['프로젝터 리모컨의 빨간 전원 버튼을 3초간 눌러 주세요.', 'Hold the red power button on the projector remote for three seconds.', 'プロジェクターのリモコンの赤い電源ボタンを3秒間長押しします。', '按住投影仪遥控器的红色电源键 3 秒。', '按住投影機遙控器的紅色電源鍵 3 秒。'], ['본체의 초록색 표시등이 켜지면 TV 리모컨의 전원 버튼을 눌러 주세요.', 'When the green indicator on the projector lights up, press power on the TV remote.', '本体の緑のランプが点灯したら、テレビのリモコンの電源ボタンを押します。', '投影仪绿灯亮起后，按电视遥控器的电源键。', '投影機綠燈亮起後，按電視遙控器的電源鍵。']] },
      { title:['3층·4층 정수기','Water dispensers on floors 3 and 4','3・4階の浄水器','3、4 楼净水器','3、4 樓飲水機'], model:'3F  CHUNGHO WP-30C9460BN  ·  4F  CUCKOO CP-AD011UGW',
        text:['온수를 사용할 때는 뜨거운 물에 주의해 주세요. 4층 정수기에서 물을 받을 때 생기는 작은 기포는 정상입니다.', 'Take care when dispensing hot water. Small bubbles can appear normally when the floor 4 dispenser fills a cup.', '温水を出す際はやけどにご注意ください。4階の浄水器で水を出す際の小さな気泡は正常です。', '接热水时请小心烫伤。使用 4 楼净水器接水时出现少量气泡属正常现象。', '取用熱水時請小心燙傷。使用 4 樓飲水機取水時出現少量氣泡屬正常現象。'],
        manuals:[['CHUNGHO','https://www.chungho.co.kr/newch/admin/manual/202405290953269229.pdf'], ['CUCKOO','https://cdn.cuckoo.co.kr/upload_cuckoo/_bo_rep/manual/file_a83bac30-b2ee-4e9b-a68f-fa11c20bd1aa.pdf']] },
      { title:['블루투스 스피커','Bluetooth speaker','Bluetoothスピーカー','蓝牙音箱','藍牙喇叭'], model:'Britz BZ-HMR',
        text:['전 객실에 스피커가 있습니다. 켜고 기기의 블루투스 목록에서 스피커를 선택하세요. 밤 9시 이후에는 음량을 낮춰 주세요.', 'Every room has a speaker. Switch it on, then select it from your device’s Bluetooth list. Keep the volume low after 9 PM.', '全室にスピーカーがあります。電源を入れ、端末のBluetoothリストから選んでください。21時以降は音量を控えめにしてください。', '所有客房均配有音箱。开机后，在设备的蓝牙列表中选择音箱。晚上 9 点后请调低音量。', '所有客房均配有喇叭。開機後，在裝置的藍牙清單中選擇喇叭。晚上 9 點後請調低音量。'] },
      { title:['주방·냉난방·비품','Kitchen, heating and supplies','キッチン・冷暖房・備品','厨房、冷暖设备与备品','廚房、冷暖設備與備品'],
        text:['인덕션을 쓸 때 주방 환풍기를 켜 주세요. 전기장판은 타이머를 설정하고, 퇴실할 때 냉난방 전원을 꺼 주세요. 한국식 수건을 제공하며 추가 수건은 2층 게스트 박스에서 가져갈 수 있습니다. 대형 바디타월은 제공하지 않습니다.', 'Run the kitchen fan when using the induction hob. Set a timer on the electric heating mat and turn off heating and cooling before check-out. Korean-size towels are provided. Extra towels are in the floor 2 guest box. Large bath towels are not provided.', 'IH調理器を使う際は換気扇をつけてください。電気マットはタイマーを設定し、退室時に冷暖房をお切りください。韓国サイズのタオルを備えています。追加は2階のゲストボックスをご利用ください。大判バスタオルはありません。', '使用电磁炉时请开启排风扇。电热垫请设置定时，退房时关闭冷暖设备。提供韩式尺寸毛巾，额外毛巾在 2 楼宾客备品箱。不提供大浴巾。', '使用電磁爐時請開啟排風扇。電熱墊請設定定時，退房時關閉冷暖設備。提供韓式尺寸毛巾，額外毛巾在 2 樓旅客備品箱。無提供大浴巾。'] },
    ],
  },
  {
    id:'laundry', icon:'laundry', title:['세탁·건조 안내','Laundry & drying','洗濯・乾燥','洗衣与烘干','洗衣與烘乾'],
    hint:['세탁실 위치와 기기 사용','Locations and washer controls','設置場所と使い方','位置及使用方法','位置及使用方式'],
    lead:['2층 복도에는 세탁기와 건조기가 따로 있고, 3·4층 객실에는 세탁·건조 겸용 기기가 있습니다. 밤 9시 이후에는 사용을 자제해 주세요.', 'Separate machines are in the floor 2 corridor. Rooms on floors 3 and 4 have a washer-dryer. Please avoid using them after 9 PM.', '2階の廊下に洗濯機と乾燥機、3・4階の客室に洗濯乾燥機があります。21時以降の使用はお控えください。', '2 楼走廊有独立洗衣机与烘干机，3、4 楼客房配有洗烘一体机。晚上 9 点后请尽量不要使用。', '2 樓走廊有獨立洗衣機與烘乾機，3、4 樓客房配有洗脫烘一體機。晚上 9 點後請盡量避免使用。'],
    items:[{ title:['3·4층 세탁·건조 겸용','Washer-dryers on floors 3 and 4','3・4階の洗濯乾燥機','3、4 楼洗烘一体机','3、4 樓洗脫烘一體機'], model:'LG FY9WTB', image:'guide-laundry',
      text:['세탁물을 넣고 문을 닫은 뒤 전원을 켜세요. 세탁 또는 건조 코스를 선택한 후 시작 버튼을 눌러 주세요. 세탁과 건조의 허용 용량이 다르므로 기기 표기와 제조사 안내를 확인해 주세요.', 'Load the laundry, close the door and switch on. Select a wash or dry cycle and press Start. Washing and drying have different load limits. Check the machine label and LG’s guidance.', '洗濯物を入れてドアを閉め、電源を入れます。洗濯または乾燥のコースを選び、スタートを押してください。洗濯と乾燥の容量は異なるため、本体表示とメーカー案内をご確認ください。', '放入衣物、关闭机门后开机。选择洗涤或烘干程序并按启动。两种模式的容量不同，请查看机身标示与厂家说明。', '放入衣物、關閉機門後開機。選擇洗滌或烘乾行程並按啟動。洗滌與烘乾容量不同，請查看機身標示及原廠說明。'],
      manuals:[['LG','https://www.lge.co.kr/business/washing-machines/fy9wtb']] }],
  },
  {
    id:'waste', icon:'waste', title:['쓰레기 분리배출','Waste & recycling','ごみの分別','垃圾分类','垃圾分類'],
    hint:['일반·재활용·음식물 배출 위치','Waste, recycling and food scraps','一般ごみ・資源ごみ・生ごみ','普通、可回收及厨余投放位置','一般、回收及廚餘丟棄位置'],
    lead:['일반쓰레기, 재활용, 음식물은 구분해서 버려 주세요.', 'Please separate general waste, recycling and food scraps.', '一般ごみ・資源ごみ・生ごみを分別してください。', '请分别丢弃普通垃圾、可回收物和厨余。', '請將一般垃圾、資源回收與廚餘分開丟棄。'],
    items:[{ title:['배출 장소','Where to put waste','ごみの出し方','投放位置','丟棄位置'], steps:[
      ['일반쓰레기는 객실이나 욕실의 쓰레기통에 넣어 주세요.', 'Put general waste in the bin in your room or bathroom.', '一般ごみは客室や浴室のごみ箱へ入れてください。', '普通垃圾放入客房或浴室的垃圾桶。', '一般垃圾請丟進客房或浴室的垃圾桶。'],
      ['종이, 플라스틱, 캔, 유리병은 각각 나눠 엘리베이터 옆 분리수거함에 넣어 주세요.', 'Sort paper, plastic, cans and glass bottles into the bins beside the elevator.', '紙、プラスチック、缶、びんは分けて、エレベーター横の回収箱に入れてください。', '将纸张、塑料、金属罐和玻璃瓶分类，投放到电梯旁的回收箱。', '將紙類、塑膠、金屬罐與玻璃瓶分類，放入電梯旁的回收桶。'],
      ['음식물은 객실 주방 싱크대 아래 전용 통에 넣어 주세요.', 'Put food scraps in the dedicated bin below the kitchen sink.', '生ごみは客室キッチンの流し台下の専用容器に入れてください。', '厨余请放入客房厨房水槽下的专用桶。', '廚餘請放入客房廚房水槽下的專用桶。'],
    ] }],
  },
  {
    id:'rules', icon:'list', title:['숙소 이용 수칙','House rules','ハウスルール','住宿规定','住宿規定'],
    hint:['조용한 시간·방문객·취사','Quiet hours, visitors and cooking','静粛時間・訪問者・調理','安静时段、访客与烹饪','安靜時段、訪客與烹飪'],
    lead:['조용한 시간은 밤 11시부터 오전 7시까지입니다.', 'Quiet hours are 11 PM to 7 AM.', '静粛時間は23時から翌朝7時までです。', '晚上 11 点至上午 7 点为安静时段。', '晚上 11 點至上午 7 點為安靜時段。'],
    items:[
      { title:['함께 지키는 이용 수칙','Shared house rules','館内でのお願い','共同遵守的规定','共同遵守的規定'], text:['건물 내부는 금연입니다. 반려동물 동반, 예약 인원 외 방문, 파티 및 상업적 촬영은 허용하지 않습니다.', 'The building is smoke-free. Pets, unregistered visitors, parties and commercial filming are not allowed.', '館内は禁煙です。ペットの同伴、予約者以外の訪問、パーティーおよび商用撮影はできません。', '建筑内禁止吸烟。请勿携带宠物、接待未登记访客、举办派对或进行商业拍摄。', '建築內禁止吸菸。請勿攜帶寵物、接待未登記訪客、舉辦派對或進行商業拍攝。'] },
      { title:['객실에서 조리할 때','Cooking in your room','客室で調理する際','客房烹饪须知','客房烹飪須知'], text:['간단한 조리는 가능합니다. 삼겹살이나 생선구이처럼 냄새가 강한 음식은 조리할 수 없습니다. 인덕션을 사용하는 동안 환풍기를 켜 주세요.', 'Light cooking is permitted. Please avoid strong-smelling food such as grilled pork belly or fish. Keep the kitchen fan on while using the induction hob.', '簡単な調理は可能です。サムギョプサルや焼き魚など、においの強いものはご遠慮ください。IH調理器の使用中は換気扇をつけてください。', '可简单烹饪，但请勿烤五花肉、鱼等气味较重的食物。使用电磁炉时请开启排风扇。', '可簡單烹飪，但請勿烤五花肉、魚等氣味較重的食物。使用電磁爐時請開啟排風扇。'] },
    ],
  },
  { id:'parking', icon:'car', title:['주차 안내','Parking','駐車場','停车指南','停車指南'], hint:['무료 주차와 만차 시 대안','On-site and public parking','無料駐車場と満車時の案内','免费车位与备选停车方案','免費車位與備用停車方案'], lead:parking, items:[] },
];

export const faq = [
  { question:['일찍 도착하면 짐을 맡길 수 있나요?','Can I leave bags if I arrive early?','早く着いたら荷物を預けられますか？','提前抵达可以寄存行李吗？','提早抵達可以寄存行李嗎？'], guide:'luggage' },
  { question:['체크인은 어떻게 하나요?','How do I check in?','チェックインはどうしますか？','如何办理入住？','如何辦理入住？'], guide:'check-in', answer:guides[0].items[0].steps[1] },
  { question:['주차할 수 있나요?','Is parking available?','駐車できますか？','可以停车吗？','可以停車嗎？'], guide:'parking' },
];
