import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOutputComponent } from './item-output/item-output.component';
import { SizerComponent } from './sizer/sizer.component';
import { TableComponent } from './table/table.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { FileSizePipe } from './file-size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ButtonComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    SizerComponent,
    TableComponent,
    ParagraphComponent,
    FileSizePipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
