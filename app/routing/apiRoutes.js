var friends = require("../data/friends")

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends)
    })

    app.post("/api/friends",function(req,res){
        var user = req.body 

        var friendIndex = 0 
        var currentDifference = 40
       
        for (var i = 0; i < friends.length; i++){
            var total = 0 
            console.log("Friend: " + friends[i].name)
            console.log("i: " + i)
            for (var j = 0; j < friends[i].scores.length; j++){
                var difference = Math.abs(user.scores[j] - friends[i].scores[j])
                total += difference
                console.log("j: " + j + " difference: " + difference)
            }

            console.log("Total difference: " + total)

            if(total < currentDifference){
               friendIndex = i 
               currentDifference = total 
            }
        }

        res.json(friends[friendIndex])
    })
}
