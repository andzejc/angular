import { Data } from "@angular/router";

export interface Invoice {
  id: number;
  amount: number;
  category: string;
  isBankTransfer: boolean;
  data: Data;
  additionalInfo: string;
  paymentType: string;
}
