// state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private dataSource = new BehaviorSubject<string>('Initial Data');
  data$ = this.dataSource.asObservable();
  updateData(newData: string) {
    this.dataSource.next(newData);
  }
}
