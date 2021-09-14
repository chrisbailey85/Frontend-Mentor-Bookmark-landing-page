const body = document.querySelector('body');
const menuBtn = document.querySelector('.hambuger');
const featuresBtn = document.querySelectorAll('.features__btn');
const featuresCards = document.querySelectorAll('.features__card');
const faqBtn = document.querySelectorAll('.faq__btn');
const ctaBtn = document.querySelector('.cta__btn');
const email = document.querySelector('#email');
const form = document.querySelector('form');
const invaildMessage = document.querySelector('.invaild__message');
const regexPatten = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

menuBtn.addEventListener('click', () => {
    body.classList.toggle('open');
    body.classList.contains('open') ? menuBtn.ariaExpanded = true : menuBtn.ariaExpanded = false;
});

featuresBtn.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
        closeBtn(featuresBtn, 'is__active')
        featuresCards.forEach(card => card.classList.add('hidden'))
        e.target.classList.add('is__active');
        e.target.ariaExpanded = true;
        featuresCards[idx].classList.remove('hidden');
    })
})

faqBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        closeBtn(faqBtn, 'open');
        e.target.classList.add('open');
        e.target.ariaExpanded = true;
    })
})

function closeBtn(el, className) {
    el.forEach(item => {
        item.classList.remove(className)
        item.ariaExpanded = false;
    })
}



ctaBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!email.value.match(regexPatten)) {
        invaildMessage.classList.add('error');
        form.classList.add('invaild');
    } else {
        invaildMessage.classList.remove('error');
        form.classList.remove('invaild');
    }
})