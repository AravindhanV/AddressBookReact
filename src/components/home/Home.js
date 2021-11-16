import React from 'react';
import './Home.css';
import addIcon from '../../assets/icons/add-24px.svg'
import deleteIcon from '../../assets/icons/delete-black-18dp.svg';
import editIcon from '../../assets/icons/create-black-18dp.svg';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactArray: []
        };

    }

    render() {
        return (
            <div className="main-content">
                <div className="header-content">
                    <div className="addr-detail-text">
                        Person Details
                        <div className="addr-count">0</div>
                    </div>
                    <Link to="/add" className="add-button">
                        <img src={addIcon} alt="" />Add Person</Link
                    >
                </div>
                <div className="table-main">
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
                            <tr>
                                <td>Bob</td>
                                <td>123,ABC</td>
                                <td>City1</td>
                                <td>State1</td>
                                <td>123456</td>
                                <td>1234567890</td>
                                <td>
                                    <img id="" onclick="remove(this)" alt="delete" src={deleteIcon} />
                                    <img id="" alt="edit" onclick="update(this)" src={editIcon} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Home;