export class CounterService{
    activeToInactive = 0;
    inactiveToActive = 0;

    incrementAToI() {
        this.activeToInactive++;
        console.log("ATOI: " + this.activeToInactive);
    }

    incrementIToA() {
        this.inactiveToActive++;
        console.log("ITOA: " + this.inactiveToActive);
    }
}