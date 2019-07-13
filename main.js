function calculateDaysNeeded() {
    const pagesInputElement = document.getElementById('pages-input');
    const pagesInputValue = parseInt(pagesInputElement.value);
    
    const daysNeeded = 4000 / pagesInputValue;
    const daysNeededStr = daysNeeded.toFixed(0);
    console.log('pagesInputValue', pagesInputValue)

    console.log('daysNeeded', daysNeeded)


    let pagesMessage = 'If you save '+ pagesInputValue + ' dollars a day, you will have enough in about ' + daysNeededStr + ' days.';

    if(daysNeeded <=0) {
        pagesMessage = 'please put a valid number'
    }
    else if(daysNeeded > 365) {
        pagesMessage += 'It is very long you can try to save more money per day.Be consistent insya allah!';
    } else { 
        pagesMessage += 'less than a year masyallah! you can do this'
    }

    const pagesOutputElement = document.getElementById('pages-output');
    pagesOutputElement.innerHTML = pagesMessage;
}

function test() {
    alert('hello')
}





function calculatePagesNeeded() {
    const daysInputElement = document.getElementById('days-input');
    const daysInputValue = daysInputElement.value;

    const pagesNeeded = 11500 / daysInputValue;
    const pagesNeededStr = pagesNeeded.toFixed(0);
    
    let pagesMessage = 'If you hope to save up ' + daysInputValue + ' days, you need to save about ' + pagesNeededStr + ' dollars per day. ';


    if(pagesNeeded <=0) {
        pagesMessage = 'try harder'
    }
    else if(pagesNeeded > 604) {
        pagesMessage += 'WOW';
    } else if(pagesNeeded < 604) { 
        pagesMessage += 'Masyallah! you can do this'
    } else if(pagesNeeded < 20) { 
        pagesMessage += ' dont worry you will save up. SLOWLY but SURELY insyallah.'
    } else {
        pagesMessage += 'WOW! please keep saveing '
    }

   
    const daysOutputElement = document.getElementById('days-output');
    daysOutputElement.innerHTML = pagesMessage;

}