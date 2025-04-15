import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TaskStatus } from "../task-status.enum";

@Entity({name:'task'})
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({
        nullable: true,
        default: '',
    })
    title: string;

    @Column({
        nullable: true,
        default: '',
    })
    description: string;

    @Column({
        nullable: true,
        default: '',
    })
    status: TaskStatus;


}
