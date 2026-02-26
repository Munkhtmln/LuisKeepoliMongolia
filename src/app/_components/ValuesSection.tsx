export default function ValuesSection() {
  return (
    <section className="bg-background py-16 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold tracking-wide text-foreground mb-6">
          ҮНЭ ЦЭНЭ
        </h2>

        <p className="text-foreground leading-relaxed mb-6">
          {
            '"Хяналт шалгалт, туршилт, баталгаажуулалт, стандарт, хэмжилт"-ийг үндэслэсэн чанартай үйлчилгээний цогц байгууллага юм.'
          }
        </p>

        <p className="text-muted-foreground leading-relaxed mb-16">
          {
            '"Илүү найдвартай ертөнцийг бий болгох" эрхэм зорилгоо болгож "Дэлхийн чанартай үйлчилгээг тэргүүлэх" алсын хараатайгаар "Үнэнч шударга, мэргэжлийн ур чадвар, шинийг санаачилга" гэсэн үндсэн үнэт зүйлээ баримтлан "үйлчлүүлэгч бол төв, чанар бол амьдрал" гэсэн гүн ухааныг үргэлж баримталж "нэг сэтгэл, нэгдмэл сэтгэлээр" үргэлж урагшилна.'
          }
        </p>

        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-around">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-light text-foreground md:text-6xl">
              120+
            </span>
            <span className="mt-2 text-sm font-bold tracking-widest text-foreground">
              СТАНДАРТЧИЛАЛ
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-5xl font-light text-foreground md:text-6xl">
              100+
            </span>
            <span className="mt-2 text-sm font-bold tracking-widest text-foreground">
              АЛБА ХААГЧИД
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-5xl font-light text-foreground md:text-6xl">
              150+
            </span>
            <span className="mt-2 text-sm font-bold tracking-widest text-foreground">
              ШИНЖИЛГЭЭ
            </span>
          </div>
        </div>
      </div>

      <div className="mt-16 border-b-2 border-foreground" />
    </section>
  );
}
