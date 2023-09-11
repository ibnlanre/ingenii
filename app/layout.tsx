interface RootLayoutProps {
  children?: React.ReactNode;
}

import "./global.css";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
