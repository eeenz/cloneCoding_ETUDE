/* ---------------------- 장바구니 담기 버튼 클릭시 팝업 -------------------------- */  
const btnCart = document.querySelector('.p_btn_cart')
const btnBuy = document.querySelector('.p_btn_buy')

btnCart.addEventListener('click',function(){
    const pop_goto_cart = confirm(`장바구니에 담겼습니다.\n장바구니로 이동하시겠습니까?`);
    if(pop_goto_cart){
        location.href = './cart.html';
    }
})
btnBuy.addEventListener('click',function(){
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

/* ---------------------- 옵션 증감 증가 -------------------------- */    

/* const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const numCount = document.querySelector('.num_count')
const text_area = document.querySelector('.num_box > span')
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
        text_area.innerHTML = `<em>${total.toLocaleString('ko-kr')}</em>원`
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
        text_area.innerHTML = `<em>${total.toLocaleString('ko-kr')}</em>원`
    }else if(num == 1){
        text_area.innerHTML = `<em>11,000</em>원`;
        numCount.value = `1`;
    }
}) */

/* ---------------------- 옵션 클릭 시 리스트 출력 -------------------------- */  

const clear = document.querySelector('.clear a')
const listClear = document.querySelector('.num_box > a')
const listClear_2 = document.querySelector('.itemBtnWrap > a')
const optionName = document.querySelectorAll('.option_list a')
const optionBox = document.querySelector('.num_result')
const optionList = document.querySelector('.opt_list')
const optionTitle = document.querySelector('.opt_list > p');
const opt_total = document.querySelector('.opt_total')
const allBoxPrice = document.querySelectorAll('.num_box > span > em')

let listResult1 = false;
let listResult2 = false;
let listResult3 = false;
let listResult4 = false;
let listResult5 = false;
let listResult6 = false;

clear.classList.add('display_none')
optionBox.classList.add('display_none')

const optionCreate = () => {

    let cre_delTotal;
    
    // 개별로 작성 옵션 1
    optionName[0].addEventListener('click',()=>{

        if (listResult1 == false) {

            // 초기값 display_none 제거
            clear.classList.remove('display_none')
            optionBox.classList.remove('display_none')

            // 옵션 클릭 했을 때 해당 상품 리스트 쌓이게 하기 createElement 생성
            let itemWrap = document.createElement('div') //div 생성
            let itemTitle = document.createElement('p') //p 옵션명 생성
            let itemBtnWrap = document.createElement('div') //인풋 div 생성
            let btnMinus = document.createElement('button') //-버튼 생성
            let btnPlus = document.createElement('button') //+버튼 생성
            let inputCount = document.createElement('input') //인풋 생성
            let itemPrice = document.createElement('span') //가격넣을 span 생성
            let itemBtnClear = document.createElement('a') //x버튼 넣을 a생성

            // 클릭대상 옵션리스트 클래스 추가
            itemWrap.classList.add('opt_list'); 
            itemTitle.classList.add('opt_title'); 
            itemBtnWrap.classList.add('num_box'); 
            btnMinus.classList.add('minus');
            btnPlus.classList.add('plus');
            inputCount.classList.add('num_count');
            
            // 클릭대상 옵션리스트 쌓기
            optionBox.appendChild(itemWrap)
            itemWrap.appendChild(itemTitle)
            itemWrap.appendChild(itemBtnWrap)
            itemTitle.innerHTML = optionName[0].children[0].alt;
            itemBtnWrap.appendChild(btnMinus)
            btnMinus.innerHTML = `<img src="./images/icon/delete.png" alt="">`;
            itemBtnWrap.appendChild(inputCount)
            inputCount.value = 1;
            itemBtnWrap.appendChild(btnPlus)
            btnPlus.innerHTML = `<img src="./images/icon/add.png" alt="">`;
            itemBtnWrap.appendChild(itemPrice)
            itemPrice.innerHTML = `<em>11,000</em>원`;
            itemBtnWrap.appendChild(itemBtnClear)
            itemBtnClear.innerHTML = `<img src="./images/icon/ico-clear.svg" alt="">`;

            // createElement 버튼 재설정
            let cre_total
            let cre_num = 0;
            let cre_price = 11000;
            
            // 증가
            btnPlus.addEventListener('click',()=>{
                if(cre_num < 8){
                    cre_num++ ;
                    inputCount.value = cre_num
                    cre_total =  cre_num*cre_price
                    itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
                }else{
                    alert('최대 구매 수량입니다.')
                }
            })
            // 감소
            btnMinus.addEventListener('click',()=>{
                if(1< cre_num){
                    cre_num--;
                    inputCount.value = cre_num
                    cre_total =  cre_num*cre_price
                    itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
                }else if(cre_num == 1){
                    itemPrice.innerHTML = `<em>11,000</em>원`;
                    inputCount.value = `1`;
                }
            })

            // 큰 clear버튼 클릭했을 때
            clear.addEventListener('click',()=>{
                clear.classList.add('display_none')
                window.location.reload(); //새로고침
                // optionBox.remove(itemWrap)
            })
            
            // 옵션리스트 개별 clear버튼 클릭했을 때
            itemBtnClear.addEventListener('click',function () {
                listResult1 = !listResult1;
                this.parentElement.parentElement.remove();
            })
            listResult1 = !listResult1;
        } 
    })

    // 개별로 작성 옵션 2
    optionName[1].addEventListener('click',()=>{
        
        if (listResult2 == false) {

            // 초기값 display_none 제거
            clear.classList.remove('display_none')
            optionBox.classList.remove('display_none')

            // 옵션 클릭 했을 때 해당 상품 리스트 쌓이게 하기 createElement 생성
            let itemWrap = document.createElement('div') //div 생성
            let itemTitle = document.createElement('p') //p 옵션명 생성
            let itemBtnWrap = document.createElement('div') //인풋 div 생성
            let btnMinus = document.createElement('button') //-버튼 생성
            let btnPlus = document.createElement('button') //+버튼 생성
            let inputCount = document.createElement('input') //인풋 생성
            let itemPrice = document.createElement('span') //가격넣을 span 생성
            let itemBtnClear = document.createElement('a') //x버튼 넣을 a생성

            // 클릭대상 옵션리스트 클래스 추가
            itemWrap.classList.add('opt_list'); 
            itemTitle.classList.add('opt_title'); 
            itemBtnWrap.classList.add('num_box'); 
            btnMinus.classList.add('minus');
            btnPlus.classList.add('plus');
            inputCount.classList.add('num_count');
            
            // 클릭대상 옵션리스트 쌓기
            optionBox.appendChild(itemWrap)
            itemWrap.appendChild(itemTitle)
            itemWrap.appendChild(itemBtnWrap)
            itemTitle.innerHTML = optionName[1].children[0].alt;
            itemBtnWrap.appendChild(btnMinus)
            btnMinus.innerHTML = `<img src="./images/icon/delete.png" alt="">`;
            itemBtnWrap.appendChild(inputCount)
            inputCount.value = 1;
            itemBtnWrap.appendChild(btnPlus)
            btnPlus.innerHTML = `<img src="./images/icon/add.png" alt="">`;
            itemBtnWrap.appendChild(itemPrice)
            itemPrice.innerHTML = `<em>11,000</em>원`;
            itemBtnWrap.appendChild(itemBtnClear)
            itemBtnClear.innerHTML = `<img src="./images/icon/ico-clear.svg" alt="">`;

            // createElement 버튼 재설정
            let cre_total
            let cre_num = 0;
            let cre_price = 11000;

            // 증가
            btnPlus.addEventListener('click',()=>{
                if(cre_num < 8){
                    cre_num++ ;
                    inputCount.value = cre_num
                    cre_total =  cre_num*cre_price
                    itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
                }else{
                    alert('최대 구매 수량입니다.')
                }
            })
            // 감소
            btnMinus.addEventListener('click',()=>{
                if(1< cre_num){
                    cre_num--;
                    inputCount.value = cre_num
                    cre_total =  cre_num*cre_price
                    itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
                }else if(cre_num == 1){
                    itemPrice.innerHTML = `<em>11,000</em>원`;
                    inputCount.value = `1`;
                }
            })

            // 큰 clear버튼 클릭했을 때
            clear.addEventListener('click',()=>{
                clear.classList.add('display_none')
                window.location.reload(); //새로고침
                // optionBox.remove(itemWrap)
            })
            
            // 옵션리스트 개별 clear버튼 클릭했을 때
            itemBtnClear.addEventListener('click',function () {
                listResult2 = !listResult2;
                this.parentElement.parentElement.remove();
            })
            listResult2 = !listResult2;
        } 
    })

    // 개별로 작성 옵션 3
    optionName[2].addEventListener('click',()=>{
        
        if (listResult3 == false) {

            // 초기값 display_none 제거
            clear.classList.remove('display_none')
            optionBox.classList.remove('display_none')

            // 옵션 클릭 했을 때 해당 상품 리스트 쌓이게 하기 createElement 생성
            let itemWrap = document.createElement('div') //div 생성
            let itemTitle = document.createElement('p') //p 옵션명 생성
            let itemBtnWrap = document.createElement('div') //인풋 div 생성
            let btnMinus = document.createElement('button') //-버튼 생성
            let btnPlus = document.createElement('button') //+버튼 생성
            let inputCount = document.createElement('input') //인풋 생성
            let itemPrice = document.createElement('span') //가격넣을 span 생성
            let itemBtnClear = document.createElement('a') //x버튼 넣을 a생성

            // 클릭대상 옵션리스트 클래스 추가
            itemWrap.classList.add('opt_list'); 
            itemTitle.classList.add('opt_title'); 
            itemBtnWrap.classList.add('num_box'); 
            btnMinus.classList.add('minus');
            btnPlus.classList.add('plus');
            inputCount.classList.add('num_count');
            
            // 클릭대상 옵션리스트 쌓기
            optionBox.appendChild(itemWrap)
            itemWrap.appendChild(itemTitle)
            itemWrap.appendChild(itemBtnWrap)
            itemTitle.innerHTML = optionName[2].children[0].alt;
            itemBtnWrap.appendChild(btnMinus)
            btnMinus.innerHTML = `<img src="./images/icon/delete.png" alt="">`;
            itemBtnWrap.appendChild(inputCount)
            inputCount.value = 1;
            itemBtnWrap.appendChild(btnPlus)
            btnPlus.innerHTML = `<img src="./images/icon/add.png" alt="">`;
            itemBtnWrap.appendChild(itemPrice)
            itemPrice.innerHTML = `<em>11,000</em>원`;
            itemBtnWrap.appendChild(itemBtnClear)
            itemBtnClear.innerHTML = `<img src="./images/icon/ico-clear.svg" alt="">`;

            // createElement 버튼 재설정
            let cre_total
            let cre_num = 0;
            let cre_price = 11000;

            // 증가
            btnPlus.addEventListener('click',()=>{
                if(cre_num < 8){
                    cre_num++ ;
                    inputCount.value = cre_num
                    cre_total =  cre_num*cre_price
                    itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
                }else{
                    alert('최대 구매 수량입니다.')
                }
            })
            // 감소
            btnMinus.addEventListener('click',()=>{
                if(1< cre_num){
                    cre_num--;
                    inputCount.value = cre_num
                    cre_total =  cre_num*cre_price
                    itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
                }else if(cre_num == 1){
                    itemPrice.innerHTML = `<em>11,000</em>원`;
                    inputCount.value = `1`;
                }
            })

            // 큰 clear버튼 클릭했을 때
            clear.addEventListener('click',()=>{
                clear.classList.add('display_none')
                window.location.reload(); //새로고침
                // optionBox.remove(itemWrap)
            })
            
            // 옵션리스트 개별 clear버튼 클릭했을 때
            itemBtnClear.addEventListener('click',function () {
                listResult3 = !listResult3;
                this.parentElement.parentElement.remove();
            })
            listResult3 = !listResult3;
        } 
    })

    // 개별로 작성 옵션 4
    optionName[3].addEventListener('click',()=>{
        
        if (listResult4 == false) {

            // 초기값 display_none 제거
            clear.classList.remove('display_none')
            optionBox.classList.remove('display_none')

            // 옵션 클릭 했을 때 해당 상품 리스트 쌓이게 하기 createElement 생성
            let itemWrap = document.createElement('div') //div 생성
            let itemTitle = document.createElement('p') //p 옵션명 생성
            let itemBtnWrap = document.createElement('div') //인풋 div 생성
            let btnMinus = document.createElement('button') //-버튼 생성
            let btnPlus = document.createElement('button') //+버튼 생성
            let inputCount = document.createElement('input') //인풋 생성
            let itemPrice = document.createElement('span') //가격넣을 span 생성
            let itemBtnClear = document.createElement('a') //x버튼 넣을 a생성

            // 클릭대상 옵션리스트 클래스 추가
            itemWrap.classList.add('opt_list'); 
            itemTitle.classList.add('opt_title'); 
            itemBtnWrap.classList.add('num_box'); 
            btnMinus.classList.add('minus');
            btnPlus.classList.add('plus');
            inputCount.classList.add('num_count');
            
            // 클릭대상 옵션리스트 쌓기
            optionBox.appendChild(itemWrap)
            itemWrap.appendChild(itemTitle)
            itemWrap.appendChild(itemBtnWrap)
            itemTitle.innerHTML = optionName[3].children[0].alt;
            itemBtnWrap.appendChild(btnMinus)
            btnMinus.innerHTML = `<img src="./images/icon/delete.png" alt="">`;
            itemBtnWrap.appendChild(inputCount)
            inputCount.value = 1;
            itemBtnWrap.appendChild(btnPlus)
            btnPlus.innerHTML = `<img src="./images/icon/add.png" alt="">`;
            itemBtnWrap.appendChild(itemPrice)
            itemPrice.innerHTML = `<em>11,000</em>원`;
            itemBtnWrap.appendChild(itemBtnClear)
            itemBtnClear.innerHTML = `<img src="./images/icon/ico-clear.svg" alt="">`;

            // createElement 버튼 재설정
            let cre_total
            let cre_num = 0;
            let cre_price = 11000;

            // 증가
            btnPlus.addEventListener('click',()=>{
                if(cre_num < 8){
                    cre_num++ ;
                    inputCount.value = cre_num
                    cre_total =  cre_num*cre_price
                    itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
                }else{
                    alert('최대 구매 수량입니다.')
                }
            })
            // 감소
            btnMinus.addEventListener('click',()=>{
                if(1< cre_num){
                    cre_num--;
                    inputCount.value = cre_num
                    cre_total =  cre_num*cre_price
                    itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
                }else if(cre_num == 1){
                    itemPrice.innerHTML = `<em>11,000</em>원`;
                    inputCount.value = `1`;
                }
            })

            // 큰 clear버튼 클릭했을 때
            clear.addEventListener('click',()=>{
                clear.classList.add('display_none')
                window.location.reload(); //새로고침
                // optionBox.remove(itemWrap)
            })
            
            // 옵션리스트 개별 clear버튼 클릭했을 때
            itemBtnClear.addEventListener('click',function () {
                listResult4 = !listResult4;
                this.parentElement.parentElement.remove();
            })
            listResult4 = !listResult4;
        } 
    })

    // 개별로 작성 옵션 5
    optionName[4].addEventListener('click',()=>{
        
        if (listResult5 == false) {

            // 초기값 display_none 제거
            clear.classList.remove('display_none')
            optionBox.classList.remove('display_none')

            // 옵션 클릭 했을 때 해당 상품 리스트 쌓이게 하기 createElement 생성
            let itemWrap = document.createElement('div') //div 생성
            let itemTitle = document.createElement('p') //p 옵션명 생성
            let itemBtnWrap = document.createElement('div') //인풋 div 생성
            let btnMinus = document.createElement('button') //-버튼 생성
            let btnPlus = document.createElement('button') //+버튼 생성
            let inputCount = document.createElement('input') //인풋 생성
            let itemPrice = document.createElement('span') //가격넣을 span 생성
            let itemBtnClear = document.createElement('a') //x버튼 넣을 a생성

            // 클릭대상 옵션리스트 클래스 추가
            itemWrap.classList.add('opt_list'); 
            itemTitle.classList.add('opt_title'); 
            itemBtnWrap.classList.add('num_box'); 
            btnMinus.classList.add('minus');
            btnPlus.classList.add('plus');
            inputCount.classList.add('num_count');
            
            // 클릭대상 옵션리스트 쌓기
            optionBox.appendChild(itemWrap)
            itemWrap.appendChild(itemTitle)
            itemWrap.appendChild(itemBtnWrap)
            itemTitle.innerHTML = optionName[4].children[0].alt;
            itemBtnWrap.appendChild(btnMinus)
            btnMinus.innerHTML = `<img src="./images/icon/delete.png" alt="">`;
            itemBtnWrap.appendChild(inputCount)
            inputCount.value = 1;
            itemBtnWrap.appendChild(btnPlus)
            btnPlus.innerHTML = `<img src="./images/icon/add.png" alt="">`;
            itemBtnWrap.appendChild(itemPrice)
            itemPrice.innerHTML = `<em>11,000</em>원`;
            itemBtnWrap.appendChild(itemBtnClear)
            itemBtnClear.innerHTML = `<img src="./images/icon/ico-clear.svg" alt="">`;

            // createElement 버튼 재설정
            let cre_total
            let cre_num = 0;
            let cre_price = 11000;

            // 증가
            btnPlus.addEventListener('click',()=>{
                if(cre_num < 8){
                    cre_num++ ;
                    inputCount.value = cre_num
                    cre_total =  cre_num*cre_price
                    itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
                }else{
                    alert('최대 구매 수량입니다.')
                }
            })
            // 감소
            btnMinus.addEventListener('click',()=>{
                if(1< cre_num){
                    cre_num--;
                    inputCount.value = cre_num
                    cre_total =  cre_num*cre_price
                    itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
                }else if(cre_num == 1){
                    itemPrice.innerHTML = `<em>11,000</em>원`;
                    inputCount.value = `1`;
                }
            })

            // 큰 clear버튼 클릭했을 때
            clear.addEventListener('click',()=>{
                clear.classList.add('display_none')
                window.location.reload(); //새로고침
                // optionBox.remove(itemWrap)
            })
            
            // 옵션리스트 개별 clear버튼 클릭했을 때
            itemBtnClear.addEventListener('click',function () {
                listResult5 = !listResult5;
                this.parentElement.parentElement.remove();
            })
            listResult5 = !listResult5;
        } 
    })

    // 개별로 작성 옵션 6
    optionName[5].addEventListener('click',()=>{
        
        if (listResult6 == false) {

            // 초기값 display_none 제거
            clear.classList.remove('display_none')
            optionBox.classList.remove('display_none')

            // 옵션 클릭 했을 때 해당 상품 리스트 쌓이게 하기 createElement 생성
            let itemWrap = document.createElement('div') //div 생성
            let itemTitle = document.createElement('p') //p 옵션명 생성
            let itemBtnWrap = document.createElement('div') //인풋 div 생성
            let btnMinus = document.createElement('button') //-버튼 생성
            let btnPlus = document.createElement('button') //+버튼 생성
            let inputCount = document.createElement('input') //인풋 생성
            let itemPrice = document.createElement('span') //가격넣을 span 생성
            let itemBtnClear = document.createElement('a') //x버튼 넣을 a생성

            // 클릭대상 옵션리스트 클래스 추가
            itemWrap.classList.add('opt_list'); 
            itemTitle.classList.add('opt_title'); 
            itemBtnWrap.classList.add('num_box'); 
            btnMinus.classList.add('minus');
            btnPlus.classList.add('plus');
            inputCount.classList.add('num_count');
            
            // 클릭대상 옵션리스트 쌓기
            optionBox.appendChild(itemWrap)
            itemWrap.appendChild(itemTitle)
            itemWrap.appendChild(itemBtnWrap)
            itemTitle.innerHTML = optionName[5].children[0].alt;
            itemBtnWrap.appendChild(btnMinus)
            btnMinus.innerHTML = `<img src="./images/icon/delete.png" alt="">`;
            itemBtnWrap.appendChild(inputCount)
            inputCount.value = 1;
            itemBtnWrap.appendChild(btnPlus)
            btnPlus.innerHTML = `<img src="./images/icon/add.png" alt="">`;
            itemBtnWrap.appendChild(itemPrice)
            itemPrice.innerHTML = `<em>11,000</em>원`;
            itemBtnWrap.appendChild(itemBtnClear)
            itemBtnClear.innerHTML = `<img src="./images/icon/ico-clear.svg" alt="">`;

            // createElement 버튼 재설정
            let cre_total
            let cre_num = 0;
            let cre_price = 11000;

            // 증가
            btnPlus.addEventListener('click',()=>{
                if(cre_num < 8){
                    cre_num++ ;
                    inputCount.value = cre_num
                    cre_total =  cre_num*cre_price
                    itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
                }else{
                    alert('최대 구매 수량입니다.')
                }
            })
            // 감소
            btnMinus.addEventListener('click',()=>{
                if(1< cre_num){
                    cre_num--;
                    inputCount.value = cre_num
                    cre_total =  cre_num*cre_price
                    itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
                }else if(cre_num == 1){
                    itemPrice.innerHTML = `<em>11,000</em>원`;
                    inputCount.value = `1`;
                }
            })
            // 큰 clear버튼 클릭했을 때
            clear.addEventListener('click',()=>{
                clear.classList.add('display_none')
                window.location.reload(); //새로고침
                // optionBox.remove(itemWrap)
            })
            
            // 옵션리스트 개별 clear버튼 클릭했을 때
            itemBtnClear.addEventListener('click',function () {
                listResult6 = !listResult6;
                this.parentElement.parentElement.remove();
            })
            listResult6 = !listResult6;
        } 
    })
}
optionCreate()
// const num_result = document.querySelectorAll('.num_count > div > span > em').innerHTML;
// console.log(num_result)
// opt_total.innerHTML = itemPrice.innerHTML;
// opt_total.innerHTML = optionBox.appendChild.appendChild[1].appendChild[3].innerHTML



// optionName.forEach((t,i)=>{
//     t.addEventListener('click',()=>{
        
//         // 초기값 display_none 제거
//         clear.classList.remove('display_none')
//         optionBox.classList.remove('display_none')
        
//         // 옵션 클릭 했을 때 해당 상품 리스트 쌓이게 하기 createElement 생성
//         let itemWrap = document.createElement('div') //div 생성
//         let itemTitle = document.createElement('p') //p 옵션명 생성
//         let itemBtnWrap = document.createElement('div') //인풋 div 생성
//         let btnMinus = document.createElement('button') //-버튼 생성
//         let btnPlus = document.createElement('button') //+버튼 생성
//         let inputCount = document.createElement('input') //인풋 생성
//         let itemPrice = document.createElement('span') //가격넣을 span 생성
//         let itemBtnClear = document.createElement('a') //x버튼 넣을 a생성
//         console.log(itemWrap,itemTitle,itemBtnWrap,btnMinus,btnPlus,inputCount)

//         // 클릭대상 옵션리스트 클래스 추가
//         itemWrap.classList.add('opt_list'); 
//         itemTitle.classList.add('opt_title'); 
//         itemBtnWrap.classList.add('num_box'); 
//         btnMinus.classList.add('minus');
//         btnPlus.classList.add('plus');
//         inputCount.classList.add('num_count');
        
//         console.log('클릭')
//         // 클릭대상 옵션리스트 쌓기
//         optionBox.appendChild(itemWrap)
//         itemWrap.appendChild(itemTitle)
//         itemWrap.appendChild(itemBtnWrap)
//         itemTitle.innerHTML = optionName[i].children[0].alt;
//         itemBtnWrap.appendChild(btnMinus)
//         btnMinus.innerHTML = `<img src="./images/icon/delete.png" alt="">`;
//         itemBtnWrap.appendChild(inputCount)
//         inputCount.value = 1;
//         itemBtnWrap.appendChild(btnPlus)
//         btnPlus.innerHTML = `<img src="./images/icon/add.png" alt="">`;
//         itemBtnWrap.appendChild(itemPrice)
//         itemPrice.innerHTML = `<em>11,000</em>원`;
//         itemBtnWrap.appendChild(itemBtnClear)
//         itemBtnClear.innerHTML = `<img src="./images/icon/ico-clear.svg" alt="">`;

//         // createElement 버튼 재설정
//         let cre_total
//         let cre_num = 0;
//         let cre_price = 11000;
//         let cre_delTotal;

//         // 증가
//         btnPlus.addEventListener('click',()=>{
//             if(cre_num < 8){
//                 cre_num++ ;
//                 inputCount.value = cre_num
//                 cre_total =  cre_num*cre_price
//                 itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
//             }else{
//                 alert('최대 구매 수량입니다.')
//             }
//         })
//         // 감소
//         btnMinus.addEventListener('click',()=>{
//             if(1< cre_num){
//                 cre_num--;
//                 inputCount.value = cre_num
//                 cre_total =  cre_num*cre_price
//                 itemPrice.innerHTML = `<em>${cre_total.toLocaleString('ko-kr')}</em>원`
//             }else if(cre_num == 1){
//                 itemPrice.innerHTML = `<em>11,000</em>원`;
//                 inputCount.value = `1`;
//             }
//         })

//         // 큰 clear버튼 클릭했을 때
//         clear.addEventListener('click',()=>{
//             clear.classList.add('display_none')
//             window.location.reload(); //새로고침
//             // optionBox.remove(itemWrap)
//         })
        
//         // 옵션리스트 개별 clear버튼 클릭했을 때
//         itemBtnClear.addEventListener('click',function () {
//             this.parentElement.parentElement.remove();
//         })
//     })
// })


/* ---------------------- 옵션명 변경 -------------------------- */    
/* const optionTitle = document.querySelector('.opt_list > p');

optionName.forEach((t, i) => {
    t.addEventListener('click', () => {
        // img 태그 art 속성 값 가져오기
        const artValue = optionName[i].children[0].alt;
        optionTitle.innerHTML = artValue;
    });
}); */

/* ---------------------- 구분선 -------------------------- */  