import React from 'react';
import logo from '@Assets/logo_transparent.png';
import './LandingPage.scss';

class LandingPage extends React.Component {

    constructor(props) {

        super(props);
        this.class = 'landingPage';
    }

    render() {

        return (
            <div className={this.class}>
                <div className={this.class + '__header'} >
                    <div className={this.class + '__header__name'}>
                        <img src={logo} />
                        <h1 className={this.class + '__header__name__t1'}> Little </h1>
                        <h1 className={this.class + '__header__name__t2'}> Greens Terrariums</h1>
                    </div>
                    <h4 className={this.class + '__header__tag'}> All's That's Closed Is Green </h4>
                </div>
            </div>
        );
    }
}

export default LandingPage;
