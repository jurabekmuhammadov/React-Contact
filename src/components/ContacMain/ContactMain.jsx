import { Component } from "react";
import ContactTop from "../ContactTop/ContactTop";
import Modal from "../Modal/Modal";
import ContactList from "../ContactList/ContactList";

export class ContactMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      contacts: [
        {
          firstName: "Jurabek",
          lastName: "Muhammadov",
          phoneNumber: "998990990754",
          gender: "Male",
        },
        {
          firstName: "John",
          lastName: "Doe",
          phoneNumber: "998997251672",
          gender: "Male",
        },
        {
          firstName: "Sarah",
          lastName: "Mendy",
          phoneNumber: "998770019009",
          gender: "Female",
        },
        {
          firstName: "Antonio",
          lastName: "Benfard",
          phoneNumber: "998971234567",
          gender: "Male",
        },
      ],
      newContact: {
        firstName: "",
        lastName: "",
        phoneNumber: 998,
        gender: "",
      },
      search: "",
      category: "All",
    };
  }
  render() {
    let { isModalOpen, newContact, contacts, search, category } = this.state;

    contacts = contacts.filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(search) ||
        contact.lastName.toLowerCase().includes(search)
    );
    if (category !== "All") {
      contacts = contacts.filter((contact) => contact.gender === category);
    }
    const handleModal = () => {
      this.setState({ isModalOpen: !this.state.isModalOpen });
    };
    const closeModal = () => {
      handleModal();
    };
    const handleContactValues = (e) => {
      let newcontact = { ...newContact, [e.target.name]: e.target.value };
      this.setState({ newContact: newcontact });
    };
    const addContact = (e) => {
      e.preventDefault();
      let newcontact = [...contacts, newContact];
      this.setState({
        contacts: newcontact,
        newContact: {
          firstName: "",
          lastName: "",
          phoneNumber: "",
          gender: "",
        },
        isModalOpen: !this.state.isModalOpen,
      });
    };
    const handleSearch = (e) => {
      this.setState({ search: e.target.value.trim().toLowerCase() });
      console.log(search);
    };
    console.log(newContact);
    const handleCategory = (e) => {
      this.setState({ category: e.target.value });
    };

    return (
      <section id="contact-section" className="container">
        <ContactTop
          openModal={handleModal}
          handleSearch={handleSearch}
          search={search}
          category={category}
          handleCategory={handleCategory}
        />
        <Modal
          isModalOpen={isModalOpen}
          handleContactValues={handleContactValues}
          newContact={newContact}
          addContact={addContact}
          closeModal={closeModal}
        />
        <ContactList contacts={contacts} />
      </section>
    );
  }
}

export default ContactMain;
