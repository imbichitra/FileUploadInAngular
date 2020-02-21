import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../shared/file-upload.service';

@Component({
  selector: 'app-upload-multifile',
  templateUrl: './upload-multifile.component.html',
  styleUrls: ['./upload-multifile.component.css']
})
export class UploadMultifileComponent implements OnInit {
  error: string;
  fileUpload = {status: '', message: '', filePath: ''};
  multipleFile=[];
  constructor(private fileUploadService:FileUploadService) { }

  ngOnInit() {
  }

  onSelectMultipleFile(event) {
    if (event.target.files.length > 0) {
      this.multipleFile = event.target.files;
    }
  }

  onMultipleSubmit() {
    const formData = new FormData();
    for(let img of this.multipleFile){
      formData.append('profile',img);
    }
    this.fileUploadService.uploadMulti(formData).subscribe(
      res => {
        this.fileUpload = res;
      },
      err => this.error = err,
      
    );
  }
}
