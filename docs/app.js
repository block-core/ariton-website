document.addEventListener("DOMContentLoaded", function () {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzMwKjd1Bdrk8PAVXhuJi_EnuZnAipQG7Mgy9XLGfuj3i9N7O3-7sugqET2CkK89V_Q/exec';
    const form = document.getElementById('investment-form');
    const submitting = document.querySelector('.js-submitting');
    const successMessage = document.querySelector('.js-success-message');
    const errorMessage = document.querySelector('.js-error-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        showLoadingIndicator();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => showSuccessMessage(response))
            .catch(error => showErrorMessage(error));
    });

    function showLoadingIndicator() {
        submitting.classList.remove('is-hidden');
    }

    function showSuccessMessage(response) {
        console.log('Success!', response);
        setTimeout(() => {
            successMessage.classList.remove('is-hidden');
            submitting.classList.add('is-hidden');
        }, 500);
    }

    function showErrorMessage(error) {
        console.error('Error!', error.message);
        setTimeout(() => {
            errorMessage.classList.remove('is-hidden');
            submitting.classList.add('is-hidden');
        }, 500);
    }

    document.addEventListener('scroll', () => {
        const menu = document.querySelector('.menu');
        if (window.scrollY > 50) {
            menu.classList.add('scrolled');
        } else {
            menu.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
