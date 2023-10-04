// Rodia = 23
const PLANET_URL = "https://swapi.dev/api/planets/23/";
const planetInfo = {};

const addToArray = (dataToAdd) => {
    planetInfo.push(planetInfo);
};

const getPlanetData = async () => {
    try {
        let results = await fetch(PLANET_URL);
        const data = await results.json();
        console.log(data);

        let name = data.name;
        let climate = data.climate;
        let terrain = data.terrain;
        let population = data.population;

        data.forEach((planetInfo) => {
            addToArray(planetInfo);
        });

        // planetInfo.push(name, climate, terrain, population);
    }
    catch(error) {
        console.log("ERROR: " + error);
    }
};

console.log(planetInfo);

const getCard = (item) => {
    const imgEl = document.createElement("img");
    const articleEl = document.createElement("article");
    const headingEl = document.createElement("h2");
    const pEl = document.createElement("p");

    articleEl.dataset.isopen = false;

    articleEl.addEventListener("click", (e) => {
        if(articleEl.dataset.isopen){
            articleEl.appendChild(imgEl);
            articleEl.appendChild(headingEl);
            articleEl.appendChild(pEl);
        } else {
            articleEl.remove(imgEl);
            articleEl.remove(headingEl);
            articleEl.remove(pEl);
        }
    });

};

const renderPlanetInfo = (item) => {
    const articleEl = document.createElement("article");
    articleEl.innerHTML = `
        <h2 class="header">${item?.name}</h2>
        <p>${item.name} ${item.climate} ${item.terrain} ${item.population}</p>
    `;

    document.body.appendChild(articleEl);
}


// const renderGithubRepos = (item) => {
//     const articleEl = document.createElement("article");
//     articleEl.innerHTML = `
//         <h2 class="header">${item?.name}</h2>
//         <a target='blank' href='${item?.html_url}'> ${item?.html_url}</a>
//     `;

//     document.body.appendChild(articleEl);
// };