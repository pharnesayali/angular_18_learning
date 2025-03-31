import { Routes } from '@angular/router';
import { AddEmpComponent } from './component/add-emp/add-emp.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { ListEmpComponent } from './component/list-emp/list-emp.component';
import { StructuralDirectiveComponent } from './component/directives/structural-directive/structural-directive.component';
import { AttributeDirectivesComponent } from './component/directives/attribute-directives/attribute-directives.component';

export const routes: Routes = [
    { path: 'Add-Emp', component: AddEmpComponent },
    { path: 'Data-binding', component: DataBindingComponent },
    { path: 'Emp-List', component: ListEmpComponent },
    { path: 'Structural Directive', component: StructuralDirectiveComponent },
    { path: 'Attribute Directive', component: AttributeDirectivesComponent },
];
