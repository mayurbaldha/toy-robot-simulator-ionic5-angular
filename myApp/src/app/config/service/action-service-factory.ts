import { Robot } from '../model/robot';
import { TableArea } from '../model/table-area';
import { ActionService } from './action.service';

export function ActionServiceFactory(): ActionService {
    let tableArea = new TableArea(5, 5);
    let robot = new Robot(tableArea);

    return new ActionService(tableArea, robot);
}
