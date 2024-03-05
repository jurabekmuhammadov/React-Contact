import { Component } from "react";
import PropTypes from "prop-types";

import "./modal.scss";

export class Modal extends Component {
  render() {
    const {
      isModalOpen,
      handleContactValues,
      newContact,
      addContact,
      closeModal,
    } = this.props;
    return (
      <div id="modal" className={`${isModalOpen ? "modal-open" : ""}`}>
        <form onSubmit={addContact}>
          <input
            type="text"
            required
            placeholder="firstName"
            onChange={handleContactValues}
            name="firstName"
            value={newContact.firstName}
          />
          <input
            type="text"
            required
            placeholder="lastName"
            onChange={handleContactValues}
            name="lastName"
            value={newContact.lastName}
          />
          <input
            type="number"
            required
            placeholder="phoneNumber | write without `+`"
            onChange={handleContactValues}
            name="phoneNumber"
            value={newContact.phoneNumber}
          />
          <select
            id="gender"
            onChange={handleContactValues}
            name="gender"
            value={newContact.gender}
            required
          >
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button type="submit" className="add">
            Add
          </button>
          <button type="button" className="close" onClick={closeModal}>
            Close
          </button>
        </form>
      </div>
    );
  }
}

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleContactValues: PropTypes.func.isRequired,
  newContact: PropTypes.object.isRequired,
  addContact: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
