// تأثير الكتابة التلقائية (Typing Effect)
const textToType = "عقل يسبق الزمن.. يحلل بصمت، ويبني للمستقبل.";
const typingElement = document.getElementById("typing-text");
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        // سرعة الكتابة (أجزاء من الثانية)
        setTimeout(typeText, 70);
    }
}

// بدء تأثير الكتابة عند تحميل الصفحة
window.onload = () => {
    // تأخير بسيط قبل بدء الكتابة
    setTimeout(typeText, 500);
};

// تأثير الظهور عند النزول بالصفحة (Scroll Animations)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // يبدأ الظهور عندما يظهر 15% من العنصر
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // إضافة كلاس 'show' ليتم تفعيل الأنيميشن من الـ CSS
            entry.target.classList.add('show');
            // التوقف عن المراقبة بعد الظهور الأول
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// تطبيق المراقبة على كل العناصر التي تحمل كلاس 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => {
    observer.observe(el);
});