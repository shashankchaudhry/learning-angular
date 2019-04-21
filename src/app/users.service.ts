import { ActiveUsersComponent } from './active-users/active-users.component';
import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

function findAndRemove(item: string, arr: string[]): string[] {
    const index = arr.indexOf(item);
    let removed: string[];
    if (index > -1) {
        removed = arr.splice(index, 1);
    }
    return removed;
}

@Injectable()
export class UsersService {
    activeUsers: string[] = ["Alice", "Bob"];
    inactiveUsers: string[] = ["Charles", "Debbie"];

    constructor(private counterService: CounterService) {}

    activateUser(user: string) {
        let removed = findAndRemove(user, this.inactiveUsers);
        for (let r of removed) {
            this.activeUsers.push(r);
            this.counterService.incrementIToA();
        }
    }

    deactivateUser(user: string) {
        let removed = findAndRemove(user, this.activeUsers);
        for (let r of removed) {
            this.inactiveUsers.push(r);
            this.counterService.incrementAToI();
        }
    }
}