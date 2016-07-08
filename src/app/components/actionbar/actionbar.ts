import { Component } from '@angular/core';
import {DataService} from './../../services/dataservice';

@Component({
	selector: 'actionbar',
	pipes: [],
	providers: [DataService],
	directives: [],
	styleUrls: ['./actionbar.css'],
	templateUrl: './actionbar.html',
})
export class ActionBar {
	public repos: Array<string>;
	public selectedRepo: string;

	constructor(public dataservice: DataService) {
		this.repos = ["kingpin", "brimstone"];
		this.selectedRepo = this.repos[0];
	}

	onRepoChange() {
		// fetchData
		// UpdateData of the graph here.
		this.dataservice.setRepo(this.selectedRepo);
		this.dataservice.fetchData(this.selectedRepo);
		console.log(this.dataservice.data);
		console.log("Changed repo : " + this.selectedRepo);
	}

}
