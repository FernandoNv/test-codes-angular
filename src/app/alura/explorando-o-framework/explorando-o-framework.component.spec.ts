import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorandoOFrameworkComponent } from './explorando-o-framework.component';

describe('ExplorandoOFrameworkComponent', () => {
  let component: ExplorandoOFrameworkComponent;
  let fixture: ComponentFixture<ExplorandoOFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorandoOFrameworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorandoOFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
