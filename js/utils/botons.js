document.addEventListener("DOMContentLoaded", () => {
    const loggedUser = localStorage.getItem("loggedUser");
    const loginLink = document.getElementById("login-link");
    const registerLink = document.getElementById("register-link");
    const mobileLoginLink = document.getElementById("mobile-login-link");
    const mobileRegisterLink = document.getElementById("mobile-register-link");

    if (loggedUser) {
        loginLink?.classList.add("hidden");
        registerLink?.classList.add("hidden");
        mobileLoginLink?.classList.add("hidden");
        mobileRegisterLink?.classList.add("hidden");
    } else {
        loginLink?.classList.remove("hidden");
        registerLink?.classList.remove("hidden");
        mobileLoginLink?.classList.remove("hidden");
        mobileRegisterLink?.classList.remove("hidden");
    }
});