const palveluurl = '/register';

export function rekisteroityminen(User, callback) {
    return fetch(palveluurl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(User)
    })
        .then((function(response) {
            callback();
        }));
}

