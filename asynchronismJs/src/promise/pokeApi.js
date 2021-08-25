const XMLHtpRequest = require('xmlhttprequest').XMLHttpRequest;

let api = 'https://pokeapi.co/api/v2/pokemon/'
let pokemonSearch = 'spearow'
let search = false
let pokemon = {
    name: '',
    value: [],
}
let next = '';

function fetchPokemon(url_api) {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHtpRequest();
        xhttp.open('GET', url_api, false);
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    const error = new Error(`Error http ${url_api}`)
                    reject(error);
                }
            }
        })
        xhttp.send();
    })
}

function runPokemon(arr) {
    for (let i = 0; i < arr.results.length; i++) {
        if (arr.results[i].name === pokemonSearch) {
            pokemon.name = arr.results[i].name;
            search = true;
        }
    }
};

function runTypes(arr) {
    for (let i = 0; i < arr.types.length; i++) {
        pokemon.value.push(arr.types[i].type.name);
    }
};

fetchPokemon(api).then(results => {

})