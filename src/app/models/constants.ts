import {Car} from "./Car";
import {Data} from "@angular/router";

export enum CarTypes {
  AUDI = 'Audi',
  BMW = 'BMW',
  OPEL = 'Opel'
}

export enum CustomerForm {
  NAME = 'name',
  LAST_NAME = 'lastName',
  AGE = 'age',
  EMAIL = 'email'
}

export enum InvoiceForm {
  AMOUNT = 'amount',
  CATEGORY = 'category',
  IS_BANK_TRANSFER = 'isBankTransfer',
  DATE = 'date',
  ADDITIONAL_INFO = 'additionalInfo',
  PAYMENT_TYPE = 'paymentType',
}

export const MOCK_CARS: Car[] = [
  {
    brand: 'Bmw',
    model: '530',
    maxSpeed: 330,
    options: ['oro gaiviklis'],
    colors: {
      car: 'juoda',
      salon: 'juodas',
      wheels: 'sidabriniai'
    }
  },
  {
    brand: 'Opel',
    model: 'Insignia',
    maxSpeed: 180,
    options: ['jokiu'],
    colors: {
      car: 'balta',
      salon: 'veliuras',
      wheels: 'paprasti'
    }
  },
  {
    brand: 'Audi',
    model: 'A6',
    maxSpeed: 240,
    options: ['el. langai', 'magnetola', 'diskai'],
    colors: {
      car: 'raudona',
      salon: 'baltas',
      wheels: 'juodi'
    }
  }
]
