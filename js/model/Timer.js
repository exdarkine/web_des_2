export default class Timer{
    constructor(){
        this.seconds = 0;
        this.minutes = 0;
        this.started = false;
        this.name = "some name";
    }

    

    start(){
        this.started = true;
        this.timer = setInterval(() => {
            this.addSecond();
            console.log(this.minutesString() + ":" + this.secondsString()); 
        }, 1000);   
    }

    stop(){
        this.started = false;
        clearInterval(this.timer);
    }

    clear(){
        this.seconds = 0;
        this.minutes = 0;
        this.started = false;
        clearInterval(this.timer);
    }


    minutesString(){
        if(this.minutes < 10){
            return '0' + this.minutes;
        }
        return this.minutes;
    }

    secondsString(){
        if(this.seconds < 10){
            return '0' + this.seconds;
        }
        return this.seconds.toString();
    }
    
    addSecond(){
        if(this.seconds === 59){
            this.seconds = 0;
            this.addMinutes();
            return;
        }
        this.seconds++;
    }

    addMinutes(){
        if(this.minutes === 59){
            this.minutes = 0;
            return;
        }
        this.minutes++;
    }


    // constructor(name, duration){    
    //     this.name = name;
    //     this.duration = duration;
    // }
}