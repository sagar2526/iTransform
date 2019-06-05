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
    totalAnswered: number = 0;
    rightAnswer: number;

    constructor(private quizService : QuizService , private router :Router){}
    ngOnInit(): void {
        this.quiz=new Quiz();
        this.quizService.findAll().subscribe((data) => {

                this.quizes=data;
                console.log(data);
        });    
    }

    submitTest(){

        alert('submitted')
            for(let i=0;i<this.quiz.question.length;i++){

                let attempt=0;
                
                if ("selected" in this.quiz.question[i] && (this.quiz.question[i]["selected"] != null)) {
                    this.totalAnswered++;
                }       
                
                while(attempt<3)
                {
                if (this.quiz.question[i]["selected"] == this.quiz.question[i]["answer"] ) {
                    this.quiz.answer=this.rightAnswer;
                    this.rightAnswer++;
                    attempt=3;
                }
                else{
                    attempt++;
                }
            } 
            }               
    }





}