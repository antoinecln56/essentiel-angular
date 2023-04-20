import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReactiveFormComponent } from './ajouter-reactive-form.component';

describe('AjouterReactiveFormComponent', () => {
  let component: AjouterReactiveFormComponent;
  let fixture: ComponentFixture<AjouterReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
