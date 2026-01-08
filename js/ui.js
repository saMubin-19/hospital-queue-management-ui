/* =========================
   GLOBAL UI INTERACTIONS
========================= */

// Safe DOM ready
document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------
     NAVIGATION BUTTONS
  ------------------------- */
  document.querySelectorAll("[data-link]").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-link");
      if (target) {
        window.location.href = target;
      }
    });
  });

  /* -------------------------
     BOOK APPOINTMENT
  ------------------------- */
  document.querySelectorAll(".btn-book").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Appointment booked successfully!\nYour token is being generated.");
      window.location.href = "token-success.html";
    });
  });

  /* -------------------------
     EMERGENCY REQUEST
  ------------------------- */
  document.querySelectorAll(".btn-emergency").forEach(btn => {
    btn.addEventListener("click", () => {
      const confirmEmergency = confirm(
        "Emergency requests are reviewed by doctors.\nDo you want to continue?"
      );
      if (confirmEmergency) {
        alert("Emergency request sent to doctor.");
      }
    });
  });

  /* -------------------------
     TOKEN CANCEL
  ------------------------- */
  document.querySelectorAll(".btn-cancel").forEach(btn => {
    btn.addEventListener("click", () => {
      const ok = confirm("Are you sure you want to cancel your token?");
      if (ok) {
        alert("Your token has been cancelled.");
        window.location.href = "../index.html";
      }
    });
  });

  /* -------------------------
     STAR RATING (FEEDBACK)
  ------------------------- */
  const stars = document.querySelectorAll(".star");
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      stars.forEach(s => s.classList.remove("active"));
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("active");
      }
    });
  });

});
