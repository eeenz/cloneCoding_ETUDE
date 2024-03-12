/* ---------------------- 상단으로 올라가는 것 막기 -------------------------- */      
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
/* ---------------------- 로그인 에러 메세지 -------------------------- */  
const login_user_id = document.querySelector('#user_id')
const login_user_pw = document.querySelector('#user_pw')
const login_btn = document.querySelector('.login_btn')
const error_message_id = document.querySelector('.id_error')
const error_message_pw = document.querySelector('.pw_error')
console.log(login_user_id,login_user_pw,error_message_id,login_btn,error_message_pw)

login_btn.addEventListener('click',()=>{
    if(login_user_id.value == ''){
        error_message_id.innerHTML =  '아이디를 입력해 주세요' 
    }else if(login_user_pw.value == ''){ 
        // error_message_id.innerHTML =  ''
        error_message_pw.innerHTML =  '비밀번호를 입력해 주세요'
    }else {
        error_message_id.innerHTML =  ``
        error_message_pw.innerHTML =  `아이디 또는 비밀번호를 잘못 입력했습니다.<br>입력 내용을 다시 확인해주세요.`
    }
})

/* ---------------------- fixed가 footer 만났을 때 전환 -------------------------- */  

const leftArea = document.querySelector('.login_area')
const rightArea = document.querySelector('.img_container')
const footerArea = document.querySelector('footer')

const rightAreaHeight = rightArea.offsetHeight;
const footerTop = footerArea.offsetTop;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;

    // 스크롤이 footer 위치에 도달하면 fixed 해제
    if (scrollTop + rightAreaHeight >= footerTop) {
        rightArea.style.position = 'sticky';
        rightArea.style.height = 'auto';
        rightArea.style.backgroundRepeat = 'no-repeat';
        rightArea.style.backgroundPosition = 'left bottom';
        rightArea.style.backgroundSize = 'contain';
    } else {
        // 스크롤이 footer 위치를 벗어나면 fixed 적용
        rightArea.style.position = 'fixed';
        rightArea.style.height = '100vh';
        rightArea.style.backgroundSize = 'cover';
        rightArea.style.backgroundPosition = 'left top';
    }
});

/* ---------------------- 구분선 -------------------------- */  
