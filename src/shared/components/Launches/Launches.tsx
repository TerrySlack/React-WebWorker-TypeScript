import React, { FC } from "react";
import { createUseStyles } from "react-jss";

import styles from "./styles";
import { dateFormatter } from "../../../utils/dateFormatter";
interface Props {
  launches: any[];
}
const Launches: FC<Props> = ({ launches }: Props) => {
  //Use React-JSS to deal with styles and the issue of uniquie class names and avoiding global collisions
  const useStyles = createUseStyles(styles);
  const classes = useStyles(styles);
  return (
    <div className={classes.container}>
      <div className={classes.launchTitle}>
        <span>
          Space X past Launches from a worker making a graphql request
        </span>
      </div>
      <div className={`${classes.scroll} ${classes.center}`}>
        <table cellSpacing="10" className={`${classes.table} ${classes.zigzag}`}>
          <thead>
            <tr>
              <th>Mission Name</th>
              <th>Launch Site</th>
              <th>Launch Date</th>
            </tr>
          </thead>
          <tbody>
            {launches.map((launch, index) => (
              <tr key={`${launch.mission_name}-${index}`}>
                <td>{launch.mission_name}</td>
                <td>{launch.launch_site.site_name_long}</td>
                <td>{dateFormatter(launch.launch_date_local)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Launches;
