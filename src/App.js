import { Component } from "react";
import shortid from "shortid";
import PhoneBookList from "./components/PhoneBook/PhoneBookList";
import PhoneBookForm from "./components/PhoneBookForm/PhoneBookForm";
import PhoneBookFilter from "./components/PhoneBook/PhoneBookFilter";
import filterContacts from "./components/helpers/FilterContacts";

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    filter: "",
  };
  handleSetUserInfo = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddContact = (e) => {
    e.preventDefault();
    if (this.state.contacts.some((el) => el.name === this.state.name)) {
      alert(`${this.state.name} is already in contacts`);
    }
    if (this.state.contacts.some((el) => el.number === this.state.number)) {
      alert(`${this.state.number} is already in contacts`);
    }
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: shortid.generate(),
    };
    this.setState((prev) => ({
      contacts: [...prev.contacts, contact],
      name: "",
      number: "",
    }));
  };
  handleDeleteContact = (e) => {
    this.setState({
      contacts: this.state.contacts.filter((el) => el.id !== e.target.id),
    });
  };
  handleChangeFilter = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const contacts = filterContacts(this.state.contacts, this.state.filter);
    return (
      <div>
        <PhoneBookForm
          name={this.state.name}
          number={this.state.number}
          onSetUserInfo={this.handleSetUserInfo}
          onAddContact={this.handleAddContact}
        />
        <PhoneBookFilter
          filterValue={this.state.filter}
          onSetFilter={this.handleChangeFilter}
        />
        <PhoneBookList
          contacts={contacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
// function App() {
//   return <Form />
// }

// export default App
