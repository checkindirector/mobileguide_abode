import { applianceItems, laundryItems } from './equipment.js';

export const buildingMaps = {
  naver: 'https://naver.me/FlBXF2M4',
  google: 'https://maps.app.goo.gl/j4KpUVcJ6bRxaBtv8',
};
export const wifiNetworks = ['ABODE1', 'ABODE2', 'ABODE3', 'ABODE4'];
export const wifiPasswordNotice = {
  title:['비밀번호가 필요합니다.', 'A password is required.', 'パスワードが必要です。', '连接时需要密码。', '連線時需要密碼。'],
  text:['객실 안내 또는 예약 메시지에서 확인해 주세요.', 'Find it in your room information or booking messages.', '客室案内または予約メッセージでご確認ください。', '请查看客房说明或预订消息。', '請查看客房說明或預訂訊息。'],
};

const luggage = ['입실 전과 퇴실 후에는 지하 1층 계단 아래 짐 보관소를 이용할 수 있습니다. 얼리 체크인과 레이트 체크아웃은 운영하지 않습니다.', 'You may leave bags beneath the stairs on level B1 before check-in or after check-out. Early check-in and late check-out are unavailable.', '入室前と退室後は、地下1階の階段下にある荷物置き場をご利用いただけます。アーリーチェックインとレイトチェックアウトはできません。', '入住前和退房后均可使用地下一层楼梯下方的行李寄存处。不提供提前入住和延迟退房。', '入住前與退房後皆可使用地下一層樓梯下的行李寄存處。無法提前入住或延後退房。'];
export const parking = ['숙소 무료 주차는 최대 3대까지 선착순으로 이용할 수 있으며, 이중 주차가 필요할 수 있습니다. 만차 시 건물 앞 노상 공영주차장의 현장 요금과 운영 시간을 확인해 주세요.', 'Free on-site parking is first come, first served for up to three vehicles. Double parking may be needed. If full, check the posted rates and hours for the public street parking in front.', '宿の無料駐車場は先着3台までで、縦列駐車になる場合があります。満車の場合は、建物前の公営路上駐車場で料金と営業時間をご確認ください。', '住宿提供最多 3 个免费车位，先到先得，可能需要双排停车。车位已满时，请查看楼前市政路边停车位的现场价格和开放时间。', '住宿提供最多 3 個免費車位，先到先得，可能需要併排停車。車位已滿時，請查看樓前公有路邊停車位的現場費率與開放時間。'];

