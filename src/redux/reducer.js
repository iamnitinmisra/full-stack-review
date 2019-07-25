import axios from "axios";

const initialState = {
  user: null
};

const SET_USER = "SET_USER";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }; //use spread operator if there are more than one property in initial state you want to keep
    default:
      return state;
  }
}

export function setUser(user){
    return {
        payload: user,
        type: SET_USER
    }
}
