// IIFE
(() => {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('KhoGgtZIZC_WbZDOZ');
})();

const btn = document.getElementById('contactSend');

window.onload = () => {
    document.getElementById('form')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            btn.value = 'Sending...';

            const serviceID = 'default_service';
            const templateID = 'template_aqb48l6';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                    swal("Wooo!", "Your message has been sent :)", "success");
                }, (err) => {
                    btn.value = 'Send Email';
                    swal({
                        title: "Oops!",
                        text: "You forgot a field :( please complete the whole form",
                        icon: "error",
                        button: "Try Again"
                    })
                });
        });
}
