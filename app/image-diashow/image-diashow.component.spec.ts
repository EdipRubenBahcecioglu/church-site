import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDiashowComponent } from './image-diashow.component';

describe('ImageDiashowComponent', () => {
  let component: ImageDiashowComponent;
  let fixture: ComponentFixture<ImageDiashowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageDiashowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageDiashowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
