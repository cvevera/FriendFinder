var friendsData = require("../data/friends")


module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

app.post("/api/friends", function(req, res) {

        var match = {
            name: "",
            photo: "",
            difference: 1000
        };

        var userinputs = req.body
        var userScores = userinputs.scores
        console.log("user Scores" + userScores)
        var totalDifference = 0;

        for (var i = 0; i < friendsData.length; i++) {
            console.log(friendsData[i])
          totalDifference = 0;

            for (var j = 0; j < friendsData[i].scores[i]; j++){

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));
                // console.log(Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j])));
                // console.log(indivDifference)
                // totalDifference = totalDifference + indivDifference;
                console.log("total diference is :" + totalDifference)
                if (totalDifference <= match.difference) {

                    match.name = friendsData[i].name;
                    match.photo = friendsData[i].photo;
                    match.difference = totalDifference;

                }
            }
        }



      friendsData.push(userinputs);
      console.log(match)
      res.json(match);
  })};