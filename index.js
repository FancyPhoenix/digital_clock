// Digital clock program

function updateClock() {
    //Create date obj
    const now = new Date();
    //Get the time variables prepared
    let hours = now.getHours();
    let marinium = hours >= 12 ? "PM" : "AM";
    hours = (hours % 12 || 12).toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds}(${marinium})`;
    //Update the text content of the clock
    document.getElementById("clock").textContent = timeString;
}
//Update clock every second
setInterval(updateClock,1000);