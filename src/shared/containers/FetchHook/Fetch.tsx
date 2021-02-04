import React, { FC, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestConfig } from "./config";
import { areEqual, areEqualShallow } from "../../../utils/areEqual";
//import FetchWorker from "worker-loader!./Fetch.worker";
//import Launches from "../../components/Launches";
import { setLaunches } from "./actions";
//import { useGraphqlRequest } from "Hooks/useGraphqlRequest";
import { useGraphqlRequest } from "../../hooks/";
// import moo from "../../../../src/"
interface Props {}
const LaunchContainer: FC<Props> = memo(() => {
  const { launches } = useSelector(({ launches }: any) => launches, areEqual);
  const dispatch = useDispatch();
  const worker = useGraphqlRequest({
    //filePath: "worker-loader!./Fetch.worker",
    filePath: "./",
    onMessage: ({ data }: any) => {
      //Dispatch past space x launches to redux
      dispatch(setLaunches(data));

      //Terminate the worker.  There is also a check in the unmount method.  The worker is nto being correctly terminated
      //or the code is not executed before unmount
      worker.terminate();
    },
  });

  //Call the webworker and generate them
  //const worker = new FetchWorker();
  if (launches?.length === 0) {
    //Call the webworker and generate them
    // worker.onmessage = ({ data }: any) => {
    //   //Dispatch past space x launches to redux
    //   dispatch(setLaunches(data));

    //   //Terminate the worker.  There is also a check in the unmount method.  The worker is nto being correctly terminated
    //   //or the code is not executed before unmount
    //   worker.terminate();
    // };

    //View the config file to make changes.  You can pass in any variables you want.      
    worker.postMessage(requestConfig({ limit: 25 }));
    //worker.postMessage(requestConfig({ limit: 25 }).config);
  }
  useEffect(() => {
    //Terminate the worker on unmount
    return () => {
      if (worker) worker.terminate();
    };
  }, [worker]);

  return (
    <div>
      {/* <Launches launches={launches} /> */}
      <div>Did it work</div>
      <br /> <br />
      <>{JSON.stringify(launches)}</>
    </div>
  );
}, areEqualShallow);

export default LaunchContainer;
