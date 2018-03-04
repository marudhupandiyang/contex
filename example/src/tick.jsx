import React from 'react';
import { connect } from 'contux';
import Proptypes from 'prop-types';

const Tick = ({ count, dispatch }) => (
  <div>
    Hello Tick {count}
    <br />
    <button onClick={() => {
      dispatch({
        type: 'inc',
      });
    }}
    >
      Increment
    </button>
  </div>
);

Tick.propTypes = {
  count: Proptypes.number.isRequired,
  dispatch: Proptypes.func.isRequired,
};


export default connect()(Tick);
