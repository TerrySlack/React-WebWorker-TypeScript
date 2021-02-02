//Remember, don't use the import statement here.  It's not a ts file and won't be transpiled to something that IE can't read
const axios = require("axios");
const ctx = self;

//Grab some launch data from the spacex open api
const getLaunces = async (limit=10) => {
  const data = await axios({
    url: "https://api.spacex.land/graphql/",
    method: "post",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    data: {
      query: `
        query {
          launchesPast(limit: ${limit}) {
            mission_name
            launch_date_local
            launch_site {
              site_name_long
            }
          }
        }
      `,
    },
  });
  //Triple data depths
  return data.data.data.launchesPast
};

ctx.addEventListener("message", async (event) => {
  const launches = await getLaunces(event.data.limit); 
  ctx.postMessage(launches);
});
