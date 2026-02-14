document.addEventListener("DOMContentLoaded", function () {
  //#region Observado de imagenes Task
  const imgOptions = {};
  const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      var dataImage = img.getAttribute("data-image");
      img.src = dataImage;
      imgObserver.unobserve(img);
    });
  }, imgOptions);
  //#endregion
  //#region Consume de appi con fetch
  const fetchPokemos = async (endpoint) => {
    let data;
    try {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      data = await response.json();
    } catch (error) {
      console.log(error);
    }
    return data.pokemon_species;
  };
  //#endregion
  //#region Ordenar Numeros de pokemon
  function orderNumber(str) {
    var mySubstring = str.substring(
      str.lastIndexOf("s/") + 2,
      str.lastIndexOf("/"),
    );
    return mySubstring;
  }
  //#endregion
  //#region Agregar pokemons al HTML
  async function getPokemons(numero, toggle) {
    let endpoint = `https://pokeapi.co/api/v2/generation/${numero}/`;
    var container = document.getElementById("container");
    container.innerHTML = "";
    let pokemons = [];
    pokemons = await fetchPokemos(endpoint);
    for (let j = 0; j < pokemons.length; j++) {
      pokemons[j].nr = orderNumber(pokemons[j].url);
    }
    pokemons.sort((a, b) => a.nr - b.nr);
    pokemons.forEach((item) => {
      let numero3decimales = orderNumber(item.url);
      if (numero3decimales < 10) {
        numero3decimales = "0" + numero3decimales;
      }
      if (numero3decimales < 100) {
        numero3decimales = "0" + numero3decimales;
      }
      let divitem = document.createElement("li");
      divitem.classList.add("item");
      var img = new Image();
      const toggleurl = toggle
        ? "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"
        : "https://serebii.net/pokemongo/pokemon/";
      img.src =
        "https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif";

      const urlImage = `${toggleurl}${numero3decimales}.png`;
      img.setAttribute("data-image", urlImage);
      img.setAttribute("class", "pokeimage");
      img.setAttribute("alt", item.name);

      divitem.innerHTML = `<div> ${orderNumber(item.url)}-${item.name} </div>`;
      divitem.appendChild(img);
      container.appendChild(divitem);
      imgObserver.observe(img)
    });
  }
  //#endregion
  //#region Agregar Generaciones
  var numero = 1;
  getPokemons(numero);
  var toggle = false;
  btnicono.addEventListener("click", function () {
    toggle = !toggle;
    getPokemons(numero, toggle);
  });
  var geners = [
    "genartion-1",
    "genartion-2",
    "genartion-3",
    "genartion-4",
    "genartion-5",
    "genartion-6",
    "genartion-7",
  ];

  var filters = document.getElementById("filters");
  var gen = "";
  for (let i = 0; i < geners.length; i++) {
    gen += `<input type="radio" class="radio-gens" id=${geners[i]} value=${i + 1} name="generation" checked>
    <label for=${geners[i]} class="label-gens">${geners[i]}</label>`;
  }
  filters.innerHTML = gen;
  filters.addEventListener("click", function (e) {
    let target = e.target.type;
    if (target == "radio") {
      getPokemons(e.target.value, toggle);
      title.innerHTML = "Pokemon" + e.target.id;
    }
  });
});
//#endregion
