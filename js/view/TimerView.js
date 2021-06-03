import Timer from "../model/Timer.js";

export default class TimerView{

    constructor(){
        
    }



    render(seconds, minutes, name){
        return '<p><div><b>' + name + '</b><i style="float:right;" id="close" class="fas fa-times close-icon"></i><span style="float:right;">' + minutes + ":" + seconds + '</span> </p>';
    }

    showCurrentTime(seconds, minutes){
        let currentTime = document.querySelector("#currentTime");
        currentTime.innerHTML = '<b>' + minutes + ':' + seconds + '</b>';
    }
}