import { Component } from '@angular/core';

@Component({
  selector: 'app-personas-generation',
  templateUrl: './personas-generation.component.html',
  styleUrl: './personas-generation.component.scss'
})
export class PersonasGenerationComponent {
  jsonResponse: string;

  constructor() {
    this.jsonResponse = "{ \"Diogo Buarque Franzosi - Data\": { \"Data Scientist\": 0.3457283675670624, \"Data Scientist in Contamination\": 0.3601120114326477,"
      + "\"Data Scientist- Pricing insights\": 0.3513360619544983, \"Senior Data Analyst\": 0.36060917377471924, \"Senior Data scientist with excellent software development skills\": 0.3502436578273773 } }";
  }

  ngOninit() {

  }
}
