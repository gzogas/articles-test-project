import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class LoaderService {

    private loadingSubject$ = new BehaviorSubject<boolean>(false)
    public loading$: Observable<boolean> = this.loadingSubject$.asObservable();

    /**
    * Sets the loader on
    */
    public loaderOn(): void {
        this.loadingSubject$.next(true)
    }

    /**
    * Sets the loader off
    */
    public loaderOff(): void {
        this.loadingSubject$.next(false)
    }
}

