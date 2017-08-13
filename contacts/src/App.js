import React, { Component } from 'react';
import ListContactsStatelessFunction from './ListContactsStatelessFunction';
import ListContactClass from './ListContactsClass';

class App extends Component {
    state = {
        contacts: [
            {
                "id": "ryan",
                "name": "Ryan Florence",
                "email": "ryan@reacttraining.com",
                "avatarURL": "http://localhost:5001/ryan.jpg"
            },
            {
                "id": "michael",
                "name": "Michael Jackson",
                "email": "michael@reacttraining.com",
                "avatarURL": "http://localhost:5001/michael.jpg"
            },
            {
                "id": "tyler",
                "name": "Tyler McGinnis",
                "email": "tyler@reacttraining.com",
                "avatarURL": "http://localhost:5001/tyler.jpg"
            }
        ]
    };
    removeContact = (contact) => {
        this.setState((state) => ({
            contacts: state.contacts.filter((con) => con.id !== contact.id)
        }));
    };
    render() {
        return (
            <div>
                <div>
                    <h2>Contacts with Stateless function component</h2>
                    <ListContactsStatelessFunction onDeleteContact={this.removeContact} contacts={this.state.contacts} />
                </div>
                <div>
                    <h2>Contacts with Class function component</h2>
                    <ListContactClass onDeleteContact={this.removeContact} contacts={this.state.contacts} />
                </div>
            </div>
        );
      }
}

export default App;
