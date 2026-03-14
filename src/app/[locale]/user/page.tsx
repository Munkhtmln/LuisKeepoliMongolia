"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/LocaleProvider";
import NewsSection from "@/app/_components/News-Section";

export default function NewsPage() {
  const { t } = useLocale();

  return (
    <main className="h-full bg-muted/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {t("userPage.hero.title")}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            {t("userPage.hero.description")}
          </p>
        </div>
      </div>
      <NewsSection showTitle={false} />;
      <article className="m-auto flex max-w-[1220px] flex-col gap-6 md:flex-row md:items-center md:gap-8 lg:gap-10 w-full">
        <div className="order-2 min-w-0 flex-1 md:order-1">
          <h3 className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
            {t("userPage.coalIntro.title")}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-foreground/80 sm:mt-4">
            {t("userPage.coalIntro.description")}
          </p>
          <div className="mt-4 sm:mt-5"></div>
        </div>

        <div className="relative order-1 aspect-16/10 w-full shrink-0 overflow-hidden rounded-lg bg-muted md:order-2 md:w-[42%] md:min-w-[320px] md:aspect-4/3">
          <Image
            src="/nvvrsjinshin.JPG"
            alt={t("userPage.coalIntro.imageAlt")}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </article>
      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-2xl font-bold tracking-wide text-foreground">
            {t("userPage.accreditation.title")}
          </h2>

          <main className="min-h-100 bg-white p-4">
            <div className="mx-auto max-w-3xl">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-black text-xs text-black">
                  <thead>
                    <tr>
                      <th className="border border-black px-2 py-1.5 text-center font-bold">
                        {t("userPage.table.headers.testType1")}
                        <br />
                        {t("userPage.table.headers.testType2")}
                      </th>
                      <th className="border border-black px-2 py-1.5 text-center font-bold">
                        {t("userPage.table.headers.product1")}
                        <br />
                        {t("userPage.table.headers.product2")}
                      </th>
                      <th className="border border-black px-2 py-1.5 text-center font-bold">
                        {t("userPage.table.headers.indicator")}
                      </th>
                      <th className="border border-black px-2 py-1.5 text-center font-bold">
                        {t("userPage.table.headers.method1")}
                        <br />
                        {t("userPage.table.headers.method2")}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td
                        rowSpan={2}
                        className="border border-black px-2 py-1.5 text-center align-middle"
                      >
                        {t("userPage.table.rows.samplePreparation.type1")}
                        <br />
                        {t("userPage.table.rows.samplePreparation.type2")}
                      </td>
                      <td
                        rowSpan={11}
                        className="border border-black px-2 py-1.5 text-center align-middle"
                      >
                        {t("userPage.table.rows.commonMaterial.line1")}
                        <br />
                        {t("userPage.table.rows.commonMaterial.line2")}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        {t("userPage.table.rows.samplePreparation.sample")}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        ISO 18283 : 2022
                        <br />
                        GB 475 – 2008
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black px-2 py-1.5">
                        {t("userPage.table.rows.samplePreparation.preparation")}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        MNS GB/T 474:2015
                      </td>
                    </tr>

                    <tr>
                      <td
                        rowSpan={4}
                        className="border border-black px-2 py-1.5 text-center align-middle"
                      >
                        {t("userPage.table.rows.technicalAnalysis.title")}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        {t(
                          "userPage.table.rows.technicalAnalysis.totalMoisture"
                        )}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        <span className="text-black">MNS ISO 589-2003</span>
                        <br />
                        MNS GB/T 212 : 2015
                        <br />
                        <span className="text-black">GB/T 211-2017</span>
                        <br />
                        <span className="text-black">GB/T 30732 - 2014</span>
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black px-2 py-1.5">
                        {t("userPage.table.rows.technicalAnalysis.proximate")}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        <span className="text-black">MNS GB/T 212:2015</span>
                        <br />
                        <span className="text-black">GB/T 30732 - 2014</span>
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black px-2 py-1.5">
                        {t(
                          "userPage.table.rows.technicalAnalysis.calorificValue"
                        )}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        MNS ISO 1928:2009
                        <br />
                        MNS GB/T 213:2024
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black px-2 py-1.5">
                        {t(
                          "userPage.table.rows.technicalAnalysis.cakingProperty"
                        )}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        MNS ISO 15585:2014
                      </td>
                    </tr>

                    <tr>
                      <td
                        rowSpan={5}
                        className="border border-black px-2 py-1.5 text-center align-middle"
                      >
                        {t("userPage.table.rows.chemicalAnalysis.title")}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        {t("userPage.table.rows.chemicalAnalysis.totalSulfur")}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        MNS GB/T 214:2024
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black px-2 py-1.5">
                        {t(
                          "userPage.table.rows.chemicalAnalysis.sulfurPhosphorusArsenicChloride1"
                        )}
                        <br />
                        {t(
                          "userPage.table.rows.chemicalAnalysis.sulfurPhosphorusArsenicChloride2"
                        )}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        MNS 7057:2024
                        <br />
                        SN/T 3511-2013
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black px-2 py-1.5">
                        {t("userPage.table.rows.chemicalAnalysis.mercury")}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        GB/T 16659-2024
                        <br />
                        SN/T 4763-2017
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black px-2 py-1.5">
                        {t("userPage.table.rows.chemicalAnalysis.fluorine")}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        MNS GB/T 4633:2024
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-black px-2 py-1.5">
                        {t(
                          "userPage.table.rows.chemicalAnalysis.hydrogenCarbonNitrogen1"
                        )}
                        <br />
                        {t(
                          "userPage.table.rows.chemicalAnalysis.hydrogenCarbonNitrogen2"
                        )}
                      </td>
                      <td className="border border-black px-2 py-1.5">
                        <span className="text-black">GB/T 476-2008</span>
                        <br />
                        <span className="text-black">GB/T 30733 – 2014</span>
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
    </main>
  );
}
