import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { paymentSuccessResponse, paymentUrl } from './payment-gateway.interface'

@Injectable()
export class PaymentGatewayService {
  paymentUrl:paymentUrl;
  params;
  constructor(private http: HttpClient) {
  }
  setPaymentUrl(data){
    this.paymentUrl = Object.assign({}, data);
  }
  paymentSetup(data) {
    console.log(this.paymentUrl);
    console.log(data);    
    return this.http.post(this.paymentUrl.paymentSetupUrl, data);
  }
  paymentVerify(payload){
    return this.http.post<paymentSuccessResponse>(this.paymentUrl.paymentVerifyUrl, payload);
  }
}