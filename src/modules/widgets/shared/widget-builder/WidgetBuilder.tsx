import { BannerWidget, TBannerWidget } from '../../banner/Banner';
import { ImageContentWidget, TImageContentWidget } from '../../image-content/ImageContent';
import { IJobsWidget, JobsWidget } from '../../jobs/Jobs';
import { NumbersWidget, TNumbersWidget } from '../../numbers/Numbers';
import { ISkillWidget, SkillsWidget } from '../../skills/Skills';
import { TestimonionalsWidget, TTestimonionalsWidget } from '../../testimonials/Testimonials';
import { ITopImageWidget, TopImageWidget } from '../../top-image/TopImage';

export enum WidgetType {
    TopImage,
    Testimonials,
    Numbers,
    ImageContent,
    Banner,
    Skills,
    Jobs,
}

export type TWidgets =
    | TTestimonionalsWidget
    | ITopImageWidget
    | TNumbersWidget
    | TImageContentWidget
    | TBannerWidget
    | ISkillWidget
    | IJobsWidget;

export interface IWidgetBuilderSection {
    widgets: TWidgets[];
    containerType: 'none' | 'BaseContainer' | 'SmallContainer';
    backgroundColor:
        | 'Section--backgroundWhite'
        | 'Section--backgroundSoftSecondary'
        | 'Section--backgroundSoftPrimary';
    anchor?: string;
}

export interface IWidgetBuilder {
    id: string;
    sections: IWidgetBuilderSection[];
}

const RenderWidgets = (widgets: TWidgets[]) =>
    widgets.map((widget, index) => {
        switch (widget.type) {
            case WidgetType.TopImage: {
                return <TopImageWidget {...widget} key={index} />;
            }

            case WidgetType.Banner: {
                return <BannerWidget {...widget} key={index} />;
            }

            case WidgetType.Testimonials: {
                return <TestimonionalsWidget {...widget} key={index} />;
            }

            case WidgetType.Numbers: {
                return <NumbersWidget {...widget} key={index} />;
            }

            case WidgetType.ImageContent: {
                return <ImageContentWidget {...widget} key={index} />;
            }

            case WidgetType.Skills: {
                return <SkillsWidget {...widget} key={index} />;
            }

            case WidgetType.Jobs: {
                return <JobsWidget {...widget} key={index} />;
            }
        }
    });

export const WidgetBuilder = (props: IWidgetBuilder) => {
    return (
        <>
            {props.sections.map((section, index) => {
                return section.containerType === `none` ? (
                    RenderWidgets(section.widgets)
                ) : (
                    <div
                        className={`Section ${section.backgroundColor ? `${section.backgroundColor}` : ``}`}
                        id={section.anchor}
                        key={index}
                    >
                        <div className={section.containerType}>{RenderWidgets(section.widgets)}</div>
                    </div>
                );
            })}
        </>
    );
};
