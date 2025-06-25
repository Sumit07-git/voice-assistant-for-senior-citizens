class UserRegistration {
    constructor(){
        this.initializeEventListeners()
        this.checkIfLoggedIn()
    }

    checkIfLoggedIn(){
        if(localStorage.getItem("isLoggedIn") === "true") {
            window.location.href = "assistant.html"
        }
    }

    initializeEventListeners(){
        const signupForm = document.getElementById("signupForm")
        if (!signupForm) {
            console.error("Signup form not found!");
            return;
        }
        signupForm.addEventListener("submit", (e) => {
            e.preventDefault()
            this.handleSignup(e)
        })
    }

    showMessage(message, type = "error"){
        const existingMessage = document.querySelector(".error-message, .success-message")
        if(existingMessage){
            existingMessage.remove()
        }

        const messageDiv = document.createElement("div")
        messageDiv.className = type === "error" ? "error-message" : "success-message"
        messageDiv.textContent = message

        const form = document.getElementById("signupForm")
        form.parentNode.insertBefore(messageDiv, form)
    }

    validateForm(formData){
        const { fullName, username, email, password, confirmPassword } = formData 

        if(!fullName.trim()){
            return "Please enter your full name"
        }

        if(!username.trim()){
            return "Please enter a username"
        }

        if(username.length < 3){
            return "Username must be at least 3 characters long"
        }

        if(!email.trim()){
            return "Please enter your email address"
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)){
            return "Please enter a valid email address"
        }

        if(!password){
            return "Please enter a password"
        }

        if(password.length < 6){
            return "Password must be at least 6 characters long"
        }

        if(password !== confirmPassword){
            return "Passwords do not match"
        }

        return null
    }

    checkUserExists(username, email){
        const users = JSON.parse(localStorage.getItem("registeredUsers")) || []
        const usernameExists = users.some((user) => user.username.toLowerCase() === username.toLowerCase())
        const emailExists = users.some((user) => user.email.toLowerCase() === email.toLowerCase())

        if(usernameExists){
            return "Username already exists. Please choose a different username"
        }

        if(emailExists){
            return "Email address already registered. Please use a different email"
        }

        return null
    }

    handleSignup(e){
        const formData = {
            fullName: document.getElementById("fullName").value,
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            confirmPassword: document.getElementById("confirmPassword").value,
        }

        const validationError = this.validateForm(formData)
        if(validationError){
            this.showMessage(validationError, "error")
            return
        }

        const userExistsError = this.checkUserExists(formData.username, formData.email)
        if(userExistsError){
            this.showMessage(userExistsError, "error")
            return
        }

        const newUser = {
            id: Date.now(),
            fullName: formData.fullName.trim(),
            username: formData.username.trim(),
            email: formData.email.trim().toLowerCase(),
            password: formData.password,
            createdAt: new Date().toISOString(),
            tasks: [],
            medication: [],
        }

        const users = JSON.parse(localStorage.getItem("registeredUsers")) || []
        users.push(newUser)
        localStorage.setItem("registeredUsers", JSON.stringify(users))

        this.showMessage("Account created successfully! Redirecting to login...", "success")
        setTimeout(() => {
            window.location.href = "index.html"
        }, 2000)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new UserRegistration()
})