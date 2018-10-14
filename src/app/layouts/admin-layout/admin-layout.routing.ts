import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ClienteComponent } from '../../cliente/cliente.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { PetComponent } from '../../pet/pet.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'cliente',    component: ClienteComponent   },
    { path: 'pet',        component: PetComponent       }
];
