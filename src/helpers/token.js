class TokenHelper {
  constructor() {}

  isExpired(token) {
   
    const base64Url = token.split(".")[1]; 
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); 


    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    
    const payload = JSON.parse(jsonPayload);

  
    const exp = payload.exp;
    const currentTime = Math.floor(Date.now() / 1000);
    return exp < currentTime;
  }
}

const tokenHelper = new TokenHelper();
export default tokenHelper;
