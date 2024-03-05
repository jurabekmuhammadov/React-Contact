import { Component } from "react";
import PropTypes from "prop-types";
import "./contact-item.scss";
export class ContactItem extends Component {
  render() {
    const { contact } = this.props;
    const { firstName, lastName, phoneNumber, gender } = contact;

    return (
      <div className="card">
        <div className="info">
          <p>
            <span>First name: </span>
            {firstName}
          </p>

          <p>
            <span>Last name: </span>
            {lastName}
          </p>

          <p>
            <span>Phone number: </span>
            {phoneNumber}
          </p>

          <p>
            <span>Gender: </span>
            {gender}
          </p>
        </div>
        <div className="actions">
          <button className="Btn edit">
            <div className="sign">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22"
                viewBox="0 -960 960 960"
                width="22"
              >
                <path d="M200-200h56l345-345-56-56-345 345v56Zm572-403L602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Zm-141-29-28-28 56 56-28-28Z" />
              </svg>
            </div>
            <div className="text">Edit</div>
          </button>
          <button className="Btn delete">
            <div className="sign">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26"
                viewBox="0 -960 960 960"
                width="26"
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </div>
            <div className="text">Delete</div>
          </button>
        </div>
      </div>
    );
  }
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
