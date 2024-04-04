import React, { Component } from 'react'
// import img1 from './../../img1.jpg'
import './HomeSection.css'
import ThemeContext from '../../Contexts/ThemeContext';
import { CheckCheck } from 'lucide-react';
import img1 from './myImg.jpg'

// const LightMode  = () => {

//     const setLightMode = () => {
//         document.querySelector("body").setAttribute('data_theme', 'light')
//     }
//     setLightMode();
// } 

export default class Home extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <div className={`homeSection ${this.context.theme}`} >
                <div className="container py-5 text text-large">
                    <div className="row">
                        <div className="col container-flex">
                            <img src={img1} alt="" />
                            <div className={`info ${this.context.theme}`} >
                            <h3>Hello.</h3>
                            <h2>My name is Mehriddin</h2>
                            </div>
                            <hr />
                            <h6>I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making <br />
                                complex processes easy to use. <br /> <br />

                                Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands – leading <br />
                                a great team across design, UI engineering, accessibility and customer experience. I'm lucky to be part of a great <br />
                                team of designers, writers, engineers, PMs and data specialists – amongst others – testing, iterating and optimising <br />
                                our platforms and products. <br /><br />

                                I've got some work on Dribbble, some previous work at Saga and you can find me over on instagram and sometimes on <br />
                                Medium too. I also take too many photos.</h6>
                                <div className='my-5 d-flex'>
                                   <CheckCheck/>
                                    <p className='ps-3 d-flex'>Available for work and general design goodness – <p  className={`info ${this.context.theme} `}> say hello</p></p>
                                </div>


                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
