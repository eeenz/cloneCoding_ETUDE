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

/* ---------------------- 구분선 -------------------------- */  
