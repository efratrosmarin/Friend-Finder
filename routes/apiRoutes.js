
var friends = require("../data/friends.js");

module.exports = function(app) {

  // Get ALL tables/reservations
  app.get('/api/friends', function(req, res) {
  
    return res.json(friends);

  });

  // POST a new reserveration
  app.post('/api/friends', function(req, res) {

    var bestMatch = {
name:"",
photo:"",
friendDifference: 1000

    };

    var userData = req.body;
    var userScore = userData.scores;

    var totalDifference = 0;
     
    for (var i=0; i<friends.length; i++){

      console.log(friends[i]);
      totalDifference=0;

      for (var j = 0; j<friends[i].scores[j];j++){
        totalDifference += Math.abs(parseInt(userScores[j])) - parseInt(friends[i].scores);
        if (totalDifference<=bestMatch.friendDifference){
          bestMatch.name = friends[i].name;
          bestMatch.photo =friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }
friends.push(userData);
res.json(bestMatch);
    

  });


};
