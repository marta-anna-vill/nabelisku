import { IMeta } from '../../utilities/meta/Meta';
import { IWidgetBuilder, TWidgets } from '../../widgets/shared/widget-builder/WidgetBuilder';

export interface IPage {
    metadata: IMeta;
    widgetBuilder?: IWidgetBuilder;
}
