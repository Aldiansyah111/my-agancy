import { useState } from "react";
import { ChevronDown } from "lucide-react";
const faqs = [
    { q: "Apa itu digitalpreneur?", a: "Digitalpreneur adalah seseorang yang menjalankan bisnis berbasis digital." },
    { q: "Apa keahlian utama kamu?", a: "Solidity, React, JavaScript, Tailwind, dan Web3 development." },
    { q: "Kamu bisa bikin token sendiri?", a: "Ya, saya pernah membangun My-Token dengan sistem ERC20." },
    { q: "Bisa bikin smart contract?", a: "Bisa, saya menggunakan Solidity untuk membuat smart contract." },
    { q: "Pernah bikin marketplace?", a: "Ya, termasuk marketplace sederhana berbasis blockchain." },
    { q: "Pakai framework apa?", a: "React dengan Vite dan Tailwind CSS untuk frontend-nya." },
    { q: "Apakah hasilnya mobile friendly?", a: "Tentu, semua UI yang saya buat bersifat responsif." },
    { q: "Kamu open untuk freelance?", a: "Saat ini, saya terbuka untuk proyek freelance." },
    { q: "Pernah deploy ke mainnet?", a: "Ya, saya punya pengalaman deploy ke testnet dan mainnet Ethereum." },
    { q: "Ada portofolio?", a: "Akan segera saya tampilkan di halaman portfolio." }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);


    return (
        <section className="py-20 bg-gradient-to-r from-purple-900 to-gray-900">
            <div className="relative z-10 max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg mt-10 text-white">
                <h2 className="text-2xl font-bold text-center mb-6">FAQ</h2>
                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <div key={i} className="border border-white/20 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex justify-between items-center px-4 py-3 bg-white/5 hover:bg-white/10 transition-colors duration-200"
                            >
                                <span className="font-semibold text-left">{item.q}</span>
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {openIndex === i && (
                                <div className="px-4 py-3 bg-white/10 text-sm text-white">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}