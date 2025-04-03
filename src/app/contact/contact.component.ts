import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SectionLineComponent } from '../shared/section-line/section-line.component';

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

  // Neue Variable für die Erfolgsnachricht
  messageSent: boolean = false;


  // Formular zurücksetzen & Erfolgsmeldung anzeigen
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


  constructor(private http: HttpClient) { }

  // Validierung beim Verlassen des Namensfeldes
  validateName(): void {
    if (this.userName.trim() === '') {
      this.nameError = true;
      this.nameValid = false;
    } else {
      this.nameError = false;
      this.nameValid = true; // Feld ist korrekt ausgefüllt
    }
  }

  // Validierung beim Verlassen des E-Mail-Feldes
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
      this.emailValid = true; // Feld ist korrekt ausgefüllt
    }
  }

  // Validierung beim Verlassen des Nachrichtenfeldes
  validateMessage(): void {
    if (this.userMessage.trim() === '') {
      this.messageError = true;
      this.messageValid = false;
    } else {
      this.messageError = false;
      this.messageValid = true; // Feld ist korrekt ausgefüllt
    }
  }

  // Verarbeiten des Datenschutz-Checkbox-Events
  handlePrivacyCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.privacyChecked = checkbox.checked;
  }

  // Überprüfung aller Felder und Absenden des Formulars
  onSubmit(event: Event): void {
    event.preventDefault();

    // Gesamte Validierung vor dem Absenden
    this.validateName();
    this.validateEmail();
    this.validateMessage();

    // Falls ein Feld ungültig ist, abbrechen
    if (this.nameError || this.emailError || this.messageError) {
      return;
    }

    // Formulardaten erstellen
    const formData = new FormData();
    formData.append('name', this.userName);
    formData.append('email', this.userEmail);
    formData.append('message', this.userMessage);

    console.log('Sending form data:', formData);

    // Sende die Daten nur, wenn die Datenschutz-Checkbox aktiviert ist
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
  
    // 🛑 Warten, bis das Element gerendert wurde
    setTimeout(() => {
      const message = document.querySelector('.message-container');
      if (message) {
        console.log('Nachricht', message);
  
        // ⏳ Wartezeit für das Entfernen verlängern (mind. so lang wie die CSS-Animation)
        setTimeout(() => {
          this.messageSent = false; // Umschlag ausblenden
          console.log('📭 Nachricht wurde entfernt!');
        }, 4000); // ⚡ Warten, bis die Animation fertig ist (mind. 2s)
      } else {
        console.log('❌ Nachricht nicht gefunden!');
      }
    }, 100); // 🔥 Mini-Wartezeit, damit das DOM den Umschlag rendert
  }
  
  
}  
