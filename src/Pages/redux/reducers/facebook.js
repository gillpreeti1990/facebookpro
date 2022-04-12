export const GET_RELATION = "GET_RELATION";
const SET_RELATION = "SET_RELATION";
export const GET_NEWARRAY = "GET_NEWARRAY";
const SET_NEWARRAY = "SET_NEWARRAY";

export const getRelation = () => ({
  type: GET_RELATION,
  payload: {},
});

//for stored images
export const setRelation = (newItem) => ({
  type: SET_RELATION,
  payload: {
    newItem,
  },
});

export const getNewArray = () => ({
  type: GET_NEWARRAY,
  payload: {},
});

//for stored images
export const setNewArray = (newItemArray) => ({
  type: SET_NEWARRAY,
  payload: {
    newItemArray,
  },
});

//global state
const initialUserState = {
  arr: [],
  newarray: [],
};

//randomImageReducer in configureStore.js line no 3
export default function userState(state = initialUserState, action) {
  switch (action.type) {
    case SET_RELATION:
      const { newItem } = action.payload;
      //  console.log(`action.payload`, action.payload)
      return { ...state, arr: newItem };
    case SET_NEWARRAY:
      const { newItemArray } = action.payload;
      //  console.log(`action.payload`, action.payload)
      return { ...state, newarray: newItemArray };

    default:
      return state;
  }
}
