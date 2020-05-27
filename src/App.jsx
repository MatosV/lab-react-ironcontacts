import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json';

/*
const ContactInfo = (props) => {
  return (
    <div>
      <h4>{props.pictureUrl}</h4>
      <h4>{props.name}</h4>
      <h4>{props.popularity}</h4>
    </div>
  );
};
*/

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [...contacts],
    };
  }

  // RANDOM CONTACTS
  randomContacts = () => {
    const contacts = [...this.state.contacts];
    contacts.sort(() => 0.5 - Math.random());
    this.setState({
      contacts: contacts,
    });
  };

  // SORT BY NAME
  sortName = () => {
    const contacts = [...this.state.contacts];
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contacts: contacts,
    });
  };

  // SORT BY POPULARITY
  sortPop = () => {
    const contacts = [...this.state.contacts];
    contacts.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contacts: contacts,
    });
  };

  // REMOVE CONTACT
  removeContact = (contactId) => {
    const remove = this.state.contacts.filter(
      (contact) => contact.id !== contactId
    );
    this.setState({
      contacts: remove,
    });
  };

  render() {
    return (
      <div className="App">
        <section className="header container">
          <h1>IronContacts</h1>
          <button onClick={this.randomContacts}>Add Random Contact</button>
          <button onClick={this.sortName}>Sort by name</button>
          <button onClick={this.sortPop}>Sort by popularity</button>
        </section>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button onClick={() => this.removeContact(contact.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
