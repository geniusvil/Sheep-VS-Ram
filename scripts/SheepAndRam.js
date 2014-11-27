(function () {

    require.config({
        paths: {
            "jquery": "../scripts/libs/jquery",
            "underscore":"../scripts/libs/underscore",
            "handlebars": "../scripts/libs/handlebars",
            "checkRamSheep": "../scripts/checkRamSheep",
            "results": "../scripts/results",
            "storage":"../scripts/storage",
            "higherScore":"../scripts/higherScore"
        }
    });
    require([ "checkRamSheep", "results","higherScore"], function (checkRamSheep,results,higherScore) {

        var steps = 0;
        var numberComputer = (Math.floor(Math.random() * (9999 - 1000)) + 1000).toString().split('').map(function (digit) {
            return digit - 0;
        });
        console.log(numberComputer);

        var submitButton = document.getElementById('submit');
        submitButton.addEventListener('click',play);

        function play() {
            steps++;
            sessionStorage.setItem('steps', steps);
            sessionStorage.setItem('scores', JSON.stringify([]));
            console.log(sessionStorage);
            var inputUser = parseInt(document.getElementById('userChoice').value);
            if (inputUser<1000 || inputUser>9999){
                alert("Please Enter 4-digit Number");
                throw Error("Number has to be with 4 digits");
            }
            else {
                var numberUser = inputUser.toString().split('').map(function (digit) {
                    return digit - 0;
                });

                sessionStorage.setItem('userNumber', numberUser.join(''));
                if (parseInt(numberUser.join('')) === parseInt(numberComputer.join(''))) {
                    sessionStorage.setItem('ram', 4);
                    console.log(sessionStorage);
                }
                else {
                  checkRamSheep.startChecking(numberComputer, numberUser);

                    console.log(sessionStorage);
                }
                results();
                if (sessionStorage.getItem('ram')-0 === 4) {
                    console.log(4);
                    higherScore();
                }
            }
        }
    });
}());
