
# contux
  Simple store library mimicking the popular Redux API by making use of the new **React Context API** that will be introduced in version 16.3.0.

### **NOTE:** This is in development and will be production ready when the Context API is released.


## Installation

    npm install contux

  or if you use `yarn`

    yarn add contux


## Instructions

 1. Prepare your `initial state`.

        const initialState = { count: 0 };

 2. Declare your `rootReducer that reduces your actions to a state.

        const rootReducer = (state, action) => {
          switch (action.type) {
            case 'increment': {
              const newState = { ...state };
              newState.count += 1;
              return newState;
            }

            default:
              return state;
          }
        };

 3. Surround your root component to enable that state is passed to all the children.

        import Contux from 'contux';

        const App = () => (
          <Contux
            initialState={initialState}
            reducer={rootReducer}
          >
            <Tick />
          </Contux>
        );


 4. `connect` the component where you need state and dispatch functions.

        const Tick = ({ tickCount, dispatch }) => (
          <div>
            Tick Count = {tickCount}
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

        const mapStateToProps = (state) => ({ tickCount: state.count });
        export default connect(mapStateToProps)(Tick);


## Roadmap:
  1. More features to come in.




