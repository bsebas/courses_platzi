const fetchData = require('../utils/fetchData')

const API = 'https://rickandmortyapi.com/api/character/';

const anotherFuntion = async(urlApi) => {
    try {
        const data = await fetchData(urlApi);
        const character = await fetchData(`${API}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url);
        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension);
    } catch {
        console.error(error)
    }
}

console.log('Before');
anotherFuntion(API);
console.log('After')