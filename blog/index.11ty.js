export const data = {
    eleventyImport: {
        collections: ["events"]
    },
    layout: "main.njk"
}

export function render(data) {
  return /*html*/`
    <section id="main" class="flex relative" style="background-color: #FFD203 !important;  width: 100%;">
        <div class="opacity-50 w-full h-full absolute top-0 bottom-0"  style="background: url('/assets/Header_Image.webp') center center / cover no-repeat;">
        </div>
        <h1 class="text-7xl p-8 my-32 w-full text-primary text-center">Articles</h1>
    </section>
    <section id="main" class="p-16 bg-primary text-secondary">
        <h2 class="text-6xl text-secondary pb-4">Évènements</h2>
        <div class="grid grid-cols-3 my-8">
            ${data.collections.events.map((event) => { 
                return `
                <div class="flex justify-center">
                    <a class="card w-96" href="${event.url}">
                        <figure class="h-72 rounded-t-2xl" style="background-image: url('https://placehold.co/384x288');">
                            <div class="relative top-4 left-4 inline-flex px-2 py-1 bg-secondary text-primary w-auto max-w-max margarine-regular">
                                <div class="flex flex-col items-center">
                                    <div class="text-xl">20</div>
                                    <div class="text-lg -mt-2">Janv.</div>
                                </div>
                                <div class="w-px bg-primary self-stretch mx-2 my-2"></div>
                                <div class="flex flex-col items-center">
                                    <div class="text-xl">20</div>
                                    <div class="text-lg -mt-2">Févr.</div>
                                </div>
                            </div>
                        </figure>
                        <div class="bg-secondary text-primary p-2 rounded-b-2xl">
                            <h3 class="text-xl">${event.data.title}</h3>
                            <p>${event.data.description}</p>
                            <hr class="m-0.5 mt-1 border-primary">
                            <p class="text-xs p-1">Salle H009 | 14h - 17h</p>
                            <div><span class="text-xs px-2 rounded-full border border-primary">ATELIER</span></div>
                        </div>
                    </a>
                </div>
                `
            }).join("\n")}
        </div>
        <h2 class="text-6xl text-secondary pb-4">Tutoriels</h2>
        <div class="my-8">
        
        <div>
    </section>
  `;
}