import { Component, OnInit } from '@angular/core';
import { PersonsService } from 'src/app/data/persons.service';
import { IPerson } from 'src/app/interface/person';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  persons: IPerson[] = []

  constructor(private _personService: PersonsService) {}

  ngOnInit(): void {
    this._personService.getList()
    .subscribe(response => {
        this.persons = response.data
    })
  }

}
