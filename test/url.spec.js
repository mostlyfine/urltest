import { should, expect } from "chai"
import * as fs from "fs"
import axios from "axios"

let config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))

describe("url check", () => {
  for (let target of config.targets) {
    let options = Object.assign({ validateStatus: res => {return true} }, config.option)

    if (target.auth) {
      options.auth = { username: process.env.USERNAME, password: process.env.PASSWORD }
    }

    it(target.url, (done) => {
      axios.get(target.url, options)
        .then((res) => {
          expect(res.status).to.equal(target.status)

          if (target.contain) {
            expect(res.data).to.match(new RegExp(target.contain))
          }

          for (let key in target.headers) {
            expect(res.headers[key]).to.match(new RegExp(target.headers[key]))
          }
        })
         .catch(err => expect.fail(err))
        .then(done, done)
    })
  }
})
