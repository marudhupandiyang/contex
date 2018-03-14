import React from 'react';
import { connect } from 'contux';
import Proptypes from 'prop-types';

const Tick = ({ tickCounter, dispatch }) => (
  <div>
    <b>{tickCounter}</b>
    <br />
    <button onClick={() => {
      dispatch({
        type: 'increment',
      });
    }}
    >
      Increment
    </button>
  </div>
);

Tick.propTypes = {
  tickCounter: Proptypes.number.isRequired,
  dispatch: Proptypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({ tickCounter: `${props.name}: ${state.count}` });

export default connect(mapStateToProps)(Tick);
