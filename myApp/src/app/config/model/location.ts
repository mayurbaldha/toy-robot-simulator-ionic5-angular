import { Direction } from '../direction.enum';

// Location as Class for finding current and calculating new location
export class Location {
    constructor(public x: number, public y: number, public direction: Direction) { }

}
