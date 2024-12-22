import { DATA_GALLERY_PAGE } from '../src/data/pages/gallery/data';
import { Meta } from '../src/modules/utilities/meta/Meta';
import { WidgetBuilder } from '../src/modules/widgets/shared/widget-builder/WidgetBuilder';

export default function Gallery() {
    return (
        <>
            <Meta {...DATA_GALLERY_PAGE.metadata} />

            {DATA_GALLERY_PAGE.widgetBuilder && (
                <WidgetBuilder
                    id={DATA_GALLERY_PAGE.widgetBuilder.id}
                    sections={DATA_GALLERY_PAGE.widgetBuilder.sections}
                />
            )}
        </>
    );
}
