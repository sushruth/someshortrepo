import { Component } from '@angular/core';
import {DataService} from './../../services/dataservice';

@Component({
	selector: 'overallstats',
	pipes: [],
	providers: [DataService],
	directives: [],
	templateUrl: './overall.html',
})
export class OverallStats {
	public repos: Array<string>;

	constructor(public dataservice: DataService) {
		// this.dataservice.repoSelected;
	}

}
