import { SUCCESS, ERROR } from '../constants/actions';

const initialState = {
  messateType: null,
  message: '',
};

const messageReducer = (state = initialState, action: { messateType: string; message: string }) => {
  switch (action.messateType) {
    case SUCCESS:
      return { message: 'Success' };
    case ERROR:
      return { message: 'Error' };
    default:
      return state;
  }
};

export default messageReducer;
