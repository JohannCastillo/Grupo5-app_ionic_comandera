import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesRechazadosPorDiaComponent } from './clientes-rechazados-por-dia.component';

describe('ClientesRechazadosPorDiaComponent', () => {
  let component: ClientesRechazadosPorDiaComponent;
  let fixture: ComponentFixture<ClientesRechazadosPorDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesRechazadosPorDiaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesRechazadosPorDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
