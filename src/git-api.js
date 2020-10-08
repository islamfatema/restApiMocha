const request = require('request-promise');

const HOST = "https://api.github.com";

//const APIKEY = "260f927a58063cbe8b4463d4a53e7caeecd0d6a4";

class Api {
  constructor(host = HOST) {
    this.host = host;
    

    this.request = request.defaults({
      json: true,
      headers: {
        //"Content-Type": 'application/json'
        "User-Agent": 'Awesome-Octocat-App'
      },
      rejectUnauthorized: false
    });
  }

  
      getApi(username){
          const path= `/users/${username}`

       return this.request.get({

      url: `${this.host}${path}`
    })
  }

  
}

module.exports = Api;