import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorswitchComponent } from './colorswitch.component';



describe('ColorswitchComp', ()=> {
  let component: ColorswitchComponent;
let fixture: ComponentFixture<ColorswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('#clicked() should toggle #isOn', () => {
    const comp = new ColorswitchComponent();

    expect(comp.isOn)
      .withContext('off at first')
      .toBe(false);

      comp.clicked();
    expect(comp.isOn)
      .withContext('on after click')
      .toBe(true);

      comp.clicked();
    expect(comp.isOn)
      .withContext('off after second click')
      .toBe(false);
  });

  it('#clicked() should set #message to "is on"', ()=>{
    const comp = new ColorswitchComponent();
    expect(comp.message)
      .withContext('off at first')
      .toMatch(/is off/i);

      comp.clicked();
    expect(comp.message)
      .withContext('on after clicked')
      .toMatch(/is on/i);
  });
});


// describe('TestComponent', () => {
//   let component: ColorswitchComponent;
//   let fixture: ComponentFixture<ColorswitchComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ColorswitchComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ColorswitchComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

  
//});
