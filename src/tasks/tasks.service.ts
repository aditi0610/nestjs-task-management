//service will be called from a controller, usually to validate data, create an item in the database,
//  and maybe even return a response that is complicated and needs to be calculated or mapped 
import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];  //only this class can access or modify it.

    getAllTasks(): Task[] {
        return this.tasks;
    }
}
