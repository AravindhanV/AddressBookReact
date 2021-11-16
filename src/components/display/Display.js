import React from "react";
import { Link } from 'react-router-dom';
import './Display.css';
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import editIcon from '../../assets/icons/create-black-18dp.svg';
import ContactService from "../../services/ContactService";

var contact = new ContactService();

const Display = (props) => {

    const remove = (id) => {
        contact.deleteContact(id);
        window.location.reload();
    }

    return (
        <table id="table-display" className="table">
            <thead>
                <tr>
                    <th style={{ width: '12%' }}>
                        Fullname
                    </th>
                    <th style={{ width: '12%' }}>
                        Address
                    </th>
                    <th style={{ width: '12%' }}>
                        City
                    </th>
                    <th style={{ width: '12%' }}>
                        State
                    </th>
                    <th style={{ width: '12%' }}>
                        Zip Code
                    </th>
                    <th style={{ width: '12%' }}>
                        Phone Number
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.contactArray && props.contactArray.map((contact, ind) => (
                        <tr key={ind}>
                            <td>{contact.name}</td>
                            <td>{contact.address}</td>
                            <td>{contact.city}</td>
                            <td> {contact.state}</td>
                            <td>{contact.zip}</td>
                            <td><img src={deleteIcon} onClick={() => remove(contact.id)} alt="delete" />
                                <Link to={"/edit/" + contact.id}><img src={editIcon} alt="edit" /></Link></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Display;