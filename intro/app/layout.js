export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My App</h1>
        </header>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}