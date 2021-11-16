import React from 'react';
import './ContactForm.css';
import closeButton from '../../assets/icons/close_button.png';

class ContactForm extends React.Component {
    render() {
        return (
            <div className="form-content">
                <form
                    className="form"
                    action="#"
                >
                    <div className="form-head">
                        <h1 className="form-head-title">Person Address Form</h1>
                        <a href="home.html" className="close-button">
                            <img src={{ closeButton }} alt="close button"
                            /></a>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="name">Full Name</label>
                        <input
                            autoComplete="new-password"
                            className="input"
                            type="text"
                            id="name"
                            name="name"
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
                            name="phone"
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
                                required
                            ></textarea>
                            <error-output className="address-error" htmlFor="address"></error-output>
                        </div>
                    </div>
                    <div className="row-content location-row">
                        <div>
                            <label className="label text" htmlFor="city">City</label>
                            <select id="city" name="City">
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Hyderabad">Hyderabad</option>
                            </select>
                        </div>
                        <div>
                            <label className="label text" htmlFor="state">State</label>
                            <select id="state" name="State">
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
                                required
                            />
                        </div>
                    </div>
                    <div className="buttonParent">
                        <button type="submit" className="button addButton" id="addButton">
                            Add
                        </button>
                        <button type="reset" className="resetButton button">Reset</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactForm;