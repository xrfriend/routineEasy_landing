const boxList = document.querySelectorAll('.box');

const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 1.0,  // 50%가 viewport에 들어와 있어야 callback 실행
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, options);

// 반복문을 돌려 모든 DOM에 적용
boxList.forEach(el => observer.observe(el));


window.addEventListener('DOMContentLoaded', function(){
    function pageLoad(){
        setTimeout(function(){
            jQuery('.pageLoad').addClass('active')
        }, 1000)
    }
    pageLoad();
})