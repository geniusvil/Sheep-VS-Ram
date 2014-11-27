define([],function(){
   var  checkRamSheep = function () {

        function checkForSheeps(usedNumberComputer, usedNumberUser) {
            var sheepCount = 0;
            for (var i = 0; i < usedNumberUser.length; i++) {

                for (var j = 0; j < usedNumberUser.length; j++) {

                    if (usedNumberUser[i] === usedNumberComputer[j] - 0) {
                        sheepCount++;
                        usedNumberComputer[j] = '@';
                    }
                }
            }
            // console.log("sheep"+sheepCount);
            sessionStorage.setItem('sheep', sheepCount);
            return{
                sheepCount: sheepCount
            }
        }

        function checkForRams(numberComputer, numberUser) {
            var ramCount = 0;
            var usedNumberUser = numberUser.slice();
            var usedNumberComputer = numberComputer.slice();
            for (var i = 0; i < usedNumberUser.length; i++) {
                var currentDigit = usedNumberUser[i];
                if (currentDigit === usedNumberComputer[i]) {
                    ramCount++;
                    usedNumberUser[i] = '*';
                    usedNumberComputer[i] = '@';
                }
            }
            sessionStorage.setItem('ram', ramCount);
            return{
                ramCount: ramCount,
                usedNumberUser: usedNumberUser,
                usedNumberComputer: usedNumberComputer
            }
        }

        function startChecking(numberComputer, numberUser) {
            var infoRam = checkForRams(numberComputer, numberUser);
            var infoSheep = checkForSheeps(infoRam.usedNumberComputer, infoRam.usedNumberUser);

            return {
                infoRam:infoRam,
                infoSheep:infoSheep
            }
        }

        return{
            startChecking: startChecking

        }
    };
    return new checkRamSheep();
});


