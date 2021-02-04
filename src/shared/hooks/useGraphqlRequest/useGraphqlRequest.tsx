import React, { useState, useEffect } from "react";

export const useGraphqlRequest = (config: any) => {
  //     const [getJwt, { loading, error, data }] = useLazyQuery(zendeskJwtGql, {
  //       fetchPolicy: 'cache-and-network',
  //     });

  //     return {
  //       getJwt,
  //       loading,
  //       error,
  //       data,
  //     };

  /*
    Return the status of whether the work is instantiated or not.
    Then I can check in the code to start doing some processing.
    
  */

  //Load the worker with a dynamic import
  //const [worker, setWorker] = useState({terminate:()=>{}});
  const [worker, setWorker] = useState({terminate:()=>{}, postMessage:(config:any)=>{}});
  const loadWorker = async () => {
    const lazyLoadedWorker = await import(config.filePath);
    const instantiatedWorker = new lazyLoadedWorker();
    instantiatedWorker.onmessage = config.onMessage;
    setWorker(instantiatedWorker);
  };
  useEffect(() => {
    loadWorker();
  }, []);

  //   const lazyLoadedWorker = await import(config.filePath);
  //   //const worker = new lazyLoadedWorker();
  //   worker.onmessage = config.onMessage;
  return worker;
};
