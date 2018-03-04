import React, { createContext } from 'react';
import shallowEqual from 'shallow-equals';

const CurrentContext = createContext();

class Contux extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentState: props.initialState,
    };

    if (props.reducer && typeof props.reducer === 'function') {
      this.state.currentState = props.reducer(this.state.currentState, {
        action: '@contux/INIT',
      });
    }

    this.getState = this.getState.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }

  getState() {
    return this.state.currentState;
  }

  dispatch(action) {
    const {
      reducer,
    } = this.props;

    const {
      currentState,
    } = this.state;

    if (reducer) {
      const newState = reducer(currentState, action);
      if (!shallowEqual(newState, currentState)) {
        this.setState({ currentState: newState });
      }
    }
  }

  render() {
    const {
      children,
    } = this.props;

    const {
      getState,
      dispatch,
    } = this;

    return (
      <CurrentContext.Provider
        value={{
          getState,
          dispatch,
        }}
      >
        {children}
      </CurrentContext.Provider>
    );
  }
}

Contux.defaultProps = {
  initialState: undefined,
  reducer: () => {},
};

const connect = (mapStateToProps = (currentState => currentState)) =>
  Component => ({ children, ...restProps }) => (
    <CurrentContext.Consumer>
      {
        ({ getState, dispatch }) => (
          <Component
            {...mapStateToProps(getState())}
            {...restProps}
            dispatch={dispatch}
          >
            {children}
          </Component>
        )
      }
    </CurrentContext.Consumer>
  );

export default Contux;

export {
  Contux,
  connect,
};
