import React, { Component } from 'react';
import './Weather.css';
import Grid from '@material-ui/core/Grid';

class Weather extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Grid className='container'
                    container xs
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <h6>Place holder</h6>
                </Grid>
            </div>
        )
    }

}

export default Weather;