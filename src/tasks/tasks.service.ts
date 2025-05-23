//service will be called from a controller, usually to validate data, create an item in the database,
//  and maybe even return a response that is complicated and needs to be calculated or mapped 
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TasksRepository)
        private tasksRepository: TasksRepository,
    ) {}
    // private tasks: Task[] = [];  //only this class can access or modify it.

    // getAllTasks(): Task[] 
    // {
    //     return this.tasks;
    // }
    
    async getTaskById(id: string): Promise<Task>{
        const found = await this.tasksRepository.findOne({ where: {id} });

        if (!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }

        return found;
    }
    // getTaskById(id: string): Task {

        // try to get task
        // if not found, throw an error(404 not found)
        // otherwise, return the found task

    //     const found =  this.tasks.find((task) => task.id === id);
        
    //     if (! found) {
    //     throw new NotFoundException(`Task with ID "${id}" not found`);
    //     }

    //     return found;
    //   }
    //implement createTask method to add new task with UUID and default status
    // Extract title and description from the DTO for easier access
    async createTask(CreateTaskDto: CreateTaskDto): Promise<Task> {
        const { title, description } = CreateTaskDto;

        const task = this.tasksRepository.create({
          title,
          description,  
          status: TaskStatus.OPEN,
        })
     await this.tasksRepository.save(task);
     return task;
    }

    // createTask(CreateTaskDto: CreateTaskDto): Task 
    // {
    //     const { title, description } = CreateTaskDto;

    //     const task: Task = 
    //     {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     }

    //     this.tasks.push(task);
    //     return task;
    // }

    // deleteTask(id: string): void {
    //   const found = this.getTaskById(id);

    //   this.tasks = this.tasks.filter((task) => task.id !== id);
    // }
}
