/* ---------------------- 구분선 -------------------------- */ 

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
console.log(header_left,header_right,'---',search_btn,search_area,close_btn);

// 검색버튼 사라지게하기 
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

/* ---------------------- 구분선 -------------------------- */  

/* header - 햄버거영역 토글 */ 
// 햄버거 버튼 클릭 했을 때 영역 나타나기
// 다시 누르면 사라지기
const burger_btn = header_right.querySelector('.btn_barmenu')
const burger_area = document.querySelector('.side_category')

burger_area.classList.add('display_none')

burger_btn.addEventListener('click',function(){
    burger_area.classList.toggle('display_none');    
})

/* ---------------------- 구분선 -------------------------- */      

// 링크 설정되지 않은 a 태그 클릭시 상단으로 올라가는 것 막기
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        // 링크의 href 속성을 가져옴
        const href = link.getAttribute('href');
        
        // href가 #인 경우에만 preventDefault() 호출
        if (href === '#') {
            event.preventDefault();
        }
    });
});
/* ---------------------- 구분선 -------------------------- */  
