//This is the object, used by axios to make a post request to a graphql api.
export const requestConfig = (variables: any) => {
  return {
    config: {
      url: "https://api.spacex.land/graphql/",
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: {
        query: `
            query ($limit: Int!) {
              launchesPast(limit: $limit) {
                mission_name
                launch_date_local
                launch_site {
                  site_name_long
                }
              }
            }
            `,
        variables,
      },
    },
  };
};
