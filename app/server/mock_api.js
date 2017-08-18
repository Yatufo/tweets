let _ = require('lodash')

function question(id) {
  let sampleContent = '--the question content--'
  return {id, content: `sample-${id}: ${sampleContent}`, user_id: id}
}
const tweets = [
  {
    id: 'tweet1',
    userId: 'realDonaldTrup',
    content: "@hillaryCliton what's up losers?!"
  }, {
    id: 'tweet2',
    userId: 'realDonaldTrup',
    content: "@hillaryCliton fake news!"
  }, {
    id: 'tweet3',
    userId: 'hillaryCliton',
    content: "Hey @realDonaldTrup!"
  }, {
    id: 'tweet4',
    userId: 'hillaryCliton',
    content: "@realDonaldTrup you are so mean"
  }
]
const users = [
  {
    id: 'realDonaldTrup',
    name: "Donald Trump",
  }, {
    id: 'hillaryCliton',
    name: "Hillary Clinton",
  }
]

export const findUsers = () => {
  return users
}

export function findUserTweets(userId) {
  return _.filter(tweets, {userId: userId})
}
