document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");
  const errorMessage = document.getElementById("error-message");



  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password") ? document.getElementById("confirm-password").value : password;

      if (errorMessage) errorMessage.textContent = "";

      if (password !== confirmPassword) {
        if (errorMessage) {
          errorMessage.textContent = "Passwords do not match.";
        } else {
          alert("Passwords do not match.");
        }
        document.getElementById("password").value = "";
        if (document.getElementById("confirm-password")) {
          document.getElementById("confirm-password").value = "";
        }
        return;
      }

      try {
        await auth.createUserWithEmailAndPassword(email, password);
        if (errorMessage) {
          errorMessage.style.color = "green";
          errorMessage.textContent = "Account created successfully! Redirecting to login page...";
        } else {
          alert("Account created successfully! Redirecting to login page...");
        }
        await auth.signOut(); 
        setTimeout(() => {
          window.location.href = "index.html"; 
        }, 1800);
      } catch (error) {
        if (errorMessage) {
          errorMessage.style.color = "red";
          errorMessage.textContent = error.message;
        } else {
          alert(error.message);
        }
        document.getElementById("password").value = "";
        if (document.getElementById("confirm-password")) {
          document.getElementById("confirm-password").value = "";
        }
      }
    });
  }
});