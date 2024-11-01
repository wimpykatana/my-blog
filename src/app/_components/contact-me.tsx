import Link from "next/link";

export function ContactMe() {
    return (
        <div className="bg-zinc-700 py-16 flex flex-col justify-center items-center">
            <h3 className="text-5xl text-white mb-5">Contact Me</h3>
            <p className="text-center text-white w-2/6 mb-10">My inbox is always open. You can drop me a mail or just say hi, and i will reach you back, and Thank you!</p>
            <div className="mt-10">
            <Link href={`mailto:alamatemail@gmail.com`}>
                <span className="text-white p-5 mt-5 border border-white hover:bg-slate-400">
                    Say Hello !!
                </span>
            </Link>
            </div>
        </div>
    )
}