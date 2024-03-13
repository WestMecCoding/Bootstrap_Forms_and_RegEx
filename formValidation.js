console.log("Hello World");
(function () {
  document.body.addEventListener("htmx:afterSwap", function () {
    // Check if the necessary elements are present
    if (
      document.querySelector("#email1") &&
      document.querySelector("#submit-button")
    ) {
      initEmailValidation();
    }
  });

  function initEmailValidation() {
    const emailInput = document.getElementById("email1");
    const submitButton = document.getElementById("submit-button");
    const form = emailInput.closest("form"); // Get the closest form ancestor

    // Prevent form submission with the Enter key
    if (form) {
      form.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault(); // Prevent form submission
          return false;
        }
      });
    }

    // Add click event listener to the submit button
    if (submitButton) {
      submitButton.addEventListener("click", validateEmail);
    }

    // Validation function
    function validateEmail() {
      const pattern = /^[a-zA-Z0-9._-]{1,16}@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$/;
      if (pattern.test(emailInput.value)) {
        console.log("email is valid");
        // Additional actions for a valid email, like submitting the form
      } else {
        console.log("invalid email");
        // Handle invalid email input
      }
    }
  }
})();
