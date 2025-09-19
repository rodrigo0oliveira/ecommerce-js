class Utils {
    static formatMoney(value) {
        return value.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        });
    }

    static showMessage(message, type = "success") {
        const messageElement = document.getElementById("custom-message");
        const messageText = document.getElementById("message-text");

        if (!messageElement || !messageText) return;

        messageText.textContent = message;

        messageElement.classList.remove("bg-green-500", "bg-red-500");
        if (type === "success") {
            messageElement.classList.add("bg-green-500");
        } else if (type === "error") {
            messageElement.classList.add("bg-red-500");
        }

        messageElement.classList.remove("hidden");
        messageElement.classList.add("opacity-100");

        setTimeout(() => {
            messageElement.classList.remove("opacity-100");
            messageElement.classList.add("opacity-0");
            setTimeout(() => {
                messageElement.classList.add("hidden");
            }, 300);
        }, 3000);
    }
}
export default Utils;