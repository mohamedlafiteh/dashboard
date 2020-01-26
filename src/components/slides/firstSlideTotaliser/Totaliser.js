import React, { Component } from "react";
import "./Totaliser.css"

import { Spring } from 'react-spring/renderprops';

import waterPump from '../../../images/Water_pump.png';
import Jerrycan from "../../../images/Jerrycan.png";
import droplet from "../../../images/droplet.png";
import Background from "../../../images/Background.jpg";

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
                return total + lot.data().currentBid;
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
            <div style={{ display: "flex" }} src={Background} className="Background">
                <div className="containerT">
                    <div>
                        <img src={waterPump} alt="water pump" className="water_pump" />
                        <Spring
                            from={{ top: 390 }}
                            to={{ top: 525 }}
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


