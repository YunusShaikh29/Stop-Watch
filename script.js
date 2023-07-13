let sec = 0;
let min = 0;
let hr = 0;
let count = 0;

const startbtn = document.querySelector('#start')


let timer = false;

function start() {
    timer = true;
    stopWatch()
    startbtn.removeAttribute('onclick', '');
    
}

function reset() {
    timer = false;
    sec = 0;
    min = 0;
    hr = 0;
    count = 0;

    document.getElementById('count').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('hr').innerHTML = "00";



    startbtn.setAttribute('onclick', 'start()');
}


function stop() {
    timer = false
    startbtn.setAttribute('onclick', 'start()');
}

function stopWatch() {
    if (timer) {
        count = count + 1;
        
        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }
        
        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        let hrDoubleDigit = hr;
        let minDoubleDigit = min;
        let secDoubleDigit = sec;
        let countDoubleDigit = count;
        
        if(hrDoubleDigit < 10){
            hrDoubleDigit = "0"+ hrDoubleDigit;
        }
        if(minDoubleDigit < 10){
            minDoubleDigit = "0"+ minDoubleDigit;
        }
        if(secDoubleDigit < 10){
            secDoubleDigit = "0"+ secDoubleDigit;
        }
        if(countDoubleDigit < 10){
            countDoubleDigit = "0"+ countDoubleDigit;
        }
        
        
        
        document.getElementById('count').innerHTML = countDoubleDigit;
        document.getElementById('sec').innerHTML = secDoubleDigit;
        document.getElementById('min').innerHTML = minDoubleDigit;
        document.getElementById('hr').innerHTML = hrDoubleDigit;
        
        setTimeout("stopWatch()", 10)
        
    }
    
}