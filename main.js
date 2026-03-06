const machineVideo = document.getElementById('machineVideo');
const today = document.getElementById('today');
const calendar = document.getElementById('calendar');
const changeVideoSrc = (src) => {
    if (machineVideo.src.includes(src)) return;
    machineVideo.src = src;
    machineVideo.play();
}
document.querySelectorAll('#caroussel > div').forEach((track, index) => {
    const images = Array.from(track.querySelectorAll('img'));
    images.forEach(img => track.appendChild(img.cloneNode(true)));
});

fetch("/dates.json").then((response) => {
    response.json().then((data) => {
        const now = new Date();
        today.innerText += " : " + (data.dates.includes(now.toLocaleDateString("fr-FR",{year:"numeric",month:"numeric",day:"numeric"}))?"OUVERT":"Fermé");

        const offset = (new Date(now.getFullYear(), now.getMonth(), 1).getDay() + 6) % 7 + 9;
        calendar.childNodes[now.getDate()+offset].classList = "w-full h-full border-2 border-white rounded-full flex justify-center items-center";
        data.dates.forEach((date) => {
            if (parseInt(date.substr(3,2)) != now.getMonth() + 1) return;
            const day = parseInt(date.substr(0,2));
            calendar.childNodes[day+offset].classList = "w-full h-full bg-white text-primary rounded-full flex justify-center items-center";
        })
    })
})