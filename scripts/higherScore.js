define(["jquery", "underscore"], function ($, _) {
    var higherScore = function () {

        var scores = $(document.getElementById('higher-score')).css('display', 'block');
        var par = $(document.createElement('p')).addClass('ask-name');
        par.html('Please Enter Your Name');
        var input = $(document.createElement('input')).addClass('ask-name').attr('type', 'text').css('display', 'block');
        var submitButton = $(document.createElement('a')).addClass('add-name').text('Submit');
        submitButton.click(showHigherScore);
        scores.append(par).append(input).append(submitButton);

        function addName() {
            var name = input.val();
            var currentPlayer = {name: name, steps: sessionStorage.getItem('steps')};
            var scores = JSON.parse(localStorage.getItem('scores')) || [];
            scores.unshift(currentPlayer);
            //  sessionStorage.setItem('scores', JSON.stringify(scores));
            localStorage.setItem('scores', JSON.stringify(scores));
            console.log(localStorage);
        }

        function showHigherScore() {

            addName();
            var players = JSON.parse(localStorage.getItem('scores'));
            console.log(players);
            $(scores).css('display', 'none');

            var condition = $(document.getElementById('condition')).css('display', 'none');
            var result = $(document.getElementById('result')).css('display', 'none');

            var allScores = $(document.createElement('div')).addClass('result').css('display', 'block').css('margin', 20).css('padding-right', 100).css('padding-left', 100);
            var sortedPlayers = _.sortBy(players, 'steps');
            var groupPlayers = _.groupBy(sortedPlayers, 'steps');
            console.log(sortedPlayers);

            var paragraph = $(document.createElement('p')).addClass('hold-score').css('text-align', 'justify');
            var span = $(document.createElement('span')).addClass('hold').css('display', 'inline-block').css('width', 150);//.css('height',20);
            span.css('padding', 10).css('vertical-align', 'middle');

            var titleSpan = span.clone().css('width', 100).css('text-align', 'center');
            var spanPlayerName = titleSpan.clone().html('<strong>Name</strong>')
            var spanPlayerScore = titleSpan.clone().html('<strong>Score</strong>').css('margin-right', 20).css('margin-left', 20);
            var spanPlayerTrophy = titleSpan.clone().html('<strong>Trophy</strong>');
            var title = paragraph.clone().append(spanPlayerName).append(spanPlayerScore).append(spanPlayerTrophy);
            allScores.append(title);
            var place = 0;

            _.each(groupPlayers, function (group) {
                place++;
                _.each(group, function (player) {
                    var spanName = span.clone().html(player.name);
                    var spanSteps = span.clone().html(player.steps).css('width', 50);
                    var currentPlayer = paragraph.clone();
                    currentPlayer.append(spanName);
                    currentPlayer.append(spanSteps);
                    var image = $(document.createElement('img')).css('float', 'right').css('width', 50).css('height', 50);
                    if (place <= 3) {
                        //  var spanPlace = span.clone();
                        var img = image.clone().attr('src', '../images/trophy.png');
                        for (var i = 0; i < 4 - place; i++) {
                            currentPlayer.append(img.clone());
                        }
                    }
                    else {
                        //  spanPlace = span.clone();
                        img = image.clone().attr('src', '../images/ribbon.png');
                        currentPlayer.append(img);

                    }
                    //  currentPlayer.append(spanPlace);
                    allScores.append(currentPlayer);
                });
            });

            $(document.getElementById('wrapper')).append(allScores);
        }

    };
    return   higherScore;
});


