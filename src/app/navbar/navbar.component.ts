import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  lang: string = '';
  
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // Set default language
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.translate.use(this.lang); // Set initial language
  }

  onLanguageChange(event: any) {
    const selectedLang = event.target.value;
    console.log('Changing language to: ' + selectedLang);
    localStorage.setItem('lang', selectedLang);
    this.translate.use(selectedLang); // Change language in translate service
  }
}
