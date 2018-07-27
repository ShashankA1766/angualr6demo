import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterRoutingModule  } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        FormsModule      
    ],
    declarations: [RegisterComponent]
})
export class LoginModule {
}
