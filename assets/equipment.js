const guide = (id,caption) => ({ id:`device-${id}`, kind:'deviceGuide', caption });
const official = (id,source,caption) => ({ id:`device-official-${id}`, kind:'diagram', source, caption });

const power = '⏻';
const start = '▶ ‖';
const laundryHours = [
  '이용 시간은 오전 9시부터 오후 9시 전까지입니다.',
  'Use the laundry between 9 AM and 9 PM.',
  'ご利用時間は9:00〜21:00です。',
  '洗衣设施开放时间为 09:00 至 21:00。',
  '洗衣設施開放時間為 09:00 至 21:00。',
];
const washerStart = [start, [
  '시작/일시정지를 눌러 시작하세요. 종료 후 문 잠금 표시가 꺼질 때까지 기다리세요.',
  'Press Start/Pause. After the cycle ends, wait for the door-lock indicator to go out.',
  'スタート／一時停止を押します。終了後、ドアロック表示が消えるまでお待ちください。',
  '按下启动／暂停。程序结束后，等待门锁指示灯熄灭。',
  '按下啟動／暫停。行程結束後，等待門鎖指示燈熄滅。',
]];

export const applianceItems = [
  {
    id:'cooling', area:'room',
    visuals:[
      guide('ac',['전원 켜기 → 냉방 선택 → 온도 조절','Power on → Cool mode → Adjust temperature','電源 → 冷房 → 温度調節','开机 → 制冷 → 调节温度','開機 → 冷房 → 調節溫度'])
    ],
    title:['객실 에어컨','Room air conditioning','客室のエアコン','客房空调','客房冷氣'],
    photo:{ id:'guide-abode-room-controls', marks:[[6,44]], caption:['301호 실제 사진 · 거울 왼쪽 벽의 삼성 조작부','Room 301 · Samsung wall control to the left of the mirror','301号室の実物写真・鏡の左側のSamsung操作部','301 号房实拍 · 镜子左侧的三星墙面控制器','301 號房實拍 · 鏡子左側的三星壁面控制器'] },
    controls:[
      [power, ['벽면 조작부나 객실 리모컨에서 전원을 켜세요.', 'Turn on the air conditioner at the wall control or with the room remote.', '壁の操作部または客室のリモコンで電源を入れます。', '使用墙面控制器或客房遥控器开机。', '使用壁面控制器或客房遙控器開機。']],
      ['냉방 / COOL', ['운전 모드를 냉방으로 선택한 뒤 온도를 조절하세요.', 'Select Cool mode and adjust the set temperature.', '冷房モードを選び、設定温度を調節してください。', '选择制冷模式，再调节设定温度。', '選擇冷房模式，再調整設定溫度。']],
      [power, ['외출하거나 퇴실할 때 에어컨을 꺼 주세요. 사진과 조작부가 다르면 호스트에게 문의하세요.', 'Turn off the air conditioner before leaving. If your controls look different, message your host.', '外出・退室時は電源を切ってください。写真と操作部が異なる場合はホストへお尋ねください。', '外出或退房时请关闭空调。若控制器与照片不同，请联系房东。', '外出或退房時請關閉冷氣。若控制器與照片不同，請聯絡房東。']],
    ],
  },
  {
    id:'heating', area:'room',
    visuals:[
      guide('heating',['바닥난방·온수·전기장판 타이머','Floor heating, hot water and heated-mat timer','床暖房・お湯・電気マットのタイマー','地暖、热水与电热垫定时','地暖、熱水與電熱墊定時']),
      official('rinnai-rc610','Rinnai RC610',['3층 · 난방과 온수 버튼','3F · Heating and hot-water buttons','3階・暖房と給湯ボタン','3 楼 · 暖气与热水按钮','3 樓 · 暖氣與熱水按鈕']),
      official('rinnai-r324','Rinnai R324',['4층 · 전원과 난방 조절','4F · Power and heating control','4階・電源と暖房調節','4 楼 · 电源与暖气调节','4 樓 · 電源與暖氣調節'])
    ],
    title:['바닥난방·온수·전기장판','Floor heating, hot water and heated mats','床暖房・お湯・電気マット','地暖、热水与电热垫','地暖、熱水與電熱墊'],
    model:'Rinnai · 3F RC610-27KF / 4F R324-25MF',
    controls:[
      ['난방 / HEAT', ['바닥을 데울 때는 벽 조절기의 난방이나 온돌 표시를 확인하세요. 온도는 벽 조절기에서 조절하세요.', 'For floor heating, look for 난방 or 온돌 on the wall controller. Adjust the temperature at the wall controller.', '床を暖めるときは壁の操作部で「난방」または「온돌」を確認します。壁の操作部で温度を調節してください。', '使用地暖时，请在墙面控制器上查找「난방」或「온돌」。请在墙面控制器上调节温度。', '使用地暖時，請在壁面控制器上查看「난방」或「온돌」。請在壁面控制器上調節溫度。']],
      ['온수 / HOT WATER', ['온수 표시를 확인하고 수도를 온수 쪽으로 열어 물이 따뜻해질 때까지 잠시 기다리세요. 사용 전 손에 닿지 않게 물 온도를 먼저 확인하세요.', 'Check that hot water is enabled, turn the tap to hot and wait briefly. Check the water temperature before washing or showering.', '温水表示を確認して蛇口をお湯側に開き、少し待ちます。洗面やシャワーの前に湯温を確認してください。', '确认热水功能已开启，将水龙头转至热水侧并稍等。洗手或淋浴前请先确认水温。', '確認熱水功能已開啟，將水龍頭轉至熱水側並稍等。洗手或淋浴前請先確認水溫。']],
      ['타이머 / TIMER', ['전기장판을 쓸 때는 반드시 타이머를 설정하세요. 퇴실 전에는 전기장판과 객실 냉난방을 꺼 주세요.', 'Set a timer whenever you use the heated mat. Turn it and the room climate controls off before check-out.', '電気マットには必ずタイマーを設定し、退室時に電気マットと冷暖房の電源を切ってください。', '使用电热垫时请设置定时。退房前请关闭电热垫和冷暖设备。', '使用電熱墊時請設定定時。退房前請關閉電熱墊和冷暖設備。']],
    ],
  },
  {
    id:'projector', area:'room',
    visuals:[
      official('maxell','Maxell MP-JU4001',['전원 버튼과 본체 상태등','Remote power button and projector status light','電源ボタンと本体のランプ','遥控器电源键与机身状态灯','遙控器電源鍵與機身狀態燈'])
    ],
    title:['4층 빔프로젝터','4F projector','4階のプロジェクター','4 楼投影仪','4 樓投影機'],
    model:'Maxell MP-JU4001',
    photo:{ id:'guide-abode-projector-room', marks:[[80,17]], caption:['4층 실제 사진 · 거실 천장에 설치된 프로젝터','Fourth floor · Projector mounted on the lounge ceiling','4階の実物写真・リビング天井のプロジェクター','4 楼实拍 · 客厅天花板上的投影仪','4 樓實拍 · 客廳天花板上的投影機'] },
    controls:[
      ['⏻ · 3 SEC', ['프로젝터 리모컨의 빨간 전원 버튼을 3초간 누르세요.', 'Hold the red power button on the projector remote for three seconds.', 'プロジェクターのリモコンの赤い電源ボタンを3秒間長押しします。', '长按投影仪遥控器的红色电源键 3 秒。', '長按投影機遙控器的紅色電源鍵 3 秒。']],
      ['STATUS · GREEN', ['천장 본체의 상태등이 초록색으로 켜질 때까지 기다리세요.', 'Wait for the status light on the ceiling unit to turn solid green.', '天井の本体のランプが緑色に点灯するまで待ちます。', '等待天花板上主机的状态灯变为常亮绿色。', '等待天花板上主機的狀態燈變為恆亮綠色。']],
      ['TV ⏻', ['초록색 표시등이 켜지면 별도의 TV 리모컨에서 전원을 누르세요. 화면이 나오지 않으면 호스트에게 문의하세요.', 'Once the light is green, press power on the separate TV remote. Message your host if no picture appears.', '緑色に点灯したら、別のテレビ用リモコンの電源を押します。映らない場合はホストへご連絡ください。', '绿灯亮起后，按另一支电视遥控器的电源键。没有画面时请联系房东。', '綠燈亮起後，按另一支電視遙控器的電源鍵。沒有畫面時請聯絡房東。']],
    ],
  },
  {
    id:'speaker', area:'room',
    visuals:[
      guide('speaker',['스피커 전원 켜기 → 휴대전화 블루투스 연결','Turn the speaker on → Pair on your phone','電源を入れる → 携帯電話でペアリング','开启音箱 → 在手机上配对','開啟喇叭 → 在手機上配對']),
      guide('speaker-volume',['밤 9시 이후에는 음량을 낮춰 주세요.','Keep the volume low after 9 PM.','21時以降は音量を控えめにしてください。','晚上 9 点后请调低音量。','晚上 9 點後請調低音量。'])
    ],
    title:['블루투스 스피커','Bluetooth speaker','Bluetoothスピーカー','蓝牙音箱','藍牙喇叭'],
    model:'Britz BZ-HMR',
    controls:[
      [power, ['객실 스피커의 전원을 켜고 휴대전화의 블루투스 설정을 여세요.', 'Turn on the room speaker and open Bluetooth settings on your phone.', '客室のスピーカーの電源を入れ、携帯電話のBluetooth設定を開きます。', '打开客房音箱，再打开手机的蓝牙设置。', '開啟客房喇叭，再開啟手機的藍牙設定。']],
      ['BLUETOOTH', ['기기 목록에서 스피커를 선택하고 연결되면 음악을 재생하세요. 밤 9시 이후에는 음량을 낮춰 주세요.', 'Select the speaker in the device list, then play audio after it connects. Keep the volume low after 9 PM.', '機器一覧でスピーカーを選び、接続後に再生します。21時以降は音量を控えめにしてください。', '从设备列表选择音箱，连接后再播放。21:00 以后请调低音量。', '從裝置列表選擇喇叭，連線後再播放。21:00 以後請調低音量。']],
    ],
  },
  {
    id:'cooktop', area:'kitchen',
    visuals:[
      official('induction','Haatz IH-232S',['인덕션 전원과 화구별 + / −','Power and + / − for each cooking zone','電源と各加熱部の + / −','电源与各炉区的 + / −','電源與各爐區的 + / −'])
    ],
    title:['인덕션과 주방 후드','Induction cooktop and range hood','IH調理器とレンジフード','电磁炉与抽油烟机','電磁爐與抽油煙機'],
    model:'Haatz IH-232S · SIH-30S',
    photo:{ id:'guide-laundry', marks:[[32,56],[29,27]], caption:['301호 실제 사진 · 싱크대 오른쪽 검은 상판이 인덕션이고, 위의 스테인리스 기기가 후드입니다.','Room 301 · The black cooktop is to the right of the sink, with the stainless-steel hood above.','301号室の実物写真・流しの右の黒い面がIH、上のステンレス製の機器がフードです。','301 号房实拍 · 水槽右边的黑色台面是电磁炉，上方为不锈钢油烟机。','301 號房實拍 · 水槽右側的黑色檯面是電磁爐，上方為不鏽鋼抽油煙機。'] },
    controls:[
      ['FAN', ['조리하기 전에 상판 위 주방 후드를 켜세요. 인덕션용 냄비나 팬을 화구 가운데에 놓으세요.', 'Turn on the hood above the cooktop before cooking. Centre an induction-compatible pan on the cooking zone.', '調理前にフードを回し、IH対応の鍋を加熱部の中央に置きます。', '先开启上方的抽油烟机，再把电磁炉适用的锅放在炉区中央。', '先開啟上方的抽油煙機，再把電磁爐適用的鍋放在爐區中央。']],
      ['⏻ → + / −', ['전원 버튼을 약 1초간 누른 뒤 사용할 화구의 Induction + / −로 화력을 조절하세요.', 'Hold power for about a second. Use the Induction + / − controls for the zone you are using.', '電源を約1秒押し、使う加熱部のInduction + / −で火力を調節します。', '长按电源键约 1 秒，再用对应炉区的 Induction + / − 调节火力。', '長按電源鍵約 1 秒，再用對應爐區的 Induction + / − 調整火力。']],
      ['H', ['조리를 마치면 전원을 끄세요. H가 표시되면 상판이 아직 뜨거우니 손대지 마세요.', 'Switch off after cooking. The H indicator means the glass is still hot. Keep your hands off it.', '調理後は電源を切ります。Hの表示中は天板が熱いため触れないでください。', '烹饪后请关闭电源。显示 H 表示台面仍热，请勿触摸。', '烹調後請關閉電源。顯示 H 代表檯面仍熱，請勿觸摸。']],
    ],
  },
  {
    id:'purifier-3f', area:'kitchen',
    visuals:[
      guide('purifier-3f',['물 온도 선택 → 컵을 놓고 취수','Choose water temperature → Place a cup and dispense','水温を選択 → コップを置いて注水','选择水温 → 放杯取水','選擇水溫 → 放杯取水']),
      official('chungho','Chungho WP-30C9460BN',['앞면 취수 버튼과 상단 조작부','Front dispense button and upper controls','前面の注水ボタンと上部操作パネル','前面出水按钮与顶部面板','前面出水按鈕與頂部面板'])
    ],
    title:['3층 냉온정수기','3F hot and cold water dispenser','3階の温冷浄水器','3 楼冷热饮水机','3 樓冷熱飲水機'],
    model:'Chungho WP-30C9460BN',
    controls:[
      ['냉수 / 정수 / 온수', ['컵을 출수구 아래에 놓고 냉수, 정수 또는 온수를 선택하세요. 정수는 실온 물입니다.', 'Place a cup below the spout. Choose 냉수 (cold), 정수 (room temperature) or 온수 (hot).', '注ぎ口の下にコップを置き、「냉수」冷水、「정수」常温水、「온수」温水を選びます。', '将杯子放在出水口下方，选择「냉수」冷水、「정수」常温水或「온수」热水。', '將杯子放在出水口下方，選擇「냉수」冷水、「정수」常溫水或「온수」熱水。']],
      ['취수 / DISPENSE', ['앞면의 취수 버튼을 눌러 물을 받으세요. 온수 선택 시 버튼이 빨간색으로 표시되니 화상에 주의하세요.', 'Touch 취수 on the front to dispense. The button turns red when hot water is selected. Take care to avoid burns.', '前面の「취수」を押して注ぎます。温水を選ぶとボタンが赤く光ります。やけどにご注意ください。', '按正面的「취수」出水。选择热水时按钮会变红，请小心烫伤。', '按正面的「취수」出水。選擇熱水時按鈕會變紅，請小心燙傷。']],
    ],
  },
  {
    id:'purifier-4f', area:'kitchen',
    visuals:[
      guide('purifier-4f',['정수 전용 수전의 손잡이를 돌려 물을 받으세요.','Turn the handle on the dedicated filtered-water tap.','浄水専用の蛇口のハンドルを回します。','转动净水专用龙头的手柄取水。','轉動淨水專用龍頭的把手取水。']),
      official('cuckoo','Cuckoo CP-AD011UGW',['수전 손잡이를 여는 방향','Which way to open the tap handle','蛇口のハンドルを開く方向','打开龙头手柄的方向','打開龍頭把手的方向'])
    ],
    title:['4층 직수 정수기','4F filtered-water tap','4階の浄水専用の蛇口','4 楼净水龙头','4 樓淨水龍頭'],
    model:'Cuckoo CP-AD011UGW',
    controls:[
      ['TAP', ['싱크대의 정수 전용 수전에 컵을 대고 손잡이를 돌리세요. 이 제품은 가열 기능이 없는 직수형입니다.', 'Place a cup under the dedicated filtered-water tap and turn its handle. This unit does not heat the water.', '浄水専用の蛇口にコップを置き、ハンドルを回します。この機種に加熱機能はありません。', '将杯子放在净水专用龙头下并转动手柄。此机型不加热。', '將杯子放在淨水專用龍頭下並轉動把手。此機型無加熱功能。']],
      ['OFF', ['물을 받은 뒤 수전을 잠가 주세요. 출수할 때 잠깐 생기는 작은 기포는 정상입니다.', 'Close the tap when finished. Small bubbles that appear briefly while filling are normal here.', '注ぎ終わったら蛇口を閉めてください。注いだ直後の小さな気泡は正常です。', '取水后关闭龙头。出水时短暂出现小气泡属于正常现象。', '取水後關閉龍頭。出水時短暫出現小氣泡屬正常現象。']],
    ],
  },
  {
    id:'microwave', area:'kitchen',
    visuals:[
      guide('microwave',['전자레인지용 용기 → 시간 버튼과 시작 버튼','Microwave-safe container → Time controls and Start','対応容器 → 時間調節とスタート','微波炉适用容器 → 时间键与启动键','微波爐適用容器 → 時間鍵與啟動鍵'])
    ],
    title:['전자레인지','Microwave','電子レンジ','微波炉','微波爐'],
    model:'Cuchen CMW-VN250W',
    photo:{ id:'guide-laundry', marks:[[77,55]], caption:['301호 실제 사진 · 조리대 오른쪽의 흰색 전자레인지','Room 301 · White microwave on the right side of the counter','301号室の実物写真・調理台右側の白い電子レンジ','301 号房实拍 · 台面右侧的白色微波炉','301 號房實拍 · 檯面右側的白色微波爐'] },
    controls:[
      ['MICROWAVE SAFE', ['전자레인지용 용기에 음식만 넣으세요. 금속, 포일, 밀폐 용기는 넣지 마세요.', 'Use a microwave-safe container. Remove metal and foil, and open any sealed lid before heating.', '電子レンジ対応容器を使用し、金属やアルミホイル、密閉容器は入れないでください。', '使用微波炉适用容器。勿放入金属、铝箔或密封容器。', '使用微波爐適用容器。請勿放入金屬、鋁箔或密封容器。']],
      ['TIME → START', ['문을 닫고 데울 시간을 짧게 설정한 뒤 시작하세요. 꺼낼 때는 용기와 증기에 주의하세요.', 'Close the door, set a short heating time and start. Watch for hot containers and steam when removing food.', 'ドアを閉め、短めの加熱時間を設定して開始します。取り出す際は容器の熱さや蒸気に注意してください。', '关门后先设置较短时间再启动。取出时小心热容器和蒸气。', '關門後先設定較短時間再啟動。取出時小心熱容器和蒸氣。']],
    ],
  },
  {
    id:'kettle', area:'kitchen',
    visuals:[
      guide('kettle-fill',['물을 MAX 선 아래까지 채우세요.','Fill with water below the MAX line.','MAX線を超えないよう水を入れます。','加水至 MAX 线以下。','加水至 MAX 線以下。']),
      guide('kettle-switch',['받침에 올리고 전원을 켜세요.','Set the kettle on its base and switch it on.','台に戻してスイッチを入れます。','将水壶放回底座再开机。','將水壺放回底座再開機。'])
    ],
    title:['전기포트','Electric kettle','電気ケトル','电热水壶','電熱水壺'],
    model:'OLLY OLK05B / OLK05W',
    controls:[
      ['WATER · MAX', ['포트를 받침에서 들어 물만 넣고 MAX 표시를 넘기지 마세요. 뚜껑을 닫은 뒤 받침에 올리세요.', 'Lift the kettle off the base and fill with water only, below MAX. Close the lid and set it back on the base.', 'ケトルを台から外し、MAXを超えないよう水だけを入れます。ふたを閉めて台に戻します。', '把水壶从底座取下，只加水且不得超过 MAX 线。合盖后放回底座。', '將水壺從底座取下，只加水且勿超過 MAX 線。蓋好後放回底座。']],
      [power, ['전원 스위치를 켜세요. 끓인 뒤에는 손잡이로 들고, 주둥이의 증기에 주의하세요.', 'Switch the kettle on. When pouring, use the handle and keep clear of steam from the spout.', 'スイッチを入れます。注ぐ際は持ち手を使い、注ぎ口の蒸気に注意してください。', '打开电源开关。倒水时握住把手，小心壶嘴蒸气。', '開啟電源開關。倒水時握住把手，小心壺嘴蒸氣。']],
    ],
  },
  {
    id:'towels', area:'supplies',
    visuals:[
      guide('guest-box',['엘리베이터로 2층에 올라가 복도의 게스트 박스를 이용하세요.','Take the elevator to floor 2 and find the guest box in the corridor.','エレベーターで2階へ。廊下にゲストボックスがあります。','坐电梯到二楼，在走廊找到客用备品箱。','搭電梯到二樓，在走廊找到旅客備品箱。'])
    ],
    title:['수건과 2층 게스트 박스','Towels and the floor 2 guest box','タオルと2階のゲストボックス','毛巾与 2 楼客用备品箱','毛巾與 2 樓旅客備品箱'],
    photo:{ id:'hall', marks:[[68,76]], caption:['건물 1층 엘리베이터 · 2층 복도로 올라가세요.','Ground-floor elevator · Go up to the second-floor corridor.','建物1階のエレベーター・2階の廊下へ。','一楼电梯 · 请上到二楼走廊。','一樓電梯 · 請上到二樓走廊。'] },
    text:['한국식 수건을 제공합니다. 더 필요하면 <strong>2층 게스트 박스</strong>를 이용해 주세요. 대형 바디타월은 제공하지 않습니다.','Korean-size towels are provided. Find extras in the <strong>floor 2 guest box</strong>. Large bath towels are not provided.','韓国サイズのタオルを備えています。追加は<strong>2階のゲストボックス</strong>をご利用ください。大判バスタオルはありません。','提供韩式尺寸毛巾，额外毛巾在<strong>2 楼宾客备品箱</strong>。不提供大浴巾。','提供韓式尺寸毛巾，額外毛巾在<strong>2 樓旅客備品箱</strong>。無提供大浴巾。'],
  },
];

