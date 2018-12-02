import '../styles/layout.css'

import * as React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

export default class Layout extends React.Component {
    public bodyExceedsWindow() {
        const windowHeight = window.innerHeight
        const bodyHeight = document.getElementsByTagName('html')[0].clientHeight

        return windowHeight <= bodyHeight
    }

    public render() {
        const { children } = this.props
        
        return (
            <div className='page'>
                <Header />
                { children }
                <Footer className={this.bodyExceedsWindow() && 'bottom-footer'} />
            </div>            
        )
    }
}