import { Module2Module } from './services/module2/module2.module';
import { Module1Module } from './services/module1/module1.module';
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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ServicesExampleComponent } from './services/services-example/services-example.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TableComponent } from './services/products-app/table/table.component';
import { FormComponent } from './services/products-app/form/form.component';
import { DepartmentComponent } from './services/products-app/department/department.component';
import { MatTableModule } from '@angular/material/table';
import { BasicComponent } from './observables/basic/basic.component';
import { ColdObservablesComponent } from './observables/cold-observables/cold-observables.component';
import { IntroComponent } from './observables/hot-observables/intro/intro.component';
import { SubjectsComponent } from './observables/subjects/subjects.component';
import { SubjectsChildComponent } from './observables/subjects/subjects-child/subjects-child.component';
import { BasicCreationComponent } from './operators-rxjs/basic-creation/basic-creation.component';
import { OperatorsComponent } from './operators-rxjs/operators/operators.component';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { AsyncComponent } from './operators-rxjs/async/async.component';
import { ErrorHandlingComponent } from './operators-rxjs/error-handling/error-handling.component';
import { DragAndDropComponent } from './operators-rxjs/drag-and-drop/drag-and-drop.component';
import { UnsubscribeComponent } from './operators-rxjs/unsubscribe/unsubscribe.component';
import { SwitchMergeComponent } from './operators-rxjs/switch-merge/switch-merge.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientComponent } from './http-client/client/client.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogEditComponent } from './http-client/dialog-edit/dialog-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormNativeValidationComponent } from './forms/form-native-validation/form-native-validation.component';
import { FormValidationComponent } from './forms/form-validation/form-validation.component';
import { FormControlComponent } from './forms/form-control/form-control.component';
import { FormGroupComponent } from './forms/form-group/form-group.component';
import { FormBuilderComponent } from './forms/form-builder/form-builder.component';
import { FormArrayComponent } from './forms/form-array/form-array.component';
import { ReactiveFormValidationComponent } from './forms/reactive-form-validation/reactive-form-validation.component';

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
  MatChipsModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatTableModule,
  MatRippleModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule
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
    ChildChildComponent,
    ServicesExampleComponent,
    TableComponent,
    FormComponent,
    DepartmentComponent,
    BasicComponent,
    ColdObservablesComponent,
    IntroComponent,
    SubjectsComponent,
    SubjectsChildComponent,
    BasicCreationComponent,
    OperatorsComponent,
    AsyncComponent,
    ErrorHandlingComponent,
    DragAndDropComponent,
    UnsubscribeComponent,
    SwitchMergeComponent,
    ClientComponent,
    DialogEditComponent,
    FormsComponent,
    TemplateDrivenComponent,
    FormNativeValidationComponent,
    FormValidationComponent,
    FormControlComponent,
    FormGroupComponent,
    FormBuilderComponent,
    FormArrayComponent,
    ReactiveFormValidationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...materialsModules,
    FormsModule,
    ReactiveFormsModule,
    Module1Module,
    Module2Module,
    HttpClientModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
