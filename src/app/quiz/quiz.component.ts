import { Component, OnInit } from '@angular/core';
import { Quiz } from './quiz';
import { QuizService } from './quiz.service';
import { nextContext } from '@angular/core/src/render3';
import { Router } from '@angular/router';

@Component({

    templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit{

    quizes : Quiz[];
    quiz:Quiz;

    constructor(private quizService : QuizService , private router :Router){}
    ngOnInit(): void {
        this.quiz=new Quiz();
        this.quizService.findAll().subscribe((data) => {

                this.quizes=data;
                console.log(data);
        });

        
    }

    newChange(): void {
        this.router.navigateByUrl('quiz')
    }
}