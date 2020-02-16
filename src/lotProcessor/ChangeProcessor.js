export function processChange(change, s) {
    let changeData = setChangeUser(change.doc.data(),s);
    switch (change.type) {
        case 'added':
            addLot(changeData, s);
            return;
        case 'modified':
            modifyLot(changeData, s);
            return;
        case 'removed':
            removeLot(changeData, s);
            return;
        default:
            return;
    }
}
function setChangeUser (change, s){
    console.log ("let's see " + s.state.users);
    const currentUser = s.state.users.filter(user => user.bidderCode === change.currentBidder);
    if(currentUser!=null && currentUser.length > 0){
        change.currentBidderName = currentUser[0].forename + ' '+ currentUser[0].surname;
        console.log(change);
        console.log(change.currentBidderName);
    }
    return change;
}
function addLot(change, s) {

    s.setState(state => {
        const lots = state.lots.concat(change);
        console.log("lots "+ lots);
        return {
            lots
        };
    })
}

function modifyLot(change, s) {

    s.setState(state => {
        const list = state.lots.filter(item => item.id !== change.id);
        const lots = list.concat(change);
        return {
            lots
        };
    })
}

function removeLot(change, s) {
    s.setState(state => {
        const lots = state.lots.filter(item => item.id !== change.id);
        return {
            lots
        };
    })
}