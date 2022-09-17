class Post{
	
	static indexes = {
		title: {},
		slug: {}
	}
	
	constructor(title, slug, authorId, html, summary, tags) {
		this.title = title
		this.slug = slug
		this.authorId = authorId
		this.createdAt = new Date()
		this.updatedAt = new Date()
		this.html =  html
		this.summary =  summary
		this.tags =  tags
	}
}

module.exports = Post