import { Poppins } from 'next/font/google';
import './globals.css'
import Header from './components/Header';
const poppins=Poppins({
  weight:['400','700'],
  subsets:['latin']
})

export const metadata = {
  title: 'Teezle Media',
  description: 'Web development tutorials and courses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
      <main className='container'>
        {children}
      </main>
      </body>
    </html>
  )
}
