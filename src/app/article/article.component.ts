import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from '../articles-list/articles-list.component';


@Component({
    selector: 'article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

    // Inputs/Outputs
    @Input() article: IArticle;

}