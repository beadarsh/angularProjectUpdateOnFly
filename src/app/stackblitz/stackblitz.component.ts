import { Component, OnInit } from '@angular/core';
import sdk from '@stackblitz/sdk';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {URLSearchParams} from '@angular/http';

// Create the project payload.
const project = {
  files: {
    'index.html': `<h2>Hello there!</h2>`,
    'index.ts': `// I'm empty.`,
    'randomFile.ts': '// You should delete me.'
  },
  title: 'Dynamically Generated Project',
  description: 'Created with <3 by the StackBlitz SDK!',
  template: 'typescript',
  tags: ['stackblitz', 'sdk']
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


// Embed this project
window['embedNewProject'] = () => {

  sdk.embedProject('myDiv', project, {
    openFile: 'index.html'
  })
  // Get the VM of the embedded instance
  .then(vm => {
    // Wait 2 seconds...
    setTimeout(()=> {
      // Then update the VM's file system :)
      vm.applyFsDiff({
        create: {
          'index.html': `<h1>This was updated programmatically!</h1>`
        },
        destroy: ['randomFile.ts']
      });
    }, 2000)
  });

}

@Component({
  selector: 'app-stackblitz',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.css']
})
export class StackblitzComponent implements OnInit {

  apiRoot: string = "http://localhost:3000"; 
  responseData = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getFiles() {
    console.log("GET");
    let url = `${this.apiRoot}/getemployee`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', '25');
    return this.http.get(url); 
  }

  getGeneratedFiles() {
       this.getFiles().subscribe(
          data => { 
            this.responseData = data;
          },
          err => { 
            console.error(err);
          },
          () => {
            console.log('done loading foods');
          }
        );
  }

  createFood(food) {
            let body = JSON.stringify(food);
            return this.http.post('/api/food/', body, httpOptions);
  }

}
