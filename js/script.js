"use strict";

/* ============================================================
   EASY ENGLISH CANADA
   Contact Form Handler
   ============================================================ */

/* ============================================================
   CONTACT FORMS — WEB3FORMS
   ============================================================ */

const forms = document.querySelectorAll(".contact-form");

forms.forEach((form) => {

  form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const result = form.querySelector(".form-result");
    const submitButton = form.querySelector(".form-submit");

    // Show loading message
    if (result) {
      result.textContent = "Please wait...";
      result.style.display = "block";
      result.classList.remove("success", "error");
    }

    // Disable button while submitting
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    const formData = new FormData(form);

    // Convert FormData to JSON
    const object = {};

    formData.forEach((value, key) => {
      object[key] = value;
    });

    const json = JSON.stringify(object);

    try {

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: json
        }
      );

      const data = await response.json();

      if (response.status === 200) {

        if (result) {
          result.textContent =
            "Thanks! Your message has been sent. We'll get back to you soon.";

          result.classList.add("success");
        }

        // Clear the form
        form.reset();

      } else {

        if (result) {
          result.textContent =
            data.message || "Something went wrong. Please try again.";

          result.classList.add("error");
        }

      }

    } catch (error) {

      console.error("Form submission error:", error);

      if (result) {
        result.textContent =
          "Something went wrong. Please try again later.";

        result.classList.add("error");
      }

    } finally {

      // Re-enable button
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Send Message";
      }

      // Hide message after 6 seconds
      if (result) {
        setTimeout(() => {
          result.style.display = "none";
        }, 6000);
      }
    }

  });

});


/* ============================================================
   AUTOMATIC PROGRAM SELECTION
   ============================================================ */

/*
   If a program page contains:

   <body data-program="IELTS Preparation">

   the contact form will automatically select
   IELTS Preparation.

   This means you don't have to manually select
   the program every time.
*/

const currentProgram = document.body.dataset.program;

if (currentProgram) {

  const programSelects = document.querySelectorAll(
    'select[name="program"]'
  );

  programSelects.forEach((select) => {

    const matchingOption = Array.from(select.options).find(
      (option) => option.value === currentProgram
    );

    if (matchingOption) {
      select.value = currentProgram;
    }

  });

}


/* ============================================================
   CURRENT YEAR
   ============================================================ */

/*
   Automatically updates elements such as:

   <span id="year"></span>

   to the current year.
*/

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}