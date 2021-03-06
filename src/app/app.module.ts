import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NativeDinamicFormModule } from './native-dinamic-form/native-dinamic-form.module';
import { ShareModule } from './share/share.module';
import { UploadModule } from './upload/upload.module';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    NativeDinamicFormModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    UploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
