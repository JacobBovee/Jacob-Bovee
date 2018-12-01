import * as React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Landing from '../pages/Landing'

export default class Router extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Route component={Landing} path='/' />
            </BrowserRouter>
        )
    }
}