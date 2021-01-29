import React, { FC, memo } from "react";

import Home from "../../components/Home";
import { areEqualShallow } from "../../../utils/areEqual";

interface Props {}
const HomeContainer: FC<Props> = memo(() => {
  return <Home />;
}, areEqualShallow);
export default HomeContainer;
