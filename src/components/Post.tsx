import * as React from 'react'

import Badge from './Badge'

import '../styles/post.css'

declare interface IPostProps {
    title?: string
    description?: string
    date?: string
    badge?: string
    thumbnail?: string
}

export default class Post extends React.Component<IPostProps> {
    public render() {
        const { title, description, date, badge, thumbnail } = this.props

        return (
            <div className='post'>
                <div className='info'>
                    <ul>
                        <li>{date}</li>
                        <li><Badge type={badge} /></li>
                    </ul>
                </div>
                <div className='title-description'>
                    <h6>{title}</h6>
                    <p>{description}</p>
                </div>
                <div className="thumb">
                    {thumbnail && <img src={thumbnail} alt={title} />}
                </div>
            </div>           
        )
    }
}