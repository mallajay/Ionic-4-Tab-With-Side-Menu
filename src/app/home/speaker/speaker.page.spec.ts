import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpeakerPage } from './speaker.page';

describe('SpeakerPage', () => {
  let component: SpeakerPage;
  let fixture: ComponentFixture<SpeakerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
