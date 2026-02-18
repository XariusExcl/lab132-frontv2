export default function (event) {
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + String(string).slice(1);
    }
    return `
        <div class="flex justify-center md:mx-8 my-8">
            <a class="card w-72 md:w-96" href="${event.url}">
                <figure class="h-72 rounded-t-2xl bg-accent" style="background-image: url('${event.data.thumbnail ?? "/assets/Header_Image.webp" }');background-size: cover; background-position: center;">
                    <div class="relative top-4 left-4 inline-flex px-2 py-1 bg-secondary text-primary w-auto max-w-max margarine-regular">
                        <div class="flex flex-col items-center">
                            <span class="text-xl">${event.date.getDate()}</span>
                            <span class="text-lg -mt-2">${capitalize(event.date.toLocaleDateString("fr-FR", {month:"short"}))}</span>
                        </div>
                        ${((event.data.dateend != undefined) ?
                            `<div class="w-px bg-primary self-stretch mx-2 my-2"></div>
                            <div class="flex flex-col items-center">
                                <span class="text-xl">${event.data.dateend.getDate()}</span>
                                <span class="text-lg -mt-2">${capitalize(event.data.dateend.toLocaleDateString("fr-FR", {month:"short"}))}</span>
                            </div>`
                        :'')}
                    </div>
                </figure>
                <div class="bg-secondary text-primary p-2 rounded-b-2xl">
                    <h3 class="text-xl">${event.data.title}</h3>
                    <p>${event.data.description}</p>
                    <hr class="m-0.5 mt-1 border-primary">
                    <p class="text-xs p-1">${event.data.location}</p>
                    <div>
                        ${event.data.labels ? event.data.labels.split(" ").map((label) => {
                            return `<span class="text-xs px-2 rounded-full border border-primary">${label.toUpperCase()}</span>`
                        }).join("\n") : ''}
                    </div>
                </div>
            </a>
        </div>
    `
}