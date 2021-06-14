import React from 'react';
import logoImg from '../assets/imgs/logo.png';
import userSvg from '../assets/svg/user.svg';
import heartSvg from '../assets/svg/heart.svg';
import cartSvg from '../assets/svg/cart.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Component } from 'react';
import Slider from '../services/slider';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


class Man extends Component {
    constructor() {
        super();
        this.state = {
            sliders: []
        }
    }

    async componentDidMount() {
        await this.getSlider()

    }

    getSlider = async () => {
        await axios.get('/slider')
            .then((response) => {
                this.setState({ sliders: response.data.data })
            });
    }




    render() {
        console.log(this.state.sliders)
        return (
            <div className="container pt-5 pb-5">
                <div className="row">
                    {this.state.sliders.map((item, i) =>

                        <div className="col-lg-4 pt-5">
                            <div className="card" key={item.id}>
                                <h1 key={item.id}>{item.id}</h1>
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                    )}

                   

                </div>

            </div>
        )


    }
}

export default Man;