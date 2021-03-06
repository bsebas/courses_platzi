let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let api = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

fetchData(api, (error, data) => {
    if (error) return console.error('Error 1');
    fetchData(api + data.results[0].id, function(error2, data2) {
        if (error2) return console.error(error2);

        fetchData(data2.origin.url, function(error3, data3) {

            if (error3) return console.log(error3);

            console.log(data.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
            console.log(data3.type);
            debugger

        })
    })
});