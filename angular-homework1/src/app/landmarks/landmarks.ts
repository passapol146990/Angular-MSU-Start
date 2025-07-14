import { Component } from '@angular/core';
import JsonData from "./landmark.json";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landmarks',
  imports: [FormsModule],
  templateUrl: './landmarks.html',
  styleUrl: './landmarks.css'
})

export class Landmarks {
  protected items = JsonData;
  protected uniqueCountries: Set<string> = new Set();

  constructor() {
    this.processData();
  }

  processData(): void {
    if (!JsonData || !Array.isArray(JsonData)) {
      console.warn("JsonData is not an array or is undefined.");
      return;
    }

    for (const item of JsonData) {
      if (item.country) {
        const countryName = item.country.trim();
        if (countryName) {
          this.uniqueCountries.add(countryName);
        }
      }
    }
  }

  getUniqueCountriesArray(): string[] {
    return Array.from(this.uniqueCountries);
  }

  FilterIdx(DOM: HTMLInputElement){
    if(DOM.value.length>0){
      this.items = JsonData.filter((e)=>e.idx.toString()==DOM.value);
    }else{
      this.items = JsonData;
    }
  }

  FilterName(DOM: HTMLInputElement){
    if(DOM.value.length>0){
      this.items = JsonData.filter((e)=>e.name.toString().includes(DOM.value));
    }else{
      this.items = JsonData;
    }
  }

  FilterCountry(DOM: String){
    if(DOM.length>0){
      this.items = JsonData.filter((e)=>e.country.toString().toLowerCase().includes(DOM.toLowerCase()));
    }else{
      this.items = JsonData;
    }
  }
}
