// script.js

// 배경음악 토글
const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("click", () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = "🔊";
    } else {
        bgMusic.pause();
        musicToggle.textContent = "🔇";
    }
});

// 이미지 확대 모달
const modal = document.getElementById("img-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// 동적으로 1~40번 이미지 클릭 이벤트 등록
for (let i = 1; i <= 40; i++) {
    const img = document.querySelector(`.gallery-img[data-index="${i}"]`);
    if (img) {
        img.addEventListener("click", () => {
            modal.classList.remove("hidden");
            modalImg.src = img.src;
        });
    }
}

closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// 지도 색칠 기능
const canvas = document.getElementById("world-map");
const ctx = canvas.getContext("2d");
const mapImg = new Image();
mapImg.src = "image/map.png"; // 실제 경로에 맞게 수정

mapImg.onload = () => {
    ctx.drawImage(mapImg, 0, 0, canvas.width, canvas.height);
};

canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const color = `hsl(${Math.random() * 360}, 70%, 70%)`;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, 2 * Math.PI);
    ctx.fill();
});



// Scroll-triggered section fade-in 애니메이션
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => observer.observe(section));

// 날짜 카운트업 기능
const counterElement = document.getElementById("counter-days");
const startDate = new Date("2024-12-27"); // 만난 날을 여기에 입력!

function updateDaysCount() {
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))+1;
    counterElement.textContent = `${diffDays}일째 함께하고 있어요 💕`;
}

updateDaysCount();

window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 2000); // 2000ms = 2초 동안 로딩 화면 유지
});




