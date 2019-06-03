import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoNaoEncontradoComponent } from './contato-nao-encontrado.component';

describe('ContatoNaoEncontradoComponent', () => {
  let component: ContatoNaoEncontradoComponent;
  let fixture: ComponentFixture<ContatoNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoNaoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
