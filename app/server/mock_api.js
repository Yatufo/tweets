const _ = require('lodash')

export const users = [
  {
    id: 1,
    name: "Donald Trump",
    twitterAccount: "@realDonaldTrup"
  }, {
    id: 2,
    name: "Hillary Clinton",
    twitterAccount: "@hillaryCliton"
  }
]

export function getUser(id) {
  return users.find((item) => item.id === id)
}
