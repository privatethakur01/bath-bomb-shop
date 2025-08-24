import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-pink-700">Bath Bomb Bliss</h1>
        <p className="mt-4 text-lg text-gray-600">Handmade Bath Bombs for Pure Relaxation</p>
        <button className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-2xl shadow-lg hover:bg-pink-700">
          Shop Now
        </button>
      </section>
    </main>
  );
}