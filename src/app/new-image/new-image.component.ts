import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-image',
  templateUrl: './new-image.component.html',
  styleUrls: ['./new-image.component.scss']
})
export class NewImageComponent implements OnInit {

  description: string;
  file: File;
  imageName = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  upload(description, file) {
  }

  image_selected(event) {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.set('image', image);
    formData.set('description', this.description);
    this.imageName = image.name;
  }

  backToGallery() {
    this.router.navigate(['gallery']);
  }

}
