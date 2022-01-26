export class CounterService {
    activeToInactive = 0;
    inactiveToActive = 0;

    increaseActiveToInactive(){
        this.activeToInactive++;
        console.log("Active to inactive: " + this.activeToInactive);
    }

    increaseInactiveToActive(){
        this.inactiveToActive++;
        console.log("Inactive to active: " + this.inactiveToActive);
    }
}