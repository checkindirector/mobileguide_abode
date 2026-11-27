// Positions are percentages of each cropped manufacturer diagram. Badge offsets
// keep the labels beside the controls instead of covering the markings on them.
export const panelLabels = {
  'device-official-rinnai-rc610': [
    ['전원', 'Power', [68.7, 32.8, 16, -12]],
    ['난방', 'Heating', [33.1, 69.5, -15, -16]],
    ['난방온도 + / −', 'Heating temperature', [44.5, 63.2, 12, -15]],
    ['온수', 'Hot water', [69.2, 69.5, 16, -13]],
  ],
  'device-official-rinnai-r324': [
    ['전원', 'Power', [58.2, 34, -10, -17]],
    ['난방', 'Heating dial', [42.7, 68.9, -3, 19]],
    ['온수', 'Hot water', [58.3, 69.8, 17, 12]],
  ],
  'device-official-maxell': [
    ['전원 ⏻', 'Standby / On', [56.6, 81.5, 20, -6]],
    ['전원/상태 1', 'Power / Status 1 light', [36, 42.8, -18, 9]],
  ],
  'device-official-induction': [
    ['전원 ⏻', 'Power', [74.1, 63.2, 18, -10]],
    ['인덕션 −', 'Lower heat', [59, 63.2, -10, -15]],
    ['인덕션 +', 'Raise heat', [65.9, 63.2, 1, -16]],
  ],
};

// Text alternatives for diagrams that carry their labels in the image.
export const directPanelLabels = {
  'device-official-chungho': '온수 (Hot water), 냉수 (Cold water), 정수 (Room-temp. water), 취수 (Dispense)',
  'device-official-cuckoo': '열림 (Turn to open)',
  'device-official-samsung-washer': '전원 (Power), 표준세탁 (Normal wash), 동작/일시정지 (Start / Pause). 길게 눌러 시작 (Hold to start)',
  'device-official-samsung-detergent': '세제함 (Pull out drawer), 세제칸 (Add detergent here)',
  'device-official-samsung-dryer': '표준건조 (Normal dry)',
  'device-official-samsung-dryer-controls': '전원 (Power), 동작/일시정지 (Start / Pause)',
  'device-official-lg': '전원 (Power), 표준 (Normal wash), 표준건조 (Normal dry), 시작/일시정지 (Start / Pause). 1초간 눌러 시작 (Hold 1 sec to start)',
};
