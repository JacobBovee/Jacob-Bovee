import * as React from 'react'

interface IFooterProps {
    className?: string
}

export default class Footer extends React.Component<IFooterProps> {
    public render() {
        const { className } = this.props

        return (
            <div className={`footer ${className}`}>
                <p>Copyright</p>
            </div>
        )
    }
}