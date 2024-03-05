import { Component } from "react";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem/ContactItem";

import "./contact-list.scss";

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <section id="contact-list">
        {contacts.map((contact, i) => (
          <ContactItem key={i} contact={contact} />
        ))}
      </section>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
