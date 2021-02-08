import api from './api';

export default class MercadoLibreService {
    getBusqueda = (query) => {
        return new Promise((resolve, reject) => {
            api.get(`/api/item?q=${query}`)
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err)
                });

        });
    }

    getItem = (query) => {
        return new Promise((resolve, reject) => {
            api.get(`/api/item/${query}`)
                .then(data => {
                    resolve(data);
                })
                .catch(err => {
                    reject(err)
                });

        });
    }
}