export const laundryItems = [
  {
    id:'washer-2f', title:['2층 복도 세탁기','2F corridor washer','2階廊下の洗濯機','2 楼走廊洗衣机','2 樓走廊洗衣機'],
    visuals:[
      official('samsung-washer','Samsung WF40F09M0Y',['전원 → 표준 코스 → 시작/일시정지','Power → Normal cycle → Start/Pause','電源 → 標準 → スタート／一時停止','电源 → 标准程序 → 启动／暂停','電源 → 標準行程 → 啟動／暫停']),
      official('samsung-detergent','Samsung WF40F09M0Y',['세탁용 세제를 넣는 서랍','Where to add laundry detergent','洗剤を入れる引き出し','放洗涤剂的抽屉','放洗劑的抽屜'])
    ],
    model:'Samsung WF40F09M0Y · 9 kg',
    controls:[
      [power, ['세탁물을 넣고 문을 닫으세요. 세제는 기기 옆에 있으며 세탁용 칸에 넣습니다. 전원을 켜세요.', 'Load the drum and close the door. Add detergent from beside the machines to the main wash compartment, then switch on.', '洗濯物を入れてドアを閉め、機器横の洗剤を洗濯用の投入口に入れ、電源を入れます。', '放入衣物并关门。将机器旁的洗涤剂加入主洗槽后开机。', '放入衣物並關門。將機器旁的洗衣劑加入主洗槽後開機。']],
      ['표준 / NORMAL', ['일상 세탁은 다이얼을 표준에 맞추세요. 섬세한 옷은 라벨에 맞는 코스를 선택하세요.', 'Turn the dial to 표준 (Normal) for everyday loads. For delicate items, choose a cycle that matches the care label.', '普段の洗濯はダイヤルを「표준」に合わせます。デリケートな衣類は洗濯表示に合ったコースを選びます。', '日常衣物将旋钮转到「표준」标准。精细衣物请按洗标选择程序。', '日常衣物將旋鈕轉到「표준」標準。精緻衣物請依洗標選擇行程。']],
      washerStart,
    ],
    note:laundryHours,
  },
  {
    id:'dryer-2f', title:['2층 복도 건조기','2F corridor dryer','2階廊下の乾燥機','2 楼走廊烘干机','2 樓走廊烘衣機'],
    visuals:[
      official('samsung-dryer','Samsung DV90TA040KE',['코스 다이얼에서 표준건조 선택','Select 표준건조 (Normal Dry) on the dial','ダイヤルで「표준건조」標準乾燥を選びます。','用旋钮选择「표준건조」标准烘干','用旋鈕選擇「표준건조」標準烘乾']),
      guide('dryer-load',['건조 가능한 옷만 넣고 문을 닫으세요.','Load only dryer-safe items and close the door.','乾燥機対応の衣類だけを入れ、ドアを閉めます。','只放入可烘干的衣物并关门。','只放入可烘乾的衣物並關門。'])
    ],
    model:'Samsung DV90TA040KE · 9 kg',
    controls:[
      [power, ['건조 가능한 옷만 넣고 문을 닫은 뒤 전원을 켜세요.', 'Load only dryer-safe items, close the door and switch the dryer on.', '乾燥機対応の衣類だけを入れ、ドアを閉めて電源を入れます。', '只放入可烘干的衣物，关门后开机。', '只放入可烘乾的衣物，關門後開機。']],
      ['표준건조 / NORMAL DRY', ['일상 세탁물은 표준건조를 선택하세요. 시작/일시정지를 눌러 작동하고, 종료 후 옷을 꺼내세요.', 'Select 표준건조 (Normal Dry) for everyday items. Press Start/Pause and remove the load when the cycle ends.', '普段の洗濯物は「표준건조」を選び、スタート／一時停止を押します。終了後に取り出します。', '日常衣物选择「표준건조」标准烘干，按启动／暂停，结束后取出。', '日常衣物選擇「표준건조」標準烘乾，按啟動／暫停，結束後取出。']],
    ],
    note:laundryHours,
  },
  {
    id:'washer-dryer', title:['3·4층 세탁·건조 겸용','3F and 4F washer-dryer','3・4階の洗濯乾燥機','3、4 楼洗烘一体机','3、4 樓洗脫烘一體機'],
    visuals:[
      official('lg','LG FY9WTB',['코스 다이얼과 전원·시작 버튼','Cycle dial, Power and Start buttons','コースダイヤルと電源・スタートボタン','程序旋钮、电源与启动键','行程旋鈕、電源與啟動鍵'])
    ],
    model:'LG FY9WTB · Wash 9 kg / Dry 4.5 kg',
    photo:{ id:'guide-laundry', marks:[[26,70]], caption:['301호 실제 사진 · 조리대 아래의 LG 세탁·건조기','Room 301 · LG washer-dryer underneath the counter','301号室の実物写真・調理台下のLG洗濯乾燥機','301 号房实拍 · 台面下方的 LG 洗烘一体机','301 號房實拍 · 檯面下方的 LG 洗脫烘一體機'] },
    controls:[
      [power, ['세탁물을 넣고 문을 닫으세요. 세제는 객실 싱크대 하부장에 있습니다. 세탁할 때 세제를 넣은 뒤 전원을 켜세요.', 'Load the drum and close the door. Detergent is in the cabinet below the room sink. Add it for washing, then switch on.', '洗濯物を入れてドアを閉めます。洗剤は客室の流し台下の収納にあります。洗濯時は洗剤を入れて電源を入れます。', '放入衣物并关门。洗涤剂在客房水槽下方柜内。洗衣时加洗涤剂后开机。', '放入衣物並關門。洗衣劑在客房水槽下方櫃內。洗衣時加洗衣劑後開機。']],
      ['표준 / 건조', ['세탁은 표준 코스를 선택하세요. 건조할 때는 옷의 건조 가능 여부를 확인하고 건조 코스를 선택하세요. 건조 한도는 4.5kg입니다.', 'Choose 표준 (Normal) for washing. For drying, check the clothing labels and choose a drying cycle. The drying limit is 4.5 kg.', '洗濯は「표준」を選びます。乾燥は衣類の表示を確認して乾燥コースを選びます。乾燥容量は4.5kgです。', '洗衣选择「표준」标准。烘干前确认洗标，再选烘干程序。烘干上限为 4.5 kg。', '洗衣選擇「표준」標準。烘乾前確認洗標，再選烘乾行程。烘乾上限為 4.5 kg。']],
      washerStart,
    ],
    note:laundryHours,
  },
];
