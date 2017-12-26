export interface paymentSuccessResponse {
  authResponse: String;
  merchantReference: String;
  pspReference: String;
}

export interface paymentUrl { 
  paymentSetupUrl: string;
  paymentVerifyUrl: string;
}