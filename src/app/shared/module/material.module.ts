import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
    exports: [
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatTooltipModule,
        MatToolbarModule,
        MatChipsModule,
        MatRippleModule,
        MatProgressBarModule,
        MatListModule,
        ClipboardModule,
        MatDialogModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSidenavModule,
        MatSelectModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatTreeModule,
        MatCheckboxModule,
        MatInputModule
    ],
    providers: [
        MatDatepickerModule,
        MatSnackBar
    ]
})
export class MaterialModule { }
