import Navbar from "../../components/Navbar/Navbar";

export default function DezuPage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '3rem', textTransform: 'uppercase' }}>Dezu</h1>
      </div>
    </main>
  );
}
