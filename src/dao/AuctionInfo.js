import firebase from "../config/fbConfig";

const db = firebase.firestore();

export function getAuctionEndDate() {
  return db.collection("auctionInformation").doc("waterAid");
}
