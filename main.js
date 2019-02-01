$(document).ready(function() {
    $('#selected').animate({right: '+=250px'});
    var saveOption = document.querySelectorAll('.save');	
    var count = 0;
    var saveCount = saveOption.length-1;
    
    //GIVE A RANDOM HORIZONTAL OFFSET AND EVEN VERTICLE SPACING BETWEEN SAVE FILES
    for (var i = saveOption.length; i > 0; i--) {
        var currentOption = saveOption[i-1];
        var hOffset = Math.random() * (300 - 0) + 0; 
        var vDifference = 350; 
        currentOption.style.setProperty('--saveWoffset', hOffset +'px');
        // if(i < 5){
        // 	vDifference=vDifference-5;
        // }
        //This squishes all of the li together at the bottom of the ul
        vDifference = vDifference * count;
        count++;
        currentOption.style.setProperty('--saveVoffset', vDifference +'px');
    }

    //ADD INDEX NUMBERS TO SAVE FILES
    count = 0;
    saveOption.forEach(function(element) {
        $(element).attr('index', count);
        count++;
    });

    //CONTROLS
    $(document).keydown(function(e) {
        //Stop current Animations
        jQuery(saveOption).stop();
        currentSave = jQuery('#selected').attr('index');
        switch(e.which) {
            // UP ARROW KEY
            case 38: 
            currentSave--;
            if(currentSave < 0){
                currentSave = saveCount;
            }
            break;
    
            // DOWN ARROW KEY
            case 40: 
            currentSave++;
            if(currentSave > saveCount){
                currentSave = 0;
            }
            break;
            default: return; 
        }

        //UPDATE NEW SELECTED FILE
        $('#selected').animate({right: '-=250px'});
        $('#selected').removeAttr('id');
        $('.save[index="'+currentSave+'"]').attr('id', 'selected');
        $('#selected').animate({right: '+=250px'});
        e.preventDefault(); 
    });

});
