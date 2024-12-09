let slideIndex = 0;
const slides = document.querySelector('.slides');
const slideCount = slides.childElementCount;
let isTransitioning = false; // トランジション中かどうかのフラグ

function showSlides() {
    if (isTransitioning) {
        slides.style.transition = 'none'; // トランジションなしでスライド位置をリセット
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        isTransitioning = false;
    } else {
        slides.style.transition = 'transform 0.5s ease-in-out'; // 通常のトランジション
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    }
}

function plusSlides(n) {
    // トランジション中の場合は何もしない
    if (isTransitioning) return;

    slideIndex += n;

    // 最後のスライドから最初にループする際の処理
    if (slideIndex >= slideCount) {
        slideIndex = 0; // 最初に戻る
        isTransitioning = true;
        showSlides(); // アニメーションなしでリセット
        setTimeout(() => {
            isTransitioning = false;
            plusSlides(1); // 次のスライドに移動
        }, 500); // アニメーションの遅延を調整
    } else if (slideIndex < 0) {
        slideIndex = slideCount - 1; // 最後に戻る
        isTransitioning = true;
        showSlides(); // アニメーションなしでリセット
        setTimeout(() => {
            isTransitioning = false;
            plusSlides(-1);
        }, 500); // アニメーションの遅延を調整
    } else {
        showSlides();
    }
}

// 初期表示
showSlides();
