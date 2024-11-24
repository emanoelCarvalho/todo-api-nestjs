import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly repository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    console.log(createTaskDto)
    const task = this.repository.create(createTaskDto);
    return this.repository.save(task);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: string) {
    const task = await this.repository.findOneBy({ id });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.repository.findOneBy({ id });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    this.repository.merge(task, updateTaskDto);
    return this.repository.save(task);
  }

  async remove(id: string) {
    const task = await this.repository.findOneBy({ id });

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    await this.repository.remove(task);
  }
}
