import React, { Component } from 'react';

class ListContacts extends Component {
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
                        <button className="contact-remove"></button>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListContacts