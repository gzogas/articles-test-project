import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import debounce from 'lodash-es/debounce';
import { LoaderService } from '../services/loader.service';


@Component({
    selector: 'search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

    constructor(public loaderService: LoaderService){}

    // Inputs/Outputs
    @Output() triggerSearch = new EventEmitter<string>();

    // Puplic properties
    public searchTerm = '';
    public searchDebouncer: () => void;

    ngOnInit(): void {
        this.registerDebouncers()
    }

    private registerDebouncers(): void {
        this.searchDebouncer = debounce(() => {
            this.triggerSearch.emit(this.searchTerm);
        }, 300);
    }
}
