import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, RefresherCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class HomePage {
  newTask: string = '';
  tasks: string[] = [];

  isEditModalOpen = false;
  editTaskIndex: number | null = null;
  editTaskText: string = '';

  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  addTask() {
    if (this.newTask.trim().length > 0) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  openEditModal(index: number) {
    this.editTaskIndex = index;
    this.editTaskText = this.tasks[index];
    this.isEditModalOpen = true;
  }

  saveEdit() {
    if (this.editTaskIndex !== null && this.editTaskText.trim().length > 0) {
      this.tasks[this.editTaskIndex] = this.editTaskText.trim();
      this.closeEditModal();
    }
  }

  closeEditModal() {
    this.isEditModalOpen = false;
    this.editTaskIndex = null;
    this.editTaskText = '';
  }
}
