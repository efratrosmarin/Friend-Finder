var friends = require("../data/friends.js");

function listFriends(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        console.log(req.body);

        // Parses results of survey
        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        var totalDifference = 0;

        //Loops through friends
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            // Loops to match scores
            for (var j = 0; i < friends[i].scores[j]; j++) {

                // Calculates difference between scores and total
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // Finds best match
                if (totalDifference <= bestMatch.friendDifference) {

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;

                };

            };


        };

        friends.push(userData);

        res.json(bestMatch);

    });
};

module.exports = listFriends;