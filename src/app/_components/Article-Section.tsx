import { ArticleCard } from "./Article-Card";
import { newsItems } from "../news/newsData";

export default function ArticleSection() {
    return (
        <section className="w-full bg-background">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Left title area */}
                    <div className="lg:w-56 shrink-0">
                        <h2 className="text-2xl font-bold text-foreground leading-tight">
                            {"Мэдээ, мэдээлэл"}
                        </h2>
                        <div className="mt-3 w-16 h-1 bg-muted-foreground/30" />
                    </div>

                    {/* News cards grid */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((item, index) => (
                            <ArticleCard
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                slug={item.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
