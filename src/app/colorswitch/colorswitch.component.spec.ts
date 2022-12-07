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
    expect(component).toBeTruthy(); //if it exists
  });

//test the initial colour
 it('the initial colour for font and background', () => {
     expect(component.color).withContext('light at first').toMatch(/Light/i);
  });


  it('#clicked() should toggle #isOn', () => {
    const comp = new ColorswitchComponent();

    expect(comp.isOn)
      .withContext('dark at first')
      .toBe(false);

      comp.clicked();
    expect(comp.isOn)
      .withContext('light after click')
      .toBe(true);

      comp.clicked();
    expect(comp.isOn)
      .withContext('dark after second click')
      .toBe(false);
  });

  it('#clicked() should set #color to "is dark"', ()=>{
    const comp = new ColorswitchComponent();
    expect(comp.message)
      .withContext('dark at first')
      .toMatch(/is dark/i);

      comp.clicked();
    expect(comp.message)
      .withContext('light after clicked')
      .toMatch(/is light/i);
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
