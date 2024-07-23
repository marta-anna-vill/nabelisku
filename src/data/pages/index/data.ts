import contentImage1 from '../../../assets/images/bled.png';
import introImage from '../../../assets/images/intro.jpeg';
import contentImage2 from '../../../assets/images/italy.jpg';
import mentoringImage from '../../../assets/images/vineyard.jpg';
import { IPage } from '../../../modules/master/page/page';
import { ButtonType } from '../../../modules/utilities/button/Button';
import { WidgetType } from '../../../modules/widgets/shared/widget-builder/WidgetBuilder';
import { DATA_EMAIL } from '../../master/contact/email/data';
import { DATA_PHONE } from '../../master/contact/phone/data';
import { DATA_SOCIAL } from '../../master/social/data';

export const DATA_INDEX_PAGE: IPage = {
    metadata: {
        description: `Project managing team player with strong technical background.`,
        image: introImage.src,
    },
    widgetBuilder: {
        id: ``,
        sections: [
            {
                containerType: `none`,
                backgroundColor: `Section--backgroundWhite`,
                widgets: [
                    {
                        type: WidgetType.TopImage,
                        item: {
                            title: `Your project manager`,
                            perex: `A detail-oriented team player with strong technical background and ability to handle multiple projects
                            simultaneously. I enjoy mentoring others and communicating in English, these I consider my strength`,
                            image: {
                                staticImageData: introImage,
                            },
                            cta: {
                                name: `Skills`,
                                href: `#skills`,
                                styles: ButtonType.primary,
                            },
                            secondaryCta: {
                                name: `More about me`,
                                href: `#about-me`,
                                styles: ButtonType.default,
                            },
                        },
                    },
                ],
            },
            {
                backgroundColor: `Section--backgroundSoftPrimary`,
                containerType: `BaseContainer`,
                widgets: [
                    {
                        type: WidgetType.Numbers,
                        title: ``,
                        items: [
                            {
                                name: `of project management`,
                                number: 3,
                                unit: `years`,
                            },
                            {
                                name: `clients`,
                                number: 50,
                                unit: `+`,
                            },
                            {
                                name: `of mentoring`,
                                number: 8,
                                unit: `years`,
                            },
                            {
                                name: `of coding frontend`,
                                number: 1,
                                unit: `year`,
                            },
                        ],
                    },
                ],
            },
            {
                backgroundColor: `Section--backgroundWhite`,
                containerType: `BaseContainer`,
                anchor: `about-me`,
                widgets: [
                    {
                        type: WidgetType.ImageContent,
                        items: [
                            {
                                title: `How I became project manager`,
                                perex: `To be honest, my first intentions after school were not in an IT sphere. More like culture or theatre. I always loved this stuff. But as life goes, you are required to shape with it. So I learned lot of stuff in my first job and then plenty more in my current position as a project manager. It is quite a funny story actually since I never thought of going to work first time after I graduate. So when my friend called me that in his company is a job opening I was quite surprised that he thought of me.`,
                                image: {
                                    staticImageData: contentImage1,
                                },
                            },
                            {
                                title: `From PM to coder`,
                                perex: `As I grew stronger with the project managing skills I started to admire the beauty of programming. Coding the most. So I started to try out a few websites myself. They are mainly presentation websites for small bussinesses. And I started to like it, so I did more of them and tried few kinds of technologies.`,
                                image: {
                                    staticImageData: contentImage2,
                                },
                                isReversed: true,
                            },
                        ],
                    },
                ],
            },
            {
                backgroundColor: `Section--backgroundSoftSecondary`,
                containerType: `BaseContainer`,
                anchor: `skills`,
                widgets: [
                    {
                        type: WidgetType.Skills,
                        title: `Skills / what I can offer`,
                        items: [
                            {
                                name: `Project Management`,
                                text: `3 years of experience in PM`,
                            },
                            // {
                            //     name: `Technical Support`,
                            //     text: ``,
                            // },
                            {
                                name: `Schedule Management`,
                                text: `Creating project roadmaps with designated time frame`,
                            },
                            {
                                name: `Strategic Planning`,
                                text: `If the client wants to proceed in a certain way`,
                            },

                            {
                                name: `Project Planning`,
                                text: `Certain documents, skills, time schedule and budget is required and that's what I watch over`,
                            },
                            {
                                name: `Financial Administration`,
                                text: `Is connected directly to any project so I watch over the budget and finance`,
                            },
                            {
                                name: `Roadmap Planning`,
                                text: `Normally there is a timeline with deadlines for a project which I use with the client`,
                            },
                            {
                                name: `Project Scope`,
                                text: `If the client is unsure I can help him define/create the project scope`,
                            },
                            {
                                name: `Document Management`,
                                text: `I am used to use Confluence and inside storage for documents (and I need to have it under control)`,
                            },
                            {
                                name: `Mentoring`,
                                text: `Not only in a workplace but also in my free time I love to teach others`,
                            },
                            {
                                name: `Client support`,
                                text: `Small or big requests`,
                            },
                            {
                                name: `Communication`,
                                text: `Through the years my communication with others got exitedly better, so as an opposite I can say that work helped me with my personal life`,
                            },
                            {
                                name: `Team work`,
                                text: `I like working with people like me, the ones that are opposite are an inspiration`,
                            },
                            {
                                name: `Communication with experts`,
                                text: `Team full of programmers or UX/UI experts`,
                            },
                            {
                                name: `Technical documentation`,
                                text: `I am used to describing technical functions piece by piece`,
                            },
                            {
                                name: `Scope of work`,
                                text: `Quality scope of work is a key to the success so I tend to make it perfect`,
                            },
                            {
                                name: `Testing`,
                                text: `Used to testing the features myself, previous position as a SW tester`,
                            },
                        ],
                    },
                    {
                        type: WidgetType.ImageContent,
                        items: [
                            {
                                title: `Mentoring`,
                                perex: `Personally, I see a goal in the future for myself in mentoring. I mean that I like the way I can explain something to other people. Especially when it is a talent I excel in. For example dancing - it is a passion of mine and people seem to enjoy watching me dance. Among our folk dance group, I am the go-to person for learning how to dance. Equally, I enjoyed being a buddy for newbies in the company.`,
                                image: {
                                    staticImageData: mentoringImage,
                                },
                            },
                        ],
                    },
                ],
            },
            {
                backgroundColor: `Section--backgroundWhite`,
                containerType: `SmallContainer`,
                anchor: `work-experience`,
                widgets: [
                    {
                        type: WidgetType.Jobs,
                        title: `Jobs`,
                        items: [
                            {
                                companyName: `PUXdesign`,
                                position: `Project manager and Junior frontend coder`,
                                description: `Agile project management, creation of roadmaps/schedules, offers, SoW,
                                communication with clients and with the team, reporting to management and the client, mentoring`,
                                duration: `2021 - untill now`,
                                websiteLink: `https://www.puxdesign.cz`,
                            },
                            {
                                companyName: `FaceUp`,
                                position: `SW Tester`,
                                description: `Website and application testing, bug reporting, communication with the experts`,
                                duration: `2021 - 2022`,
                                websiteLink: `https://www.faceup.com/en`,
                            },
                            {
                                companyName: `Gymnasium of Jan Blahoslav`,
                                position: ``,
                                description: `High School Diploma`,
                                duration: `2012 - 2020`,
                                websiteLink: `https://www.gjbi.cz/`,
                            },
                        ],
                    },
                ],
            },
            {
                backgroundColor: `Section--backgroundWhite`,
                containerType: `BaseContainer`,
                widgets: [
                    {
                        type: WidgetType.Banner,
                        item: {
                            title: `Have I caught your attention?`,
                            perex: `You can contact me by phone <a href="${DATA_PHONE.href}">${DATA_PHONE.name}</a> or by e-mail <a href="${DATA_EMAIL.href}">${DATA_EMAIL.name}</a>.`,
                            contactItems: [
                                {
                                    href: DATA_PHONE.href,
                                    iconName: DATA_PHONE.icon,
                                    target: false,
                                },
                            ].concat(
                                DATA_SOCIAL.records.map((social) => ({
                                    href: social.url,
                                    iconName: social.icon,
                                    target: true,
                                }))
                            ),
                        },
                    },
                ],
            },
        ],
    },
};
