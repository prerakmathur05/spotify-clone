//Documentation--> https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
//click login you will be redirected to authEndpoint
//then once authorization is successfull you will be redirected to spotify clone that's why in redirectUri in spotify developers, we enter localhost:300
//uri stands for Universal Resource Identifier and url uniform resource Locator
const clientId = "792185ebab034723b057165f9f62f2cb";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  const urlAfterHash = window.location.hash; //it goes to the first # in the url and why # because the token starts with #
  const urlArray = urlAfterHash.substring(1).split("&");
  console.log("urlarray-->", urlArray);
  return urlArray.reduce((accumulator, currentValue) => {
    //#accessToken = mysupersecretkey&name=prerak&
    let parts = currentValue.split("=");
    //console.log("parts-->", parts);
    //console.log("accumulator-->", accumulator);

    accumulator[parts[0]] = decodeURIComponent(parts[1]);
    //#accessToken = "Token value"
    return accumulator;
  }, {}); //{} here means accumulator is an empty object not a number nor an empty array
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
