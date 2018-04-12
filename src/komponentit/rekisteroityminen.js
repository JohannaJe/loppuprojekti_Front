import {notification} from 'antd';

const palveluurl = '/api/auth/signup';

notification.config({
    placement: 'topLeft',
    top: 70,
    duration: 3,
});

export function rekisteroityminen(User, callback) {
    return fetch(palveluurl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(User)
    })
        .then((function (response) {
            if (response.status === 200 || response.status === 201)
                callback();
            else if (response.status === 400) {
                response.json().then((data) => {
                    callback(null, data.message)

                    notification.success({
                        message: data.message,
                        description: "Please try again.",
                    });

                });


            }


            else {
                console.log("Kuolema! ;)")
            }


        }));
}


const loginurl = '/api/auth/signin';

export function kirjauduSisaan(User, callback) {
    console.log(JSON.stringify(User));
    return fetch(loginurl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(User)
    })
        .then(response =>
            response.json()
                .then(json => {
                    if (!response.ok) {
                        console.log('VÄÄRÄ TUNNUS TAI SALIS')

                        notification.success({
                            message: 'Wrong username or password.',
                            description: "Please try again.",
                        });


                    } else {
                        console.log(json)
                        console.log(json.accessToken)
                        localStorage.setItem('accessToken', json.accessToken);
                        callback(json);
                    }


                }));

}

const updateurl = '/api/auth/updateData';

export function lahetaPaivitettavaData(User, callback) {
    console.log(JSON.stringify(User), 'LÄHTEE BÄKKII');
    return fetch(updateurl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(User)
    })
        .then(response => {
            if (response.ok) {
                callback();


            } else {
                console.log('Tätä erroria ei pitäisi tulla ikinä ;)')
            }


        });

}


export function getCurrentUser() {
    if (!localStorage.getItem('accessToken')) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: "/api/user/me",
        method: 'GET'
    });
}

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if (localStorage.getItem('accessToken')) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};











