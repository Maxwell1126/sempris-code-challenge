import React, { Component } from 'react';
import './Weather.css';
import Grid from '@material-ui/core/Grid';
import  store from '../index';
import map from 'rxjs/operators';

class Weather extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        store.dispatch({ type: 'FETCH_WEATHER' });
    }
    render() {
        return (
            <div>
                    <Grid className="tableContainer"
                        container xs
                        direction="column"
                        justify="center"
                        alignItems="center">
                            {JSON.stringify(this.store)}
                    <h3>Current Temperature in Minneapolis:</h3>
                    </Grid>
            </div>
        )
    }

}

export default Weather;