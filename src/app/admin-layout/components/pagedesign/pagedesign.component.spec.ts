import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedesignComponent } from './pagedesign.component';

describe('PagedesignComponent', () => {
  let component: PagedesignComponent;
  let fixture: ComponentFixture<PagedesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagedesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
