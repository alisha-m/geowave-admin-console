import { Component } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin-console';
}

function add_store_redis(name, address) {
  /* /v0/store/add/redis 
  curl -X POST "http://127.0.0.1:8000/geowave-restservices-1.1.0-apache-201909091242/v0/store/add/redis?name=gdelt&address=redis%3A%2F%2F127.0.0.1%3A6379" -H "accept: application/json"
  (Parameters come after .../add/ , host url specified in config (also a param, but not supplied from user)
  */
  // return this.http.POST
  var url = 'http://127.0.0.1:8000/geowave-restservices-1.1.0-apache-201909091242/v0/store/add/redis?name=' + name + '&address=' + address + '%3A%2F%2F127.0.0.1%3A6379';
  const headers = new HttpHeaders()
    .set('accept', 'application/json')
  const body = {
  }

  return this.http
    .post(url, body, { headers: headers })
    .subscribe(res => res.json);
}

// add_store_redis('gdelt', 'redis://127.0.0.1:6379');