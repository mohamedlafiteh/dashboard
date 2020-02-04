import React, { Component } from "react";
import { getCountries, getImageForCountry } from "../../../dao/LotDao";
import SecondSlideInformation from "./SecondSlideInformation.js";

class SecondSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }
  
  componentDidMount() {
    let countries = getCountries();
    countries.get().then(docs => {
      docs.forEach(doc => {
        let data = doc.data();
        getImageForCountry(data.name)
          .getDownloadURL()
          .then(url => {
            this.setState(state => ({
              countries: state.countries.concat(
                {
                  name: data.name,
                  first: data.firstParagraph,
                  second: data.secondParagraph,
                  pic: url
                }
              )
            }));
          })
      });
    })
  }

  getData = (current) => {
    let length = this.state.countries.length;
    if (length === 0) {
      return ["", "Hello"];
    }
    let country = this.state.countries[current % length];
    return [country.pic, country.first];
  }

  render() {
    let [pic, text] = this.getData(this.props.current);
    return <SecondSlideInformation picture={pic} text={text} />
  }
}

export default SecondSlide;
