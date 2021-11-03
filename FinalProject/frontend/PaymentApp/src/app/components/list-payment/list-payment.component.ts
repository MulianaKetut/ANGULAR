import { Component, OnInit, Output } from '@angular/core';
import { PaymentDetail } from 'src/app/models/PaymentDetail';
import { PaymentService } from 'src/app/services/payment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-payment',
  templateUrl: './list-payment.component.html',
  styleUrls: ['./list-payment.component.css'],
})
export class ListPaymentComponent implements OnInit {
  paymentDetails: PaymentDetail[] = [];
  currentId: number = -1;

  constructor(private paymentService: PaymentService) {
    this.getAllPaymentDetail();
  }

  ngOnInit(): void {
    this.getAllPaymentDetail();
  }

  getAllPaymentDetail() {
    this.paymentService.getPaymentDetails().subscribe((data) => {
      this.paymentDetails = data;
    });
    // this.paymentDetails.sort((a, b) => b.paymentDetailId - a.paymentDetailId);
  }

  deletePaymentDetail(id: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.paymentService.deletePaymentDetail(id).subscribe((res) => {
          // console.log('Message delete ', res);
          this.getAllPaymentDetail();
          window.location.reload();
          Swal.fire('Deleted!', res.message, 'success');
        });
      }
    });
  }

  updatePaymentDetail(id: number) {
    this.currentId = id;
  }
}
