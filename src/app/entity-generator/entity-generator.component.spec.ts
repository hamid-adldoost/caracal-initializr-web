import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityGeneratorComponent } from './entity-generator.component';

describe('EntityGeneratorComponent', () => {
  let component: EntityGeneratorComponent;
  let fixture: ComponentFixture<EntityGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
