import { DATA_INDEX_PAGE } from '../src/data/pages/index/data';
import { Meta } from '../src/modules/utilities/meta/Meta';
import { WidgetBuilder } from '../src/modules/widgets/shared/widget-builder/WidgetBuilder';

export default function Homepage() {
    return (
        <>
            <Meta {...DATA_INDEX_PAGE.metadata} />

            {DATA_INDEX_PAGE.widgetBuilder && (
                <WidgetBuilder
                    id={DATA_INDEX_PAGE.widgetBuilder.id}
                    sections={DATA_INDEX_PAGE.widgetBuilder.sections}
                />
            )}
        </>
    );
}
