const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let api = 'https://pokeapi.co/api/v2/pokemon/'
let pokemonSearch = 'pikachu'
let search = false
let pokemon = {
    name: '',
    value: [],
}
let next = '';

function fetchPokemon(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, false);
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error(`Error http ${url_api}`)
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

function runPokemon(arr) {
    for (let i = 0; i < arr.results.length; i++) {
        if (arr.results[i].name === pokemonSearch) {
            pokemon.name = arr.results[i].name;
            search = true;
        }
    }
}

function runTypes(arr) {
    for (let i = 0; i < arr.types.length; i++) {
        pokemon.value.push(arr.types[i].type.name);
    }
}

fetchPokemon(api, (error, poke) => {
    if (error) return console.error(error);
    runPokemon(poke);
    try {
        fetchPokemon(api + pokemon.name, (error, type) => {
            if (error) return console.error(error);
            runTypes(type)
        })
    } catch {
        next = poke.next;
        while (!search) {
            fetchPokemon(`${next}`, (error, list) => {
                if (error) return console.error(error);
                runPokemon(list);
                fetchPokemon(`${api}${pokemon.name}`, (error, types) => {
                    if (error) return console.error(error);
                    try {
                        runTypes(types)
                    } catch {
                        console.error("OH ay un error para encontrar el tipo de pokemon")
                    }
                })
                if (!search) {
                    next = list.next;
                } else {
                    next = '';
                }
            })
        }
    }
    console.log(`${pokemon.name} ${pokemon.value}`)
})