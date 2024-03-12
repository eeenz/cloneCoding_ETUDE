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
/* ---------------------- + - 증감 증가 버튼 -------------------------- */ 

const basicPrice = document.querySelector('.price')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const numCount = document.querySelector('#num_count')
const allPrice = document.querySelector('.all_price_result')
const totalPrice = document.querySelector('.total_price')
let total
let num = 0;
let price = 11000;
let delTotal;

// 증가
plus.addEventListener('click',()=>{
    if(num < 8){
        num++ ;
        numCount.value = num
        total =  num*price
        delTotal = total + 2500
        if (total >= 40000) {
            totalPrice.innerHTML = `${total.toLocaleString('ko-kr')}<p>won</p>`
            allPrice.innerHTML = '+ 배송비 0원'
        }
        if (total <= 40000) {
            totalPrice.innerHTML = `${delTotal.toLocaleString('ko-kr')}<p>won</p>`
            allPrice.innerHTML = '+ 배송비 2,500원'
        }
    }else{
        alert('최대 구매 수량입니다.')
    }
})
// 감소
minus.addEventListener('click',()=>{
    if(1< num){
        num--;
        numCount.value = num
        total =  num*price
        delTotal = total + 2500
        if (total >= 40000) {
            totalPrice.innerHTML = `${total.toLocaleString('ko-kr')}<p>won</p>`
            allPrice.innerHTML = '+ 배송비 0원'
        }
        if (total <= 40000) {
            totalPrice.innerHTML = `${delTotal.toLocaleString('ko-kr')}<p>won</p>`
            allPrice.innerHTML = '+ 배송비 2,500원'
        }
    }else if(num == 1){
        totalPrice.innerHTML = `11,800<p>won</p>`;
        numCount.value = `1`;
    }
})

// 삭제버튼 클릭시 리스트 삭제
const noneCart = document.querySelector('.none_cart')
const productArea = document.querySelector('.product_area')
const removeBtn = document.querySelector('#remove')
const viewBtn = document.querySelector('.comment > a')

noneCart.classList.add('display_none')

removeBtn.addEventListener('click',()=>{
    noneCart.classList.remove('display_none')
    // noneCart.style.display = 'block'
    productArea.classList.add('display_none')
    viewBtn.addEventListener('click',()=>{
        window.location = './cate_new.html'
    })
})
/* ---------------------- 구분선 -------------------------- */  