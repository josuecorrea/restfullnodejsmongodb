var db_string = 'mongodb://127.0.0.1/restfull';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

//testa a conexão
db.on('error', console.error.bind(console, 'Erro ao conectar com o banco'));

//abre o banco
db.once('open', function(){

	//cria schema
	var userSchema = mongoose.Schema({
		fullname: String,
		email: String,
		password: String,
		created_at: Date
	});

	exports.User = mongoose.model('User', userSchema);

});