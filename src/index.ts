import Twitter, { TwitterOptions } from 'twitter-lite';

const config: TwitterOptions = {
  version: '2',
  extension: false,
  consumer_key: process.env.TWITTER_CONSUMER_KEY as string,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET as string,
  // access_token_key:
  // access_token_secret:
};

const twitter = new Twitter(config)

// bearer_token: process.env.TWITTER_BEARER_TOKEN
