async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase(); // input value select and convert into lowercase

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    ); // Fetching pokemon data into this url

    if (!response.ok) {
      throw new Error("Could not fetch resources"); // if response is not okay throw custom error
    }

    const data = await response.json(); // Convert response data into js object format
    const pokemonSprite = data.sprites.front_default; // get the front side of pokemon img

    const imgElement = document.getElementById("pokemonSprite"); // Select the img element into html

    imgElement.src = pokemonSprite; // add dynamic source in html img
    imgElement.style.display = "block"; // add style into css
  } catch (error) {
    console.log(error); // if pokemon is not here the catch method run
  }
}

fetchData();
