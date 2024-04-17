import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
  title: 'Skill Thrills',
  description: 'Skill Thrills is a platform to learn new skills and get certified.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" />
      <title>Skill Thrills</title>
    </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
