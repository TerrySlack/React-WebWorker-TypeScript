import { SET_PRIMES, PrimeActionsTypes } from "./actions";

interface Home {
  primes: Array<number>;
}

const initialState: Home = { primes: [] };

const PrimeReducer = (state = initialState, action: PrimeActionsTypes) => {
  switch (action.type) {
    case SET_PRIMES:
      return { ...state, primes: action.payload };
    default:
      return state;
  }
};

export default PrimeReducer;
