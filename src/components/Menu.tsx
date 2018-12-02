import * as React from 'react'

export default class Menu extends React.Component {
    public render() {
        return (
            <ul className='menu'>
                <li>Projects</li>
                <li>Writings</li>
                <li>Etc</li>
            </ul>
        )
    }
}