export const SET_PRIMES = "SET_PRIMES";

interface ActionTypes {
  SET_PRIMES: Array<number>;
}

export interface MessageAction {
  type: keyof ActionTypes;
  payload: Array<number>;
}

export function setPrimes(primes: Array<number>): PrimeActionsTypes {
  return {
    type: SET_PRIMES,
    payload: primes,
  };
}

export type PrimeActionsTypes = MessageAction;
