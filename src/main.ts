import { bootstrapApplication } from "@angular/platform-browser";
import { TableComponent } from "./app/components/table/table.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(TableComponent, {
    providers: [importProvidersFrom(BrowserAnimationsModule)]
})

