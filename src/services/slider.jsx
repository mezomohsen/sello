import React, { Component } from 'react'
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
 class Slider extends Component {
    constructor() {
        super();
        this.state = {
            'sliders': []
        }
    }
    componentDidMount() {
        this.getSlider()
    }

    getSlider = async () => {
        await axios.get('/slider')
            .then(function (response) {

                if (response.data.code == 200)
                    return <Redirect to='/man' />

                console.log(response.data.data)
            });
    }


    render() {
        return this.state.sliders
    }
}
export default Slider;