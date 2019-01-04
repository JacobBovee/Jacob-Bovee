import * as React from 'react'
import '../styles/menu.css'

export default class Menu extends React.Component {
    public state
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    public render() {
        const { open } = this.state
        
        return (
            <div className='menu closed'>
                {open &&
                    <ul className='menu closed'>
                        <li>CV</li>
                        <li>Github</li>
                        <li>LinkedIn</li>
                        <li>Medium</li>
                    </ul>
                }
                <div className='symbol'>+</div>
            </div>
        )
    }
}