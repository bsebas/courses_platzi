const HTTPRequest = require('xmlhttprequest').XMLHttpRequest;

let pokemonSearch = "pikachu";
let API = 'https://pokeapi.co/api/v2/pokemon/'
let pokemon = {
    'name': '',
    'type': [],
}
let isNext = false;
let searchCount = 0;
let nextList = '';

function sendPokemon(URL_API) {
    return new Promise((resolve, reject) => {
        let xhttp = new HTTPRequest();
        xhttp.open('GET', URL_API, true);
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                xhttp.status === 200 ? resolve(JSON.parse(xhttp.responseText)) : reject(new Error(`The URL is wrong`));
            }
        })
        xhttp.send();
    })
}

function travelPokemon(arr) {
    return new Promise((resolve, reject) => {
        let poke = '';
        for (let i = 0; i < arr.length; i++) {
            if (pokemonSearch === arr[i].name) {
                isNext = true;
                poke = arr[i].name;
            }
        }
        if (isNext === true) {
            resolve(poke);
        } else {
            reject(new Error('No se encontro el Pokemon'))
        }
    })
}

function travelTypePokemon(arr) {
    let arrType = [];
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arrType[i] = arr[i].type.name;
        }
        if (true) {
            resolve(arrType);
        } else {
            reject(new Error('No ay array de tipos'))
        }
    })
}

async function requestPokemon() {
    const listPokemon = await sendPokemon(API);
    let travelPoke = null;
    let requestPoke = null;
    let travelType = null;
    nextList = listPokemon.next;
    while (isNext !== true) {
        if (searchCount === 0) {
            try {
                travelPoke = await travelPokemon(listPokemon.results);
                requestPoke = await sendPokemon(`${API}${travelPoke}`);
                travelType = await travelTypePokemon(requestPoke.types);
                pokemon.name = travelPoke;
                pokemon.type = travelType;
            } catch {}
        } else {
            let sendList = await sendPokemon(nextList);
            try {
                travelPoke = await travelPokemon(sendList.results);
                requestPoke = await sendPokemon(`${API}${travelPoke}`);
                travelType = await travelTypePokemon(requestPoke.types);
                pokemon.name = travelPoke;
                pokemon.type = travelType;
            } catch {
                nextList = sendList.next;
            }
        }
        searchCount++;
    }
}

requestPokemon();