import { GlobalConstants } from "../Common/Global constants";

 export  async function newCount() {
    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',  // Utilisez le mode cors
    };

    return fetch(`${GlobalConstants.baseUrl}compteur/new`, params)
        .then(response =>
            response.json()
        )
        .then((data) => {
            console.log(data)
            return data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });


 }

export  async function showCount(id) {

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    };

    return fetch(`${GlobalConstants.baseUrl}compteur/${id}`, params)
        .then(response =>
            response.json()
        )
        .then((data) => {
            console.log(data)
            return data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });


}
export  async function countUp(id) {

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    };

    return fetch(`${GlobalConstants.baseUrl}compteur/${id}/up`, params)
        .then(response =>
            response.json()
        )
        .then((data) => {
            console.log(data)
            return data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });


}export  async function countDown(id) {

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    };

    return fetch(`${GlobalConstants.baseUrl}compteur/${id}/down`, params)
        .then(response =>
            response.json()
        )
        .then((data) => {
            console.log(data)
            return data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });


}

export  async function setResponseVisible(id) {

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    };

    return fetch(`${GlobalConstants.baseUrl}compteur/${id}/responseVisible`, params)
        .then(response =>
            response.json()
        )
        .then((data) => {
            console.log(data)
            return data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });


}
export  async function setResponseNoVisible(id) {

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    };

    return fetch(`${GlobalConstants.baseUrl}compteur/${id}/responseNoVisible`, params)
        .then(response =>
            response.json()
        )
        .then((data) => {
            console.log(data)
            return data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });


}

export  async function setExplicationVisible(id) {

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    };

    return fetch(`${GlobalConstants.baseUrl}compteur/${id}/explicationVisible`, params)
        .then(response =>
            response.json()
        )
        .then((data) => {
            console.log(data)
            return data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });


}
export  async function setExplicationNoVisible(id) {

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    };

    return fetch(`${GlobalConstants.baseUrl}compteur/${id}/explicationNoVisible`, params)
        .then(response =>
            response.json()
        )
        .then((data) => {
            console.log(data)
            return data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });


}