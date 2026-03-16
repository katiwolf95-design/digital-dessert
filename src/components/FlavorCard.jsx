export default function FlavorCard({ title, description, className }) {
    return (
        <div className="relative h-full">
            {/* Scoop */}
            <div className={`
                absolute
                -top-6
                left-1/2
                -translate-x-1/2
                w-12
                h-12
                rounded-full
                shadow-md
                border border-white
                group-hover:scale-110
                transition
                duration-300
                ${className}
            `}></div>
            
            {/* Card */}
            <div className="
                h-full pt-12
                rounded-2xl
                p-8
                bg-white
                shadow-sm
                border border-neutral-200
                hover:rotate-[0.8deg]
                hover:shadow-lg
                transition
                duration-300
            ">
                <h3 className="font-playfair italic text-2xl mb-3 text-amber-800">
                    {title}
                </h3>

                <p className="text-neutral-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}