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

/* ---------------------- 체크박스 all 체크 -------------------------- */  
const chkAll = document.querySelector('#ck_all')
const chkList = document.querySelectorAll('[id^=ck_list]')
console.log(chkList)

chkAll.addEventListener('click',()=>{
    if (chkAll.checked){
        for(let i of chkList){i.checked = true}
    }else {
        for(let i of chkList){i.checked = false}
    }
})
/* ---------------------- 구분선 -------------------------- */  
const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const userPwChk = document.querySelector('#user_pw_ck')
const userEmail = document.querySelector('#user_mail')
const userPhoneMid = document.querySelector('#user_phone_m')
const userPhoneLast = document.querySelector('#user_phone_l')
const errorMassage = document.querySelector('.error_massage')
const errorBeforeReset = document.querySelectorAll('fieldset > div > span')
const allInput = document.querySelectorAll('fieldset input')
const loginBtn = document.querySelector('.login_btn')
console.log(allInput)

// const validate = () => {};

// allInput.addEventListener('blur',()=>{
    const validate = () => {
    // 아이디 유효성 검사
    const idRegex = /^[a-z0-9]{4,16}$/;
    if (!idRegex.test(userId.value)) {
        // userId.value = '';
        errorBeforeReset[0].classList.add('error_massage');
        errorBeforeReset[0].innerHTML = '아이디는 영문 소문자와 숫자 4-16자로 입력해야 합니다.';
        return false;
    }
    
    // 비밀번호 유효성 검사
    const pwRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-z0-9!@#$%^&*]{8,16}$/;
    if (!pwRegex.test(userPw.value)) {
        // userPw.value = '';
        errorBeforeReset[1].classList.add('error_massage');
        errorBeforeReset[1].innerHTML = '영문 소문자/숫자/특수문자 조합, 8-16자';
        return false;
    }
    
    // 비밀번호 일치하는지 확인
    if (userPw.value != userPwChk.value) {
        // userPwChk.value = '';
        errorBeforeReset[2].classList.add('error_massage');
        errorBeforeReset[2].innerHTML = '비밀번호가 일치하지 않습니다.';
        return false;
    }
    
    // 이메일 유효성 검사
    const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(userEmail.value)) {
        errorBeforeReset[3].classList.add('error_massage');
        errorBeforeReset[3].innerHTML = '이메일 주소 형식이 올바르지 않습니다.';
        return false;
    }
    
    // 핸드폰 번호 유효성 검사 
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(userPhoneMid.value)) {
        userPhoneMid.style.color = '#d0057d'
        return false;
    }
    if (!phoneRegex.test(userPhoneLast.value)) {
        userPhoneLast.style.color = '#d0057d'
        return false;
    }

    // 체크박스 검사
    if (!chkList[0].checked) {
        alert('[필수] 약관동의를 체크해주세요.')
        return false;
    }
    return true;
}
// })

const result = (event) => {
    event.preventDefault();
    if (!validate()) {
        allInput.value = '';
        alert('입력하신 정보가 올바르지 않습니다\n정보를 다시 확인해주세요.');
    }else{
        allInput.value = '';
        alert('회원가입을 환영합니다.😊');
        // window.location = './index.html';
    }
};
loginBtn.addEventListener('click', result);

/* ---------------------- 구분선 -------------------------- */  