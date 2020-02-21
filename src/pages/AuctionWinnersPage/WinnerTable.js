import React, { Component } from "react";
import { getImageForLot } from "../../dao/LotDao";
import { getCurrentBidderFullName} from "../../dao/LotDao";

class WinnerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            imageDictionary: {}
        }
    }

    renderTableHeader() {
        let header = ["Lot image", "Lot name", "Winners Name", "Bidders Email" ]   //Object.keys(this.props.data[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.props.lots.map((item, index) => {
            const { id, lotName, currentBidder, image, currentBidderEmail } = item
            return (
                <tr key={id}>
                    <td ><img src={this.getImageUrl(id,image)} className='pic'/></td>
                    <td>{lotName}</td>
                    <td>{this.getBidderName(currentBidder, this.props.users)}</td>
                    <td>{currentBidderEmail}</td>
                </tr>
            )
        }).slice(0,10)
    }

    getImageUrl = (id, image) => {
        let imageUrl = this.state.imageDictionary[id];
        if (imageUrl === undefined) {
          getImageForLot(id, image)
            .getDownloadURL()
            .then(url => {
              this.setState(state => ({
                imageDictionary: {
                  ...state.imageDictionary,
                  [id]: url
                }
              }));
            })
            .catch(err => {
              this.setState(state => ({
                imageDictionary: {
                  ...state.imageDictionary,
                  [id]: ""
                }
              }));

            });
        }
        return imageUrl;
    };

    getBidderName (bidderCode, users){
        let username = '';
        const currentUser = users.filter(user => user.bidderCode === bidderCode);
        if(currentUser!=null && currentUser.length > 0){
            username = currentUser[0].forename; 
            if(currentUser[0].surname!= null && currentUser[0].surname!= undefined){
                username = username + ' '+ currentUser[0].surname;
            }
        }
        return username;
    }
    render() {
        return (
            <div className="list">
                <table>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }

}


export default WinnerTable;


