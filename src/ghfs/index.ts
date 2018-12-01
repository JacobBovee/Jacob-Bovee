import { markdown } from 'markdown'

class Ghfs {
    public contentsFile

    public async fetchContentsFile() {
        return await fetch('/contents/contents.json')  
            .then(response => response.json())
    }

    public async getPosts() {
        const contents = await this.fetchContentsFile()
        return contents.posts
    }

    public async getPost(id) {
        const contentsFile = await this.fetchContentsFile()

        const postJson = contentsFile.posts.filter(post => post.id === id)
        const postContents = await fetch(postJson.filepath)
            .then(response => markdown.toHTML(response))
        
        return {
            contents: postContents,
            info: postJson,
        }
    }
}

export default new Ghfs()