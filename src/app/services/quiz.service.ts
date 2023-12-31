import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService  {

  constructor(private _http:HttpClient) { }

  public quizzes(){
    return this._http.get(`${baseUrl}/quiz/`)
  }

  //add quiz
  public addQuiz(quiz:any){
    return this._http.post(`${baseUrl}/quiz/`,quiz);
  }

  //delete quiz
  public deleteQuiz(qId:any){
    return this._http.delete(`${baseUrl}/quiz/${qId}`);
  }

  //get single quiz
  public getSingleQuiz(qId:any){
    return this._http.get(`${baseUrl}/quiz/${qId}`);
  }
  //update quiz
  public updateQuiz(quiz:any){
    return this._http.put(`${baseUrl}/quiz/`,quiz);
  }

  //get Quiz as per Categories
  // public getQuizzesOfCategory(cid:any){
  //   return this._http.get(`${baseUrl}/quiz/category/${cid}`);
  // }
  //get active quizes
  public getActiveQuizzes(){
    return this._http.get(`${baseUrl}/quiz/active`)
  }

  //get active quizes of Category
  public getActiveQuizesOfCategory(cid:any){
    return this._http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }
}
