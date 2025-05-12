import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameTestComponent } from './name-test.component';

describe('NameTestComponent', () => {
  let component: NameTestComponent;
  let fixture: ComponentFixture<NameTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
