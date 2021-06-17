import "./App.css";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormContact } from "./component/FormContact";
import { ContactsFilter } from "./component/ContactsFilter";
import { ContactList } from "./component/ContactList";
import styles from "./App.module.scss";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  addСontact = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  filteredArrayContact = () => {
    const { filter, contacts } = this.state;

    const filterValue = filter.toLowerCase();

    const filterText = (value) => value.toLowerCase().includes(filterValue);

    return contacts.filter(({ name }) => filterText(name));
  };

  filterContactState = (e) => {
    const { value } = e.currentTarget;

    this.setState({ filter: value });
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    return (
      <div className={styles.box}>
        <h1 className={styles.title}>Phonebook</h1>
        <FormContact
          addСontact={this.addСontact}
          contacts={this.state.contacts}
        />
        <div>
          <h2 className={styles.title}>contacts</h2>
          <ContactsFilter
            onChange={this.filterContactState}
            stateFilter={this.state.filter}
          />
          <ContactList
            filteredArrayContact={this.filteredArrayContact}
            key={uuidv4}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
