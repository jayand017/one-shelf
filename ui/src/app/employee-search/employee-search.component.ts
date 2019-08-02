import { Component, OnInit } from '@angular/core';
import { EmployeeSearchService } from '../employee-search.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  text: string;
  results = [];

  name: string;
  location: string;
  skills: string;
  showCards: boolean = false;

  constructor(private employeeSearchService: EmployeeSearchService) { }

  ngOnInit() {
  }

  search(event) {
    let query = event.query;
    this.employeeSearchService.searchEmployee(query).subscribe(res => {
      let suggestionList = new Array();
      res.forEach(element => {
        let suggestion = {name: element.first_name + " " + element.last_name, id: element._id}
        suggestionList.push(suggestion)
      })
      this.results = suggestionList;
    })
  }

  details(event){
    let id = event.id;
    this.employeeSearchService.getEmployee(id).subscribe(res => {
      this.showCards = true;
      this.name = res.first_name + " " + res.last_name;
      this.location = res.location;
      this.skills = res.skills;
    })
  }

  clear(){
    this.showCards = false;
  }

}
