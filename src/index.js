import "./styles.css";


async function getRandomNeko() {
    const response = await fetch('https://nekos.best/api/v2/neko');
    const json = await response.json();
    const img = json.results[0].url;
    
    document.getElementsByClassName('random-image')[0].setAttribute('src', img);
}

window.getRandomNeko = getRandomNeko;
// console.log("hello world!");