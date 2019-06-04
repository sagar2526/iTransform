import { Component, OnInit } from '@angular/core';
import { Quiz } from './quiz';
import { QuizService } from './quiz.service';

@Component({

    templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit{

    quizes : Quiz[];
    quiz:Quiz;

    constructor(private quizService : QuizService){}
    ngOnInit(): void {
        this.quiz=new Quiz();
        this.quizService.findAll().subscribe((data) => {

                this.quizes=data;
                console.log(data);
        });
    }
}