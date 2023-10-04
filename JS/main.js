// const renderPlanetInfo = (item) => {
//     const planetInfoDiv = document.getElementById("planet-info");
//     planetInfoDiv.innerHTML = `
//         <h2 class="header">${item?.name}</h2>
//         <p class="paragraph">Climate: ${item?.climate}</p>
//         <p class="paragraph">Terrain: ${item?.terrain}</p>
//         <p class="paragraph">Population: ${item?.population}</p>
//     `;
// }

// const getPlanetData = async () => {
//     try {
//         const response = await fetch(PLANET_URL);
//         const data = await response.json();
//         console.log(data); 
//         renderPlanetInfo(data);
//     } catch (error) {
//         console.log("ERROR: " + error);
//     }
// };



const PLANET_URL = "https://swapi.dev/api/planets/23/";


const getPlanetData = async () => {
    try {
        const planetInfoDiv = document.getElementById("planet-info"); 
        planetInfoDiv.innerHTML = '<p>Loading...</p>'; // Visar loading meddelande

        const response = await fetch(PLANET_URL);
        const data = await response.json();
        console.log(data); // Loggar hämtad data till consol

        // Byter ut loading-message till hämtad data:
        planetInfoDiv.innerHTML = `
            <h2 class="header">${data?.name}</h2>
            <p class="paragraph">Climate: ${data?.climate}</p>
            <p class="paragraph">Terrain: ${data?.terrain}</p>
            <p class="paragraph">Population: ${data?.population}</p>
        `;
    } catch (error) {
        console.log("ERROR: " + error);
        const planetInfoDiv = document.getElementById("planet-info");
        planetInfoDiv.innerHTML = '<p>An error occurred while fetching data.</p>';
    }
};