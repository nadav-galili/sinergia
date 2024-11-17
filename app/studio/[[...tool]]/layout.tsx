export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-assistant" dir="ltr">
      {children}
    </main>
  );
}
