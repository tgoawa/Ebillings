export interface IBillingAccount {
  tblDraftBillId: number;
  AccountDirector: string;
  ClientId: number;
  InvoicePDFFile: string;
  EmailAddressTo: string;
  ErrorType: number;
  BillNumber: string;
  InvoiceDate: string;
}
