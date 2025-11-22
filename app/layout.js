import { Nav } from './components/Nav';
import { ActiveSectionProvider } from './contexts/ActiceSectionContext';
import './globals.css';

export const metadata = {
  title: 'Seungmin Hyun',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="flex flex-col md:flex-row bg-common-100">
        <ActiveSectionProvider>
          <Nav />
          <div className="w-full overflow-x-hidden pt-[72px] md:pt-0 md:ml-80 flex flex-col min-h-screen">
            {/* 메인 컨텐츠 */}
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ActiveSectionProvider>
      </body>
    </html>
  );
}