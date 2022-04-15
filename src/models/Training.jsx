import {nanoid} from 'nanoid';

export default class Training {
  constructor(date, distance) {
    this.id = nanoid();
    this.date = date;
    this.distance = +distance;
  }
}
