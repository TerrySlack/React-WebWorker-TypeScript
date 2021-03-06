import React, { FC, memo } from "react";
import { createUseStyles } from "react-jss";

import { areEqualShallow } from "../../../utils/areEqual";
import styles from "./styles";
import { PrimeNumbers } from "../../containers/PrimeNumbers";
import {Launches} from "../../containers/Launches";
interface Props {}
const Home: FC<Props> = memo(() => {
  //Use React-JSS to deal with styles and the issue of uniquie class names and avoiding global collisions
  const useStyles = createUseStyles(styles);
  const classes = useStyles(styles);
  return (
    <div className={classes.container}>
      <div className={classes.primeNumberTitle}>
        Prime Numbers generated by a webworker
      </div>
      <div className={classes.primeNumbers}>
        <div className={classes.primeNumberContainer}>
          <PrimeNumbers />
        </div>
      </div>
      <Launches />
    </div>
  );
}, areEqualShallow);
export default Home;
