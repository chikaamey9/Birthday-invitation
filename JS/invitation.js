document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("rsvpForm");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxuHy0U13wXCF-S1lhw97pHZxro_2_QoRI7m7RkJ7VZdxEetkA0c0JssVPW9aU1jWr2/exec", {
        method: "POST",
        body: formData,
      });

      alert("See You There! — Finindya Meylista 💌");
      form.reset();

    } catch (error) {
      alert("Sorry, there was an error submitting your RSVP.");
    }
  });

});