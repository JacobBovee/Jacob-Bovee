import * as React from 'react'

declare interface IPostProps {
    title?: string
    description?: string
    date?: string
    badge?: string
}

export default class Post extends React.Component<IPostProps> {
    public render() {
        const { title, description, date, badge } = this.props

        return (
            <div className='post'>
                <div className='info'>
                    <ul>
                        <li>{date}</li>
                        <li>{badge}</li>
                    </ul>
                </div>
                <div className='title-description'>
                    <h6>{title}</h6>
                    <p>{description}</p>
                </div>
            </div>           
        )
    }
}