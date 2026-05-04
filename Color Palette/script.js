const generateBtnEl = document.getElementById("generateBtn");
const paletteEl = document.getElementById("palette");

generateBtnEl.addEventListener("click", generateColorPalette);

paletteEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-copy")) {
        const hexValue = e.target.previousElementSibling.textContent;
        copyToClipBoard(hexValue, e.target);

    } else if (e.target.classList.contains("box")) {
        const infoDiv = e.target.nextElementSibling

        const hexValue = infoDiv.querySelector(".hex-value").textContent;

        const copyBtn = infoDiv.querySelector(".fa-copy");

        copyToClipBoard(hexValue, copyBtn)


    }


});

function copyToClipBoard(text, iconEl) {
    console.log(iconEl);

    navigator.clipboard.writeText(text)
        .then(() => showCopySuccess(iconEl))
        .catch(err => console.log(err)
        );
}

function showCopySuccess(element) {
    element.classList.replace("fa-copy", "fa-check")
    element.style.color = "green";

    setTimeout(() => {
        element.classList.replace("fa-check", "fa-copy")
        element.style.color = "";

    }, 1000);

}

function renderPalette(colors) {
    const fragment = document.createDocumentFragment();
    paletteEl.innerHTML = "";

    colors.forEach(color => {
        const article = document.createElement("article");
        article.classList.add("color-box");
        article.innerHTML = `
     <div class="box" style="background-color: ${color};"></div>
        <div class="color-info">
        <span class="hex-value">${color}</span>
        <i class="fa-solid fa-copy"></i>
    </div>`;
        fragment.appendChild(article)
    });
    paletteEl.appendChild(fragment)
}

function generateColorPalette() {
    const color = Array.from(
        { length: 6 },
        () => generateColor()
    );

    renderPalette(color)

}

function generateColor() {
    const hexValue = "0123456789ABCDEF";
    return "#" + Array.from(
        { length: 6 },
        () => hexValue[Math.floor(Math.random() * 16)]
    ).join("");
}

generateColorPalette()