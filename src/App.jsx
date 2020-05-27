import React, { Component } from 'react';
import './App.css';

import contacts from './contacts.json';


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
      <div className="App container">
        <section className="header">
          <div className="row">
            <div className="col-header">
              <h1>IronContacts</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-header">
              <button onClick={this.randomContacts}>Add Random Contact</button>
            </div>
            <div className="col-header">
              <button onClick={this.sortName}>Sort by name</button>
            </div>
            <div className="col-header">
              <button onClick={this.sortPop}>Sort by popularity</button>
            </div>
          </div>
        </section>
        <table className="table ">
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
