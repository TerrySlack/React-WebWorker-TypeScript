//Remember, don't use the import statement here.  It's not a ts file and won't be transpiled to something that IE can't read
const axios = require("axios");
const ctx = self;

//Grab some launch data from the spacex open api
/*  Old working version
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
*/
/*
const data = await axios.post(API_URL, {
  query: `mutation updateUserCity($id: Int!, $city: String!) {
    updateUserCity(userID: $id, city: $city){
      id
      name
      age
      city
      knowledge{
        language
        frameworks
      }
    }
  }`,
  variables: {
    id: 2,
    city: 'Test'
  }
}, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
*/

//Grab some launch data from the spacex open api
const fetchRequest = async (config) => {
  const data = await axios(config);
  return data.data;
};

ctx.addEventListener("message", async (event) => {
  const fetchResponse = await fetchRequest(event.data.config);
  ctx.postMessage(fetchResponse);
});
