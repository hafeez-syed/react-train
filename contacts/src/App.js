import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListContactsStatelessFunction from './ListContactsStatelessFunction';
import ListContactClass from './ListContactsClass';
import ListContactClassControlledComponent from './ListContactsClass-Controlled-Component';
import CreateContact from './CreateContact';
import * as ContactaAPI from './utils/ContactsAPI';

class App extends Component {
    state = {
        /*
        Commenting out and replacing it from server API data
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
        ]*/
        contacts: [],
    };
    componentDidMount() {
        ContactaAPI.getAll().then((contacts) => {
            this.setState({contacts});
        });
    };
    removeContact = (contact) => {
        this.setState((state) => ({
            contacts: state.contacts.filter((con) => con.id !== contact.id)
        }));

        ContactaAPI.remove(contact);
    };
    createContact = (contact) => {
        ContactaAPI.create(contact)
            .then(contact => {
                this.setState(state => ({
                    contacts: state.contacts.concat([contact])
                }))
            })
    };
    render() {
        return (
            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <div>
                            <ListContactClassControlledComponent
                                onDeleteContact={this.removeContact}
                                contacts={this.state.contacts}
                            />
                        </div>
                        <div>
                            <h2>Contacts with Class function component</h2>
                            <ListContactClass onDeleteContact={this.removeContact} contacts={this.state.contacts} />
                        </div>
                        <div>
                            <h2>Contacts with Stateless function component</h2>
                            <ListContactsStatelessFunction onDeleteContact={this.removeContact} contacts={this.state.contacts} />
                        </div>
                    </div>
                )}/>

                <Route path="/create" render={( {history} ) => (
                    <CreateContact onCreateContact={(contact) => {
                        this.createContact(contact);
                        history.push('/');
                    }} />
                )} />
            </div>
        );
      }
}

export default App;
