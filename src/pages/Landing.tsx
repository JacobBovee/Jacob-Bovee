import Post from '../components/Post'

import Ghfs from '../ghfs'

import Layout from '../layout'

import * as React from 'react'

declare interface ILandingState {
    posts?: object
}

export default class Landing extends React.Component<ILandingState> {
    public state

    constructor(props) {
        super(props)
        this.state = {
            posts: [],   
        }
    }

    public componentDidMount() {
        Ghfs.getPosts()
            .then(response => this.setState({ posts: response }))
    }

    public render() {
        const { posts } = this.state

        return (
            <Layout>
                <div className='container'>
                    {posts && posts.map(post =>
                        <Post key={post.id} title={post.title} description={post.description} badge={post.badge} date={post.date} thumbnail={post.thumbnail} />
                    )}
                </div>
            </Layout>
        )
    }
}