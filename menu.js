$(".difficultyButton").on('click', function(e) {

    $('.difficultyButton').removeClass('green');
    $(e.currentTarget).addClass('green');
    

    switch($(e.currentTarget).val()) {
        case 'easy' : 
            loadEasyVariables();
            break;
        case 'medium' :
            loadNormalVariables();
            break;
        case 'hard' : 
            loadHardVariables();
            break; 
    }
})

$(".soundButton").on('click', function(e) {
    switch ($(e.currentTarget).val()) {
        case 'soundOn' : 
            soundOn = true;
            break;
        case 'soundOff' : 
            soundOn = false;
            break 
    }
})


