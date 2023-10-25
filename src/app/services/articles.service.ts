import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay, shareReplay } from "rxjs";
import { apiEndpoint } from "src/environments/environment";
import { IArticle } from "../articles-list/articles-list.component";



@Injectable({
    providedIn: "root"
})
export class ArticlesService {

    constructor(private http: HttpClient) {
    }

    /**
     * Fetches the articles from the mock api
     * @returns An observable that contains the article list
     */
    public loadArticles(): Observable<IArticle[]> {
        return this.http.get<IArticle[]>(`${apiEndpoint}articles`).pipe(
            shareReplay(),
        )
    }
}

