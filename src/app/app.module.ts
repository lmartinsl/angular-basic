import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './data-binding/string-interpolation/string-interpolation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { TwoWayDataBindingComponent } from './data-binding/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from "@angular/forms";
import { NgStyleComponent } from './directives/ng-style/ng-style.component'
import { MatRadioModule } from '@angular/material/radio';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgForComponent } from './directives/ng-for/ng-for.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgSwitchComponent } from './directives/ng-switch/ng-switch.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgTemplateComponent } from './directives/ng-template/ng-template.component';
import { NgContainerComponent } from './directives/ng-container/ng-container.component';
import { NgContentComponent } from './directives/ng-content/ng-content.component';
import { InputBindingComponent } from './communication/input-binding/input-binding.component';
import { OutputBindingComponent } from './communication/output-binding/output-binding.component';
import { ChildItemComponent } from './communication/output-binding/child-item/child-item.component';
import { ClientsComponent } from './communication/output-binding/clients/clients.component';
import { ClientItemComponent } from './communication/output-binding/clients/client-item/client-item.component';
import { ParentChieldComponent } from './communication/output-binding/parent-chield/parent-chield.component';
import { TimerComponent } from './communication/output-binding/parent-chield/timer/timer.component';
import { OnChangesComponent } from './communication/on-changes/on-changes.component';
import { NameChangesComponent } from './communication/on-changes/name-changes/name-changes.component';
import { InterceptingComponent } from './communication/intercepting/intercepting.component';
import { NameComponent } from './communication/intercepting/name/name.component';
import { MainComponent } from './life-cycle/main/main.component';
import { LifecycleChildComponent } from './life-cycle/main/lifecycle-child/lifecycle-child.component';
import { MatChipsModule } from '@angular/material/chips';
import { ChildChildComponent } from './life-cycle/main/lifecycle-child/child-child/child-child.component';

const materialsModules = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule,
  MatListModule,
  MatIconModule,
  MatProgressBarModule,
  MatChipsModule
]

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgTemplateComponent,
    NgContainerComponent,
    NgContentComponent,
    InputBindingComponent,
    OutputBindingComponent,
    ChildItemComponent,
    ClientsComponent,
    ClientItemComponent,
    ParentChieldComponent,
    TimerComponent,
    OnChangesComponent,
    NameChangesComponent,
    InterceptingComponent,
    NameComponent,
    MainComponent,
    LifecycleChildComponent,
    ChildChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...materialsModules,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
