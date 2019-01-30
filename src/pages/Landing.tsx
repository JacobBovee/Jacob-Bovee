import * as React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Menu from '../components/Menu'

const mailChimpURL = '//github.us20.list-manage.com/subscribe/post?u=87991f5bbca2976cd5be0f4d7&amp;id=4224df39aa'

interface IState {
    email: string
    status: string
}

export default class Landing extends React.Component<{}, IState> {
    public state: IState = {
        email: '',
        status: 'landing',
    }

    public handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
            this.setState({ email: e.currentTarget.value })
        }
    }

    public subscribeToMail = (subscribe: any) => () => {
        this.setState({ status: 'subscribed' })
        subscribe({EMAIL: this.state.email})
    } 

    public renderEmailForm = ({subscribe, status}) => {
        return (
            <div className='submit-button' onClick={this.subscribeToMail(subscribe)}>
                Be notified
            </div>
        )
    }

    public render() {
        const { email, status } = this.state

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
                            {status === 'landing' &&
                                <h2 className='announcement'>
                                    <p>IS WORKING</p>
                                    <p>ON</p>
                                    <p>SOMETHING BIG</p>
                                </h2>
                            }
                            {status === 'subscribed' &&
                                <h2 className='announcement'>
                                    <p>Thank</p>
                                    <p>You!</p>
                                </h2>
                            }
                    </div>
                    <div className='footer-block'>
                        <div className='email-block'>
                        <input placeholder='Email address...' type='email' value={email} onChange={this.handleOnChange} />
                        </div>
                        <div className='empty' />
                        <MailchimpSubscribe
                            url={mailChimpURL}
                            render={this.renderEmailForm}
                        />
                    </div>
                </div>
                <div className='right-container' />
                <Menu />
            </div>
        )
    }
}