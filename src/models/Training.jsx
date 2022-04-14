import {nanoid} from 'nanoid';

export default class Training {
  constructor(title, distance) {
    this.id = nanoid();
    this.title = title;
    this.distance = distance;
  }
}
