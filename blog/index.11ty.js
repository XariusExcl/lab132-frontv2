export function data() {
    return {
        eleventyImport: {
            collections: ["events"]
        }
    }
}

export function render(data) {
  return /*html*/`
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAB132 - IUT de Troyes</title>
    <link rel="stylesheet" href="/style.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Margarine&display=swap" rel="stylesheet">
  </head>
  <body class="flex flex-col justify-between min-h-screen">
    <nav class="w-full flex p-4 justify-around bg-primary">
        <a class="w-40" href="">
            <img class="mt-4" src="/assets/logo_lab132_wide.svg" alt="Logo Lab 132">
        </a>
        <a href="#inscription">
            <div class="p-4 text-2xl margarine-regular">Inscription</div>
        </a>
        <a href="#matos">
            <div class="p-4 text-2xl margarine-regular">Matos</div>
        </a>
        <a href="">
            <div class="p-4 text-2xl margarine-regular">Lieu</div>
        </a>
        <a href="">
            <div class="p-4 text-2xl margarine-regular">Horaires</div>
        </a>
        <a href="#contact">
            <div class="p-4 text-2xl margarine-regular">Contact</div>
        </a>
    </nav>
    <section id="main" class="grid grid-cols-3" style="background-color: #FFD203 !important; background: url('/assets/Header_Image.webp') center center / cover no-repeat; width: 100%;">
        ${data.collections.events.map((event) => { 
            return `
            <div class="card w-96">
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
            </div>`
        }).join("\n")}
    </section>
    <footer class="grid grid-cols-4 py-8 px-24">
        <div class="flex flex-col justify-center">
            <img class="w-40 my-4" src="/assets/logo_lab132_wide.svg" alt="Logo Lab 132">
            <b class="text-xl">2026</b>
        </div>
        <div class="flex flex-col justify-center">
            <a href="">
                <img class="w-8" src="/assets/logo_instagram.svg" alt="Instagram logo">
            </a>
        </div>
        <div class="flex flex-col  justify-center">
            <p>IUT Troyes</p>
            <p>9 rue de Québec</p>
            <p>CS 90396</p>
            <p>10026 Troyes Cedex</p>
            <p>@iut.fr</p>
        </div>
        <div class="flex flex-col">
            <p class="text-sm p-2">LAB 132 est entièrement géré par l'IUT de Troyes (URCA)</p>
            <img src="/assets/logo_iut_troyes_b.webp" class="p-2 w-32" style="filter: invert(1);" alt="Logo IUT de Troyes">
            <p class="text-sm p-2">&copy; 2026 | IUT de Troyes</p>
        </div>
    </footer>
</body>
</html>
  `;
}