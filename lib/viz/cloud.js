var jade = require('jade')

module.exports = function(data){
/*
	var rows = []
	data.forEach(function(d){
		var word = {
			text: d.inst
			size: d.dist
		}
		rows.push(word)
	})
*/
    return jade.renderFile(__dirname + '/templates/list.jade', {data: data})
}
