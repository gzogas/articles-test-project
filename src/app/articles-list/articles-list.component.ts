import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { ArticlesService } from '../services/articles.service';

export interface IArticle {
    title: string,
    publishedAt: number;
    publisher: string,
    id: string;
    readTime: number;
}

@Component({
    selector: 'article-list',
    templateUrl: './articles-list.component.html',
    styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit, OnDestroy {

    // Private properties
    private subscriptions: Subscription;

    // Public properties
    public articles$: Observable<IArticle[]>;
    public loader$: Observable<boolean>;
    public articles: IArticle[] = [];
    public filteredArticles: IArticle[] = [];


    // Private properties
    constructor(private articlesService: ArticlesService, public loaderService: LoaderService) {
        this.subscriptions = new Subscription()
    }

    ngOnInit(): void {
        this.loaderService.loaderOn()
        this.registerObservables();
        this.registerSubscriptions()
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe()
    }

    private registerObservables() {
        this.articles$ = this.articlesService.loadArticles().pipe(
            filter((articles) => articles != null),
            finalize(() => this.loaderService.loaderOff())
        )

        this.loader$ = this.loaderService.loading$;
    }

    private registerSubscriptions(): void {
        this.subscriptions.add(
            this.articles$.subscribe((articles: IArticle[]) => {
                this.articles = articles;
                this.filterArticles()
            })
        )
    }

    /**
     * Filters the the articles list by the given search term
     * @param searchTerm The given search term
     */
    public filterArticles(searchTerm?: string): void {
        this.filteredArticles = !searchTerm ?
            this.articles
            : this.articles.filter((article) => article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                article.publisher.toLowerCase().includes(searchTerm.toLowerCase()));
        // NOTE: If the list was paginated or lazyloaded, the filtering logic would be held be the api
        // by sending a new call along with the search term in order to get back the results

        this.loaderService.loaderOff();
    }
}