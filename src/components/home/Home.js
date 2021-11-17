import React from 'react';
import './Home.css';
import addIcon from '../../assets/icons/add-24px.svg'
import { Link } from 'react-router-dom';
import ContactService from '../../services/ContactService';
import Display from '../display/Display';

let contactService = new ContactService();

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactArray: []
        };

    }

    getAllContacts = () => {
        contactService.getAllContacts()
            .then(responseData => {
                console.log("Data received after GET Call " + responseData.data);
                this.setState({ contactArray: responseData.data });
            }).catch(error => {
                console.log("Error while fetching Contact List\nError : " + JSON.stringify(error));
            })
    }

    render() {
        return (
            <div className="main-content" onLoad={this.getAllContacts}>
                <div className="header-content">
                    <div className="addr-detail-text">
                        Person Details
                        <div className="addr-count">{this.state.contactArray.length}</div>
                    </div>
                    <Link to="/add" className="add-button">
                        <img src={addIcon} alt="" />Add Person</Link
                    >
                </div>
                <div className="table-main">
                    <Display contactArray={this.state.contactArray} />
                </div>
            </div>
        );
    }
}

export default Home;