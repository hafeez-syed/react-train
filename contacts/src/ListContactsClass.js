import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContactsClass extends Component {
    render() {
        const contacts = this.props.contacts;
        console.log(contacts);
        return (
            <ol className="contact-list">
                {contacts.map((contact) => (
                    <li key={contact.id} className="contact-list-item">
                        <div className="contact-avatar" style={{backgroundImage: `url(${contact.avatarURL})`}}></div>
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                        <button onClick={() => this.props.onDeleteContact(contact)} className="contact-remove"></button>
                    </li>
                ))}
            </ol>
        )
    }
}

ListContactsClass.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
};

export default ListContactsClass