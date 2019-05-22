import { AboutCardComponent } from './about-card/about-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginAreaComponent } from './login-area/login-area.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginAreaComponent,
        AboutComponent,
        AboutCardComponent,
        RegisterComponent,
        MenuComponent,
        SubmenuComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
