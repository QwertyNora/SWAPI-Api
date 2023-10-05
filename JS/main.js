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
        planetInfoDiv.innerHTML = '<p class="paragraphLoading">Loading...</p>';

        const response = await fetch(PLANET_URL);
        const data = await response.json();
        console.log(data);

        planetInfoDiv.innerHTML = ''; //Clear modal
        planetInfoDiv.innerHTML = `
            <h2 class="header">
                ${data?.name} <button data-close-button class="close-button">&times;</button>
            </h2>
            <p class="paragraph">Climate: ${data?.climate}</p>
            <p class="paragraph">Terrain: ${data?.terrain}</p>
            <p class="paragraph">Population: ${data?.population}</p>
        `;

        // Attach click event listener to the close button
        const closeModalButton = document.querySelector('[data-close-button]');
        closeModalButton.addEventListener('click', () => {
            closeModal();
        });

    } catch (error) {
        console.log("ERROR: " + error);
        const planetInfoDiv = document.getElementById("planet-info");
        planetInfoDiv.innerHTML = '<p>An error occurred while fetching data.</p>';
    }
};

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal() {
    const modal = document.querySelector('.modal.active');
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
    const planetInfoDiv = modal.querySelector('#planet-info');
    planetInfoDiv.innerHTML = ''; // Clear the content
}