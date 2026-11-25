# STAY ABODE · 스테이 어보드

서울 서교동의 스테이 어보드를 위한 모바일 우선 홈페이지와 투숙 가이드입니다. 한국어, 영어, 일본어, 중국어 간체·번체를 지원합니다.

```powershell
npm test
npm start
```

로컬 주소는 `http://127.0.0.1:8797/`입니다. 설치해야 할 패키지나 API 키가 없습니다. `npm run build`는 정적 사이트를 `dist/`에 생성합니다.

## 관리

- `assets/content.js`에 객실, 사진, 교통, 주변 추천을 관리합니다.
- `assets/operations.js`에 체크인, 체크아웃, 짐 보관, Wi-Fi, 가전, 세탁, 분리배출, 이용 수칙, 주차를 관리합니다.
- `assets/guest-tools.js`에 숙소 도움말 질문과 가전 하위 메뉴를 관리합니다. 도움말은 공개 운영 안내를 브라우저에서 검색합니다.
- `assets/i18n.js`에 화면 공통 문구와 언어를 관리합니다.
- `assets/styles.css`에 승인받은 웜 차콜 `#30302E`, 내추럴 오크 `#BB926B`, 크림 베이지 `#F8F5EF`가 지정되어 있습니다.

### 주변 사진

사진 출처와 이용 조건은 `assets/content.js`의 `neighborhoodPhotos`, 홈 하단의 주변 사진 출처, 각 장소 상세 사진 아래에서 확인할 수 있습니다. 저장본은 모바일 표시용 WebP입니다.

- 망원시장, 망리단길, 망원한강공원은 서울관광재단의 [공공누리 제1유형](https://www.kogl.or.kr/info/licenseType1.do) 자료입니다.
- 경의선숲길은 한국관광공사 이범수의 [공공누리 제1유형 사진](https://commons.wikimedia.org/wiki/File:Yeonnam-dong_Gyeongui_Line_Forest_Park_(1).jpg)입니다.
- 문화비축기지는 Mvcervi의 [CC BY-SA 4.0 사진](https://commons.wikimedia.org/wiki/File:Oil-tank-culture-park.jpg)입니다. 보관본은 크기를 줄여 WebP로 변환했고 화면에 맞춰 일부가 잘려 보입니다. 보관본에도 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)이 적용됩니다.
- 로고와 사진 23장은 숙소에서 제공한 Drive 자료를 사용했습니다. 사진은 WebP로 변환했습니다.
- 운영 정보는 숙소 제공 문서를 기준으로 합니다. 12인·14인 패밀리 객실은 운영 자료와 Booking.com의 이름이 달라 정원과 침대 구성으로 표시합니다.
- 출입 정보와 Wi-Fi 비밀번호는 객실 안내나 예약 메시지로 확인합니다.
- 예약은 공개 상태가 확인된 [Booking.com](https://www.booking.com/hotel/kr/stay-abode.ko.html)으로 연결합니다.
- [GitHub](https://github.com/checkindirector/mobileguide_abode) · [운영 주소](https://abode-guide.vercel.app/)
