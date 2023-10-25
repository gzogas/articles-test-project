import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { LoaderComponent } from './loader/loader.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { SkeletonItemComponent } from './skeleton-item/skeleton-item.component';
import { EmptyResultsComponent } from './empty-results/empty-results.component';
import { DatePipe } from './pipes/epoch-to-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesListComponent,
    LoaderComponent,
    SearchBarComponent,
    SkeletonItemComponent,
    EmptyResultsComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



  constructor() {


  }


}

