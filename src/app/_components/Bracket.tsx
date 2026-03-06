export default function Bracket() {
  return (
    <section className="bg-background py-16 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold tracking-wide text-foreground mb-6">
          Итгэмжлэлийн хүрээ
        </h2>
        <main className="min-h-screen bg-white p-4">
          <div className="max-w-3xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-black text-black text-xs">
                <thead>
                  <tr>
                    <th className="border border-black px-2 py-1.5 text-center font-bold">
                      Гүйцэтгэж байгаа
                      <br />
                      сорилтын төрөл
                    </th>
                    <th className="border border-black px-2 py-1.5 text-center font-bold">
                      Сорилт хийх бүтээгдэхүүн,
                      <br />
                      материал, зүйлийн нэр
                    </th>
                    <th className="border border-black px-2 py-1.5 text-center font-bold">
                      Тодорхойлох үзүүлэлт
                    </th>
                    <th className="border border-black px-2 py-1.5 text-center font-bold">
                      Сорилтын арга,
                      <br />
                      аргачлал
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1 - Дээж авах */}
                  <tr>
                    <td
                      rowSpan={2}
                      className="border border-black px-2 py-1.5 text-center align-middle"
                    >
                      Дээж авах
                      <br />
                      Дээж бэлтэл
                    </td>
                    <td
                      rowSpan={11}
                      className="border border-black px-2 py-1.5 text-center align-middle"
                    >
                      Хатуу түлш. Чулуун ба хүрэн
                      <br />
                      нүүрс
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      Дээж авах
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      ISO 18283 : 2022
                      <br />
                      GB 475 – 2008
                    </td>
                  </tr>
                  {/* Row 2 - Дээж бэлтэл */}
                  <tr>
                    <td className="border border-black px-2 py-1.5">
                      Дээж бэлтэл
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      MNS GB/T 474:2015
                    </td>
                  </tr>
                  {/* Row 3 - Техникийн шинжилгээ - Нийт чийг */}
                  <tr>
                    <td
                      rowSpan={4}
                      className="border border-black px-2 py-1.5 text-center align-middle"
                    >
                      Техникийн шинжилгээ
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      Нийт чийг
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      <span className="text-red-600">MNS ISO 589-2003</span>
                      <br />
                      MNS GB/T 212 : 2015
                      <br />
                      <span className="text-red-600">GB/T 211-2017</span>
                      <br />
                      <span className="text-red-600">GB/T 30732 - 2014</span>
                    </td>
                  </tr>
                  {/* Row 4 - Техникийн шинжилгээ */}
                  <tr>
                    <td className="border border-black px-2 py-1.5">
                      Техникийн шинжилгээ
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      <span className="text-red-600">MNS GB/T 212:2015</span>
                      <br />
                      <span className="text-red-600">GB/T 30732 - 2014</span>
                    </td>
                  </tr>
                  {/* Row 5 - Нүүрсний илчлэг */}
                  <tr>
                    <td className="border border-black px-2 py-1.5">
                      Нүүрсний илчлэг
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      MNS ISO 1928:2009
                      <br />
                      MNS GB/T 213:2024
                    </td>
                  </tr>
                  {/* Row 6 - Барьцалдах (бөсөх) чанар */}
                  <tr>
                    <td className="border border-black px-2 py-1.5">
                      Барьцалдах (бөсөх) чанар
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      MNS ISO 15585:2014
                    </td>
                  </tr>
                  {/* Row 7 - Химийн шинжилгээ - Нийт хүхэр */}
                  <tr>
                    <td
                      rowSpan={5}
                      className="border border-black px-2 py-1.5 text-center align-middle"
                    >
                      Химийн шинжилгээ
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      Нийт хүхэр
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      MNS GB/T 214:2024
                    </td>
                  </tr>
                  {/* Row 8 - Хүхэр, фосфор, хүнцэл, хлорид */}
                  <tr>
                    <td className="border border-black px-2 py-1.5">
                      Хүхэр, фосфор, хүнцэл,
                      <br />
                      хлорид
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      MNS 7057:2024
                      <br />
                      SN/T 3511-2013
                    </td>
                  </tr>
                  {/* Row 9 - Мөнгөн ус */}
                  <tr>
                    <td className="border border-black px-2 py-1.5">
                      Мөнгөн ус
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      GB/T 16659-2024
                      <br />
                      SN/T 4763-2017
                    </td>
                  </tr>
                  {/* Row 10 - Фторын агууламж */}
                  <tr>
                    <td className="border border-black px-2 py-1.5">
                      Фторын агууламж
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      MNS GB/T 4633:2024
                    </td>
                  </tr>
                  {/* Row 11 - Устөрөгч, нүүрстөрөгч, азотын агууламж */}
                  <tr>
                    <td className="border border-black px-2 py-1.5">
                      Устөрөгч, нүүрстөрөгч,
                      <br />
                      азотын агууламж
                    </td>
                    <td className="border border-black px-2 py-1.5">
                      <span className="text-red-600">GB/T 476-2008</span>
                      <br />
                      <span className="text-red-600">GB/T 30733 – 2014</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <div className="mt-16 border-b-2 border-foreground" />
    </section>
  );
}
