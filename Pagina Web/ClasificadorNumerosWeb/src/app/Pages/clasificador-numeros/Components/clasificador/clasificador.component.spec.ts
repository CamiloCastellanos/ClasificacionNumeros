import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificadorComponent } from './clasificador.component';

describe('ClasificadorComponent', () => {
  let component: ClasificadorComponent;
  let fixture: ComponentFixture<ClasificadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
