import * as PSN from "psn-api"

async function init() {
    const API_KEY = process.env.REACT_APP_PSN_KEY;
    console.log(API_KEY);
    const accessCode = await PSN.exchangeNpssoForCode(API_KEY);
    
    const authorization = await PSN.exchangeCodeForAccessToken(accessCode);
    return authorization;
}

async function getTitles(code) {
    const res =  await PSN.getUserTitles({ accessToken: code },"me");
    return res
}

export { init, getTitles };


