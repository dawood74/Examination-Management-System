import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Exam {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:44301/api/exam'; 

  getAllExams(page: number = 1, pageSize: number = 10): Observable<Exam[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Exam[]>(this.apiUrl, { params }).pipe(
      catchError(this.handleError)
    );
  }

  searchExams(title: string, page: number = 1, pageSize: number = 10): Observable<Exam[]> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    if (title) {
      params = params.set('title', title);
    }

    return this.http.get<Exam[]>(`${this.apiUrl}/search`, { params }).pipe(
      catchError(this.handleError)
    );
  }


  deleteExam(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getExamById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateExam(id: number, exam: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, exam);
  }
  
  getExamsCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`).pipe(
      catchError(this.handleError)
    );
  }
  getQuestionsCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/questions`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    return throwError(() => new Error(
      error.error?.message || 
      error.message || 
      'An unknown error occurred'
    ));
  }
}