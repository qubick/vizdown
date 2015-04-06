var jade = require('jade')

module.exports = function(data, options){
    return jade.renderFile(__dirname + '/templates/scatterplot3d.jade', {data: data})
}
