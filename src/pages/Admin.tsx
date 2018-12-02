import * as React from 'react'

import '../styles/admin.css'

export default class Admin extends React.Component {
    public state = {
        me: null,
    }
    
    public login = () => {
        return (
            <div className='login-page'>
                <h6 className='login-title'>Login</h6>
                <div className='login-button'>
                    <h6>Login with Github</h6>
                    <img src='icons/gh.png' alt='login with github' />
                </div>
            </div>
        )
    }

    public render() {
        const { me } = this.state

        if (!me) {
            return this.login()
        }

        return (
            <div className='admin' />
        )
    }
}