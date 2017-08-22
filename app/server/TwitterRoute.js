import Twitter from 'twitter'

const twitter = new Twitter({
  consumer_key: process.env.MY_CONSUMER_KEY,
  consumer_secret: process.env.MY_CONSUMER_SECRET,
  access_token_key: process.env.MY_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.MY_ACCESS_TOKEN_SECRET
});

const convertTweet = (data)=>{
  if (data['user'] !== undefined) {
    // Construct a new tweet object
    return {
      twid: data['id_str'],
      active: false,
      author: data['user']['name'],
      avatar: data['user']['profile_image_url'],
      body: data['text'],
      date: data['created_at'],
      screenname: data['user']['screen_name']
    };
  }
}

export const getTweets = (req, res) => {
  twitter.get('statuses/user_timeline', {screen_name: req.params.userId}, (error, tweets, response) =>{
    res.send((tweets || []).map(convertTweet));
  });
}
