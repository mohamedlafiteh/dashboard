import React, { Component } from "react";
import "./Totaliser.css"

import { Spring } from 'react-spring/renderprops';

import waterPump from '../../../images/Water_pump.png';
import Jerrycan from "../../../images/Jerrycan.png";
import droplet from "../../../images/droplet.png";

class Totaliser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConfetti: false
        };
    }

    getTotal() {
        return this.props.lots.reduce(
            (total, lot) => {
                let bid = lot.data().currentBid;
                if (typeof(bid) === "number")
                {
                    return total + parseInt(lot.data().currentBid);
                }
                else
                {
                    return total;
                }
            }, 0);
    }

    confettiHandler = () => {
        this.setState({ isConfetti: true })
        setTimeout(() => {
            this.setState({ isConfetti: false })
        }, 6000)
    }

    render() {
        return (
            <div style={{ display: "flex" }} className="Background">
                <div className="containerT">
                    <div>
                        <img src={waterPump} alt="water pump" className="water_pump" />
                        <Spring
                            from={{top:"38%"}}
                            to={{top:"51%"}}
                            reset={true}
                            delay={1000}>
                            {props => <img style={{ top: props.top }} className="droplet" src={droplet} alt="Droplet" />
                            }
                        </Spring>
                    </div>
                    <div>
                        <Spring
                            from={{ number: 0 }}
                            to={{ number: this.getTotal() }}>
                            {props => <h1 className="totalNumber">£ {props.number.toFixed()}</h1>}
                        </Spring>
                    </div>
                    <div>
                        <img src={Jerrycan} className="jerrycan" />
                    </div>
                </div>
            </div>
        );
    }
};

export default Totaliser;


