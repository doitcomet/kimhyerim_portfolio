# HYUNDAI AutoEver · Kim Hyerim Portfolio

macOS Finder 폴더 UI 기반 Cloud Infrastructure Engineer 포트폴리오입니다.

## 실행
```bash
npm install
npm run dev
```

## 이미지 위치
- 번호판: `public/assets/boards/board1.png`
- 자동차: `public/assets/cars/*.png`
- 기술 스택: `public/assets/stacks/*.png`
- 프로젝트 아키텍처: `public/assets/architectures/*`

## 프로젝트 수정
`src/data/projects.js`에서 제목, 설명, 스택, 아키텍처 경로, 상세 내용을 수정합니다.

각 파란 폴더를 클릭하면 `/projects/<slug>` 상세 페이지로 이동합니다. 상세 페이지는 macOS 창 형태이며 아키텍처 이미지, 배경, 수행 내용, 성과 영역이 포함되어 있습니다.
