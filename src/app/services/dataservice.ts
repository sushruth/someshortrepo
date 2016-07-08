import { Injectable, EventEmitter } from '@angular/core';
import { Http, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
	public data: any;
	public repoSelected: string;
	constructor(private http: Http) { }

	fetchData(repoName) {
		this.data = null;
		this.http.get("https://api.github.com/users/mralexgray/repos").subscribe((res: Response) => {
			this.data = res.json();
		});
		// while (this.data == null) { };
	}

	private extractData(res: Response) {
		let body = res.json();
		console.log(body);
    }

	private errorHandler(error: any) {
		console.log('error fetching data');
	}

	setRepo(repoName) {
		this.repoSelected = repoName;
	}
}
