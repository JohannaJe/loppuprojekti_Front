const palveluurl = '/api/auth/signup';

export function rekisteroityminen(User, callback) {
    console.log(JSON.stringify(User));
    return fetch(palveluurl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(User)
    })
        .then((function(response) {
            callback();
        }));
}

const loginurl = '/api/auth/signin';

export function kirjauduSisaan(User, callback) {
    console.log(JSON.stringify(User));
    return fetch(loginurl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(User)
    })
        .then((function(response) {
            if (response.status === 200) {
                console.log(User.usernameOrEmail, "kirjautuneena");
            }
            callback();
        }));
}



