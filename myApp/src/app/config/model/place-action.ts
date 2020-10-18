import { ActionType } from '../action-type.enum';
import { Location } from "./location";
import { Action } from './action';
export class PlaceAction extends Action{
    constructor(public location: Location) {
        super(ActionType.Place);
    }
}
