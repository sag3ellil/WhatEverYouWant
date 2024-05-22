import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  newItemForm!: FormGroup;

  constructor(private fb: FormBuilder, @Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    this.newItemForm = this.fb.group({
      nameObject: ['', Validators.required],
      description: ['', Validators.required],
      nameOwner: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      location: this.fb.group({ // Nested FormGroup for location
        latitude: [],
        longitude: []
      })
    });

    if (isPlatformBrowser(this.platformId)) {
      // Load Leaflet map if running in browser
      import('leaflet').then(leaflet => {
        this.initializeMap(leaflet);
      }).catch(error => {
        console.error('Error loading Leaflet:', error);
      });
    }
  }
  marker:any
  private initializeMap(leaflet: any) {

    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
    
    // Initialize Leaflet map
    const map = leaflet.map('map').setView([50.872204302192415, 4.4041476680286], 13);

    // Add OpenStreetMap tiles
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    const customIcon = leaflet.icon({
      iconUrl: 'assets/leaflet/marker-icon.png',
      shadowUrl: 'assets/leaflet/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    this.marker = leaflet.marker([lat, lng], {
      icon: customIcon,
      draggable: true
    }).addTo(map);
    // Add click event listener to get location
     map.on('click', (e: any) => {
      const { lat, lng } = e.latlng;
      this.newItemForm.get('location.latitude')?.setValue(lat);
      this.newItemForm.get('location.longitude')?.setValue(lng);
      
      if (this.marker) {
        this.marker.setLatLng([lat, lng]);
      } else {
        

        this.marker = leaflet.marker([lat, lng], {
          icon: customIcon,
          draggable: true
        }).addTo(map);
      }
    });

  })

    /*leaflet.marker([50.871931196408404,4.388935088063591], {
      icon: customIcon,
      draggable: true
    }).addTo(map);*/
  }

  onSubmit() {
    if (this.newItemForm.invalid) {
      return;
      // Save logic here
    }
    const newItem = this.newItemForm.value;
    console.log(newItem);
  }
}