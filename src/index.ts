import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PaymentGatewayComponent } from './payment-gateway.component'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ PaymentGatewayComponent ],
  exports: [PaymentGatewayComponent]
})
export class PaymentGatewayModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PaymentGatewayModule
    };
  }
}
