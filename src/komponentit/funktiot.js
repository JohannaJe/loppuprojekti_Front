const baseurl = "/api/testi";

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

export {haeLista};