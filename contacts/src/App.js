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
    render() {
        return (
            <div>
                <p>
                    <h2>Contacts with Stateless function component</h2>
                    <ListContactsStatelessFunction contacts={this.state.contacts} />
                </p>
                <p>
                    <h2>Contacts with Class function component</h2>
                    <ListContactClass contacts={this.state.contacts} />
                </p>
            </div>
        );
      }
}

export default App;
