// import {notification} from "antd/lib/index";
import {notification} from 'antd';
const palveluurl = '/api/auth/signup';
notification.config({
    placement: 'topLeft',
    top: 70,
    duration: 3,
});

export function rekisteroityminen(User, callback) {
    console.log(JSON.stringify(User));
    return fetch(palveluurl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(User)
    })
        .then((function(response) {
            console.log('MIKä', response.status)
            if (response.status === 200 || response.status === 201)
                callback();
            else if (response.status===400) {
                console.log('uuuuu', response.error)
                response.json().then((data) => {
                    console.log(data.message, 'VASTAUS BODY');
                    callback(null, data.message)

                    notification.success({
                        message: data.message,
                        description: "Please try again.",
                    });

                });



            }


            else {
                console.log(response, 'aaa')
                console.log("TEE TÄHÄN JOTAIN PIAN, jos esim internal server error")
            }



        }));
}


// export function muokkaus(User, callback) {
//     console.log(JSON.stringify(User), 'TÄÄ LÄHTEE BÄKKII');
//     return fetch(palveluurl, {
//         method: 'UPDATE',
//         headers: {'Content-Type': 'application/json' },
//         body: JSON.stringify(User)
//     })
//         .then((function(response) {
//             callback();
//         }));
// }



const loginurl = '/api/auth/signin';

export function kirjauduSisaan(User, callback) {
    console.log(JSON.stringify(User));
    return fetch(loginurl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(User)
    })
        .then(response =>
            response.json()
                .then(json => {
                if(!response.ok) {
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


        // .then((function(response) {
        //     if (response.status === 200) {
        //         console.log(User.usernameOrEmail, "kirjautuneena");
        //     }
        //     callback();
        // }));
}
const updateurl = '/api/auth/updateData';
export function lahetaPaivitettavaData(User, callback) {
    console.log(JSON.stringify(User), 'LÄHTEE BÄKKII');
    return fetch(updateurl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(User)
    })
        .then(response => {
                    if (response.ok) {
                            console.log('JESSS')
                            callback();


                    } else {
                        console.log('BUUUUU')
                        // console.log(json)
                        // console.log(json.accessToken)
                        // localStorage.setItem('accessToken', json.accessToken);
                        // callback(json);
                    }


                });

}


export function getCurrentUser() {
    if(!localStorage.getItem('accessToken')) {
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

    if(localStorage.getItem('accessToken')) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};











