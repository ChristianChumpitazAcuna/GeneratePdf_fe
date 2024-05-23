import axios, { AxiosResponse } from "axios";

const API_URL = 'http://localhost:8080/api/appsscript';

export default class ApiService {

    async getData(): Promise<any> {
        try {
            const response: AxiosResponse = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    async postData(): Promise<any> {
        try {
            const response: AxiosResponse = await axios.post(API_URL);
            return response.data;
        } catch (error) {
            console.log('Error: ', error);
        }
    }
}