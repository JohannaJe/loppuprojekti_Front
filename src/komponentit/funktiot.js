const baseurl = "/api/testi";
let lahdetaulukko = [];


function haeLista(callback, feed) {
    let url = baseurl;
    if (feed) {
        url += "?name="+feed;
    }
    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                const errviesti = {
                    status: response.status,
                    statusText: response.statusText,
                    viesti: "Listanhaku"
                };
                throw errviesti;
            }
            // console.log(response.json())
            return response.json();

        })

        .then(function (lista) {
            callback(lista);
        });
}

function taulukkoon(lahde) {
    lahdetaulukko.push(lahde);
}

function poistaTaulukosta (lahde) {
    const poistettava = lahdetaulukko.indexOf(lahde);
    lahdetaulukko.splice(poistettava, 1);

}




export {haeLista};
export {taulukkoon};
export {poistaTaulukosta};
export {lahdetaulukko};