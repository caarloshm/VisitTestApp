import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoVisitanteComponent } from './tipo-visitante.component';

describe('TipoVisitanteComponent', () => {
  let component: TipoVisitanteComponent;
  let fixture: ComponentFixture<TipoVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoVisitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
