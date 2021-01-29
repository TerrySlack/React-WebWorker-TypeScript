import React, { FC, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

//Need to get alias working
import { areEqual, areEqualShallow } from "../../../utils/areEqual";
import PrimeNumbers from "../../components/PrimeNumbers";
import PrimeNumberWorker from "worker-loader!./PrimeNumber.worker";
import { setPrimes } from "./actions";
interface Props {}
const PrimeNumbersContainer: FC<Props> = memo(() => {
  const { primes } = useSelector(({ primes }: any) => primes, areEqual);
  const dispatch = useDispatch();

  if (primes.length === 0) {
    //Call the webworker and generate them
    const worker = new PrimeNumberWorker();
    worker.onmessage = ({ data }: any) => {
      //When I get to this point dispatch this to redux.
      dispatch(setPrimes(data.primes));

      //Then look at having a component that does whatever with the data returned
      worker.terminate();
    };

    worker.postMessage({ limit: 40 });
  }
  console.log(`primes.length ${primes.length}`);
  
  return <PrimeNumbers primeNumbers={primes} />;
}, areEqualShallow);

export default PrimeNumbersContainer;
