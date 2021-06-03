import TimerList from "../model/TimerList.js";
import Timer from "../model/Timer.js";
import TimerView from "./TimerView.js";


export default class TimerListView{
    constructor(){
        this.timerView = new TimerView(null);
        this.html = "";
    }

    showTimerList(seconds, minutes, name){
        this.html += this.timerView.render(seconds, minutes, name); 
        return this.html;
    }

    createDivForListItems(){
        console.log("createDIvForListItems");
        return '<div id="listItemsCenter" class="col-sm-10 col-md-8 col-lg-6 col-xl-4 center"><div>';
    }
}