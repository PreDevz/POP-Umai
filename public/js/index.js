// IIFE
(() => {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('KhoGgtZIZC_WbZDOZ');
})();

const btn = document.getElementById('contactSend');


/* This is grabbing the forms input fields and making sure the value are not null, if they are null they will get an error message 
to try again. if the fields arent null, the emailjs will send the form with serviceID, templateID, and the forms content,
it will then confirm if the message was sent or if there was an error in the process.*/
window.onload = () => {
    document.getElementById('form')
        .addEventListener('submit', function (event) {
            event.preventDefault();
            const question = document.getElementById('option').value
            console.log(question)
            const from_name = document.getElementById('from_name').value
            console.log(from_name)
            const to_name = document.getElementById('contactEmail').value
            console.log(to_name)
            const message = document.getElementById('message').value
            console.log(message)

            if (this.from_name.value === "" || this.to_name.value === "" || this.message.value === "") {
                inputEmpty()
                return
            }

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
                        text: "Something went wrong :(",
                        icon: "error",
                        button: "Try Again"
                    })
                });
        });
}

/* If the user doesn't fill out the form, they will get a sweet alert message telling them to try again */
function inputEmpty() {
    swal({
        title: "Oops!",
        text: "You forgot a field :( please complete the whole form.",
        icon: "error",
        button: "Try Again"
    })
}
