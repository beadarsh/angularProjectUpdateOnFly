import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StackblitzComponent } from './stackblitz/stackblitz.component';
import { HttpClientModule } from '@angular/common/http'; 
import { TestFormComponentComponent } from './test-form-component/test-form-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenCodeComponent } from './gen-code/gen-code.component';
import { UpdateOnFlyGithubComponent } from './update-on-fly-github/update-on-fly-github.component';


@NgModule({
  declarations: [
    AppComponent,
    StackblitzComponent,
    TestFormComponentComponent,
    GenCodeComponent,
    UpdateOnFlyGithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,    
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
