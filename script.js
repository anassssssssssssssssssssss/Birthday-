// تأثيرات الظهور عند التمرير

const animateElements = document.querySelectorAll('.animate');

function checkScroll() {

    animateElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        

        if (elementTop < windowHeight - 100) {

            element.classList.add('show');

        }

    });

}

window.addEventListener('scroll', checkScroll);

checkScroll();

// تأثيرات عشوائية للعبط

const boxes = document.querySelectorAll('.reason-box');

boxes.forEach(box => {

    box.addEventListener('mouseenter', () => {

        if (box.querySelector('i').classList.contains('fa-grin-squint-tears')) {

            box.querySelector('i').style.transform = 'rotate(360deg)';

            setTimeout(() => {

                box.querySelector('i').style.transform = 'rotate(0deg)';

            }, 500);

        }

    });

});