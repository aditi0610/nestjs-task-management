// Root module of our application
//Module decorators provides:array of providers to be available within the module via dependency injection 
//& controllers,array of controllers to be instantiated within the module.

import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
})
export class AppModule {}
