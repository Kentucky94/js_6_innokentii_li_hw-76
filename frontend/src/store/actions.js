import axiosOrders from "../axiosOrders";

export const CHANGE_TEXT = 'CHANGE_TEXT';

export const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

export const changeText = (textData) => ({type: CHANGE_TEXT, textData});

export const getMessagesSuccess = (messages) => ({type: GET_MESSAGES_SUCCESS, messages});

export const postMessage = (messageData) => {
  return async dispatch => {
    await axiosOrders.post('/messages', messageData);
    dispatch(getMessages());
  }
};

export const getMessages = () => {
  return async dispatch => {
    const response = await axiosOrders.get('/messages');
    dispatch(getMessagesSuccess(response.data));
  }
};