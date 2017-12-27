# adyen-payment-angular

NPM module for Aden Payment gateway integration with Angular 2

## Embed the Adyen Checkout SDK

Include Adyen JavaScript SDK by adding the following link to the <head> section of your website:

```html
<!-- SDK for Development -->
<script type="text/javascript" src="https://checkoutshopper-test.adyen.com/checkoutshopper/assets/js/sdk/checkoutSDK.1.2.0.min.js"></script>
```

```html
<!-- SDK for Production -->
<script type="text/javascript" src="https://checkoutshopper-live.adyen.com/checkoutshopper/assets/js/sdk/checkoutSDK.1.2.0.min.js"></script>
```

## Installation

To install this library, run:

```bash
$ npm install adyen-payment-angular --save
```

## Consuming your library

Import "PaymentGatewayModule" to your AppModule:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PaymentGatewayModule } from 'adyen-payment-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PaymentGatewayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use the components in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<payment-gateway [paymentUrl]="paymentUrl" [paymentData]="paymentData" [adyenConfig]="adyenConfig" (onPaymentSuccessfull)="onPaymentSuccessfull($event)"></payment-gateway>
```
## Details on Attributes

### Configuration for Adyen SDK

Need to provide the SDK configuration in ```[adyenConfig]``` attribute as shown below.

```javascript
adyenConfig = {
    context: 'test' // change it to `live` when going live.
};
```

Refer [SDK Configuration](https://docs.adyen.com/developers/checkout/web/customization-web/sdk-configuration) link for more configuration options.

### Payment URL

Need to provide the /setup and /verify URL's in the object form as shown below.

```javascript
{
  paymentSetupUrl = "https://checkoutshopper-test.adyen.com/checkoutshopper/demoserver/setup",
  paymentVerifyUrl = "https://checkoutshopper-test.adyen.com/checkoutshopper/demoserver/verify"
}
```

### Payment Data

Need to provide checkout related data in object form.

```javascript
paymentData = {
      "merchantAccount": "TestMerchant",
      "shopperLocale": "EN",
      "countryCode": "US",
      "amount": {
        "value": "",
        "currency": "USD"
      },
      "channel": "web",
      "html":true,
      "origin":"https://adyen-payment-angular-jk5klj.stackblitz.io",
      "returnUrl":"https://adyen-payment-angular-jk5klj.stackblitz.io/",
      "reference": "",
      "shopperReference": ""
    };
```

Refer [Setup API](https://docs.adyen.com/developers/checkout/api-reference-checkout/setup-endpoint) link for more information on the options.

## Callback after payment completion

Need to provide the callback function on successfull payment as show below.

```javascript
    onPaymentSuccessfull(data){
      console.log(data);
    }
```

Returned data will contain below Object.

```javascript
{
  authResponse: String;
  merchantReference: String;
  pspReference: String;
}
```
Refer [Verify API](https://docs.adyen.com/developers/checkout/api-reference-checkout/verify-endpoint) link for more details on the options.

## License


This repository is open-source and available under the [MIT license](https://en.wikipedia.org/wiki/MIT_License). See the LICENSE file for more information.

MIT © [Manikandan](mailto:m.manikandanmct@gmail.com)
