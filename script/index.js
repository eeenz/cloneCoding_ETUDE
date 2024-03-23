
/* const txtPng = document.querySelector('.visual_txt_img');
console.log(txtPng)
 */
/* for(let i of txtPng){
    scrollTrigger.create({
        trigger:i,
        onEnter:()=>i.classList.add('up')
    })
} */

/* const txtPng = scrollTrigger.create({
    trigger: '.visual_txt_img',
    start: "top 50%",
    end: "bottom 50%",
    // onEnter: () => txtPng.classList.add('up'),
});
gsap.to(".visual_txt_img", {
    scrollTrigger: txtPng, // ScrollTrigger 인스턴스 연결
    duration: 1, // 애니메이션 지속 시간
    Y: 100, // X축 이동 거리
}); */

/* const txtPng = ScrollTrigger.create({
    txtPng: '.visual_txt_img', // 애니메이션 적용할 요소
  start: 'top 90%', // 애니메이션 시작 위치 (스크롤 위치 기준)
});

// 애니메이션 설정
gsap.fromTo('.visual_txt_img', {
  scrollTrigger: txtPng, // ScrollTrigger 인스턴스 연결
  y: "100%", // 애니메이션 시작 시 Y축 위치
  opacity: 0, // 애니메이션 시작 시 투명도
}, {
  y: 0, // 애니메이션 종료 시 Y축 위치
  opacity: 1, // 애니메이션 종료 시 투명도
  duration: 1, // 애니메이션 지속 시간
  ease: "power3.out", // 애니메이션 속도 변화
}); */