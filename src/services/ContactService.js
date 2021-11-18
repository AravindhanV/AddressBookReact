import config from '../config/config';
import AxiosService from './AxiosService';

export default class ContactService {
    baseUrl = config.baseUrl;
    addContact(data) {
        return AxiosService.postService(`${this.baseUrl}addressbookservice/post`, data);
    }

    getAllContacts() {
        return AxiosService.getService(`${this.baseUrl}addressbookservice`);
    }

    getContact(id) {
        return AxiosService.getService(`${this.baseUrl}addressbookservice/get/${id}`);
    }

    updateContact(data, id) {
        return AxiosService.putService(`${this.baseUrl}addressbookservice/update/${id}`, data);
    }

    deleteContact(id) {
        return AxiosService.deleteService(`${this.baseUrl}addressbookservice/delete/${id}`);
    }
}