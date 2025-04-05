export function Message() {
    alert("Hello!");
    const text = document.createElement("p");
    text.textContent = "sos";
    document.body.appendChild(text);
}