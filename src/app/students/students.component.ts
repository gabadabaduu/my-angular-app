import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from '../model/student';

interface Student {
  name: string;
  club: string;
  photoUrl: string;
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  studentsList: Student[] = [];
  studentObj: student = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    mobile: ''
  };
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  mobile: string = '';
  selectedClub: any;
  filteredStudents: any;
  students: any;

  constructor() { }

  addStudent(){}

  deleteStudent(student: any, Student: any){
    
  }

  filterStudentsByClub(): void {
    if (this.selectedClub) {
      // Filter students by the selected club
      this.filteredStudents = this.students.filter((student: { club: any; }) => student.club === this.selectedClub);
    } else {
      // If no club is selected, display all students
      this.filteredStudents = this.students;
    }
  }

  extractClub(fileName: string): string {
    // Assuming the file name follows a specific format like "Name_Club.jpg"
    const parts = fileName.split('_');
    if (parts.length > 1) {
      return parts[1].split('.')[0];
    }
    return '';
  }

}
