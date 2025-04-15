import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SectionLineComponent } from '../shared/section-line/section-line.component';
import { LanguageService } from '../services/language.service';
import { translations } from '../../../translations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, SectionLineComponent],
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


  constructor(private http: HttpClient, public lang: LanguageService) { }

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
          console.log('✅ Server Response:', response);
          this.messageSent = true;
          this.triggerMessageAnimation();
          this.resetForm();
        },
        (error) => {
          console.error('❌ Failed to send email:', error);
        }
      );
    }
  }
  triggerMessageAnimation(): void {
    this.messageSent = true;
  
    setTimeout(() => {
      const message = document.querySelector('.message-container');
      if (message) {
        console.log('Nachricht', message);
  
        
        setTimeout(() => {
          this.messageSent = false;
          console.log('📭 Nachricht wurde entfernt!');
        }, 4000); 
      } else {
        console.log('❌ Nachricht nicht gefunden!');
      }
    }, 100); 
  }
  
  text() {
    return translations[this.lang.language()];
  }
}  
