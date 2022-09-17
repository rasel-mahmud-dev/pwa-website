class User{
	
	static indexes = {
		email: {}
	}
	
	constructor(email, username, avatar) {
		this.email = this.email
		this.username = this.username
		this.password = this.password
		this.avatar = this.avatar
		this.createdAt = new Date()
		this.updatedAt = new Date()
	}
}

module.exports = User