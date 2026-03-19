import { FaLinkedin } from "react-icons/fa"

export default function Contact() {
    return (
        <section className="py-16 md:py-24 text-center px-6">

            <p className="text-neutral-600 mb-6">
                Danke für deine Zeit und deinen Appetit auf neue Projekte.
            </p>

            <div className="flex justify-center gap-6">

                <a
                    href="mailto:kawolf6388@gmail.com"
                    className="
                        relative group inline-flex items-center gap-2 px-7 py-3
                        bg-emerald-700 text-white rounded-full
                        font-medium overflow-hidden hover:bg-emerald-800 hover:-translate-y-1
                        transition duration-300 shadow-md hover:shadow-lg"
                >
                    Schreib mir eine Mail

                    <span className="
                        transition
                        duration-300
                        group-hover:translate-x-1
                    ">
                        →
                    </span>

                    <span className="
                        absolute inset-0 bg-gradient-to-r from-transparent
                        via-white/40 to-transparent translate-x-[-120%]
                        group-hover:translate-x-[120%] transition duration-700
                        "
                    />
                </a>

                <a
                    href="https://www.linkedin.com/in/katharina-wolf-568255344/"
                    target="_blank"
                    className="
                        flex items-center justify-center w-12 h-12
                        border border-neutral-300 rounded-full
                        text-neutral-600 hover:text-blue-600
                        hover:border-blue-500 transition duration-300
                    "
                >
                    <FaLinkedin size={20} />
                </a>

                
            </div>

           
            <div className="pt-8 md:pt-16">
                <p className="text-sm tracking-wide text-neutral-800 mb-6">
                    Katharina Wolf · Digital Product Designer · Frontend Developer
                </p>
            </div>

        </section>
    )
}