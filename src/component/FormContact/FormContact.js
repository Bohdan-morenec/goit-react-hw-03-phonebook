import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import styles from "./FormContact.module.scss";

export class FormContact extends Component {
  state = {
    name: "",
    number: "",
  };

  addFormContact = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  dominicToretto = () => {
    return this.props.contacts.find(({ name, number }) => {
      return name === this.state.name || number === this.state.number;
    });
  };

  SubmitForm = (e) => {
    e.preventDefault();

    if (this.dominicToretto()) {
      return alert("the same name or phone number already exists");
    }
    this.props.addСontact(this.state);

    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form
        className={styles.transparent}
        htmlFor={uuidv4()}
        onSubmit={this.SubmitForm}
      >
        <div className={styles.formInner}>
          <label>
            Name
            <input
              onChange={this.addFormContact}
              type="text"
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.addFormContact}
              type="tel"
              value={this.state.number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button className={styles.buttom} type="submit">
            aad contact
          </button>
        </div>
      </form>
    );
  }
}

FormContact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
Function.defaultProps = {
  contacts: [],
};
