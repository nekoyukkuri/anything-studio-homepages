// script.js

// ページ読み込み時にヘッダーのnavリンクにフェードイン＋スライドアップアニメーション
window.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach((link, i) => {
    link.style.opacity = 0;
    link.style.transform = 'translateY(10px)';
    setTimeout(() => {
      link.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      link.style.opacity = 1;
      link.style.transform = 'translateY(0)';
    }, i * 100);
  });

  // コンテナの中身をゆっくりフェードイン
  const container = document.querySelector('.container');
  if (container) {
    container.style.opacity = 0;
    container.style.transition = 'opacity 0.8s ease';
    setTimeout(() => {
      container.style.opacity = 1;
    }, 200);
  }
});

// ページが完全に読み込まれたらフェードアウト
window.addEventListener("load", function () {
    const loading = document.getElementById("loading");
    loading.classList.add("fade-out");
});