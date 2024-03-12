/* ---------------------- 장바구니 담기 버튼 클릭시 팝업 -------------------------- */  
const btn_cart = document.querySelector('.btn_cart')
const btn_buy = document.querySelector('.btn_buy')

btn_cart.addEventListener('click',function(){
    const pop_goto_cart = confirm(`장바구니에 담겼습니다.\n장바구니로 이동하시겠습니까?`);
    if(pop_goto_cart){
        location.href = './cart.html';
    }
})
btn_buy.addEventListener('click',function(){
    location.href = './cart.html';
})
/* ---------------------- 썸네일 -------------------------- */  

// 작은 썸네일 클릭했을 때 큰썸네일 해당 이미지로 보여주기
// const small_thumb = document.querySelectorAll('.small_thumb')
const big_thumb = document.querySelectorAll('.big_thumb')

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