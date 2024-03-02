import { Injectable } from '@nestjs/common';

import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.types';

@Injectable()
export class TodoService {
  private todos: Todo[] = [];

  create(createTodoDto: CreateTodoDto) {
    // create(createTodoDto: Todo) {
    this.todos.push(createTodoDto);
    return 'This action adds a new todo';
  }

  findAll() {
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos[index] = { ...this.todos[index], ...updateTodoDto };
      return this.todos[index];
    }
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    if (this.todos.findIndex((todo) => todo.id === id) !== -1) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      return;
    }
    return `This action removes a #${id} todo`;
  }
}
