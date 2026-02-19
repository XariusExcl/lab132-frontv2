const machineVideo = document.getElementById('machineVideo');
const changeVideoSrc = (src) => {
    if (machineVideo.src.includes(src)) return;
    machineVideo.src = src;
    machineVideo.play();
}
document.querySelectorAll('#caroussel > div').forEach((track, index) => {
    const images = Array.from(track.querySelectorAll('img'));
    images.forEach(img => track.appendChild(img.cloneNode(true)));
});