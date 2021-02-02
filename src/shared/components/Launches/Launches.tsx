import React, { FC } from "react";

interface Props {
  launches: any[];
}
const Launches: FC<Props> = ({ launches }: Props) => {
  console.log(`
    launches - Component
    
    ${JSON.stringify(launches)}`);

  return (
    <>
      {launches.map((launch, index) => (
        <div key={`${launch.mission_name}-${index}`}>
          <span>{launch.mission_name}</span>
          <span>{launch.launch_site.site_name_long}</span>
          <span>{launch.launch_date_local}</span>
        </div>
      ))}
    </>
  );
};
export default Launches;
