document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (localStorage.getItem("isLoggedIn") === "true") {
        window.location.href = "assistant.html";
        return;
    }

    if (!loginForm) {
        console.error("Login form not found!");
        return;
    }

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username")?.value.trim();
        const password = document.getElementById("password")?.value;
        const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const foundUser = users.find(
            (user) =>
                user.username.toLowerCase() === username.toLowerCase() &&
                user.password === password
        );

        if (foundUser) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", foundUser.username);
            window.location.href = "assistant.html";
        } else {
            alert("Invalid username or password. Please try again.");
            document.getElementById("password").value = "";
        }
    });
});