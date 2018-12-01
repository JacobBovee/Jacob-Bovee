import * as React from 'react'

import Menu from './Menu'

export default class Header extends React.Component {
    public render() {
        return (
            <div className='header'>
                <h1>Jacob Bovee</h1>
                <Menu />
            </div>
        )
    }
}