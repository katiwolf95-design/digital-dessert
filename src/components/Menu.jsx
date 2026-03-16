import FlavorCard from "./FlavorCard"

export default function Menu() {
    return (
        <section className="py-16 md:py-24 px-6">

            <h2 className="text-center font-playfair italic text-2xl md:text-3xl text-rose-600 mb-20 animate-fadeUp">
                Die Geschmacksrichtungen meiner Arbeit
            </h2>

            <div className="
                grid md:grid-cols-3 gap-10
                max-w-5xl mx-auto px-6"
            >
                <div className="animate-riseUp [animation-delay:200ms]">
                    <FlavorCard
                        className="
                            bg-green-200 
                        "
                        title="Pistacchio Code"
                        description="React-Komponenten, sauber portioniert und mit Hooks verfeinert."
                    />
                </div>

                <div className="animate-riseUp [animation-delay:400ms]">
                    <FlavorCard
                        className="bg-amber-200"
                        title="Crema Design"
                        description="Pixelgenaue Interfaces mit Liebe zum Detail und System-Denken."
                    />
                </div>

                <div className="animate-riseUp [animation-delay:600ms]">
                    <FlavorCard
                        className="bg-rose-300"
                        title="Lampone Team-Spirit"
                        description="Frische Impulse und reibungslose Git-Collaboration."
                    />
                </div>
            </div>

        </section>
    )
}