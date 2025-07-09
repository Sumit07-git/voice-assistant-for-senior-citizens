document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("error-message");

  
  auth.onAuthStateChanged(user => {
    if (user) {
      window.location.href = "assistant.html";
    }
  });

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (errorMessage) errorMessage.textContent = "";

      try {
        await auth.signInWithEmailAndPassword(email, password);
        
      } catch (error) {
        if (errorMessage) {
          errorMessage.textContent = "Invalid email or password. Please try again.";
        } else {
          alert("Invalid email or password. Please try again.");
        }
        document.getElementById("password").value = "";
      }
    });
  }
});