import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReproducirPage } from './reproducir.page';

describe('ReproducirPage', () => {
  let component: ReproducirPage;
  let fixture: ComponentFixture<ReproducirPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReproducirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
