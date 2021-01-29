import React, { FC, memo, useMemo } from "react";
import { createUseStyles } from "react-jss";

import { areEqualShallow } from "../../../utils/areEqual";
import styles from "./styles";

interface Props {
  primeNumbers: number[];
}

/*
  Push the work out to a helper to keep the component lean and easier to handle any future changes
  Loop through and apply a class based on whether the index is odd or even
*/
const primesHelper = (primeNumbers: number[], classes: any) =>
  primeNumbers.map((prime: number, index: number) => {
    const className = index % 2 ? classes.primeEven : classes.primeOdd;
    return (
      <div key={prime} className={`${classes.common} ${className}`}>
        {prime}
      </div>
    );
  });

//Use memo to prevent unnecesscary renders
const PrimeNumbers: FC<Props> = memo(({ primeNumbers }: Props) => {
  //Use React-JSS to deal with styles and the issue of uniquie class names and avoiding global collisions
  const useStyles = createUseStyles(styles);
  const classes = useStyles(styles);

  //memoize as the creation of the primes
  const primes = useMemo(() => primesHelper(primeNumbers, classes), [
    primeNumbers,
  ]);

  return <>{primes}</>;
}, areEqualShallow);
export default PrimeNumbers;
