import './globals.css';

export const metadata = {
  title: 'Подбор недвижимости в Краснодаре',
  description: 'Форма заявки на подбор недвижимости',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
