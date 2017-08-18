let _ = require('lodash')

function question(id) {
  let sampleContent = '--the question content--'
  return {id, content: `sample-${id}: ${sampleContent}`, user_id: id}
}

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

export const questions = _.range(1, 10).map((i) => question(i))
export function getUser(id) {
return {id, name: `user name - ${id}`}
}
export function getQuestion(id) {
if (id === 'not-found') {
  return null
}
return question(id)
}
