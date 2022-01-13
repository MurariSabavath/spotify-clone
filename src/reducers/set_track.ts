import { SET_TRACK_URI } from '../constants/actions';

const initialState = {
  trackUri: '',
};

export interface IAction {
  type: string;
  track: string;
}

const trackReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_TRACK_URI:
      return { trackUri: action.track };
    default:
      return state;
  }
};

export default trackReducer;
