import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactsFilter.module.scss";

export class ContactsFilter extends Component {
  render() {
    return (
      <input
        className={styles.lable}
        onChange={this.props.onChange}
        value={this.props.stateFilter}
        tupe="text"
        name="filter"
        title="Поиск контактов"
      />
    );
  }
}

ContactsFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  stateFilter: PropTypes.string.isRequired,
};
