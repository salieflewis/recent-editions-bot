import Twitter, { TwitterOptions } from 'twitter-lite';

const config: TwitterOptions = {
  version: '2',
  extension: false,
  consumer_key: process.env.TWITTER_CONSUMER_KEY as string,
  consumer_secret: process.env
    .TWITTER_CONSUMER_SECRET as string,
  access_token_key: process.env
    .TWITTER_ACCESS_TOKEN_KEY as string,
  access_token_secret: process.env
    .TWITTER_ACCESS_TOKEN_SECRET as string,
};

const twitter = new Twitter(config);