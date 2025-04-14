// controller decorator accepts a string, which is the path to be handled by the controller
import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { get } from 'http';

@Controller('tasks')
export class TasksController 
{
    constructor(private tasksService: TasksService){ } // TasksService ko constructor ke through use karne ke liye inject kiya gaya hai

    @Get()
      getAllTasks(){
        // return 'Hello';
        return this.tasksService.getAllTasks();
      }
   
}
