import "./globals.css";
import Header from '../components/header'
import SearchBar from '../components/search'; 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className = "bg-slate-900">
        <Header/> 
        <SearchBar />
        {children}
      </body>
    </html>
  );
}
