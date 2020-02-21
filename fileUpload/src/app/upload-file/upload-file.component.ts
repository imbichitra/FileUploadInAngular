import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../shared/file-upload.service';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  profileForm: FormGroup;
  error: string;
  path:string;
  fileUpload = {status: '', message: '', filePath: ''};
  multipleFile=[];
  constructor(private fb: FormBuilder,private fileUploadService:FileUploadService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: [''],
      profile: ['']
    });
  }

  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.get('profile').setValue(file);
    }
  }

  

  onSubmit() {
    const formData = new FormData();
    //formData.append('name', this.profileForm.get('name').value);
    formData.append('profile', this.profileForm.get('profile').value);

    this.fileUploadService.upload(formData).subscribe(
      res => {
        this.fileUpload = res;
      },
      err => this.error = err,
      
    );
  }

  
}
