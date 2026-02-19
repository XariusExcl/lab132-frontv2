import _event_card from '../_includes/_event_card.js';

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
        <h2 class="text-6xl text-secondary pb-4">Tutoriels</h2>
        <div class="flex flex-wrap justify-around my-8">
            ${data.collections.tutorials?.map((tutorials) => {
                if (tutorials.data.visibility == "hidden") return;
                return _event_card(tutorials)
            }).join("\n")}
        </div>
        <h2 class="text-6xl text-secondary pb-4">Évènements</h2>
        <div class="flex flex-wrap justify-around my-8">
            ${data.collections.events?.sort((a, b) => {
                return new Date(a.data.date) - new Date(b.data.date);
            }).map((event) => {
                if (event.data.visibility == "hidden") return;
                return _event_card(event)
            }).join("\n")}
        </div>
    </section>
  `;
}