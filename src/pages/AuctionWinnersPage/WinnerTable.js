import React, { Component } from "react";
import { getImageForLot } from "../../dao/LotDao";
import { getCurrentBidderFullName } from "../../dao/LotDao";

class WinnerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            imageDictionary: {},
            tableData: []
        }
    }

    componentDidUpdate(preProps) {
        if (this.props.lots.length !== preProps.lots.length) {
            this.renderTableData()
        }
    }

    renderTableHeader() {
        let header = ["Lot image", "Lot name", "Winners Name"]  
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    updateTableData(counter) {
        this.setState({
            tableData: this.props.lots.map((item, index) => {
                const { id, lotName, currentBidder, image } = item
                return (
                    <tr key={id}>
                        <td ><img src={this.getImageUrl(id, image)} className='pic' /></td>
                        <td>{lotName}</td>
                        <td>{this.getBidderName(currentBidder, this.props.users)}</td>
                    </tr>
                )
            }).slice(counter * 10, 10 + counter * 10)
        });
    }

    renderTableData() {
        let counter = 0;
        let numberOfSlice = Math.ceil(this.props.lots.length / 10);
        this.updateTableData(counter)
        setInterval(() => {
            counter++
            this.updateTableData(counter % numberOfSlice)
        }, 10000);
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

    getBidderName(bidderCode, users) {
        let username = '';
        const currentUser = users.filter(user => user.bidderCode === bidderCode);
        if (currentUser != null && currentUser.length > 0) {
            username = currentUser[0].forename;
            if (currentUser[0].surname != null && currentUser[0].surname != undefined) {
                username = username + ' ' + currentUser[0].surname;
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
                        {this.state.tableData}
                    </tbody>
                </table>
            </div>
        )
    }

}


export default WinnerTable;


