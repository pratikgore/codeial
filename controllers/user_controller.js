module.exports.profile = function(req,res) {
   return  res.end('<h1>Users profile here apperaing </h1>')
}

module.exports.base = function(req,res){
    return res.send('<h1>Kitne din base pe rahega !!!</h1>')
}