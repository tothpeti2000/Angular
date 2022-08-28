import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Input() filter: Filter;
  @Output() submit = new EventEmitter();

  handleSubmit() {
    this.submit.emit();
  }
}
