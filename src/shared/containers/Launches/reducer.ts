import { SET_LAUNCHES, LaunchActionsTypes, ILaunches } from "./actions";

interface Launches {
  launches: Array<ILaunches>;
}

const initialState: Launches = { launches: [] };

const LaunchReducer = (state = initialState, action: LaunchActionsTypes) => {
  switch (action.type) {
    case SET_LAUNCHES:
      return { ...state, launches: action.payload };
    default:
      return state;
  }
};

export default LaunchReducer;
