// IIFE
(() => {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('KhoGgtZIZC_WbZDOZ');
})();

const btn = document.getElementById('contactSend');

document.getElementById('contact-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_aqb48l6';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
    });

