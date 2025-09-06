// script.js 파일

document.addEventListener("DOMContentLoaded", function() {
    const animatedTexts = document.querySelectorAll('.animated-text');
    let currentIndex = 0;

    function animateText() {
        animatedTexts.forEach((text, index) => {
            text.style.transition = 'none';
            text.style.transform = `translateY(${100 * (index - currentIndex)}%)`;
        });

        // 애니메이션 시작
        setTimeout(() => {
            animatedTexts.forEach((text, index) => {
                text.style.transition = 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
                text.style.transform = `translateY(${100 * (index - currentIndex) - 100}%)`;
            });

            // 인덱스 업데이트
            currentIndex = (currentIndex + 1) % animatedTexts.length;
        }, 50);
    }

    // 초기 실행 및 반복 설정
    animateText();
    setInterval(animateText, 2500); // 2.5초마다 애니메이션 반복
});


document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0, // 텍스트가 뷰포트에 1px이라도 보이면 작동
        rootMargin: "0px 0px -100px 0px" // 뷰포트 아래 100px 여유 공간 둠
    };

    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                // 뷰포트에서 벗어나면 다시 사라지도록 visible 클래스 제거
                entry.target.classList.remove('visible');
            } else {
                // 뷰포트 안에 들어오면 나타나도록 visible 클래스 추가
                entry.target.classList.add('visible');
            }
        });
    },
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});