import _event_card from "./_includes/_event_card.js";

export const data = {
    eleventyImport: {
        collections: ["events"]
    },
    layout: "main.njk"
}

export function render(data) {
  return /*html*/`
    <section id="main" class="md:grid md:grid-cols-3" style="background-color: #FFD203 !important; background: url('/assets/Header_Image.webp') center center / cover no-repeat; width: 100%;">
        <h1 class="hidden">LAB 132 - IUT de Troyes</h1>
        <div class="flex justify-center p-8 col-start-2 col-end-2">
            <div class="flex flex-col">
                <div class="bg-secondary m-2 lg:m-8 p-6 border-8 border-black">
                    <img src="/assets/Logotype_Lab132_XCS.svg" width="320px" alt="lab132 logo">
                </div>
                <div class="block md:hidden bg-secondary border-8 my-8 w-full text-center p-4 lg:p-8 border-black rounded-3xl margarine-regular text-2xl text-primary size-fit">
                    ${(() => {
                        const now = new Date();
                        return this.capitalize(now.toLocaleDateString("fr-FR",{weekday:"short",year:"numeric",month:"numeric",day:"numeric"}) + " : " + ((now.getDay() == 4)?"OUVERT":"Fermé"));
                    })()}
                </div>
                <a href="#inscription" class="self-center">
                    <div class="bg-secondary border-8 m-8 border-black rounded-full w-24 h-24 md:w-32 md:h-32">
                        <svg class="pt-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="100%" height="100%" viewBox="0 0 16 16" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                            <g transform="matrix(-1.038715,0,-0,-1.093628,15.883392,16.795727)">
                                <path d="M6.465,5.819C6.73,5.482 7.147,5.284 7.59,5.284C8.032,5.284 8.449,5.482 8.714,5.819C9.554,6.882 10.714,8.353 11.664,9.556C11.984,9.961 12.035,10.502 11.797,10.954C11.559,11.406 11.072,11.692 10.54,11.692C8.754,11.692 6.451,11.692 4.661,11.692C4.125,11.692 3.634,11.404 3.394,10.948C3.155,10.492 3.206,9.947 3.528,9.539C4.476,8.339 5.629,6.877 6.465,5.819Z"/>
                            </g>
                        </svg>
                    </div>
                </a>
            </div>
        </div>
        <div class="flex flex-col justify-between col-start-3 col-end-3">
            <div class="bg-secondary border-8 my-16 p-4 lg:p-8 border-black rounded-3xl margarine-regular hidden md:block text-2xl text-primary size-fit">
                ${(() => {
                    const now = new Date();
                    return this.capitalize(now.toLocaleDateString("fr-FR",{weekday:"short",year:"numeric",month:"numeric",day:"numeric"}) + " : " + ((now.getDay() == 4)?"OUVERT":"Fermé"));
                })()}
            </div>
            <img class="self-end w-64 p-6" src="/assets/logo_iut_troyes_b.webp" alt="Logo IUT de Troyes">
        </div>
    </section>
    <section class="relative" id="inscription">
        <div class="flex justify-between p-12 md:p-24 pb-0">
            <div class="flex-grow[2] flex flex-col">
                <div>
                    <h2 class="text-3xl md:text-6xl pb-4">Infos pratiques</h2>
                    <div class="p-4 pl-16 text-lg md:text-2xl">
                        <img class="absolute -left-8 md:left-0" src="/assets/accent_1.svg" alt="">
                        <p class="p-4 margarine-regular">Nous sommes ouverts tous les jeudis après-midi.</p>
                        <p class="p-4 margarine-regular">Bâtiment A, salle A132 (à côté de la B.U)</p>
                        <p class="p-4 margarine-regular">Inscription falcultative.</p>
                        <p class="p-4 margarine-regular">L'usage des machines est gratuit.</p>
                    </div>
                </div>
                <div class="md:self-end w-2/3">
                    <form action="" method="post" class="flex flex-col my-16">
                        <img class="hidden md:block absolute left-16 w-16 mt-16" src="/assets/accent_2.svg" alt="">
                        <div class="grid grid-cols-3 grid-rows-3" style="grid-template-columns: 48px 140px 3fr;">
                            <img class="w-12 p-2 pb-0" src="/assets/icon_thumbprint.svg" alt="">
                            <label class="p-4 pb-0 text-lg md:text-2xl margarine-regular" for="maker">Maker :</label>
                            <input class="bg-transparent border-b border-white" type="text" name="maker" id="maker">
                            <img class="w-12 p-2 pb-0" src="/assets/icon_calendar.svg" alt="">
                            <label class="p-4 pb-0 text-lg md:text-2xl margarine-regular" for="maker">Date :</label>
                            <input class="bg-transparent border-b border-white" type="text" name="date" id="date">
                            <img class="w-12 p-2 pb-0" src="/assets/icon_cogs.svg" alt="">
                            <label class="p-4 pb-0 text-lg md:text-2xl margarine-regular" for="maker">Machine :</label>
                            <input class="bg-transparent border-b border-white" type="text" name="machine" id="machine">
                        </div>
                        <button type="submit" class="px-8 py-1 mt-8 rounded-xl border-2 self-end text-xl margarine-regular">Valider</button>
                    </form>
                </div>
            </div>
            <div class="hidden md:flex md:flex-col">
                <div class="flex flex-col self-end items-center margarine-regular mt-8 mr-24 text-2xl">
                    <p>
                        ${this.capitalize(new Date().toLocaleString("fr-FR", {month:"long"}))}
                    </p>
                    <div class="grid grid-cols-7 grid-rows-6 mt-4" style="grid-template-columns:repeat(7, 2.75rem);grid-template-rows:2.75rem 1px repeat(5, 2.75rem);">
                        <span class="m-auto">Lu</span>
                        <span class="m-auto">Ma</span>
                        <span class="m-auto">Me</span>
                        <span class="m-auto">Je</span>
                        <span class="m-auto">Ve</span>
                        <span class="m-auto">Sa</span>
                        <span class="m-auto">Di</span>
                        <span class="row-start-2 col-start-1 col-end-8 border border-white"></span>
                        ${(() => {
                            const now = new Date();
                            const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
                            const jsDay = firstDay.getDay();
                            // remap dow from 0=Sunday, 1=Monday... to Monday=0, Sunday=6
                            const offset = (jsDay + 6) % 7;
                            const blanks = Array(offset).fill('<span></span>').join('');
                            const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
                            const days = Array.from({length: daysInMonth}, (_, i) => `${(((i + offset) % 7)==3)?`<span class="w-full h-full bg-white text-primary rounded-full flex justify-center items-center">`:`<span class="m-auto">`}${i + 1}</span>`).join('');
                            return blanks + days;
                        })()}
                    </div>
                </div>
                <div class="self-end relative -bottom-32 right-11 text-5xl margarine-regular">
                    Inscription
                </div>
                <img class="hidden md:block absolute right-0 bottom-3 z-10"  src="/assets/accent_3a.svg" alt="">
            </div>
        </div>
    </section>
    <section id="matos" class="relative bg-secondary" style="max-height: 820px">
        <img class="hidden lg:block absolute top-0 right-1 w-64" src="/assets/accent_3b.svg" style="margin-top:-18.5rem" alt="">
        <div class="lg:grid lg:h-[820px]" style="grid-template-columns: 30% 70%;">
            <div class="bg-primary">
                <video id="machineVideo" class="h-full w-full object-cover" src="/assets/xtool.webm" autoplay muted loop></video>
            </div>
            <div class="p-8 hidden lg:grid relative">
                <div class="absolute origin-center w-72" style="transform: rotate(-6deg);top: 5%;left: 11%;" onmouseover="changeVideoSrc('/assets/cricut.webm')">
                    <div class="relative hover-accent">
                        <img class="absolute accent" style="transform: translate(-27px, 51px) scale(0.7);" src="/assets/accent_cricut.svg">
                        <img class="absolute" src="/assets/clip_cricut.svg" alt="cricut clipart">
                    </div>
                </div>
                <div class="absolute origin-center w-80" style="transform: rotate(0deg);top: 5%;left: 52%;" onmouseover="changeVideoSrc('/assets/xtool.webm')">
                    <div class="relative hover-accent">
                        <img class="absolute accent" style="transform: translate(-4px, -24px) scale(0.8);" src="/assets/accent_xtool.svg">
                        <img class="absolute" src="/assets/clip_xtool.svg">
                    </div>
                </div>
                <div class="absolute origin-center w-52" style="transform: rotate(-15deg);top: 40%;left: 5%;" onmouseover="changeVideoSrc('/assets/silkscreen.webm')">
                    <div class="relative hover-accent">
                        <img class="absolute accent" style="transform: translate(0px, 76px) scale(0.9);" src="/assets/accent_silkscreen.svg">
                        <img class="absolute" src="/assets/clip_silkscreen.svg" alt="silkscreen clipart">
                    </div>
                </div>
                <div class="absolute origin-center w-52" style="transform: rotate(-5deg);top: 32%;left: 36%;" onmouseover="changeVideoSrc('/assets/embroidery.webm')">
                    <div class="relative hover-accent">
                        <img class="absolute accent" style="transform: translate(-16px, 136px) scale(0.85);" src="/assets/accent_embroidery.svg">
                        <img class="absolute" src="/assets/clip_embroidery.webp" alt="embroidery clipart">
                    </div>
                </div>
                <div class="absolute origin-center w-64" style="transform: rotate(0deg);top: 64%;left: 26%;" onmouseover="changeVideoSrc('/assets/creality.webm')">
                    <div class="relative hover-accent">
                        <img class="absolute accent" style="transform: translate(70px, -13px) rotate(17deg) scale(-0.8, 0.8);" src="/assets/accent_3dprinter.svg">
                        <img class="absolute" src="/assets/clip_3dprinter.webp" alt="3d printer clipart">
                    </div>
                </div>
                <div class="absolute bottom-16 right-16">
                    <h2 class="text-6xl mr-12 text-primary text-right mb-16">Matos</h2>
                    <div class="relative w-96">
                        <img src="/assets/accent_text.svg" alt="">
                        <p class="absolute top-12 left-16 text-2xl w-80 text-primary margarine-regular">Découvre les machines en cliquant dessus !</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="caroussel">
        <div class="h-72 flex carousel-track" style="width: max-content;">
            <img class="sepia brightness-75" src="/assets/img_0.webp">
            <img class="sepia brightness-75" src="/assets/img_1.webp">
            <img class="sepia brightness-75" src="/assets/img_2.webp">
            <img class="sepia brightness-75" src="/assets/img_3.webp">
            <img class="sepia brightness-75" src="/assets/img_4.webp">
            <img class="sepia brightness-75" src="/assets/img_5.webp">
            <img class="sepia brightness-75" src="/assets/img_11.webp">
        </div>
        <div class="h-72 flex carousel-track-reverse" style="width: max-content;">
            <img class="sepia brightness-75" src="/assets/img_7.webp">
            <img class="sepia brightness-75" src="/assets/img_8.jpg">
            <img class="sepia brightness-75" src="/assets/img_12.webp">
            <img class="sepia brightness-75" src="/assets/img_9.webp">
            <img class="sepia brightness-75" src="/assets/img_10.webp">
            <img class="sepia brightness-75" src="/assets/img_13.webp">
            <img class="sepia brightness-75" src="/assets/img_14.webp">
        </div>
    </section>
    <section id="events">
        <div class="relative bg-primary p-8 md:px-16">
            <h2 class="text-6xl text-secondary pb-4">Évènements</h2>
            <img class="hidden md:block absolute bottom-12 right-12" src="/assets/accent_4.svg" alt="">
            <div class="flex flex-wrap p-8 justify-around">
                ${data.collections.events.sort((a, b) => {
                    return new Date(a.data.date) - new Date(b.data.date);
                }).slice(0, 3).map((event) => {
                    if (event.data.visibility == "hidden") return;
                    return _event_card(event)
                }).join("\n")}
            </div>
        </div>
    </section>
    <section id="contact" class="bg-secondary text-primary">
        <div class="flex flex-col items-center py-16">
            <img class="hidden md:block absolute left-12" src="/assets/accent_5.svg" alt="">
            <div class="md:w-1/3 flex flex-col items-center text-primary">
                <p class="text-3xl p-8 margarine-regular">Des questions ?</p>
                <p class="text-sm p-8">Laissez-nous un message, nous vous répondrons dès que possible.</p>
                <form class="w-full flex flex-col" id="contactForm" method="POST" action="messagerie.php">
                    <input class="p-3 m-2 border border-primary rounded-lg bg-transparent placeholder:text-gray-700 placeholder:text-sm" type="text" name="name" placeholder="Votre nom"/>
                    <input class="p-3 m-2 border border-primary rounded-lg bg-transparent placeholder:text-gray-700 placeholder:text-sm" type="text" name="email" placeholder="Votre email"/>
                    <input class="p-3 m-2 border border-primary rounded-lg bg-transparent placeholder:text-gray-700 placeholder:text-sm" type="text" name="promo" placeholder="Votre promo/parcours (MMI, GMP, CJ...)"/>
                    <textarea class="p-3 m-2 border border-primary rounded-lg bg-transparent placeholder:text-gray-700 placeholder:text-sm h-36 resize-none" name="message" placeholder="Message" style="vertical-align: top;"></textarea>
                    <button class="m-4" type="submit"><span class="text-xl text-white bg-primary py-2 px-12 rounded-full margarine-regular">Envoyer</span></button>
                </form>
            </div>
        </div>
    </section>
    <script>
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
    </script>
    `
}