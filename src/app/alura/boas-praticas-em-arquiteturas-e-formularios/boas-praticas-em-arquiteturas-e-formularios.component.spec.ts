import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoasPraticasEmArquiteturasEFormulariosComponent } from './boas-praticas-em-arquiteturas-e-formularios.component';

describe('BoasPraticasEmArquiteturasEFormulariosComponent', () => {
  let component: BoasPraticasEmArquiteturasEFormulariosComponent;
  let fixture: ComponentFixture<BoasPraticasEmArquiteturasEFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoasPraticasEmArquiteturasEFormulariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoasPraticasEmArquiteturasEFormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
