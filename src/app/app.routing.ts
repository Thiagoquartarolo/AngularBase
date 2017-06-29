import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'courses', component: ListCourseComponent },
    { path: 'courses/details/:tag', component: CourseDetailsComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);