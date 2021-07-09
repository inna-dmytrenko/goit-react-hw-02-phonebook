// import React, { Component } from 'react'
// import { CustomForm, Button } from '../PhoneBookForm.styled'
// // import PropTypes from 'prop-types'
// // import ContactsList from '../Contacts/Contacts'
// export default class Form extends Component {
//   // static propTypes = {
//   //     prop: PropTypes
//   // }
//   state = {
//     contacts: [],
//     name: '',
//   }
//   handleChange = ({ target }) => {
//     const value = target.value

//     this.setState({
//       name: value,
//     })
//   }
//   handleSubmit = (e) => {
//     e.preventDefault()
//     this.setState((prev) => ({
//       contacts: [...prev.contacts, this.state.name],
//       name: '',
//     }))
//   }

//   render() {
//     return (
//       <div>
//         <CustomForm onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             placeholder="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//           <Button>Add</Button>
//         </CustomForm>
//         {/* <ul><ul/> */}
//       </div>
//     )
//   }
// }

const PhoneBookForm = ({ onSetUserInfo, onAddContact, name, number }) => {
  return (
    <form action="" onSubmit={onAddContact}>
      <lable htmlFor="">
        <p>Name</p>
        <input
          onInput={onSetUserInfo}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </lable>
      <lable htmlFor="">
        <p>Number</p>
        <input
          onInput={onSetUserInfo}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </lable>
      <button>Add contact</button>
    </form>
  );
};
export default PhoneBookForm;
