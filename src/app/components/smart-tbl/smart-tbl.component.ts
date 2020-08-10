import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-tbl',
  templateUrl: './smart-tbl.component.html',
  styleUrls: ['./smart-tbl.component.css']
})
export class SmartTblComponent implements OnInit {

	settings = {
		columns: {
			id: {
				title: 'ID'
			},
			name: {
				title: 'Full Name'
			},
			username: {
				title: 'User Name'
			},
			email: {
				title: 'Email'
			}
		}
	};
	data = [
		{
			id: 1,
			name: "Michell Adeline",
			username: "Bret",
			email: "test@email.com"
		},
		{
			id: 2,
			name: "Josn Howell",
			username: "test",
			email: "test@gmail.com"
		},
		{
			id: 3,
			name: "John Michell",
			username: "test.Stanton",
			email: "test@test.com"
		}
	];
  	
  	constructor() { }

  	ngOnInit(): void {
  }

}
