const Api = require('../src/git-api')

const { expect } = require('chai');

describe("GITHUB user API information", async () => {

  let api;

  before(async () => {
    api = new Api();
  })

  it.only("Can get API user information ", async () => {
const userName='islamfatema';

const response = await api.getApi(userName);

console.log(response);

expect(response).to.have.property('login' , userName)
expect(response).to.have.property('company', null)
expect(response.site_admin).to.equal(false)
expect(response.blog).to.be.empty
    
  })
iit("", async ()=> {
  const response = await guard(async() => await api.getApi())
  
  console.log(response)
  // expect(error).to.eql(400)
  // expect(response).to.have.property('statusCode', 400)
})

})