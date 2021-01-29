import { combineReducers } from "redux";
import { PrimesReducer } from "../shared/containers/PrimeNumbers";
export default combineReducers({
  primes: PrimesReducer,
});
