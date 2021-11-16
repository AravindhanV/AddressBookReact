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

    getContacts(id) {
        return AxiosService.getService(`${this.baseUrl}addressbook/${id}`);
    }

    updateContacts(data) {
        return AxiosService.putService(`${this.baseUrl}addressbook/${data.id}`, data);
    }

    deleteContacts(data) {
        return AxiosService.deleteService(`${this.baseUrl}addressbook/` + data);
    }
}