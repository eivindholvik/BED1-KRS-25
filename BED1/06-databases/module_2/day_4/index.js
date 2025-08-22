const mongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017';
const dbname = 'TestDatabase';

mongoClient.connect(url, {}, (error, client) => {
	if (error) {
		console.log("Cannot Connect");
	}
	console.log("Connection OK!");
	const db = client.db(dbname);

	// db.collection('Users').find({
	// 	firstName: "John"
	// }, {
	// 	projection:
	// 	{
	// 		_id: false,
	// 		firstName: true,
	// 		lastName: true
	// 	}
	// }).toArray((error, result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').insertOne({
	// 	firstName: "Jhonny",
	// 	lastName: "Brown",
	// 	isFishing: true
	// }, (error, result) => {
	// 	if (error) {
	// 		console.log("Cannot add user");
	// 	}
	// 	console.log(result);
	// });

	// db.collection("Users").updateMany({
	// 	firstName: "John"
	// }, {
	// 	$set: {
	// 		firstName: "Tom"
	// 	}
	// }, (error, result) => {
	// 	if (error) {
	// 		console.log("Could not update user");
	// 	}
	// 	console.log(result);
	// });

	db.collection("Users").deleteMany({
		firstName: "Johnny"
	}, (error, result) => {
		if (error) {
			console.log("Could not delete user");
		}
		console.log(result);
	});
});
