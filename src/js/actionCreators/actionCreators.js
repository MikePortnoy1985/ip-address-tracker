import Api from '../api/api';
import { STATUS } from '../constants';

export const actions = {
  getDefaultPosition(dispatch) {
    dispatch({ type: STATUS.LOADING });

    Api.getDefaultPosition().then(
      (res) => {
        dispatch({ type: STATUS.SUCCESS, payload: Api.convertResponse(res) });
      },
      (rej) => {
        dispatch({ type: STATUS.ERROR, payload: rej });
      },
    );
  },

  getUserPosition(ip, dispatch) {
    dispatch({ type: STATUS.LOADING });

    Api.getUserPosition(ip).then(
      (res) => {
        dispatch({ type: STATUS.SUCCESS, payload: Api.convertResponse(res) });
      },
      (rej) => {
        dispatch({ type: STATUS.ERROR, payload: rej });
      },
    );
  },
};
