import { NgModule } from '@angular/core';
import { QuizComponent } from './quiz.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { quizRoute } from './quiz.route';

@NgModule({

    declarations : [
        QuizComponent
    ],
    imports : [
        BrowserModule,
        RouterModule.forChild(quizRoute)
    ],
    exports: [
        QuizComponent
    ]
})
export class QuizModule{


}