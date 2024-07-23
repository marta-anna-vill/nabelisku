import { DATA_FOOTER } from '../src/data/master/footer/data';
import { DATA_HEADER } from '../src/data/master/header/data';
import { CookiesPanel } from '../src/modules/master/cookies/components/panel/CookiesPanel';
import { Footer } from '../src/modules/master/footer/Footer';
import { Header } from '../src/modules/master/header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header {...DATA_HEADER} />
            <main>{children}</main>
            <Footer {...DATA_FOOTER} />
            <CookiesPanel />
        </>
    );
}
