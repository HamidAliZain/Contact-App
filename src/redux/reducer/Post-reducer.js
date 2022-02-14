const initialesState = [
  {
    id: 0,
    name: "hamid",
    number: "00021005",
    email: "rsd@00.com",
  },
  {
    id: 1,
    name: "coderAli",
    number: "00021005",
    email: "coder@00.com",
  },
];

export const ContactReducer = (state = initialesState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];

      return state;

    case "UPDATED_CONTACT":
      const updatedState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updatedState;
      return state;

    case "DELET":
      const filterContact = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filterContact;
      return state;

    default:
      return state;
  }
};
