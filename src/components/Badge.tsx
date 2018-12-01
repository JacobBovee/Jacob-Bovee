import * as React from 'react'

import '../styles/badge.css'

declare interface IBadgeProps {
    type?: string
}

const badgeMap = {
    '0': 'PROJECT',
    '1': 'BLOG',
}

export default class Badge extends React.Component<IBadgeProps> {
    public render() {
        const { type } = this.props
        return (
            <div className='badge'>
                {badgeMap[type]}
            </div>
        )
    }
}