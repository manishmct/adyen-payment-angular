import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var chckt:any;
import { PaymentGatewayService } from './payment-gateway.service'

@Component({
  selector: 'payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css'],
  providers: [PaymentGatewayService]
})
export class PaymentGatewayComponent implements OnInit{
  @Input() paymentUrl: any;
  @Input() paymentData: any;
  @Input() adyenConfig:any;
  @Output() onPaymentSuccessfull = new EventEmitter();
  checkout:any;
  constructor(public paymentsvc : PaymentGatewayService) {
   }
  ngOnInit(){
    this.paymentsvc.setPaymentUrl(this.paymentUrl);
    let that = this;
    this.paymentsvc.paymentSetup(this.paymentData).subscribe(data => {
      this.checkout = chckt.checkout(data, '.checkoutPayment', this.adyenConfig);
      chckt.hooks.beforeComplete = function(node, paymentData) {
        console.log(node);
        console.log(paymentData);
        that.paymentsvc.paymentVerify(paymentData).subscribe(data => {
          that.onPaymentSuccessfull.emit(data)
        });
        return false; // Indicates that you want to replace the default handling.
      };
    });
  }
}