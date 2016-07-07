import { Injectable, EventEmitter } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  public data: any;
  constructor(private http: Http) {}

  fetchData(repoName) {
	  this.data = null;
	  this.http.get("http://host/"+repoName+".json").map((response) => {
		  this.data = response.json();
	  })
	  while(this.data == null) {};
  }
}
