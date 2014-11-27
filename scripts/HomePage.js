window.onload = function onload() {
    'use strict';
    var tasks = [
        {
            title: 'Sheep vs Ram',
            condition: 'Create a simple number guessing game ' +
                '* The computer generates a random number with four' +
                'different digits ' +
                '* The leftmost digit must not be 0 (zero) ' +
                '* For simplicity called abcd ' +
                '* At each turn the player enters a four-digit number ' +
                '* For simplicity called xyzw ' +
                '* When the game ends: ' +
                '* Ask the player for a nickname ' +
                '* Save the nickname inside the localStorage ' +
                '* Implement a high-score list,' +
                'Create a simple number guessing game' +
                '* Sheep means that a digit from xyzw is contained in' +
                'abcd, but not on the same position' +
                '* If two such digits exists, the sheep are 2 ' +
                '* Ram means that a digit from xyzw is contained in abcd' +
                'and it is on the same position' +
                '* If two such digits exists, the rams are 2 ' +
                '* The game continues until the player guesses the' +
                'number abcd ' +
                '* i.e. has 4 rams',
            solution: 'htmls/SheepAndRam.html'
        }
    ];

    var $right = $('#right'),
        $left = $('#left'),
        dfrag = $(document.createDocumentFragment()),
        $task = $(document.createElement('div')),
        $taskTitle = $(document.createElement('h2')),
        $taskSubTitle = $(document.createElement('h6')),
        $taskCond = $(document.createElement('p')),
        $taskSolutionLink = $(document.createElement('a')),
        i,
        $currentTask,
        $currentTitle,
        $currentCond,
        $currentLink;

    $right.css('float', 'right');
    $left.css('float', 'left');
    $task.addClass('task');
    $taskCond.css('display', 'none');
    $taskSubTitle.html('Condition');
    $taskTitle.append($taskSubTitle);
    $taskSubTitle.css('color', '#808080');
    $taskSolutionLink.html('Go To Solution');
    $taskSolutionLink.css('display', 'none');

    for (i = 0; i < tasks.length; i++) {
        $currentTask = $task.clone(true);
        $currentTitle = $taskTitle.clone(true);
        $currentTitle.prepend(tasks[i].title);

        $currentCond = $taskCond.clone(true);
        $currentCond.append(tasks[i].condition);

        $currentLink = $taskSolutionLink.clone(true);
        $currentLink.attr('href', tasks[i].solution);

        $currentTask.append($currentTitle);
        $currentTask.append($currentCond);
        $currentTask.append($currentLink);

        dfrag.append($currentTask);
    }

    $right.append(dfrag);

    $right.on('click', '.task', function clicked() {
        var $this = $(this),
            childrenInLeft = $left.find('.children'),
            $thisCondition,
            $thisLink,
            $conditionToAppend,
            $linkToAppend;

        childrenInLeft.remove();

        console.log($this);
        $thisCondition = $this.find('p');
        $thisLink = $this.find('a');

        $($right.find('.current')).removeClass('current');
        $this.addClass('current');

        $conditionToAppend = $thisCondition.clone(true);
        $conditionToAppend.css('display', '');
        $conditionToAppend.addClass('children');
        $left.append($conditionToAppend);

        $linkToAppend = $thisLink.clone(true);
        $linkToAppend.css('display', '');
        $linkToAppend.addClass('children');
        $left.append($linkToAppend);
    });

};
