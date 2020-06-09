const initialState = {
  page: 'settings',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'app/page/update':
      return { ...state, page: action.state };
    default: return state;
  }
};

export default reducer;

export const goToAppHome = () => (dispatch) => {
  dispatch({
    type: 'app/page/update',
    state: 'home',
  });
};

export const goToAppSettings = () => (dispatch) => {
  dispatch({
    type: 'app/page/update',
    state: 'settings',
  });
};
