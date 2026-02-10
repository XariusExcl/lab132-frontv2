import getPosts from '../build.js';

export default function() {
  const posts = getPosts();
  
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
      ${posts.map(post => `
        <a href="/blog/${post.url}">
          <article class="flex flex-col bg-gray-950 bg-opacity-40 w-96 h-full p-6 rounded-xl">
            <h3 class="text-4xl font-bold pb-2">${post.title}</h3>
            <div class="w-10/12 flex items-center ml-auto">
              <hr class="flex-grow border-gray-400"/><span class="w-2"></span><span class="text-gray-400">${post.date}</span>
            </div>
            <p class="text-lg indent-8 h-72 pt-2 overflow-hidden text-ellipsis whitespace-normal italic" style="display: -webkit-box; -webkit-line-clamp: 10; -webkit-box-orient: vertical;">"${post.previewContent}...<p>
          </article>
        </a>
      `).join('')}
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