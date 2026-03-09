// تأثير الكتابة التلقائية
const textToType = "عقل يسبق الزمن.. يحلل بصمت، ويبني للمستقبل.";
const typingElement = document.getElementById("typing-text");
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 60);
    }
}

window.onload = () => {
    setTimeout(typeText, 500);
};

// تأثير الظهور عند النزول بالصفحة
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// --- منطق مشغل الفيديو الجديد ---
const video = document.getElementById('my-video');
const videoPlayBtn = document.getElementById('video-play-btn');
const videoWrapper = document.getElementById('video-wrapper');

// عند الضغط على زر التشغيل (أو على الفيديو نفسه)
videoPlayBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play().catch(error => {
            alert("يرجى التأكد من وضع ملف الفيديو الخاص بك باسم 'my_video.mp4' في المجلد!");
        });
    }
});

// إخفاء الزر المخصص وإظهار أزرار التحكم الطبيعية عند بدء الفيديو
video.addEventListener('play', () => {
    videoWrapper.classList.add('is-playing');
    video.setAttribute('controls', 'controls'); // يظهر شريط التشغيل وإيقاف الفيديو
});

// إرجاع زر التشغيل إذا تم إيقاف الفيديو
video.addEventListener('pause', () => {
    videoWrapper.classList.remove('is-playing');
    // إخفاء أزرار التحكم الطبيعية ليعود الزر المخصص بشكل أجمل
    video.removeAttribute('controls');
});

// عند انتهاء الفيديو
video.addEventListener('ended', () => {
    videoWrapper.classList.remove('is-playing');
    video.removeAttribute('controls');
    video.load(); // إعادة الفيديو للبداية لظهور الغلاف
});