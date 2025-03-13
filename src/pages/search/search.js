import '/src/pages/search/_search.scss';
import { Header } from '/src/components/header/header.js';
import { getNode } from 'kind-tiger';
import '/src/pages/search/modules/index';


document.addEventListener('DOMContentLoaded', function () {
  const searchInput = getNode('.search-input');

  // ✅ 초기 로드 시 placeholder 설정
  function updatePlaceholder() {
    if (window.innerWidth < 768) {
      searchInput.placeholder = '검색';
    } else {
      searchInput.placeholder =
        'TV프로그램, 영화 제목 및 출연진으로 검색해보세요.';
    }
  }

  updatePlaceholder(); // ✅ 초기 실행
  window.addEventListener('resize', updatePlaceholder); // ✅ resize 이벤트에서도 적용
});
