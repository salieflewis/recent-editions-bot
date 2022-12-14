import { TwitterApi } from 'twitter-api-v2';
import { ethers } from 'ethers';
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
const CREATOR_STRING = '\nCreated by: ';
const SIZE_STRING = '\nEdition size: ';

const provider = ethers.getDefaultProvider();

const createTweet = async (address: string, creator: string, size: number) => {
  try {
    await v2Client.tweet(
      MINTER_STRING +
        address +
        CREATOR_STRING +
        ((await provider.lookupAddress(creator)) != null
          ? await provider.lookupAddress(creator)
          : creator) +
        SIZE_STRING +
        (size == 18446744073709551615 ? 'OPEN EDITION' : size)
    );
  } catch (e) {
    console.error(e);
  }
};

export default createTweet;
