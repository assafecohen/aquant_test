import { v4 as uuidv4 } from 'uuid';

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: uuidv4()
        }
      ];
    case 'REMOVE_BOOK':
      return state.filter(book => {
        return book.id !== action.id;
      });
    case 'EDIT_BOOK':
      console.log(state);
      console.log(action);
      return state.map(book => {
        if (action.book.id === book.id) {
          book = {
            id: action.book.id,
            title: action.book.title,
            author: action.book.author
          };
          return book;
        }
      });
    default:
      return state;
  }
};
