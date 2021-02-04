//Remember, don't use the import statement here.  It's not a ts file and won't be transpiled to something that IE can't read
const axios = require("axios");
const ctx = self;

//Do an initial sort by the launch Daee
const compare = (a, b)=> {
  const dateA = new Date(a.launch_date_local);
  const dateB = new Date(b.launch_date_local);
  const aa = new Date(a.launch_date_local);
  let result = 0;
  if (dateA > dateB) {
    result = 1;
  } else {
    result = -1;
  }
  return result;
}
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
  //Triple data depths and sort by date by default
  return data.data.data.launchesPast.sort(compare);
};

ctx.addEventListener("message", async (event) => {
  const launches = await getLaunces(event.data.limit); 
  ctx.postMessage(launches);
});
