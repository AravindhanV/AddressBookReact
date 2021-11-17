import config from '../config/config';
import AxiosService from './AxiosService';

export default class ContactService {
    baseUrl = config.baseUrl;
    addContact(data) {
        return AxiosService.postService(`${this.baseUrl}addressbook`, data);
    }

    getAllContacts() {
        return AxiosService.getService(`${this.baseUrl}addressbook`);
    }

    getContact(id) {
        return AxiosService.getService(`${this.baseUrl}addressbook/${id}`);
    }

    updateContact(data, id) {
        return AxiosService.putService(`${this.baseUrl}addressbook/${id}`, data);
    }

    deleteContact(data) {
        return AxiosService.deleteService(`${this.baseUrl}addressbook/` + data);
    }
}