import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import './ContactForm.css';
import closeButton from '../../assets/icons/close_button.png';
import ContactService from '../../services/ContactService';

const ContactForm = (props) => {
    let initialValue = {
        name: '',
        city: '',
        state: '',
        address: '',
        zip: '',
        phoneNumber: '',
        contactId: '',
        isUpdate: false,
        error: {
            name: '',
            city: '',
            state: '',
            address: '',
            zip: '',
            phoneNumber: ''
        }
    }

    const [formValue, setForm] = useState(initialValue);
    const [displayMessage, setDisplayMessage] = useState("");
    const params = useParams();

    const contactService = new ContactService();

    useEffect(() => {
        if (params.id) {
            getDataById(params.id);
        }
    }, []);

    const getDataById = (id) => {
        contactService.getContact(id).then((data) => {
            console.log("Data is ", data);
            let object = data.data;
            setData(object);
        }).catch((error) => {
            console.log("Error is ", error);
        });
    };

    const setData = (object) => {
        setForm({
            ...formValue, ...object, isUpdate: true,
        });
    };

    const changeValue = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value })
    }

    const validData = async () => {
        let isError = false;
        let error = {
            name: '',
            city: '',
            state: '',
            address: '',
            zip: '',
            phoneNumber: ''
        }
        if (formValue.name.length < 1) {
            error.name = 'Name is required field'
            isError = true;
        }
        if (formValue.state.length < 1) {
            error.state = 'State is required field'
            isError = true;
        }
        if (formValue.city.length < 1) {
            error.city = 'City is required field'
            isError = true;
        }
        if (formValue.address.length < 1) {
            error.address = 'Address is required field'
            isError = true;
        }
        if (formValue.zip.length < 1) {
            error.zip = 'Zip code is required field'
            isError = true;
        }
        if (formValue.phoneNumber.length < 1) {
            error.phoneNumber = 'Phone Number is required field'
            isError = true;
        }
        await setForm({ ...formValue, error: error })
        return isError;
    }

    const save = async (event) => {
        event.preventDefault();
        if (await validData()) {
            setDisplayMessage("Please check details entered");
            return;
        }

        let object = {
            name: formValue.name,
            phoneNumber: formValue.phoneNumber,
            city: formValue.city,
            state: formValue.state,
            address: formValue.address,
            id: '',
            zip: formValue.zip,
        }

        if (formValue.isUpdate) {
            contactService.updateContact(object, params.id).then((data) => {
                setDisplayMessage("Contact Updated Successfully");
                console.log("Data after update", data);
                reset();
                setTimeout(() => {
                    setDisplayMessage("");
                    window.location.replace("/home");
                }, 1000);
            }).catch((error) => {
                setDisplayMessage("Error while updating contact");
                console.log("Error while updating", error);
                setTimeout(() => {
                    setDisplayMessage("");
                }, 3000);
            });
        } else {
            contactService.addContact(object).then((data) => {
                setDisplayMessage("Contact Added Successfully");
                console.log("Data added: ", data.data);
                reset();
                setTimeout(() => {
                    setDisplayMessage("");
                    window.location.replace("/home");
                }, 1000);
            }).catch((error) => {
                setDisplayMessage("Error while adding contact");
                console.log("Error while adding employee");
                setTimeout(() => {
                    setDisplayMessage("");
                }, 3000);
            });
        }
    }

    const reset = () => {
        setForm({ ...initialValue, contactId: formValue.contactId, isUpdate: formValue.isUpdate, city: '', state: 'none' });
    }

    return (
        <div className="form-content">
            <form
                className="form"
                action="#"
                onSubmit={save}
            >
                <div className="form-head">
                    <h1 className="form-head-title">Person Address Form</h1>
                    <Link to="/home" className="close-button">
                        <img src={{ closeButton }} alt="close button"
                        /></Link>
                </div>
                <div className="row-content">
                    <label className="label text" htmlFor="name">Full Name</label>
                    <input
                        autoComplete="new-password"
                        className="input"
                        type="text"
                        id="name"
                        name="name"
                        value={formValue.name}
                        onChange={changeValue}
                        required
                    />
                    <error-output className="name-error" htmlFor="name"></error-output>
                </div>
                <div className="row-content">
                    <label className="label text" htmlFor="profile">Phone Number</label>
                    <input
                        autoComplete="new-password"
                        className="input"
                        type="tel"
                        id="tel"
                        name="phoneNumber"
                        value={formValue.phoneNumber}
                        onChange={changeValue}
                        required
                    />
                    <error-output className="phone-error" htmlFor="tel"></error-output>
                </div>
                <div className="row-content">
                    <div className="text-row">
                        <label className="label text" htmlFor="address">Address</label>
                        <textarea
                            autoComplete="new-password"
                            id="address"
                            className="input"
                            name="address"
                            placeholder=""
                            style={{ height: "100px" }}
                            value={formValue.address}
                            onChange={changeValue}
                            required
                        ></textarea>
                        <error-output className="address-error" htmlFor="address"></error-output>
                    </div>
                </div>
                <div className="row-content location-row">
                    <div>
                        <label className="label text" htmlFor="city">City</label>
                        <select value={formValue.city} onChange={changeValue} id="city" name="city">
                            <option value="" disabled>Select City</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                    </div>
                    <div>
                        <label className="label text" htmlFor="state">State</label>
                        <select id="state" name="state" value={formValue.state} onChange={changeValue}>
                            <option value="" disabled>Select City</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Telengana">Telengana</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                        </select>
                    </div>
                    <div>
                        <label className="label text" htmlFor="zip">Zipcode</label>
                        <input
                            autoComplete="new-password"
                            className="input"
                            type="number"
                            id="zip"
                            name="zip"
                            value={formValue.zip}
                            onChange={changeValue}
                            required
                        />
                    </div>
                </div>
                <div className="buttonParent">
                    <button type="submit" className="button addButton" id="addButton">
                        {formValue.isUpdate ? 'Update' : 'Add'}
                    </button>
                    <button type="reset" onClick={reset} className="resetButton button">Reset</button>
                </div>
                <div className="displaymessage">
                    {displayMessage}
                </div>
            </form>
        </div>
    )
}

export default ContactForm;