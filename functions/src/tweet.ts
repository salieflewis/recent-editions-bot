import { TwitterApi } from 'twitter-api-v2';
import * as dotenv from 'dotenv'; // https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const userClient = new TwitterApi({
  appKey: process.env.TWITTER_CONSUMER_KEY as string,
  appSecret: process.env.TWITTER_CONSUMER_SECRET as string,
  accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY as string,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET as string,
});
const v2Client = userClient.v2;

const MINTER_STRING = 'Latest mint: https://create.zora.co/editions/';
const SIZE_STRING = '\nEdition size: ';

const createTweet = async (address: string, size: number) => {
  try {
    await v2Client.tweet(
      MINTER_STRING +
        address +
        SIZE_STRING +
        (size == 18446744073709551615 ? 'OPEN EDITION' : size)
    );
  } catch (e) {
    console.error(e);
  }
};

export default createTweet;
