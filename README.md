# EXTAY ABODE · 익스테이 어보드

서울 서교동의 익스테이 어보드를 위한 모바일 우선 홈페이지와 투숙 가이드입니다. 한국어, 영어, 일본어, 중국어 간체·번체를 지원합니다.

```powershell
npm test
npm start
```

로컬 주소는 `http://127.0.0.1:8797/`입니다. 설치해야 할 패키지나 API 키가 없습니다. `npm run build`는 정적 사이트를 `dist/`에 생성합니다.

## 관리

- `assets/content.js`에 객실, 사진, 투숙 안내, 주변 추천을 관리합니다.
- `assets/i18n.js`에 화면 공통 문구와 언어를 관리합니다.
- `assets/styles.css`에 승인받은 웜 차콜 `#30302E`, 내추럴 오크 `#BB926B`, 크림 베이지 `#F8F5EF`가 지정되어 있습니다.
- 예약은 [Stay ABODE Booking.com](https://www.booking.com/hotel/kr/stay-abode.ko.html)으로 연결합니다. 객실 유형·시간·시설·수칙과 갤러리 14장은 이 공개 숙소 페이지에서 확인했습니다. 사진은 WebP로 변환했습니다.
- 입실 방법과 Wi-Fi 연결 정보는 예약 안내 또는 현장 안내에서 확인하도록 연결했습니다.
- [GitHub](https://github.com/checkindirector/mobileguide_abode) · [운영 주소](https://abode-guide.vercel.app/)
