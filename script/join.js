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
const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const userPwChk = document.querySelector('#user_pw_ck')
const useMail = document.querySelector('#user_name')
const errorMassage = document.querySelectorAll('.error_massage'); // 에러 메시지 출력 요소

const validate = () => {
// 아이디 유효성 검사
const idRegex = /^[a-z0-9]{4,16}$/;
if (!idRegex.test(userId.value)) {
    errorMassage.innerHTML = '아이디는 영문 소문자와 숫자 4~16자로 입력해야 합니다.';
    return false;
}

// 비밀번호 유효성 검사
const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,16}$/;
if (!pwRegex.test(userPw.value)) {
    errorMassage.innerHTML = '비밀번호는 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합하여 10~16자로 입력해야 합니다.';
    return false;
}

// 비밀번호 확인
if (userPw.value !== userPwChk.value) {
    errorMassage.innerHTML = '비밀번호가 일치하지 않습니다.';
    return false;
}

// 이메일 유효성 검사
const emailRegex = /^[\w-]+@[\w-]+(\.[w-]+)+$/;
if (!emailRegex.test(userEmail.value)) {
    errorMassage.innerHTML = '이메일 주소 형식이 올바르지 않습니다.';
    return false;
}

// 모든 유효성 검사를 통과하면 true 반환
return true;
};

const submitForm = (event) => {
event.preventDefault();

if (!validate()) {
    return;
}

// 유효성 검사를 통과하면 회원가입 처리
// ...
};

// document.querySelector('form').addEventListener('submit', submitForm);
/* ---------------------- 구분선 -------------------------- */  