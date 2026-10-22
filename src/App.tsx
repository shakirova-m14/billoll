/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-emerald-200 selection:text-emerald-900">
      {/* 1. Yuqori bildirishnoma paneli */}
      <div className="bg-emerald-900 text-emerald-100 text-xs sm:text-sm py-2 px-4 border-b border-emerald-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>🌿 <strong>Tabiiy va toza oziq-ovqatlar:</strong> Har kuni tongda daladan to'g'ridan-to'g'ri yetkaziladi</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>📞 Bog'lanish: <strong>+998 (71) 200-00-11</strong></span>
            <span className="hidden md:inline text-emerald-300">|</span>
            <span className="hidden md:inline">🕒 Ish vaqti: 08:00 - 20:00</span>
          </div>
        </div>
      </div>

      {/* 2. Navigatsiya (Bosh menyu) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#bosh-sahifa" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-105 transition-transform">
              🥦
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-emerald-900 block leading-tight">
                TABIIY<span className="text-emerald-600">TAOM</span>
              </span>
              <span className="text-[11px] font-medium text-stone-500 tracking-wider uppercase block">
                Sog'lom oziq-ovqat portali
              </span>
            </div>
          </a>

          {/* Menyu havolalari (Toza HTML havolalari) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-stone-700">
            <a href="#bosh-sahifa" className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
              Bosh sahifa
            </a>
            <a href="#mahsulotlar" className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
              Mahsulotlar
            </a>
            <a href="#vitaminlar" className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
              Vitaminlar
            </a>
            <a href="#taomnoma" className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
              Kunlik taomnoma
            </a>
            <a href="#maslahatlar" className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
              Maslahatlar
            </a>
            <a href="#savollar" className="px-3 py-2 rounded-lg hover:text-emerald-700 hover:bg-emerald-50 transition-colors">
              Savol-Javob
            </a>
          </nav>

          {/* Harakatga chaqiruvchi tugma */}
          <div className="flex items-center gap-3">
            <a
              href="#buyurtma"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <span>🛒</span>
              <span>Buyurtma berish</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. Hero Bo'limi */}
      <section id="bosh-sahifa" className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-stone-50 to-white pt-12 pb-20 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Chap tomon matn */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-semibold">
                <span>🌱</span>
                <span>100% Tabiiy, Kimyoviy Moddalarsiz & Yangi</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.15]">
                Sog'lom Hayot – <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-green-600">
                  To'g'ri Oziq-Ovqatdan
                </span> Boshlanadi
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
                Dasturxoningiz uchun daladan to'g'ridan-to'g'ri yangi uzilgan sarxil mevalar, 
                vitaminga boy sabzavotlar, to'yimli donlar va tabiiy sut mahsulotlari. 
                Tanangizni toza energiya bilan to'ldiring!
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#mahsulotlar"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-base font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  Mahsulotlar katalogi
                </a>
                <a
                  href="#taomnoma"
                  className="bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 text-base font-bold px-6 py-3.5 rounded-xl shadow-xs transition-all"
                >
                  Kunlik sog'lom taomnoma
                </a>
              </div>

              {/* Statistika va kafolatlar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-200">
                <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                  <div className="text-2xl font-black text-emerald-700">40+</div>
                  <div className="text-xs text-stone-500 font-medium">Turli tabiiy ne'matlar</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                  <div className="text-2xl font-black text-emerald-700">100%</div>
                  <div className="text-xs text-stone-500 font-medium">GMO va kimyosiz</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                  <div className="text-2xl font-black text-emerald-700">0 soat</div>
                  <div className="text-xs text-stone-500 font-medium">Eski zaxirasiz, yangi</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs">
                  <div className="text-2xl font-black text-emerald-700">A+</div>
                  <div className="text-xs text-stone-500 font-medium">Yuqori sifat nazorati</div>
                </div>
              </div>
            </div>

            {/* O'ng tomon ko'rgazmali blok */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=80"
                    alt="Sarxil tabiiy meva va sabzavotlar"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider w-max mb-2">
                      Fasl ne'matlari
                    </span>
                    <h3 className="text-xl font-bold">Har kuni toza va barra vitaminlar</h3>
                    <p className="text-xs text-stone-200 mt-1">Organizm uchun zarur bo'lgan barcha tabiiy minerallar majmuasi</p>
                  </div>
                </div>

                {/* Yon bezak kartochkasi */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3 max-w-xs">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-2xl">
                    🍎
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">Kunlik meva me'yori</h4>
                    <p className="text-xs text-stone-500">Kamida 350-400 gramm yangi meva va sabzavot</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Nega Tabiiy Oziq-Ovqat? (Afzalliklar) */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-emerald-700 mb-2">
              To'g'ri Tanlov
            </h2>
            <p className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Nima uchun tabiiy mahsulotlarni tanlash lozim?
            </p>
            <p className="text-stone-600 mt-3 text-base">
              Organizmimiz iste'mol qilgan taomlarimizdan quriladi. Sifatli va toza oziq-ovqat uzoq va baxtli umr kalitidir.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-3xl mb-5">
                🌾
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Daladan To'g'ridan-To'g'ri</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Uzoq omborlarda saqlanmagan, yangi uzilgan meva va sabzavotlar barcha foydali xususiyatlarini to'liq saqlab qoladi.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-green-100 text-green-800 flex items-center justify-center text-3xl mb-5">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Kuchli Immunitet</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Tabiiy vitamin C, A, temir va antioksidantlar tanani turli virus hamda kasalliklardan ishonchli himoya qiladi.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-3xl mb-5">
                🍯
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Sun'iy Moddalarsiz</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Hech qanday kimyoviy bo'yoqlar, oqartiruvchilar yoki sun'iy ta'm kuchaytiruvchilarsiz, faqat xolis tabiiy ta'm.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center text-3xl mb-5">
                💚
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">Yengil Hazm Bo'lish</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Tabiiy kletchatka (tolalar) ichak mikroflorasini yaxshilaydi, ortiqcha shlaklarni chiqarib, tetiklik bag'ishlaydi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mahsulotlar Katalogi (Pure CSS Filter Tabs) */}
      <section id="mahsulotlar" className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700 block mb-1">
                Katalog
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
                Tanlangan Oziq-Ovqat Mahsulotlari
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
                Quyidagi toifalardan birini tanlang. Pure CSS yordamida toifalar tez va qulay filtrlanadi.
              </p>
            </div>

            <div className="text-xs text-stone-500 font-medium bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl self-start md:self-auto">
              ✓ Barcha narxlar milliy so'mda ko'rsatilgan
            </div>
          </div>

          {/* PURE HTML & CSS TABS LOGIC */}
          <input type="radio" name="cat" id="cat-all" className="filter-radio" defaultChecked />
          <input type="radio" name="cat" id="cat-meva" className="filter-radio" />
          <input type="radio" name="cat" id="cat-sabzavot" className="filter-radio" />
          <input type="radio" name="cat" id="cat-don" className="filter-radio" />
          <input type="radio" name="cat" id="cat-sut" className="filter-radio" />
          <input type="radio" name="cat" id="cat-yongonq" className="filter-radio" />

          {/* Toifalar tugmalari (Labels) */}
          <div className="tabs-nav flex flex-wrap gap-2 sm:gap-3 mb-10 pb-2 border-b border-stone-200">
            <label htmlFor="cat-all" className="cat-label px-5 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-700 font-semibold text-sm hover:border-emerald-600">
              Barchasi (12)
            </label>
            <label htmlFor="cat-meva" className="cat-label px-5 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-700 font-semibold text-sm hover:border-emerald-600">
              🍎 Mevalar
            </label>
            <label htmlFor="cat-sabzavot" className="cat-label px-5 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-700 font-semibold text-sm hover:border-emerald-600">
              🥦 Sabzavotlar
            </label>
            <label htmlFor="cat-don" className="cat-label px-5 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-700 font-semibold text-sm hover:border-emerald-600">
              🌾 Don & Dukkaklilar
            </label>
            <label htmlFor="cat-sut" className="cat-label px-5 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-700 font-semibold text-sm hover:border-emerald-600">
              🥛 Sut & Asal
            </label>
            <label htmlFor="cat-yongonq" className="cat-label px-5 py-2.5 rounded-xl border border-stone-300 bg-white text-stone-700 font-semibold text-sm hover:border-emerald-600">
              🥜 Yong'oq & Quruq mevalar
            </label>
          </div>

          {/* Mahsulotlar kartochkalari panjarasi (Product Grid) */}
          <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* 1. Qizil Shirin Olma */}
            <article data-cat="meva" className="product-card group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80"
                  alt="Shirin qizil olma"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  Meva
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
                  52 kkal / 100g
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-700 transition-colors">
                    Shirin Qizil Olma
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    To'qimalarga boy, yurak faoliyatini yaxshilovchi pektin va vitamin C ga to'yingan bog' olmasi.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded">Vitamin C</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Kletchatka</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Temir</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Narxi (1 kg)</span>
                    <span className="text-lg font-black text-stone-900">14 000 <span className="text-xs font-normal text-stone-500">so'm</span></span>
                  </div>
                  <a href="#buyurtma" className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors">
                    Tanlash +
                  </a>
                </div>
              </div>
            </article>

            {/* 2. O'zbekiston Anori */}
            <article data-cat="meva" className="product-card group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=600&q=80"
                  alt="Sarxil anor"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  Meva
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
                  83 kkal / 100g
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-700 transition-colors">
                    Sarxil Qizil Anor
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    Qon bosimini me'yorlashtiruvchi, gemoglobinni oshiruvchi kuchli tabiiy antioksidant.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] bg-red-50 text-red-700 font-medium px-2 py-0.5 rounded">Antioksidant</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Vitamin K</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Folat</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Narxi (1 kg)</span>
                    <span className="text-lg font-black text-stone-900">25 000 <span className="text-xs font-normal text-stone-500">so'm</span></span>
                  </div>
                  <a href="#buyurtma" className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors">
                    Tanlash +
                  </a>
                </div>
              </div>
            </article>

            {/* 3. Pomidor Yusupov */}
            <article data-cat="sabzavot" className="product-card group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80"
                  alt="Yusupov pomidori"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  Sabzavot
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
                  18 kkal / 100g
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-700 transition-colors">
                    Shirin Pomidor
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    Likopin moddasi bilan boyitilgan, yurak va tomir faoliyatiga beqiyos foydali issiqxona pomidori.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] bg-red-50 text-red-700 font-medium px-2 py-0.5 rounded">Likopin</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Kaliy</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Vitamin A</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Narxi (1 kg)</span>
                    <span className="text-lg font-black text-stone-900">16 000 <span className="text-xs font-normal text-stone-500">so'm</span></span>
                  </div>
                  <a href="#buyurtma" className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors">
                    Tanlash +
                  </a>
                </div>
              </div>
            </article>

            {/* 4. Barra Brokkoli */}
            <article data-cat="sabzavot" className="product-card group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80"
                  alt="Barra brokkoli"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  Sabzavot
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
                  34 kkal / 100g
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-700 transition-colors">
                    Yashil Barra Brokkoli
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    Organizmni tozalovchi sulforafan, kletchatka va suyaklar uchun kalsiy manbai.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded">Sulforafan</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Vitamin C</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Kalsiy</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Narxi (1 kg)</span>
                    <span className="text-lg font-black text-stone-900">22 000 <span className="text-xs font-normal text-stone-500">so'm</span></span>
                  </div>
                  <a href="#buyurtma" className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors">
                    Tanlash +
                  </a>
                </div>
              </div>
            </article>

            {/* 5. Qarsildoq Bodring */}
            <article data-cat="sabzavot" className="product-card group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=600&q=80"
                  alt="Yangi bodring"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  Sabzavot
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
                  15 kkal / 100g
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-700 transition-colors">
                    Qarsildoq Barra Bodring
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    95% toza tabiiy suv va kaliy. Terini namlantiradi va organizmni chanqoqdan qutqaradi.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded">Gidratatsiya</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Kaliy</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Silitsiy</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Narxi (1 kg)</span>
                    <span className="text-lg font-black text-stone-900">12 000 <span className="text-xs font-normal text-stone-500">so'm</span></span>
                  </div>
                  <a href="#buyurtma" className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors">
                    Tanlash +
                  </a>
                </div>
              </div>
            </article>

            {/* 6. Shirin Uzum */}
            <article data-cat="meva" className="product-card group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80"
                  alt="Qora va oq uzum"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  Meva
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
                  69 kkal / 100g
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-700 transition-colors">
                    O'zbek Shirin Uzumi
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    Miyani oziqlantiruvchi tabiiy glyukoza va qon aylanish tizimini qo'llab-quvvatlovchi resveratrol moddasi.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] bg-purple-50 text-purple-700 font-medium px-2 py-0.5 rounded">Resveratrol</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Glyukoza</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Vitamin B6</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Narxi (1 kg)</span>
                    <span className="text-lg font-black text-stone-900">20 000 <span className="text-xs font-normal text-stone-500">so'm</span></span>
                  </div>
                  <a href="#buyurtma" className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors">
                    Tanlash +
                  </a>
                </div>
              </div>
            </article>

            {/* 7. Tabiiy Suli Yormasi (Ovsyanka) */}
            <article data-cat="don" className="product-card group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80"
                  alt="Suli yormasi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-amber-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  Don mahsuloti
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
                  389 kkal / 100g
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-700 transition-colors">
                    Butun Donli Suli Yormasi
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    Uzoq vaqt to'qlik baxsh etuvchi beta-glyukan tolasi va xolesterinni kamaytiruvchi ajoyib nonushta.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] bg-amber-50 text-amber-700 font-medium px-2 py-0.5 rounded">Beta-glyukan</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Magniy</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Vitamin B1</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Narxi (800 g)</span>
                    <span className="text-lg font-black text-stone-900">18 000 <span className="text-xs font-normal text-stone-500">so'm</span></span>
                  </div>
                  <a href="#buyurtma" className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors">
                    Tanlash +
                  </a>
                </div>
              </div>
            </article>

            {/* 8. Tozalangan Mosh */}
            <article data-cat="don" className="product-card group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80"
                  alt="Dukkakli o'simliklar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-amber-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  Dukkakli
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
                  347 kkal / 100g
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-700 transition-colors">
                    Tozalangan Yashil Mosh
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    Yuqori o'simlik oqsili (24%). Mushaklarni tiklash va to'qimalarni mustahkamlash uchun milliy ne'mat.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] bg-green-50 text-green-700 font-medium px-2 py-0.5 rounded">24g Oqsil</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Rux</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Temir</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Narxi (1 kg)</span>
                    <span className="text-lg font-black text-stone-900">17 000 <span className="text-xs font-normal text-stone-500">so'm</span></span>
                  </div>
                  <a href="#buyurtma" className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors">
                    Tanlash +
                  </a>
                </div>
              </div>
            </article>

            {/* 9. Tabiiy Qishloq Qatig'i */}
            <article data-cat="sut" className="product-card group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80"
                  alt="Tabiiy qatiq va sut mahsulotlari"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  Sut mahsuloti
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
                  53 kkal / 100g
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-700 transition-colors">
                    Tabiiy Qishloq Qatig'i
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    Tirik probiotiklar va oson o'zlashuvchi kalsiy. Oshqozon-ichak trakti sog'lig'ini saqlashda tengsiz.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] bg-blue-50 text-blue-700 font-medium px-2 py-0.5 rounded">Probiotiklar</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Kalsiy</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Vitamin B12</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Narxi (1 litr)</span>
                    <span className="text-lg font-black text-stone-900">10 000 <span className="text-xs font-normal text-stone-500">so'm</span></span>
                  </div>
                  <a href="#buyurtma" className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors">
                    Tanlash +
                  </a>
                </div>
              </div>
            </article>

            {/* 10. Tog' Gul Asali */}
            <article data-cat="sut" className="product-card group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80"
                  alt="Tabiiy tog' asali"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-amber-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  Tabiiy asal
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
                  304 kkal / 100g
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-700 transition-colors">
                    Sof Tog' Gul Asali
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    Zomin tog'larining shifobaxsh giyohlaridan yig'ilgan toza asal. Shamollash va holsizlikka tabiiy malham.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] bg-amber-50 text-amber-700 font-medium px-2 py-0.5 rounded">Antibakterial</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Fermentlar</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Fruktoza</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Narxi (1 banka - 900g)</span>
                    <span className="text-lg font-black text-stone-900">75 000 <span className="text-xs font-normal text-stone-500">so'm</span></span>
                  </div>
                  <a href="#buyurtma" className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors">
                    Tanlash +
                  </a>
                </div>
              </div>
            </article>

            {/* 11. Xom Bodom */}
            <article data-cat="yongonq" className="product-card group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&w=600&q=80"
                  alt="Xom bodom mag'zi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-stone-800 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  Yong'oq
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
                  579 kkal / 100g
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-700 transition-colors">
                    O'zbek Tog' Bodomi
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    Miya faoliyatini kuchaytiruvchi, yurakka foydali to'yinmagan yog' kislotalari va vitamin E xazinasi.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] bg-stone-100 text-stone-700 font-medium px-2 py-0.5 rounded">Omega-3</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Vitamin E</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Magniy</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Narxi (500 g)</span>
                    <span className="text-lg font-black text-stone-900">55 000 <span className="text-xs font-normal text-stone-500">so'm</span></span>
                  </div>
                  <a href="#buyurtma" className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors">
                    Tanlash +
                  </a>
                </div>
              </div>
            </article>

            {/* 12. Sariq Mayiz */}
            <article data-cat="yongonq" className="product-card group bg-white rounded-2xl overflow-hidden border border-stone-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?auto=format&fit=crop&w=600&q=80"
                  alt="Sariq quyosh mayizi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-stone-800 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  Quruq meva
                </span>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
                  299 kkal / 100g
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 group-hover:text-emerald-700 transition-colors">
                    Soyada Quritilgan Mayiz
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    Kaliy, temir va fosforga boy. Asab tizimini tinchlantiradi va tabiiy shirinlikka bo'lgan ehtiyojni qondiradi.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="text-[11px] bg-amber-50 text-amber-700 font-medium px-2 py-0.5 rounded">Kaliy</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Temir</span>
                    <span className="text-[11px] bg-stone-100 text-stone-600 font-medium px-2 py-0.5 rounded">Fosfor</span>
                  </div>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 block font-medium">Narxi (1 kg)</span>
                    <span className="text-lg font-black text-stone-900">45 000 <span className="text-xs font-normal text-stone-500">so'm</span></span>
                  </div>
                  <a href="#buyurtma" className="bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors">
                    Tanlash +
                  </a>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* 6. Vitaminlar va Ozuqaviy Qiymat Jadvali */}
      <section id="vitaminlar" className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700 block mb-1">
              Foydali Ma'lumotlar
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Oziq-Ovqatlar va Ularning Vitamin Qiymati
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Har bir mahsulot inson organizmi uchun o'ziga xos biologik foydaga ega. Qaysi a'zo va tizim uchun nima foydali ekanligini ushbu qulay jadvaldan bilib oling.
            </p>
          </div>

          <div className="overflow-x-auto custom-scrollbar rounded-2xl border border-stone-200 shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-emerald-800 text-white font-bold">
                  <th className="py-4 px-5">Mahsulot nomi</th>
                  <th className="py-4 px-4">Turi</th>
                  <th className="py-4 px-4">Kaloriya (100g)</th>
                  <th className="py-4 px-5">Asosiy vitaminlar</th>
                  <th className="py-4 px-5">Foydali ta'siri</th>
                  <th className="py-4 px-4">Tavsiya me'yori</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                <tr className="hover:bg-emerald-50/50 transition-colors">
                  <td className="py-4 px-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span>🍎</span> Olma
                  </td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Meva</span></td>
                  <td className="py-4 px-4 font-mono font-medium">52 kkal</td>
                  <td className="py-4 px-5 font-medium text-emerald-800">Vitamin C, Pektin, Kaliy</td>
                  <td className="py-4 px-5">Qon bosimini tushiradi, ovqat hazm qilishni yengillashtiradi</td>
                  <td className="py-4 px-4 font-medium text-stone-600">Kuniga 1-2 dona</td>
                </tr>
                <tr className="hover:bg-emerald-50/50 transition-colors bg-stone-50/50">
                  <td className="py-4 px-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span>🥦</span> Brokkoli
                  </td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Sabzavot</span></td>
                  <td className="py-4 px-4 font-mono font-medium">34 kkal</td>
                  <td className="py-4 px-5 font-medium text-emerald-800">Vitamin C, K, Foliy kislota</td>
                  <td className="py-4 px-5">Yallig'lanishni kamaytiradi, hujayralarni yoshartiradi</td>
                  <td className="py-4 px-4 font-medium text-stone-600">Haftada 200-300 g</td>
                </tr>
                <tr className="hover:bg-emerald-50/50 transition-colors">
                  <td className="py-4 px-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span>🥕</span> Sabzi
                  </td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">Sabzavot</span></td>
                  <td className="py-4 px-4 font-mono font-medium">41 kkal</td>
                  <td className="py-4 px-5 font-medium text-emerald-800">Beta-karotin (Vit A), B6</td>
                  <td className="py-4 px-5">Ko'rish qobiliyatini o'tkirlashtiradi, teri rangini tiniqlashtiradi</td>
                  <td className="py-4 px-4 font-medium text-stone-600">Kuniga 1 dona</td>
                </tr>
                <tr className="hover:bg-emerald-50/50 transition-colors bg-stone-50/50">
                  <td className="py-4 px-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span>🌾</span> Suli (Ovsyanka)
                  </td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Don</span></td>
                  <td className="py-4 px-4 font-mono font-medium">389 kkal</td>
                  <td className="py-4 px-5 font-medium text-emerald-800">B guruhi, Magniy, Rux</td>
                  <td className="py-4 px-5">Xolesterinni normallashtiradi, uzoq muddatli to'qlik beradi</td>
                  <td className="py-4 px-4 font-medium text-stone-600">Nonushtaga 50-70 g</td>
                </tr>
                <tr className="hover:bg-emerald-50/50 transition-colors">
                  <td className="py-4 px-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span>🥛</span> Qatiq
                  </td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Sut mahsuloti</span></td>
                  <td className="py-4 px-4 font-mono font-medium">53 kkal</td>
                  <td className="py-4 px-5 font-medium text-emerald-800">Kalsiy, Probiotik, Vitamin D</td>
                  <td className="py-4 px-5">Ichak mikroflorasini tiklaydi, suyaklarni mustahkamlaydi</td>
                  <td className="py-4 px-4 font-medium text-stone-600">Kuniga 1 stakan</td>
                </tr>
                <tr className="hover:bg-emerald-50/50 transition-colors bg-stone-50/50">
                  <td className="py-4 px-5 font-semibold text-stone-900 flex items-center gap-2">
                    <span>🥜</span> Bodom
                  </td>
                  <td className="py-4 px-4"><span className="px-2 py-0.5 rounded-full text-xs font-medium bg-stone-200 text-stone-800">Yong'oq</span></td>
                  <td className="py-4 px-4 font-mono font-medium">579 kkal</td>
                  <td className="py-4 px-5 font-medium text-emerald-800">Vitamin E, Omega-3, Magniy</td>
                  <td className="py-4 px-5">Miya faoliyatini kuchaytiradi, yurakni baquvvat qiladi</td>
                  <td className="py-4 px-4 font-medium text-stone-600">Kuniga 10-15 dona</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-emerald-900">
            <span className="font-medium">
              💡 <strong>Eslatma:</strong> Har kuni rang-barang taomlanish organizmni barcha mikroelementlar bilan to'liq ta'minlaydi.
            </span>
            <a href="#buyurtma" className="font-bold text-emerald-700 hover:text-emerald-900 underline whitespace-nowrap">
              Yangi mahsulotlarga buyurtma berish →
            </a>
          </div>
        </div>
      </section>

      {/* 7. Kunlik Namuna Sog'lom Taomnoma (Meal Routine) */}
      <section id="taomnoma" className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700 block mb-1">
              Kundalik Reja
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              1 Kunlik Muvozanatli Taomnoma
            </h2>
            <p className="text-stone-600 text-base mt-2">
              Ortiqcha och qolmasdan va og'irlik sezmasdan butun kun davomida tetik hamda energiyaga to'la bo'lish tartibi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            {/* 1. Nonushta */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  07:30 - 08:30
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl mb-3">
                  🥣
                </div>
                <h3 className="font-bold text-base text-stone-900">To'yimli Nonushta</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Sut yoki suvda pishirilgan <strong>suli yormasi</strong> (ovsyanka), 1 choy qoshiq tog' asali, 5 dona bodom va yangi olma bo'laklari.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
                Maqsad: Kun bo'yi barqaror energiya
              </div>
            </div>

            {/* 2. Ikkinchi nonushta */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  11:00
                </span>
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-800 flex items-center justify-center text-xl mb-3">
                  🍎
                </div>
                <h3 className="font-bold text-base text-stone-900">Yengil Tamaddi</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  1 dona <strong>qarsildoq olma</strong> yoki 1 stakan yangi siqilgan anor sharbati va bir hovuch mayiz.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
                Maqsad: Miya faolligi va vitamin C
              </div>
            </div>

            {/* 3. Tushlik */}
            <div className="bg-white rounded-2xl p-5 border border-emerald-300 ring-2 ring-emerald-500/10 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  13:00 - 14:00
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl mb-3">
                  🍲
                </div>
                <h3 className="font-bold text-base text-stone-900">Asosiy Tushlik</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Dukkakli taom (masalan, <strong>moshxo'rda</strong> yoki qaynatilgan grechka) + ko'p ko'katli pomidor-bodring salati.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-100 text-[11px] text-emerald-700 font-bold">
                Maqsad: To'liq oqsil va tolalar
              </div>
            </div>

            {/* 4. Asr tamaddisi */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  16:30
                </span>
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center text-xl mb-3">
                  🥛
                </div>
                <h3 className="font-bold text-base text-stone-900">Peshin Oralig'i</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  1 piyola <strong>tabiiy qatiq</strong> yoki suzma bilan ko'katlar, 1 bo'lak quritilgan javdar noni.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
                Maqsad: Ichak salomatligi
              </div>
            </div>

            {/* 5. Kechki ovqat */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  19:00 (Yengil)
                </span>
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-800 flex items-center justify-center text-xl mb-3">
                  🥗
                </div>
                <h3 className="font-bold text-base text-stone-900">Kechki Taom</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Bug'da yoki duxovkada dimlangan <strong>qovoq va brokkoli</strong>, yengil baliq go'shti yoki barra sabzavotlar.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
                Maqsad: Oson hazm va xotirjam uyqu
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Sog'lom Ovqatlanishning 6 ta Oltin Qoidasi */}
      <section id="maslahatlar" className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700 block mb-1">
              Foydali Tavsiyalar
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Sog'lom Ovqatlanishning 6 ta Oltin Qoidasi
            </h2>
            <p className="text-stone-600 text-base mt-2">
              Faqat mahsulot tanlash emas, uni to'g'ri iste'mol qilish odati ham nihoyatda muhim.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 flex gap-4">
              <span className="text-3xl font-black text-emerald-600/40 font-mono">01</span>
              <div>
                <h3 className="font-bold text-lg text-stone-900 mb-1">Yetarli Suv Iching</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Har kuni kamida 1.5 - 2 litr toza gazsiz suv ichish kerak. Suv ovqatdan 20 daqiqa oldin ichilgani ma'qul.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 flex gap-4">
              <span className="text-3xl font-black text-emerald-600/40 font-mono">02</span>
              <div>
                <h3 className="font-bold text-lg text-stone-900 mb-1">Rang-barang Likopcha</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Har bir ovqatlanishda likopchangizda kamida 3 xil rangdagi tabiiy mahsulot (yashil, qizil, to'q sariq) bo'lsin.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 flex gap-4">
              <span className="text-3xl font-black text-emerald-600/40 font-mono">03</span>
              <div>
                <h3 className="font-bold text-lg text-stone-900 mb-1">Shakarni Kamaytiring</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Oq tozalangan shakar o'rniga tabiiy mevalar, mayiz va oz miqdorda toza asal iste'mol qiling.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 flex gap-4">
              <span className="text-3xl font-black text-emerald-600/40 font-mono">04</span>
              <div>
                <h3 className="font-bold text-lg text-stone-900 mb-1">Sekin va Yaxshilab Chaynang</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Hazm qilish og'iz bo'shlig'ida boshlanadi. Har bir luqmani kamida 20-25 marta chaynash oshqozonni zo'riqishdan asraydi.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 flex gap-4">
              <span className="text-3xl font-black text-emerald-600/40 font-mono">05</span>
              <div>
                <h3 className="font-bold text-lg text-stone-900 mb-1">Kechki Ovqat Me'yori</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Uxlamasdan kamida 2.5 - 3 soat oldin ovqatlanishni yakunlang. Kechasi og'ir, yog'li taomlar iste'mol qilmang.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 flex gap-4">
              <span className="text-3xl font-black text-emerald-600/40 font-mono">06</span>
              <div>
                <h3 className="font-bold text-lg text-stone-900 mb-1">Mavsumiy Mahsulotlar</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  O'z tabiiy faslida pishgan meva va sabzavotlar eng yuqori biologik faollik va maksimal vitaminlarga ega bo'ladi.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Ko'p Beriladigan Savollar (Pure HTML details & summary - zero JS accordion) */}
      <section id="savollar" className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-700 block mb-1">
              Savol & Javob
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Tez-Tez Beriladigan Savollar
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Javobni ko'rish uchun savol ustiga bosing (HTML va CSS bilan to'liq ishlaydi).
            </p>
          </div>

          <div className="space-y-4">
            
            <details className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-all">
              <summary className="p-5 font-bold text-stone-900 flex justify-between items-center cursor-pointer select-none hover:text-emerald-700">
                <span>Kunlik meva va sabzavotlar me'yori qancha bo'lishi kerak?</span>
                <span className="faq-icon text-emerald-600 font-bold text-xl transition-transform duration-200">▾</span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
                Jahon Sog'liqni Saqlash Tashkiloti (JSST) tavsiyasiga ko'ra, har bir katta yoshli inson kuniga kamida <strong>400 gramm</strong> yangi sabzavot va mevalar iste'mol qilishi maqsadga muvofiqdir. Bu organizmning barcha zaruriy vitamin va tolalarga bo'lgan ehtiyojini to'liq qoplaydi.
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-all">
              <summary className="p-5 font-bold text-stone-900 flex justify-between items-center cursor-pointer select-none hover:text-emerald-700">
                <span>Kechqurun meva yeyish mumkinmi?</span>
                <span className="faq-icon text-emerald-600 font-bold text-xl transition-transform duration-200">▾</span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
                Mevalarda tabiiy fruktoza shakar moddasi mavjud. Shu sababli shirin mevalarni (uzum, anjir, banan) kunning birinchi yarmida iste'mol qilish tavsiya etiladi. Kechqurun esa nordon olma yoki yangi bodring kabi kam kaloriyali ne'matlar afzal.
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-all">
              <summary className="p-5 font-bold text-stone-900 flex justify-between items-center cursor-pointer select-none hover:text-emerald-700">
                <span>Tabiiy mahsulotlarning tozaligiga qanday kafolat beriladi?</span>
                <span className="faq-icon text-emerald-600 font-bold text-xl transition-transform duration-200">▾</span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
                Barcha mahsulotlar faqat sinalgan, sertifikatlangan mahalliy fermer xo'jaliklari va shaxsiy tomorqalardan saralab olinadi. Nitratlar va zararli kimyoviy moddalar miqdori laboratoriya nazoratidan o'tkaziladi.
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-all">
              <summary className="p-5 font-bold text-stone-900 flex justify-between items-center cursor-pointer select-none hover:text-emerald-700">
                <span>Yetkazib berish qancha vaqt oladi?</span>
                <span className="faq-icon text-emerald-600 font-bold text-xl transition-transform duration-200">▾</span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
                Buyurtmalar qabul qilingandan so'ng 1-2 soat ichida toza ekologik qutilarda eshigingizgacha yetkazib beriladi. 150 000 so'mdan ortiq buyurtmalar uchun yetkazish mutlaqo bepul!
              </div>
            </details>

            <details className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs transition-all">
              <summary className="p-5 font-bold text-stone-900 flex justify-between items-center cursor-pointer select-none hover:text-emerald-700">
                <span>Yong'oq va quruq mevalarni qanday saqlash lozim?</span>
                <span className="faq-icon text-emerald-600 font-bold text-xl transition-transform duration-200">▾</span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
                Yong'oqlarni to'g'ridan-to'g'ri quyosh nuri tushmaydigan, quruq va salqin joyda, shisha yoki paxta xaltachalarda saqlash eng maqbul usuldir. Bu ulardagi foydali yog' kislotalarining achib qolishini oldini oladi.
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* 10. Buyurtma va Aloqa Formasi (Pure HTML Form) */}
      <section id="buyurtma" className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-emerald-900 to-green-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Fon bezaklari */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-700/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
                📦 Tezkor Buyurtma
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Tabiiy Mahsulotlarga Buyurtma Bering
              </h2>
              <p className="text-emerald-100/80 text-sm sm:text-base mt-2 mb-8 max-w-xl">
                Ma'lumotlaringizni to'ldiring, mutaxassisimiz tezda siz bilan bog'lanib yangi mahsulotlarni yetkazib beradi.
              </p>

              {/* Toza HTML Formasi - Hech qanday murakkab JS talab qilmaydi */}
              <form action="#buyurtma" method="GET" className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="user-name" className="block text-xs font-bold text-emerald-200 uppercase tracking-wider mb-2">
                      Ismingiz *
                    </label>
                    <input
                      type="text"
                      id="user-name"
                      name="name"
                      required
                      placeholder="Masalan: Sardor Aliyev"
                      className="w-full px-4 py-3 rounded-xl bg-emerald-800/60 border border-emerald-700 text-white placeholder-emerald-400/60 focus:outline-hidden focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-800 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="user-phone" className="block text-xs font-bold text-emerald-200 uppercase tracking-wider mb-2">
                      Telefon raqamingiz *
                    </label>
                    <input
                      type="tel"
                      id="user-phone"
                      name="phone"
                      required
                      placeholder="+998 (90) 123-45-67"
                      className="w-full px-4 py-3 rounded-xl bg-emerald-800/60 border border-emerald-700 text-white placeholder-emerald-400/60 focus:outline-hidden focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-800 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="category-select" className="block text-xs font-bold text-emerald-200 uppercase tracking-wider mb-2">
                      Kerakli mahsulot toifasi
                    </label>
                    <select
                      id="category-select"
                      name="category"
                      className="w-full px-4 py-3 rounded-xl bg-emerald-800/60 border border-emerald-700 text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-800 transition-all text-sm"
                    >
                      <option value="barchasi" className="text-stone-900">Aralash savat (Meva, Sabzavot, Sut)</option>
                      <option value="mevalar" className="text-stone-900">Faqat sarxil mevalar</option>
                      <option value="sabzavotlar" className="text-stone-900">Yangi barra sabzavotlar</option>
                      <option value="don-dukkak" className="text-stone-900">Don va dukkakli mahsulotlar</option>
                      <option value="sut-asal" className="text-stone-900">Tabiiy sut, qatiq va tog' asali</option>
                      <option value="yongonq" className="text-stone-900">Yong'oqlar va quruq mevalar</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="user-address" className="block text-xs font-bold text-emerald-200 uppercase tracking-wider mb-2">
                      Yetkazib berish manzili *
                    </label>
                    <input
                      type="text"
                      id="user-address"
                      name="address"
                      required
                      placeholder="Shahar, tuman, ko'cha, uy raqami"
                      className="w-full px-4 py-3 rounded-xl bg-emerald-800/60 border border-emerald-700 text-white placeholder-emerald-400/60 focus:outline-hidden focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-800 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="user-comment" className="block text-xs font-bold text-emerald-200 uppercase tracking-wider mb-2">
                    Qo'shimcha istaklar yoki mahsulotlar ro'yxati
                  </label>
                  <textarea
                    id="user-comment"
                    name="comment"
                    rows={3}
                    placeholder="Masalan: 2 kg olma, 1 kg pomidor va 1 banka tog' asali..."
                    className="w-full px-4 py-3 rounded-xl bg-emerald-800/60 border border-emerald-700 text-white placeholder-emerald-400/60 focus:outline-hidden focus:ring-2 focus:ring-emerald-400 focus:bg-emerald-800 transition-all text-sm"
                  ></textarea>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="terms-check"
                    name="terms"
                    required
                    defaultChecked
                    className="w-4 h-4 rounded border-emerald-600 text-emerald-500 focus:ring-emerald-400 accent-emerald-500"
                  />
                  <label htmlFor="terms-check" className="text-xs text-emerald-200 cursor-pointer">
                    Buyurtma shartlari va tabiiy oziq-ovqat qoidalariga roziman
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-emerald-950 font-black text-base px-8 py-4 rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>✓</span>
                  <span>Buyurtmani rasmiylashtirish</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 11. Footer (Sayt pastki qismi) */}
      <footer className="bg-stone-900 text-stone-300 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
            
            {/* Logo va tavsif */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white text-xl">
                  🥦
                </div>
                <div>
                  <span className="text-xl font-black text-white block">
                    TABIIY<span className="text-emerald-400">TAOM</span>
                  </span>
                  <span className="text-[10px] text-stone-400 uppercase tracking-widest block">
                    Sog'lom Hayot Tarzi
                  </span>
                </div>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                Har kuni tabiiy va yangi oziq-ovqatlarni yetkazib beruvchi qulay milliy portal. O'zingiz va oilangiz salomatligini asrang.
              </p>
              <div className="text-xs text-emerald-400 font-semibold">
                🌱 100% Organik & Tabiiy tozalik
              </div>
            </div>

            {/* Tezkor havolalar */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Bo'limlar</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#bosh-sahifa" className="hover:text-emerald-400 transition-colors">Bosh sahifa</a></li>
                <li><a href="#mahsulotlar" className="hover:text-emerald-400 transition-colors">Mahsulotlar katalogi</a></li>
                <li><a href="#vitaminlar" className="hover:text-emerald-400 transition-colors">Vitaminlar jadvali</a></li>
                <li><a href="#taomnoma" className="hover:text-emerald-400 transition-colors">Kunlik sog'lom taomnoma</a></li>
                <li><a href="#maslahatlar" className="hover:text-emerald-400 transition-colors">Foydali tavsiyalar</a></li>
                <li><a href="#savollar" className="hover:text-emerald-400 transition-colors">Savol-Javob</a></li>
              </ul>
            </div>

            {/* Oziq-ovqat guruhlari */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Mahsulot Turlari</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#mahsulotlar" className="hover:text-emerald-400 transition-colors">🍎 Sarxil mevalar</a></li>
                <li><a href="#mahsulotlar" className="hover:text-emerald-400 transition-colors">🥦 Yangi barra sabzavotlar</a></li>
                <li><a href="#mahsulotlar" className="hover:text-emerald-400 transition-colors">🌾 Don va dukkaklilar</a></li>
                <li><a href="#mahsulotlar" className="hover:text-emerald-400 transition-colors">🥛 Qishloq qatig'i va sut</a></li>
                <li><a href="#mahsulotlar" className="hover:text-emerald-400 transition-colors">🍯 Sof tog' asali</a></li>
                <li><a href="#mahsulotlar" className="hover:text-emerald-400 transition-colors">🥜 Yong'oq va mayizlar</a></li>
              </ul>
            </div>

            {/* Aloqa va manzil */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Aloqa & Manzil</h4>
              <div className="space-y-2.5 text-xs text-stone-400">
                <p>📍 O'zbekiston, Toshkent shahri</p>
                <p>📞 +998 (71) 200-00-11</p>
                <p>💬 Telegram: @tabiiy_taom_uz</p>
                <p>🕒 Ish tartibi: Har kuni 08:00 - 20:00</p>
                <div className="pt-2">
                  <a
                    href="#buyurtma"
                    className="inline-block bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                  >
                    Yetkazib berishga buyurtma
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <p>© 2026 TabiiyTaom.uz – Barcha huquqlar himoyalangan. Toza HTML va CSS asosida tayyorlangan.</p>
            <div className="flex gap-4">
              <a href="#bosh-sahifa" className="hover:text-stone-400 transition-colors">Yuqoriga qaytish ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
