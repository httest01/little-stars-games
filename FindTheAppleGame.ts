export default function LittleStarsGame() {
  const items = [
    { emoji: "🍎", name: "APPLE", vietnamese: "TÁO" },
    { emoji: "🍌", name: "BANANA", vietnamese: "CHUỐI" },
    { emoji: "🚌", name: "BUS", vietnamese: "XE BUÝT" },
  ];

  const target = items[0];

  const handleClick = (item) => {
    if (item.name === target.name) {
      alert("🎉 Great job! APPLE = TÁO 🍎");
    } else {
      alert("😊 Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-pink-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">🍎 Find the Apple!</h1>
        <p className="text-2xl mb-2">Can you find the APPLE?</p>
        <p className="text-xl text-gray-600 mb-8">Táo ở đâu?</p>

        <div className="grid grid-cols-3 gap-6">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item)}
              className="bg-white hover:scale-105 transition-transform rounded-2xl shadow-md p-6 border-4 border-yellow-200"
            >
              <div className="text-7xl mb-2">{item.emoji}</div>
            </button>
          ))}
        </div>

        <div className="mt-8 text-lg text-gray-500">
          Little Stars | Bé Học Vui 🌟
        </div>
      </div>
    </div>
  );
}
