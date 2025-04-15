// Root module of our application
//Module decorators provides:array of providers to be available within the module via dependency injection 
//& controllers,array of controllers to be instantiated within the module.

import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TasksModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Tsparihar',
        database: 'task_management',
        autoLoadEntities: true,
        synchronize: true,
  })],
})
export class AppModule {}
