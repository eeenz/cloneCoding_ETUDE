/* header - 검색창 */
// 검색버튼 눌렀을 때 header nav 영역은 사라지고 검색창은 오픈, X 버튼 클릭시 닫히기
// 1.검색 영역 숨기기
// 2.검색버튼 클릭시 검색창은 나타나고 header영역은 사라지기
// 3.x버튼 클릭시 검색창 숨기고 header 생기기
const header_left = document.querySelector('header > .left')
const header_right = document.querySelector('header > .right')
const search_btn = header_right.querySelector('.btn_search')
const search_area = document.querySelector('.search_bg')
const close_btn = search_area.querySelector('.search_bg .btn_x')
console.log(header_left,header_right,search_btn,search_area,close_btn);

search_area.style = 'display:none';

search_btn.addEventListener('click',function(){
    search_area.style = 'display:block';
    header_left.style = 'display:none';
    header_right.style = 'display:none';
})

close_btn.addEventListener('click',function(){
    search_area.style = 'display:none';
    header_left.style = 'display:flex';
    header_right.style = 'display:flex';
})