// IIFE
(() => {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("KhoGgtZIZC_WbZDOZ");
})();

const btn = document.getElementById("contactSend");


/* This is grabbing the forms input fields and making sure the value are not null, if they are null they will get an error message 
to try again. if the fields arent null, the emailjs will send the form with serviceID, templateID, and the forms content,
it will then confirm if the message was sent or if there was an error in the process.*/
window.onload = () => {
  document.getElementById("form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const question = document.getElementById("option").value;
      // console.log(question)
      const from_name = document.getElementById("from_name").value;
      // console.log(from_name)
      const to_name = document.getElementById("contactEmail").value;
      // console.log(to_name)
      const message = document.getElementById("message").value;
      // console.log(message)

      if (this.from_name.value === "" || this.to_name.value === "" || this.message.value === "") {
        inputEmpty();
        return;
      }

      btn.value = "Sending...";

      const serviceID = "default_service";
      const templateID = "template_aqb48l6";

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = "Send Email";
          swal("Wooo!", "Your message has been sent :)", "success");
        }, (err) => {
          btn.value = "Send Email";
          swal({
            title: "Oops!",
            text: "Something went wrong :(",
            icon: "error",
            button: "Try Again"
          });
        });
    });
};

/* If the user doesn't fill out the form, they will get a sweet alert message telling them to try again */
function inputEmpty() {
  swal({
    title: "Oops!",
    text: "You forgot a field :( please complete the whole form.",
    icon: "error",
    button: "Try Again"
  });
}

/**\
 * If the element is within 150px of the bottom of the viewport, add the class 'active' to it,
 * otherwise remove the class 'active' from it.
 */
function reveal() {
  let revealCards = document.querySelectorAll(".reveal");

  for (let i = 0; i < revealCards.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = revealCards[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealCards[i].classList.add("active");
    } else {
      revealCards[i].classList.remove("active");
    }
  }
}

/* Adding an event listener to the window object. The event listener is listening for the scroll event.
When the scroll event is triggered, the reveal function is called. */
window.addEventListener("scroll", reveal);




// Dashboard Page JS

//Containers
const createContainer = document.querySelector(".create-container");
const editContainer = document.querySelector(".edit-event-container");
const editEventContainer = document.querySelector("#selected-event-container");

//Buttons
const createNewButton = document.querySelector("#create-event");
const editEventButton = document.querySelector("#edit-event");

createNewButton.addEventListener("click", () => {
  createContainer.style.display = "flex";
});

editEventButton.addEventListener("click", () => {
  editContainer.style.display = "flex";
  editEventContainer.style.display = "flex";
});


//Create new event submit button
const submitNewEventButton = document.querySelector("#create-event-btn");

submitNewEventButton.addEventListener("click", () => {
  // CREATE NEW EVENT TEXT FIELDS
  const createEventName = document.querySelector("#create-event-name").value;
  const createEventDates = document.querySelector("#create-event-dates").value;
  const createEventTime = document.querySelector("#create-event-time").value;
  const createEventVenue = document.querySelector("#create-event-venue").value;
  const createEventLocation = document.querySelector("#create-event-location").value;
  const createEventDescription = document.querySelector("#create-event-description").value;

  console.log(createEventName, createEventDates, createEventTime, createEventVenue, createEventLocation, createEventDescription);


  //REFACTOR INTO FETCH
  fetch("/api/admin-event", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: createEventName,
      description: createEventDescription,
      event_date: createEventDates,
      event_time: createEventTime,
      venue: createEventVenue,
      location: createEventLocation,
      is_upcoming: true
    })
  })


})