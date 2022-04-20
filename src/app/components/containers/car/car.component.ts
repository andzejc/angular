import {Component, OnInit} from '@angular/core';
import {Car} from "../../../models/Car";
import {CarTypes, MOCK_CARS} from "../../../models/constants";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {Customer} from "../../../models/Customer";


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  car: Car;
  cars: Car[] = [];
  carTypes = CarTypes;
  faXmark = faXmark;
  isEditable: boolean = false;
  mockCars: Car[] = MOCK_CARS;
  invoices: Customer [] = [];
  label: string | undefined;

  constructor() {
    this.car = {
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
  }

  ngOnInit(): void {
    //istrauk is API visus invoisus
    //this.invoices = this.httpSerice.getAllnvoices();
  }

  changeCar(carType: CarTypes): void {
  switch (carType) {
    case CarTypes.AUDI: {
      this.car = {
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
      break;
    }
    case CarTypes.BMW: {
      this.car = {
        brand: 'Bmw',
        model: '530',
        maxSpeed: 330,
        options: ['oro gaiviklis'],
        colors: {
          car: 'juoda',
          salon: 'juodas',
          wheels: 'sidabriniai'
        }
      }
      break;
    }
    case CarTypes.OPEL: {
      this.car = {
        brand: 'Opel',
        model: 'Insignia',
        maxSpeed: 180,
        options: ['jokiu'],
        colors: {
          car: 'balta',
          salon: 'veliuras',
          wheels: 'paprasti'
        }
      }
      break;
    }
  }
  }

  addOption(option: string): boolean {
    this.car.options?.unshift(option);
    return false;
  }

  deleteOption(option: string) {
    if (this.car.options) {
      for (let i = 0; i < this.car.options?.length; i++) {
        if (this.car.options[i] === option){
          this.car.options.splice(i, 1);
          break;
        }
      }
    }
  }

  edit(): void {
    this.isEditable = !this.isEditable;
  }

  onLabelEvent(msg: string) {
    this.label = msg;
  }
}
