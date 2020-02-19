import firebase from "../config/fbConfig";

const db = firebase.firestore();
const storage = firebase.storage();

export function getAllLotsByCurrentBidder(userID){
    return db.collection("lots").where("currentBidder","==", userID).get()
}

export function getCountries() {
    return db.collection("countries").orderBy('name');
}

export function getLots() {
    return db.collection("lots").orderBy('lotName');
}

export function getLotById(lotId) {
    return db.collection("lots").doc(lotId);
}

export function getImageForLot(lotID, imageID) {
    return storage.ref().child('images/lots/' + lotID + '/' + imageID + '.jpg')
}

export function getImageForCountry(countryID) {
    return storage.ref().child('images/countries/' + countryID + '.jpg')
}

<<<<<<< HEAD
export function  getCurrentBiddersFullNames(bidderCode) { 
return db.collection("users").where("bidderCode", "==", bidderCode).get()
}
=======
export function getAllUsers(){
    return db.collection("users");
}
>>>>>>> 5611e6c7620dc7b4bc98b939844c11df4b6fb72d
