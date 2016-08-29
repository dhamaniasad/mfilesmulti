Schemas = {};

Posts = new Mongo.Collection("Posts");

Schemas.Posts = new SimpleSchema({
	"title": {
		type: String
	},
	"image": {
		type: String,
		optional: true
	}
});

Posts.attachSchema(Schemas.Posts);
