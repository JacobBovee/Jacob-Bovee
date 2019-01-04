import * as React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from '../pages/Landing'

export default class Router extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact={true} component={Landing} path='/' />
                </Switch>
            </BrowserRouter>
        )
    }
}