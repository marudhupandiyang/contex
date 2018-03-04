import React from 'react';
import Contux from 'contux';
import Tick from './tick';

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'inc': {
      const newState = { ...state };
      newState.count += 1;
      return newState;
    }

    default:
      return state;
  }
};

const App = () => (
  <Contux
    initialState={{ count: 0 }}
    reducer={rootReducer}
  >
    <Tick>
      My Tick
    </Tick>
  </Contux>
);

export default App;
