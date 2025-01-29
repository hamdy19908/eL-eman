// ملف script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');

    // فتح القائمة عند الضغط على زر القائمة
    menuBtn.addEventListener('click', function () {
        sidebar.classList.add('open');
    });

    // غلق القائمة عند الضغط على زر الإغلاق
    closeBtn.addEventListener('click', function () {
        sidebar.classList.remove('open');
    });
});
