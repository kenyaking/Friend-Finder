var friends = require("../data/friends")

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends)
    })

    app.post("/api/friends",function(req,res){
        var user = req.body 
        console.log(typeof user.scores[0])
        console.log(user)
        console.log(friends)
    })
}
