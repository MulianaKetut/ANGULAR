import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-payment',
  templateUrl: './form-payment.component.html',
  styleUrls: ['./form-payment.component.css'],
})
export class FormPaymentComponent implements OnInit, OnChanges {
  @Input() item: any;
  postData: any;
  namaBtn: string = 'Submit';

  formPayment: FormGroup;

  constructor(
    private builder: FormBuilder,
    private paymentService: PaymentService
  ) {
    this.formPayment = this.builder.group({
      cardOwnerName: new FormControl('', [Validators.required]),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
        Validators.minLength(16),
        Validators.maxLength(16),
      ]),
      securityCode: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      expirationDate: new FormControl('', [Validators.required]),
      paymentDetailId: new FormControl(),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.item = changes.item.currentValue;
    if (this.item != -1) {
      this.namaBtn = 'Update';
      this.setDataPayment();
    }
  }

  ngOnInit(): void {}

  get paymentDetailId() {
    return this.formPayment.get('paymentDetailId');
  }
  get cardOwnerName() {
    return this.formPayment.get('cardOwnerName');
  }
  get cardNumber() {
    return this.formPayment.get('cardNumber');
  }
  get securityCode() {
    return this.formPayment.get('securityCode');
  }
  get expirationDate() {
    return this.formPayment.get('expirationDate');
  }

  onSubmit() {
    if (this.item == -1) {
      //create
      let postData: any = {
        CardOwnerName: this.cardOwnerName?.value,
        CardNumber: this.cardNumber?.value,
        SecurityCode: this.securityCode?.value,
        ExpirationDate: this.expirationDate?.value,
      };
      // console.log('Post Data ', postData);
      this.paymentService.createPaymentDetail(postData).subscribe(
        (data) => {
          // console.log('Response POST Data ', data);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.formPayment.reset();
          window.location.reload();
        },
        (error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: error.error.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    } else {
      //update
      let postData: any = {
        PaymentDetailId: this.paymentDetailId?.value,
        CardOwnerName: this.cardOwnerName?.value,
        CardNumber: this.cardNumber?.value,
        SecurityCode: this.securityCode?.value,
        ExpirationDate: this.expirationDate?.value,
      };
      this.paymentService.updatePaymentDetail(postData, this.item).subscribe(
        (data) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.formPayment.reset();
          window.location.reload();
        },
        (error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: error.error.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    }
  }
  setDataPayment() {
    if (this.item !== undefined) {
      this.paymentService.getPaymentDetailById(this.item).subscribe(
        (data) => {
          this.postData = data;

          if (this.formPayment != null && this.postData != null) {
            this.formPayment.controls['paymentDetailId'].setValue(
              this.postData.paymentDetailId
            );
            this.formPayment.controls['cardOwnerName'].setValue(
              this.postData.cardOwnerName
            );
            this.formPayment.controls['cardNumber'].setValue(
              this.postData.cardNumber
            );
            this.formPayment.controls['securityCode'].setValue(
              this.postData.securityCode
            );
            this.formPayment.controls['expirationDate'].setValue(
              String(this.postData.expirationDate).slice(0, 10)
            );
          }
        },
        (error) => {
          // console.log('Error while getting payment by id');
          Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Error while getting payment by id',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    }
  }

  onReset() {
    this.formPayment.reset();
    this.item = -1;
    window.location.reload();
  }
}
