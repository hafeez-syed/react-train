import React from 'react';
import PropTypes from 'prop-types';

function ListContactsStatelessFunction (props) {
    const contacts = props.contacts;
    return (
        <ol className="contact-list">
            {contacts.map((contact) => (
                <li key={contact.id} className="contact-list-item">
                    <div className="contact-avatar" style={{backgroundImage: `url(${contact.avatarURL})`}}></div>
                    <div className="contact-details">
                        <p>{contact.name}</p>
                        <p>{contact.email}</p>
                    </div>
                    <button onClick={() => props.onDeleteContact(contact)} className="contact-remove"></button>
                </li>
            ))}
        </ol>
    )
}

ListContactsStatelessFunction.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
};

export default ListContactsStatelessFunction