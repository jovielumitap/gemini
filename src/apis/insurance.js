import axios from 'axios';
import {API_URL} from "../config";
import ConfigurationAPI from './configurationApi';
export class InsuranceAPI extends ConfigurationAPI {
    register = (body) => {
        return new Promise((resolve, reject) => {
            return axios.post(`${API_URL}/insurances`, body, {
                headers: {...this.initHeaders(), 'Content-Type': 'multipart/form-data'}
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
    fetchAll = (id) => {
        return new Promise((resolve, reject) => {
            return axios.get(`${API_URL}/insurances?body_id=${id}`,  {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
    updateItem = (id, body) => {
        return new Promise((resolve, reject) => {
            return axios.put(`${API_URL}/insurances/${id}`, ({outdoor: body}), {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };

    deleteItem = (id) => {
        return new Promise((resolve, reject) => {
            return axios.delete(`${API_URL}/insurances/${id}`, {
                headers: this.initHeaders()
            }).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        })
    };
}
