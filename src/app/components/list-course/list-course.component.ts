import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course-service.service';

@Component({
  selector: 'list-course',
  templateUrl: './list-course.component.html',
  providers: [CourseService]
})
export class ListCourseComponent implements OnInit {
  courses: Course[];
  errorMessage: string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this.courseService.getCourses()
      .subscribe(data => this.courses = data, error => console.log(error));
  }
}