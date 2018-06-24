import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-update-on-fly-github',
  templateUrl: './update-on-fly-github.component.html',
  styleUrls: ['./update-on-fly-github.component.css']
})
export class UpdateOnFlyGithubComponent implements OnInit {


  isExpanded = false;
  sideMode = 'side';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}



export class UserEvent {
  event: string;
  selector: string;
  value: string;
  constructor(event: Partial<UserEvent>) {
    Object.assign(this, event);
  }
}