import React, { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { areEqual, areEqualShallow } from "../../../utils/areEqual";
import LaunchesWorker from "worker-loader!./Launches.worker";
import Launches from "../../components/Launches";
import { setLaunches } from "./actions";

interface Props {}
const LaunchContainer: FC<Props> = memo(() => {
  const { launches } = useSelector(({ launches }: any) => launches, areEqual);
  const dispatch = useDispatch();
  //Call the webworker and generate them
  const worker = new LaunchesWorker();
  if (launches?.length === 0) {
    //Call the webworker and generate them
    worker.onmessage = ({ data }: any) => {
      //Dispatch past space x launches to redux
      dispatch(setLaunches(data));

      //Terminate the worker.  There is also a check in the unmount method.  The worker is nto being correctly terminated
      //or the code is not executed before unmount
      worker.terminate();
    };

    worker.postMessage({ limit: 25 });
  }
  useEffect(() => {
    //Terminate the worker on unmount
    return () => {
      if (worker) worker.terminate();
    };
  }, [worker]);
  return (
    <div>
      <Launches launches={launches} />
    </div>
  );
}, areEqualShallow);

export default LaunchContainer;
