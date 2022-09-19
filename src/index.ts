import { TwitterApi } from 'twitter-api-v2';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();

const userClient = new TwitterApi({
  appKey: process.env.TWITTER_CONSUMER_KEY as string,
  appSecret: process.env.TWITTER_CONSUMER_SECRET as string,
  accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY as string,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET as string,
});

const v2Client = userClient.v2;

// const tweetEdition = () => {
//   v2Client.tweet('First Tweet');
// };

// tweetEdition();

const tweet = async () => {
  try {
    await v2Client.tweet('First Tweet')
  } catch (e) {
    console.error(e)
  }
}

tweet()