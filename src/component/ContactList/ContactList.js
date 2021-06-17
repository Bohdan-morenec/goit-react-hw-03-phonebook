import PropTypes from "prop-types";
import style from "./ContactList.module.scss";

export const ContactList = ({ filteredArrayContact, deleteFormContact }) => {
  return (
    <ul className={style.list}>
      {filteredArrayContact().map(({ name, number, id }) => (
        <li className={style.listItem} key={id}>
          <p className={style.name}>
            {name}: <span className={style.number}>{number}</span>
          </p>
          <button
            className={style.button}
            type="button"
            onClick={() => deleteFormContact(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteFormContact: PropTypes.func.isRequired,
  filteredArrayContact: PropTypes.func.isRequired,
};
