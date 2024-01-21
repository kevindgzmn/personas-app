import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasGenerationComponent } from './personas-generation.component';

describe('PersonasGenerationComponent', () => {
  let component: PersonasGenerationComponent;
  let fixture: ComponentFixture<PersonasGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonasGenerationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonasGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
