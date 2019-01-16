import * as React from 'react'
import '../styles/menu.css'

export default class Menu extends React.Component {
    public state
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    public toggleMenu = (e) => {
        this.setState({open: !this.state.open})
        const menu = document.getElementById('menu')
        if (!this.state.open) {
            menu.style.transform = 'translate(0, -100%)'
        }
        else {
            menu.style.transform = 'translate(0, 100%)'
        }
    }

    public render() {

        return (
            <div>
                <div className='menu-area' onClick={this.toggleMenu}>
                    <div className='symbol' />
                </div>
                    <div className='menu' id='menu'>
                        <div className='close-menu'>
                            <div className='close-symbol' onClick={this.toggleMenu} />
                        </div>
                        <div className='menu-items'>
                            <ul className='menu-list'>
                                <li><a href='#' target='blank'>CV</a></li>
                                <li><a href='https://github.com/JacobBovee' target='blank'>Github</a></li>
                                <li><a href='https://www.linkedin.com/in/jacob-bovee-394b4455/' target='blank'>LinkedIn</a></li>
                                <li><a href='https://medium.com/@Jacob_Bovee' target='blank'>Medium</a></li>
                            </ul>
                        </div>
                    </div>
                
            </div>
        )
    }
}