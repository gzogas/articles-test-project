import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';


@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

    // Public properties
    public skeletonItems: number[] = Array(5).fill(0);

    constructor(public loaderService: LoaderService) {

    }
}