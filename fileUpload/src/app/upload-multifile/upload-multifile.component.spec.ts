import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMultifileComponent } from './upload-multifile.component';

describe('UploadMultifileComponent', () => {
  let component: UploadMultifileComponent;
  let fixture: ComponentFixture<UploadMultifileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMultifileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMultifileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
