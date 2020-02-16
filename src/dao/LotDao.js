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

export function getLotsWithCurrentBidder(){
    let users = storage.ref().child('users');
   return db.collection('lots').get().then(snapshot => {
       snapshot.forEach(doc => {
        if(doc.data().currentBidder!=null){
            console.log("nnnn "+ doc.data().currentBidder);
            db.collection('users').where("bidderCode","==",doc.data().currentBidder).get().then(usersShot =>{
                usersShot.forEach(userDoc=> {
                    console.log("nnnn "+ userDoc.data().forename);
                })
            }) 
        }
       })  
    });
}