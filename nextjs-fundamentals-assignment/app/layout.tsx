import './globals.css';
import './clean-blog.css';
import './clean-blog.min.css';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/layout/footer';
import NavBar from './components/layout/navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Clean Blog',
  description: 'Clean Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">;
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
