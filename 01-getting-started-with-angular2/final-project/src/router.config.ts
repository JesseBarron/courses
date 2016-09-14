

import {Route} from "@angular/router";
import {CoursesComponent} from "./app/courses/courses.component";
import {HomeComponent} from "./app/home/home.component";
import {CourseDetailComponent} from "./app/course-detail/course-detail.component";
import {LessonComponent} from "./app/lesson/lesson.component";
import {LessonFormComponent} from "./app/lesson-form/lesson-form.component";


export const routerConfig: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'courses',
    children: [
      {
        path: '',
        component: CoursesComponent,
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: CourseDetailComponent
          },
          {
            path: 'edit',
            component: LessonFormComponent
          }
        ]
      }]
  },
  {
    path: 'lessons/:id',
    component: LessonComponent
  }
];
