export function processChange(change, s) {
    let changeData = change.doc.data();
    changeData.currentBidderName = setChangeUser(changeData, s);
    changeData.id = change.doc.id;
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
    let username = '';
    const currentUser = s.state.users.filter(user => user.bidderCode === change.currentBidder);
    if(currentUser!=null && currentUser.length > 0){
        username = currentUser[0].forename; 
        if(currentUser[0].surname!= null && currentUser[0].surname!= undefined){
            username = username + ' '+ currentUser[0].surname;
        }
    }
    return username;
}

function addLot(change, s) {
    s.setState(state => {
        const lots = state.lots.concat(change);
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