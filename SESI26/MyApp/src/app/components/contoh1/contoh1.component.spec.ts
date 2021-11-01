import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contoh1Component } from './contoh1.component';

describe('Contoh1Component', () => {
  let component: Contoh1Component;
  let fixture: ComponentFixture<Contoh1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Contoh1Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Contoh1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Ini adalah contoh1 component'`, () => {
    fixture = TestBed.createComponent(Contoh1Component);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Ini adalah contoh1 component');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(Contoh1Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1.title')?.textContent).toContain(
      'Ini adalah contoh1 component'
    );
  });
});
