import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Form,
  ReactiveFormsModule,
} from '@angular/forms';
import { EES } from './ees';
import { ExpenseEntryService } from './expense-entry.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formdata: any;
  textArea: any;
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.textArea);
    this.textArea = this.textArea.replace(/\s/g, '');
    if (
      this.textArea == undefined ||
      this.textArea == '' ||
      this.textArea == null
    ) {
      alert('Please enter the data in text area!');
    } else {
      alert('data entered successfully');
    }
  }
}
