const baseurl = "/api/testi";

function haeLista(callback) {
    fetch(baseurl)
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

export {haeLista};