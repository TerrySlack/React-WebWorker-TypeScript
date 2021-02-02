import { combineReducers } from "redux";
import { PrimesReducer } from "../shared/containers/PrimeNumbers";
import { LaunchReducer } from "../shared/containers/Launches";
export default combineReducers({
  primes: PrimesReducer,
  launches: LaunchReducer,
});
