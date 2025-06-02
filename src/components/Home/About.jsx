import { CheckCircle } from "lucide-react";
import test6 from '../../assets/6.png';

export default function About() {
    return (
        <section className="bg-gradient-to-r from-purple-900 to-gray-900 text-white py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Deskripsi */}
                    <div>
                        <p className="text-lg leading-relaxed mb-6">
                            I'm a passionate and experienced <span className="font-semibold text-purple-700">full-stack programmer</span> with a strong background in building scalable web applications, integrating modern technologies, and delivering clean, efficient code.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            With over <span className="font-semibold text-purple-700">3+ years of professional experience</span>, I specialize in crafting high-performance solutions for startups, digital products, and innovative businesses.
                        </p>

                        <h3 className="text-2xl font-semibold mb-4 mt-8">Key Skills</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-purple-600 mt-1" />
                                Full-Stack Web Development (React, Node.js, Express, MongoDB)
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-purple-600 mt-1" />
                                REST API & Backend Architecture
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-purple-600 mt-1" />
                                Frontend UI/UX with Tailwind CSS & Component Libraries
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-purple-600 mt-1" />
                                Version Control (Git, GitHub)
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="text-purple-600 mt-1" />
                                Agile Development & Remote Collaboration
                            </li>
                        </ul>
                    </div>

                    {/* Visual atau Gambar Avatar Placeholder */}
                    <div className="flex justify-center md:justify-end">
                        <div className="bg-purple-100 rounded-xl p-6 shadow-lg w-full max-w-xs">
                            <img
                                src={test6}
                                alt="My portrait"
                                className="rounded-xl object-cover w-full h-auto"
                            />
                            <div className="mt-4 text-center">
                                <h4 className="text-xl font-bold text-purple-600">Aldiansyah Akbar</h4>
                                <p className="text-purple-600">Full-Stack Developer & Digitalpreneur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
