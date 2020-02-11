import {CHANGE_TEXT, GET_MESSAGES_SUCCESS} from "./actions";

const initialState = {
  messages: [],
  author: 'Kentucky94',
  messageText: '',
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_TEXT:
      return {...state, messageText: action.textData};
    case GET_MESSAGES_SUCCESS:
      return {...state, messages: action.messages.reverse()};
    default:
      return state;
  }
};

export default reducer;