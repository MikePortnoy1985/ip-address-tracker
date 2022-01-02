import { useEffect, useReducer } from 'react';
import { Header } from 'js/Header';
import { Map } from 'js/Map';
import { Panel, PanelCard, SkeletonPanelCard } from 'js/Panel';
import { Error } from 'js/Error';
import { actions } from './actionCreators/actionCreators';
import { STATUS, DEFAULT_POSITION } from './constants';

import './app.css';

const initialState = {
  status: STATUS.IDLE,
  data: {
    panel: [Math.random(), Math.random(), Math.random(), Math.random()],
    position: DEFAULT_POSITION,
  },
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case STATUS.LOADING:
      return {
        ...state,
        status: STATUS.LOADING,
      };
    case STATUS.SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: STATUS.SUCCESS,
      };
    case STATUS.ERROR:
      return {
        ...state,
        error: action.payload,
        status: STATUS.ERROR,
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { status, error, data } = state;

  const loading = [STATUS.IDLE, STATUS.LOADING].includes(status);

  const handleUserPosition = (ip) => {
    actions.getUserPosition(ip, dispatch);
  };

  useEffect(() => {
    if (status === STATUS.IDLE) {
      actions.getDefaultPosition(dispatch);
    }
  }, [status]);

  return (
    <div className="app">
      <Header disabled={loading} handleUserPosition={handleUserPosition} />
      <Panel>
        {loading &&
          data.panel.map((item) => {
            return <SkeletonPanelCard key={item.id ?? item} />;
          })}

        {status === STATUS.SUCCESS &&
          data.panel.map(({ id, title, info }) => (
            <PanelCard key={id} title={title} info={info} />
          ))}
        {STATUS.ERROR && <Error message={error?.message} />}
      </Panel>
      <Map position={data.position} />
    </div>
  );
}
