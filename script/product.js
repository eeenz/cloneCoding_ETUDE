/* ---------------------- sns 아이콘 클릭시 팝업 -------------------------- */  

const sns_icon = document.querySelectorAll('.sns_icon > a')

sns_icon[1].addEventListener('click',()=>{
    alert(`URL이 복사 되었습니다.\n\n개인이 모방하여 작업한 클론코딩 사이트입니다.\n실제 링크로 이동은 어려운 점 양해 부탁드립니다.🙏`)
})

// sns 전체 alert하려 했으나 아래 개별로 링크넣고, 복사 아이콘만 alert으로 처리
/* const sns_icon = document.querySelectorAll('.sns_icon')

sns_icon.forEach((e)=>{
    e.addEventListener('click',()=>{
        alert(`개인이 모방하여 작업한 클론코딩 사이트입니다. \n 실제 링크로 이동이 어려운 점 양해 부탁드립니다.🙏`)
    })
})
 */

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