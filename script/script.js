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
mapImg.src = "image/world-map.png"; // 실제 경로에 맞게 수정

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