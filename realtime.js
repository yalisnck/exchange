var datetime = new Date()
document.getElementById("realtime").textContent = datetime;
function refreshTime() {
    const timeDisplay = document.getElementById("realtime");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);