import { initializeApp } from 'firebase-admin/app';

// Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
import * as functions from 'firebase-functions';

// Import tweet() from tweet.ts
import createTweet from './tweet.js';

initializeApp();

// Listens for new documents added to /moralis/events/Goerlinftcreator/:creatorEvents
export const onNewDocument = functions.firestore
  .document('/moralis/events/Goerlinftcreator/{creatorEvents}')
  .onCreate((snap: any, context: any) => {
    const values = snap.data();
    const address = values.editionContractAddress;
    const size = values.editionSize;
    createTweet(address, size);
  });
