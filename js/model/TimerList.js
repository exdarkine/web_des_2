export default class TimerList{
    constructor(){
        this.items = [];
    }

    add(item){
        this.items.push(item);
    }

    delete(itemId){
        const itemIndex = this.items.findIndex( (item) => item.id === itemId); 
        this.items.splice(itemIndex, 1);
    }

}