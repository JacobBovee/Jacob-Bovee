import * as React from 'react'
import Menu from '../components/Menu'

export default class Landing extends React.Component {

    public render() {
        return (
            <div className='full'>
                <div className='left-container' />
                <div className='container'>
                    <div className='info-block'>
                        <div className='block-item'>
                            Jacob Bovee
                        </div>
                        <div className='empty' />
                        <div className='block-item'>
                            Engineering
                        </div>
                    </div>
                    <div className='name-block'>
                        <h1 className='name'>JACOB<span className='pad'>B.</span></h1>
                    </div>
                    <div className='info-block'>
                        <div className='block-item'>
                            Writing
                        </div>
                        <div className='empty' />
                        <div className='block-item'>
                            Las Vegas, NV
                        </div>
                    </div>
                    <div className='announcement-block'>
                        <h2 className='announcement'>
                            <p>IS WORKING</p>
                            <p>ON</p>
                            <p>SOMETHING BIG</p>
                        </h2>
                    </div>
                    <div className='footer-block'>
                        <div className='email-block'>
                        <input placeholder='Email address...' type='email' />
                        </div>
                        <div className='empty' />
                        <div className='submit-button'>
                            Be notified
                        </div>
                    </div>
                </div>
                <div className='right-container' />
                <Menu />
            </div>
        )
    }
}