export const guides = [
  {
    id:'check-in', icon:'key', title:['체크인·체크아웃','Check-in & check-out','チェックイン・アウト','入住与退房','入住與退房'],
    hint:['셀프 체크인과 퇴실 순서','Self check-in and departure steps','セルフチェックインと退室手順','自助入住与退房步骤','自助入住與退房步驟'],
    lead:['체크인은 오후 4시부터, 체크아웃은 오전 11시까지입니다.', 'Check in from 4:00 PM and check out by 11:00 AM.', 'チェックインは16:00から、チェックアウトは11:00までです。', '下午 4 点起入住，上午 11 点前退房。', '下午 4 點起入住，上午 11 點前退房。'],
    items:[
      { anchor:'check-in-steps', title:['키오스크에서 셀프 체크인','Self check-in at the kiosk','端末でセルフチェックイン','在自助机办理入住','在自助機辦理入住'],
        steps:[
          ['체크인 전날 오후 6시에 발송되는 예약 메시지에서 입실 안내를 확인해 주세요.', 'Check the entry instructions sent via your booking platform at 6 PM the day before arrival.', 'ご到着前日の18時に予約サイトから届く入館案内をご確認ください。', '查看入住前一天下午 6 点通过预订平台发送的入内说明。', '查看入住前一天下午 6 點透過預訂平台傳送的入內說明。'],
          ['여권 또는 신분증을 준비한 뒤 건물 입구의 키오스크에서 화면 안내를 따라 체크인해 주세요.', 'Have your passport or ID ready and follow the instructions on the kiosk at the entrance.', 'パスポートまたは身分証を用意し、建物入口の端末の案内に従ってチェックインしてください。', '准备护照或身份证件，按建筑入口处自助机的提示办理入住。', '備妥護照或身分證件，依大樓入口處自助機的指示辦理入住。'],
          ['객실 안내를 확인하고 엘리베이터로 해당 층으로 이동해 주세요.', 'Check your room information and take the elevator to your floor.', '客室案内を確認し、エレベーターで該当階へお上がりください。', '确认客房信息后，搭电梯前往对应楼层。', '確認客房資訊後，搭電梯前往對應樓層。'],
        ], image:'guide-kiosk' },
      { anchor:'check-out-steps', title:['퇴실 전 체크리스트','Check-out checklist','退室前のチェックリスト','退房检查清单','退房檢查清單'],
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
    items:[
      { title:['연결 방법','How to connect','接続方法','连接方法','連線方式'], text:['기기 설정에서 객실 안내에 표시된 네트워크를 선택하세요.', 'Select the network shown in your room information in your device settings.', '端末の設定で客室案内にあるネットワークを選択してください。', '在设备设置中选择客房说明所示的网络。', '在裝置設定中選擇客房說明所示的網路。'] },
      { title:['연결이 안 될 때','If you can’t connect','接続できないとき','无法连接时','無法連線時'], text:['기기의 Wi-Fi를 껐다 켠 뒤 네트워크 이름을 다시 확인해 주세요. 계속 연결되지 않으면 예약 채널에서 호스트에게 객실과 오류 화면을 알려 주세요.', 'Turn Wi-Fi off and on, then check the network name again. If it still fails, message your host with your room and the error shown.', '端末のWi-Fiを入れ直し、ネットワーク名を再度ご確認ください。解決しない場合は客室とエラー表示を予約サイトからホストへお知らせください。', '关闭并重新打开 Wi-Fi，再确认网络名称。若仍无法连接，请通过预订平台把客房和错误画面告知房东。', '關閉再開啟 Wi-Fi，並再次確認網路名稱。若仍無法連線，請透過預訂平台將客房和錯誤畫面告知房東。'] },
    ],
  },
  {
    id:'facilities', icon:'room', title:['가전·시설 안내','Appliances & facilities','家電・設備案内','电器与设施','家電與設施'],
    hint:['프로젝터·정수기·주방·비품','Projector, water dispensers and amenities','プロジェクター・浄水器・備品','投影仪、净水器、厨房与备品','投影機、飲水機、廚房與備品'],
    lead:['객실의 주요 기기와 투숙 중 필요한 비품을 확인하세요.', 'Find the room appliances and supplies you may need during your stay.', '客室の主な家電や滞在中に使う備品をご確認ください。', '查看入住期间可能用到的客房电器及备品。', '查看入住期間可能用到的客房家電與備品。'],
    items:applianceItems,
  },
  {
    id:'laundry', icon:'laundry', title:['세탁·건조 안내','Laundry & drying','洗濯・乾燥','洗衣与烘干','洗衣與烘乾'],
    hint:['세탁실 위치와 기기 사용','Locations and washer controls','設置場所と使い方','位置及使用方法','位置及使用方式'],
    lead:['2층 복도에는 세탁기와 건조기가 따로 있고, 3·4층 객실에는 세탁·건조 겸용 기기가 있습니다. 이용 시간은 09:00–21:00입니다.', 'The 2F corridor has a separate washer and dryer. Rooms on 3F and 4F have a washer-dryer. Laundry hours are 09:00–21:00.', '2階の廊下には洗濯機と乾燥機が別々にあり、3・4階の客室には洗濯乾燥機があります。ご利用時間は9:00〜21:00です。', '2 楼走廊有独立洗衣机和烘干机，3、4 楼客房配有洗烘一体机。使用时间为 09:00–21:00。', '2 樓走廊有獨立洗衣機和烘衣機，3、4 樓客房配有洗脫烘一體機。使用時間為 09:00–21:00。'],
    items:laundryItems,
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
      { title:['카드키 분실·기물 파손','Lost key cards and damage','カードキー紛失・備品の破損','房卡遗失与设施损坏','房卡遺失與設施損壞'], text:['카드키를 잃어버리거나 기물이 파손되면 예약 플랫폼으로 호스트에게 알려 주세요. 파손된 기물에는 제품 비용이 청구될 수 있습니다.','Message your host through your booking platform if you lose the key card or damage an item. Damaged items may be charged at their replacement cost.','カードキーの紛失や備品の破損があった場合は、予約サイトからホストへご連絡ください。破損した備品の代金が請求されることがあります。','若遗失房卡或损坏物品，请通过预订平台联系房东。损坏的物品可能按产品成本收费。','若遺失房卡或損壞物品，請透過預訂平台聯絡房東。損壞物品可能按產品成本收費。'] },
      { title:['예약 변경·취소','Reservation changes and cancellation','予約の変更・キャンセル','更改或取消预订','更改或取消預訂'], text:['일정 변경과 취소·환불은 예약 내역에 표시된 조건을 확인해 주세요. 연박 시 같은 객실 사용이 필요하면 객실을 추가 예약하기 전에 호스트에게 확인해 주세요.','For changes, cancellation or refunds, check the conditions in your reservation. If you want the same room for consecutive nights, confirm with the host before making an additional booking.','日程変更・キャンセル・返金は予約内容の条件をご確認ください。連泊で同じ客室をご希望の場合は追加予約前にホストへご確認ください。','更改日期、取消和退款请查看订单条件。如续住需要同一间房，请在加订前向房东确认。','變更日期、取消與退款請查看訂單條款。若續住希望使用同一客房，請在加訂前向房東確認。'] },
    ],
  },
];

export const faq = [
  { question:['일찍 도착하면 짐을 맡길 수 있나요?','Can I leave bags if I arrive early?','早く着いたら荷物を預けられますか？','提前抵达可以寄存行李吗？','提早抵達可以寄存行李嗎？'], route:'guide/luggage', answer:luggage },
  { question:['체크인은 어떻게 하나요?','How do I check in?','チェックインはどうしますか？','如何办理入住？','如何辦理入住？'], route:'guide/check-in', answer:guides[0].items[0].steps[1] },
  { question:['주차할 수 있나요?','Is parking available?','駐車できますか？','可以停车吗？','可以停車嗎？'], route:'location/parking', answer:parking },
];
