import { initializeApp } from 'firebase/app';


async function streamDocument(db: any, done: any) {
    // [START firestore_listen_document]
    const doc = db
      .collection('Goerlinftcreator')
      .doc('0x1d58b786a51f036ff021d630877dfc5bbcb1ca157ada977fa4474e35fd32601c');
  
    const observer = doc.onSnapshot(
      (docSnapshot: any) => {
        console.log(`Received doc snapshot: ${docSnapshot}`);
        // [START_EXCLUDE]
        observer();
        done();
        // [END_EXCLUDE]
      },
      (err: any) => {
        console.log(`Encountered error: ${err}`);
      }
    );
    // [END firestore_listen_document]
  }
  