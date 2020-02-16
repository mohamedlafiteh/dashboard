import React, { Component } from "react";


import { getImageForLot } from "../../dao/LotDao";


class WinnerTable extends Component {


    renderTableHeader() {
        let header = Object.keys(this.props.data[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.props.data.map((item, index) => {
            const { id, lotName, userForename, userSurname, lotImage } = item
            return (
                <tr key={id}>
                    <td >{lotImage}</td>
                    <td>{lotName}</td>
                    <td>{userForename}</td>
                    <td>{userSurname}</td>
                </tr>
            )
        })
    }

    getImageUrl = lot => {
        let imageUrl = this.props.imageDictionary[lot.id];
        if (!imageUrl) {
            getImageForLot(lot.id, lot.data().image)
                .getDownloadURL()
                .then(url => {
                    this.setState(state => ({
                        imageDictionary: {
                            ...state.imageDictionary,
                            [lot.id]: url
                        }
                    }));
                });
        }
        return imageUrl;
    };


    render() {
        return (
            <div>
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


