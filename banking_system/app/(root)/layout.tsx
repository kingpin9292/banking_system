export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-black-1">
      SIDEBAR
      {children}
    </main>
  );
}
