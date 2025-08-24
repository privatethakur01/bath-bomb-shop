export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-pink-600">Bath Bomb Bliss</h1>
      <button className="px-4 py-2 bg-pink-500 text-white rounded-xl">Cart</button>
    </header>
  );
}