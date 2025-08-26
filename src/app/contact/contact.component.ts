import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LanguageService } from '../services/language.service';
import { translations } from '../../../translations';
import { Router } from '@angular/router';
import { InViewDirective } from '../shared/in-view.directive';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, InViewDirective],
  host: { class: 'contact-root' },
})
export class ContactComponent {
  privacyChecked: boolean = false;
  userName: string = '';
  userEmail: string = '';
  userMessage: string = '';

  nameError: boolean = false;
  emailError: boolean = false;
  messageError: boolean = false;

  nameValid: boolean = false;
  emailValid: boolean = false;
  messageValid: boolean = false;
  messageSent: boolean = false;


  resetForm(): void {
    this.userName = '';
    this.userEmail = '';
    this.userMessage = '';

    this.nameError = false;
    this.emailError = false;
    this.messageError = false;

    this.nameValid = false;
    this.emailValid = false;
    this.messageValid = false;
  }


  constructor(private http: HttpClient, public lang: LanguageService, private router: Router) { }

  validateName(): void {
    if (this.userName.trim() === '') {
      this.nameError = true;
      this.nameValid = false;
    } else {
      this.nameError = false;
      this.nameValid = true;
    }
  }

  validateEmail(): void {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (this.userEmail.trim() === '') {
      this.emailError = true;
      this.emailValid = false;
    } else if (!emailRegex.test(this.userEmail)) {
      this.emailError = true;
      this.emailValid = false;
    } else {
      this.emailError = false;
      this.emailValid = true;
    }
  }

  validateMessage(): void {
    if (this.userMessage.trim() === '') {
      this.messageError = true;
      this.messageValid = false;
    } else {
      this.messageError = false;
      this.messageValid = true;
    }
  }

  handlePrivacyCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.privacyChecked = checkbox.checked;
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    this.validateName();
    this.validateEmail();
    this.validateMessage();

    if (this.nameError || this.emailError || this.messageError) {
      return;
    }

    const formData = new FormData();
    formData.append('name', this.userName);
    formData.append('email', this.userEmail);
    formData.append('message', this.userMessage);

    console.log('Sending form data:', formData);

    if (this.privacyChecked) {
      const headers = new HttpHeaders({
        Accept: 'application/json',
      });

      this.http.post(environment.apiUrl, formData).subscribe(
        (response) => {
          console.log('Server Response:', response);
          this.messageSent = true;
          this.triggerMessageAnimation();
          this.resetForm();
        },
        (error) => {
          console.error('Failed to send email:', error);
        }
      );
    }
  }

  
triggerMessageAnimation(): void {
  this.messageSent = true;

  setTimeout(() => {
    this.messageSent = false;
    console.log('📭 Nachricht wurde entfernt!');
  }, 4000); 
}


  text() {
    return translations[this.lang.language()];
  }

  scrollToTop(): void {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

onPrivacyLabelClick(event: MouseEvent) {
  let target = event.target as HTMLElement;
  while (target && target !== event.currentTarget) {
    if (target.tagName.toLowerCase() === 'a') {
      event.preventDefault();
       this.router.navigate(['/privacy']).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      break;
    }
    target = target.parentElement as HTMLElement;
  }
}

}