import { Injectable } from '@angular/core';
import { Subject }  from 'rxjs/Subject';

@Injectable()
export class SharedService {

    private metaData = new Subject<string>();
    metaData$ = this.metaData.asObservable();

    MetaData(jsonData) {
        this.metaData.next(jsonData);
    }
}
