import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddContactRoutingModule } from './addcontact-routing.module';
import { AddContactComponent } from './addcontact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        AddContactRoutingModule,
        FormsModule
    ],
    declarations: [AddContactComponent]
})
export class AddContactModule {
}
