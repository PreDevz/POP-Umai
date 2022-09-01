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
  editContainer.style.display = "none"
});

editEventButton.addEventListener("click", () => {
  editContainer.style.display = "flex";
  createContainer.style.display = "none";
});



//Create new event submit button
const submitNewEventButton = document.querySelector("#create-event-btn");

submitNewEventButton.addEventListener("click", async () => {
  // CREATE NEW EVENT TEXT FIELDS
  const createEventName = document.querySelector("#create-event-name").value;
  const createEventDates = document.querySelector("#create-event-dates").value;
  const createEventTime = document.querySelector("#create-event-time").value;
  const createEventVenue = document.querySelector("#create-event-venue").value;
  const createEventLocation = document.querySelector("#create-event-location").value;
  const createEventDescription = document.querySelector("#create-event-description").value;

  //POST Request
  await fetch("/api/admin-event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: createEventName,
      description: createEventDescription,
      event_date: createEventDates,
      event_time: createEventTime,
      venue: createEventVenue,
      location: createEventLocation,
      is_upcoming: true
    })
  }).catch(err => err ? console.log(err) : console.log("Success!"));

  // Hides field
  //createContainer.style.display = "none";

  swal("Event created!", "You have successfully created an event!", "success");

});


//Dropdown list
const editDropdown = document.querySelector(".questions-input");

// Text fields
const editEventName = document.querySelector("#edit-event-name");
const editEventDates = document.querySelector("#edit-event-dates");
const editEventTime = document.querySelector("#edit-event-time");
const editEventVenue = document.querySelector("#edit-event-venue");
const editEventLocation = document.querySelector("#edit-event-location");
const editEventDescription = document.querySelector("#edit-event-description");
const editEventOver = document.querySelector("#is-event-over");

let eventIdNum;

// Activates when an item is selected from the dropdown list
editDropdown.addEventListener("change", () => {
  //Selected id number
  const idValue = editDropdown.value;
  console.log(idValue);

  //Reveals form below
  editEventContainer.style.display = "flex";

  // NEXT UP. NEED TO GET VALUES OF EACH EVENT (USING THEIR DATA VALUE)
  //GET REQUEST USING ID RETURNED
  fetch(`/api/admin-event/${idValue}`)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      console.log(data);

      eventIdNum = data.id;
      editEventName.value = data.name;
      editEventDates.value = data.event_date;
      editEventTime.value = data.event_time;
      editEventVenue.value = data.venue;
      editEventLocation.value = data.location;
      editEventDescription.value = data.description;
      editEventOver.value = data.is_upcoming;
    });
});


// Update Events
const finishEditingEvent = document.querySelector("#edit-event-btn");

finishEditingEvent.addEventListener("click", async () => {
  await fetch(`/api/admin-event/${eventIdNum}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: editEventName.value,
      description: editEventDescription.value,
      event_date: editEventDates.value,
      event_time: editEventTime.value,
      venue: editEventVenue.value,
      location: editEventLocation.value,
      is_upcoming: editEventOver.value
    })
  }).catch(err => err ? console.log(err) : console.log("Success!"));

  swal("Event updated!", "You have successfully updated the event!", "success");
});

// Delete Events
const deleteButton = document.querySelector("#delete-event-btn");

deleteButton.addEventListener("click", () => {
  swal(`WARNING:
  Are you sure you want to delete this event? This action can not be undone.`, {
    buttons: {
      cancel: "Cancel",
      delete: {
        text: "Delete",
        value: "delete"
      }
    },
  })
  .then((value) => {
    switch (value) {
      case "delete":
        swal("Event deleted!", "You have successfully deleted the event!", "success");
        fetch(`/api/admin-event/${eventIdNum}`, {
          method: "DELETE"
        })
        .catch(err => err ? console.log(err) : console.log("Success!"));
        break;
    }
  });
});

// Logout button
const logoutButton = document.querySelector("#log-out-button");

logoutButton.addEventListener("click", async () => {
  await fetch("/api/admin/logout", {
    method: "POST",
    body: {}
  }).then(() => {
    location.reload();
  }).catch(err => err ? console.log(err) : console.log("Success!"));
});