export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
      <section className="w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/next.svg')" }}>
        <div className="text-center bg-black bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-5xl font-bold text-white">Wear Real. Be Bold.</h1>
          <p className="text-xl text-gray-200 mt-4">Premium Quality Tees for the Modern Streetwear Audience.</p>
          <button className="mt-8 px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            Shop Now
          </button>
        </div>
      </section>
    </main>
  );
}
