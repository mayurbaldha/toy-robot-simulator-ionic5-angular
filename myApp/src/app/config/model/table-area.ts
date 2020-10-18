import { Direction } from '../direction.enum';
import { Location } from './location';

export class TableArea {

    constructor(public xLength: number, public yLength: number) { }

    placeIsValid(location: Location): boolean {
        if (location.x < 0 || location.x > this.xLength-1 || location.y < 0 || location.y > this.yLength-1) {
            return false;
        }
        return true;
    }

    moveIsValid(currentLocation: Location): boolean {
        var newLocation = new Location(currentLocation.x, currentLocation.y, currentLocation.direction);
        switch (currentLocation.direction) {
            case Direction.North:
                newLocation.y++;
                break;
            case Direction.East:
                newLocation.x++;
                break;
            case Direction.South:
                newLocation.x--;
                break;
            case Direction.West:
                newLocation.y--;
                break;
        }

        if (newLocation.x < 0 || newLocation.x > this.xLength-1 || newLocation.y < 0 || newLocation.y > this.yLength-1) {
            return false;
        }

        return true;
    }
}
