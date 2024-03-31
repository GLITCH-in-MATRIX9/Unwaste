let navMenu = document.querySelector("#side-nav");
let navItems = document.querySelectorAll("ul.nav-list>.nav-item");
let currentActiveNavItem = document.querySelector("ul.nav-list>.active");
let addCardBtn = document.querySelector(".add-item-btn");
let blankCard = document.querySelector(".blank-card");
let cardContainer = document.querySelector(".card-container");
let menuToggle = document.querySelector(".menu-toggle");
let MenuToggleIcon = document.querySelector(".menu-toggle-icon");

// dashboard
// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   $("#name").text(profile.getName());
//   $("#image").attr("src", profile.getImageUrl());
//   $(".g-signal2").css("display", "none");
//   $(".data").css("display", "block");
//   document.getElementById("data").style.display = "block";
// }
function loggedin() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("data").style.display = "block";
}
// function signOut() {
//   var auth2 = gapi.auth2.getAuthInstance();
//   auth2.signOut().then(function () {});
//   alert("you have been successfully signed out");
//   $(".g-signal2").css("display", "block");
//   $(".data").css("display", "none");
// }

// Nav Toggler
navItems.forEach((el) => {
  el.addEventListener("click", (e) => {
    currentActiveNavItem.classList.remove("active");
    currentActiveNavItem.classList.add("inactive");
    el.classList.add("active");
    el.classList.remove("inactive");
    currentActiveNavItem = e.currentTarget;
  });
});

//  Adding New Card

addCardBtn.addEventListener(
  "click",
  (newForm = (e) => {
    addCardBtn.style.position = "absolute";
    addCardBtn.style.opacity = "0";
    addCardBtn.style.top = "-100%";
    htmlToInsert =
      '<h2 style="font-weight: 400; font-size: 1.5rem">New Item</h2>' +
      '<form id="new-card-form">' +
      '<input type="text" class="input-field dark-container" id="new-item-name" style="background-color: var(--neutral-800)" placeholder="Item Name" required>' +
      '<input type="number" class="input-field dark-container" id="new-item-price" style="background-color: var(--neutral-800)" placeholder="Item Price" required>' +
      '<button type="submit" id="new-card-btn">Add Item</button>' +
      "</form>";

    blankCard.insertAdjacentHTML("beforeend", htmlToInsert);

    let newCardSubmitForm = document.querySelector(
      ".blank-card #new-card-form"
    );

    newCardSubmitForm.addEventListener("submit", (eve) => {
      eve.preventDefault();
      let newCard = document.createElement("div");
      newCard.classList.add("card");
      newCardItemName = document.querySelector(
        ".blank-card input#new-item-name"
      ).value;
      newCardItemPrice = parseInt(
        document.querySelector(".blank-card input#new-item-price").value
      );
      newCard.innerHTML =
        '<div class="card-img-container">' +
        '<img class="item-img" src="assets/images/Black Gold Resin.jpg" alt="">' +
        "</div>" +
        '<h6 class="item-type">Product</h6>' +
        `<p class="item-name">${newCardItemName}</p>` +
        `<h2 class="item-price">Rs. ${newCardItemPrice}</h2>`;

      cardContaienr.appendChild(newCard);

      newCardSubmitForm.remove();
      document.querySelector(".blank-card h2").remove();
      addCardBtn.style.position = "static";
      addCardBtn.style.opacity = "1";
      addCardBtn.style.top = "0px";
    });
  })
);

// Menu Toggler
menuToggle.addEventListener("click", (e) => {
  navMenu.classList.toggle("active-menu");
  navMenu.classList.toggle("side-nav");
  navItems.forEach(function (el) {
    el.style.zIndex = "5000";
  });
  MenuToggleIcon.classList.toggle("fa-bars");
  MenuToggleIcon.classList.toggle("fa-xmark");
});
