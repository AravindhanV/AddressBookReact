import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div class="main-content">
                <div class="header-content">
                    <div class="addr-detail-text">
                        Person Details
                        <div class="addr-count">0</div>
                    </div>
                    <a href="../pages/contact_form.html" class="add-button">
                        <img src="../assets/add_contact.png" alt="" />Add Person</a
                    >
                </div>
                <div class="table-main">
                    <table id="table-display" class="table"></table>
                </div>
            </div>
        );
    }
}

export default Home;