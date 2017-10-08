import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import { Link } from 'react-router-dom';

class ListContactsClassControlledComponent extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    };

    state = {
        query: ''
    };

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    };

    clearQuery = () => {
        this.setState({query: ''})
    };

    render() {
        let contactList;
        const {contacts, onDeleteContact} = this.props;
        const {query} = this.state;

        if(query) {
            const matchedContacts = new RegExp(escapeRegExp(query), 'i');
            contactList = contacts.filter((contact) => matchedContacts.test(contact.name));
        } else {
            contactList = contacts;
        }

        contactList.sort(sortBy('name'));

        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input
                        type="text"
                        className="search-contacts"
                        placeholder="Search contacts"
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    <Link to="/create" className="add-contact">Add Contact</Link>
                </div>
                <h2>Contacts with controlled component</h2>

                {contactList.length !== contacts.length && (
                    <div className="showing-contacts">
                        <span>Now showing {contactList.length} of {contacts.length} total</span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>
                )}

                <ol className="contact-list">
                    {contactList.map((contact) => (
                        <li key={contact.id} className="contact-list-item">
                            <div className="contact-avatar" style={{backgroundImage: `url(${contact.avatarURL})`}}></div>
                            <div className="contact-details">
                                <p>{contact.name}</p>
                                <p>{contact.email}</p>
                            </div>
                            <button onClick={() => onDeleteContact(contact)} className="contact-remove"></button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default ListContactsClassControlledComponent