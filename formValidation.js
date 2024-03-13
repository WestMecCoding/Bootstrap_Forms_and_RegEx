(function () {
  document.body.addEventListener("htmx:afterSwap", function (event) {
    console.log("swap occured");
    console.log(event.detail.target.id);
    console.log(event.target);
    console.log(event.target.querySelector("#email1"));
    if (document.querySelector("#email1") != null && document.querySelector("[type='button']")) {
      initEmailValidation();
    }
  });
  function initEmailValidation() {
    console.log("initing");
    const emailInput = document.getElementById("email1");
    const submitButton = document.querySelector('button[type="button"]');
    //   cache the emailInput and button
    // set an event listener on the submitButton if it's not null
    if (submitButton) {
      console.log("adding event listener to button");
      submitButton.addEventListener("click", validateEmail);
    }
    // declare the validateEmail function
    function validateEmail() {
      const pattern = /^[a-zA-Z0-9._-]{1,16}@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;
      if (pattern.test(emailInput.value)) {
        console.log("email is valid");
      } else {
        console.log("invalid email");
      }
    }
  }
})();
