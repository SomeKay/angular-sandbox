import { NgModule } from '@angular/core';
import { AppComponent } from './core/containers/app/app.component';
import { CoreModule } from './core/core.module';

@NgModule({
    bootstrap: [AppComponent],
    imports: [CoreModule]
})
export class AppModule {}
