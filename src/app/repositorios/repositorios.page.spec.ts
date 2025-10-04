import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriosPage } from './repositorios.page';

describe('RepositoriosPage', () => {
  let component: RepositoriosPage;
  let fixture: ComponentFixture<RepositoriosPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(RepositoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
