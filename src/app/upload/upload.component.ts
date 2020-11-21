import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  fileToUpload: File = null;

  endpoint = 'http://127.0.0.1:3000/upload';

  constructor(private httpClient: HttpClient) {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToServer() {
    const formData: FormData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);

    this.httpClient.post(this.endpoint, formData).subscribe((res) => {
      console.log('res:', res);
    });
  }
}
