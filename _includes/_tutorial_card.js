export default function (tutorial) {
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + String(string).slice(1);
    }
    return `
        <div class="w-10/12 m-6">
            <a class="w-full" href="${tutorial.url}">
                <div class="relative w-full bg-secondary text-primary rounded-2xl">
                    <div class="absolute w-full h-full" style="background-image: url('${tutorial.data.thumbnail ?? "/assets/Header_Image.webp" }'); background-size: cover; background-position: center; mask-image: linear-gradient(to right, transparent 0%, transparent 50%, black 100%); -webkit-mask-image: linear-gradient(to right, transparent 0%, transparent 50%, black 100%);">
                    </div>
                    <div class="p-2 pl-4">
                        <h3 class="m-1 text-3xl">${tutorial.data.title}</h3>
                        <p class="ml-4 text-lg">${tutorial.data.description}</p>
                        <hr class="m-0.5 mt-1 border-primary">
                        <div>
                            ${tutorial.data.labels ? tutorial.data.labels.split(" ").map((label) => {
                                return `<span class="text-xs px-2 rounded-full border border-primary">${label.toUpperCase()}</span>`
                            }).join("\n") : ''}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `
}