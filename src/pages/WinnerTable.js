import React, { Component } from "react";

class winnerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            final: 0
        }
    }


    renderTableHeader() {
        let header = Object.keys(this.state.bids[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.bids.map((bid, index) => {
            const { id, currentBidderTable, currentBidder, currentBid, currentBidderEmail } = bid //destructuring
            return (
                <tr key={id}>
                    <td>{currentBidderTable}</td>
                    <td>{currentBidder}</td>
                    <td>{currentBid}</td>
                    <td>{currentBidderEmail}</td>
                </tr>
            )
        })
    }


    getWinner() {
        return
    }

    // call = () => {
    //     const numbers = [1, 2, 3, 4, 5];
    //     const listItems = numbers.map((number) =>
    //         <div styles="overflow-x:auto!important;">
    //             <table className="table" >
    //                 <tr>
    //                     <th> Lot Image Lot Name </th>
    //                     <th> Firstname Lastname </th>
    //                 </tr>
    //                 <tr>
    //                     <td> <li>{number}</li> </td>
    //                     <td> <li>{number}</li> </td>
    //                 </tr>
    //             </table>
    //         </div>
    //     );
    //     return listItems;
    // }

    // componentDidMount = () => {
    //     this.call()
    // }

    // getBids = () => {
    //     let bab = this.props.lots
    //     .filter(function(el) {
    //         return el.data().lastBidTime != null;
    //     })
    //     console.log("hw1w", this.props)
    //     return bab;
    // }

    render() {
        return (

            <div className="screen">
                <div className="background" style={{ display: "flex", flexDirection: "row" }}>
                    <div className="list">
                        <h2 > This is Final Page{this.state.final} </h2>

                        <div>
                            <h1 id='title'>React Dynamic Table</h1>
                            <table id='bids'>
                                <tbody>
                                    {/* <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()} */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}


export default winnerTable;
