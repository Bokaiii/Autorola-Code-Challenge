import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarDTO } from "../../typings";
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-new-car-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-car-modal.component.html',
  styleUrl: './new-car-modal.component.scss'
})
export class NewCarModalComponent implements OnInit {
  public form!: FormGroup;
  @Input() public car?: CarDTO;

  constructor(
    private activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      make: this.fb.control(this.car?.make ? this.car?.make : "", {validators: [Validators.required]}),
      model: this.fb.control(this.car?.model ? this.car?.model : "", {validators: [Validators.required]}),
      milage: this.fb.control(this.car?.milage ? this.car?.milage : "", {validators: [Validators.required]}),
      vin: this.fb.control(this.car?.vin ? this.car?.vin : "", {validators: [Validators.required]})
    });
  }

  public submit(): void {
    const carDto: CarDTO = {
      vin: this.vin.value,
      make: this.make.value,
      model: this.model.value,
      milage: this.milage.value,
      created: new Date()
    }

    this.activeModal.close(carDto);
  }

  public close(): void {
    this.activeModal.dismiss("Cancelled");
  }

  public get make(): FormControl {
    return this.form.get('make') as FormControl;
  }

  public get model(): FormControl {
    return this.form.get('model') as FormControl;
  }

  public get milage(): FormControl {
    return this.form.get('milage') as FormControl;
  }

  public get vin(): FormControl {
    return this.form.get("vin") as FormControl;
  }
}
