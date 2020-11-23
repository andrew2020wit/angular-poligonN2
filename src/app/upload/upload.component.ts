import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  // input candidates
  label = 'Upload file';
  endpoint = 'http://127.0.0.1:3000/upload';
  accept = 'image/*'; // accept="file_extension|audio/*|video/*|image/*|media_type"

  upLoading = false;
  upLoadedMes = '';
  fileToUpload: File = null;

  constructor(private httpClient: HttpClient) {}

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToServer() {
    if (this.upLoading) {
      return;
    }
    this.upLoading = true;

    const formData: FormData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);

    this.httpClient.post(this.endpoint, formData).subscribe((res) => {
      console.log('res:', res);
      this.upLoadedMes = 'Successfully uploaded!';
    });
    this.upLoading = false;
    this.fileToUpload = null;
  }
}
