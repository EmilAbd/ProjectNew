import { Component, Input } from '@angular/core';
import { IPerson } from 'src/app/interface/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  @Input() person!: IPerson

  isVisible = false
}
