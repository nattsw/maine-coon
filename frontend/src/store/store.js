import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loggerMiddleware from './logger';
import monitorReducerEnhancer from './monitorReducer';
import rootReducer from './rootReducer';

const configureStore = (preloadedState) => {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept(
      [
        /* insert paths to reducers here */
      ],
      () => store.replaceReducer(rootReducer),
    );
  }

  return store;
};

export default configureStore;
