import {GlobalConstants} from "../Common/Global constants";


export  async function addUser(userId1, userId2, userId3) {

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

    };

    return fetch(`${GlobalConstants.baseUrl}participant/${userId1}/${userId2}/${userId3}`,params)
        .then(response =>
            response.json()

        )
        .then(data => {
            console.log(data)
            return data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });

}

export default async function lastPart() {

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return await fetch(`${GlobalConstants.baseUrl}party/start/last`,params)
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


export async function getParty(id) {

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    };

    return await fetch(`${GlobalConstants.baseUrl}party/make/${id}`)
        .then(response =>
            response.json()

        )
        .then(data => {
            console.log(data)
            return data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });

}export async function addPoint(questionId,userId) {

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

    };

    return fetch(`${GlobalConstants.baseUrl}point/question/${questionId}/user/${userId}`)
        .then(response =>
            response.json()

        )
        .then(data => {
            console.log(data)
            return data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });

}

export async function getScoreData() {

    const params = {
        "method": "GET",
        "headers": {
            'Content-Type': 'application/json',
        },

    };

    return await fetch(`${GlobalConstants.baseUrl}score/`)
        .then(response =>
            response.json()
        )
        .then(data => {
            console.log(data)
            return data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });

}

export async function setFormulaireNbAtCount(compteurId,nb) {

    const params = {
        "method": "GET",
        "headers": {
            'Content-Type': 'application/json',
        },

    };

    return await fetch(`${GlobalConstants.baseUrl}compteur/${compteurId}/form/${nb}`)
        .then(response =>
            response.json()
        )
        .then(data => {
            console.log(data)
            return data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
        });

}