import React, { FC, memo, useEffect } from "react";
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
  const worker = new PrimeNumberWorker();
  if (primes?.length === 0) {
    //Call the webworker and generate them
    worker.onmessage = ({ data }: any) => {
      //When I get to this point dispatch this to redux.
      dispatch(setPrimes(data.primes));

      //Terminate the worker.  There is also a check in the unmount method.  The worker is nto being correctly terminated
      //or the code is not executed before unmount
      worker.terminate();
    };

    worker.postMessage({ limit: 40 });
  }

  useEffect(() => {
    //Terminate the worker on unmount
    return () => {
      if (worker) worker.terminate();
    };
  }, [worker]);
  return <PrimeNumbers primeNumbers={primes} />;
}, areEqualShallow);

export default PrimeNumbersContainer;
