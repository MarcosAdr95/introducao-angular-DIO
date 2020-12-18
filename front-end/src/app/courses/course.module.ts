import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CourseListComponent } from "./course-list.component";
import { CourseInfoComponent } from "./course-info.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent
    ],
    imports: [
        StarModule,
        AppPipeModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'course/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule {}