import React, { createContext } from 'react';
import Proptypes from 'prop-types';

const CurrentContext = createContext();

class Contex extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentState: props.initialState,
    };

    if (props.reducer && typeof props.reducer === 'function') {
      this.state.currentState = props.reducer(this.state.currentState, {
        action: '@contex/INIT',
      });
    }

    this.getState = this.getState.bind(this);
  }

  getState() {
    return this.state.currentState;
  }

  render() {
    // const {
    //   currentState,
    // } = this.state;

    const {
      children,
    } = this.props;

    return (
      <CurrentContext.Provider
        value={{
          getState: this.getState,
        }}
      >
        {children}
      </CurrentContext.Provider>
    );
  }
}

Contex.defaultProps = {
  initialState: undefined,
  reducer: () => {},
};

Contex.propTypes = {
  initialState: Proptypes.any, // eslint-disable-line
  children: Proptypes.any.isRequired, // eslint-disable-line
  reducer: Proptypes.func,
};

/* eslint-disable */
export const connect = (mapStateToProps = (currentState => currentState)) =>
  Component => ({ children, ...restProps }) => (
    <CurrentContext.Consumer>
      {
        ({ getState }) => (
          <Component {...mapStateToProps(getState())} {...restProps}>{children}</Component>
        )
      }
    </CurrentContext.Consumer>
  );
/* eslint-disable */
export default Contex;

