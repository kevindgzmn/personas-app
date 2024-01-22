import { Component } from '@angular/core';

@Component({
  selector: 'app-personas-generation',
  templateUrl: './personas-generation.component.html',
  styleUrl: './personas-generation.component.scss'
})
export class PersonasGenerationComponent {
  jsonResponse: string;
  candidate: string;
  candidateEmail: string;
  candidateSkills: Array<any>;

  constructor() {
    this.jsonResponse = "{\"assignments\":[{\"broker\":\"Adecco\",\"position\":\"Re-marketing Lead to Polestar Automotive\",\"score\":0.3872344493865967,\"webpage\":" +
      "\"https://www.adecco.se/jobb/re-marketing-lead-to-polestar-automotive-forsaljning-marknadsforing/?ID=2c51e926-638f-4d4c-8ea3-a07a4e12c084\"},{\"broker\":\"Adecco\",\"position\":" +
      "\"Electrical Test Engineer for future assignments\",\"score\":0.39631009101867676,\"webpage\":\"https://www.adecco.se/jobb/electrical-test-engineer-for-future-assignments-ingenjor-teknik/?ID=af7e8342-d33e-40f6-b2fd-37819ad9f435\"}],\"candidate\":{\"cvName\":\"DiogoFranzosi\",\"email\":\"diogo@synteda.com\"}}";
    let jsonResponseObject = JSON.parse(this.jsonResponse);
    this.candidate = "";
    this.candidateEmail = "";
    this.candidateSkills = [];
  }

  ngOnInit() {
    let jsonResponseObject = JSON.parse(this.jsonResponse);
    this.candidate = jsonResponseObject['candidate']['cvName'];
    this.candidateEmail = jsonResponseObject['candidate']['email'];
    this.candidateSkills = jsonResponseObject['assignments'];
  }
}
