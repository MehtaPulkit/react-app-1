export const createReducer = (initialState, fnMap) => {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];
    return handler ? handler(state, payload) : state;
  };
};
// This code is used to manage the creation of reducers and reusing the code to create more reducers