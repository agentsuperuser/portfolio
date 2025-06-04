import { RevealOnScroll } from "./RevealOnScroll"

export const Projects = () => {
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Think Board</h3>
                        <p className="text-gray-400 mb-4">A full-stack CRUD web application built with the MERN stack. 
                            ThinkBoard allows users to create, read, update, and delete notes or ideas in a clean and intuitive interface.</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Tailwind css", "Node.js", "Express.js", "MongoDB", "Upstash Ratelimit", "RESTful API", "Postman", "Render", "Git & Github"].map((tech, key) => (
                                <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">{tech}</span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://thinkboard-rbv5.onrender.com/" className="text-green-400 hover:text-green-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">ToDo</h3>
                        <p className="text-gray-400 mb-4">A simple and responsive task management application built with React. Users can add, delete, and mark tasks as complete. 
                            Designed with a clean UI using Tailwind CSS and optimized for smooth user experience with local state management. 
                            Ideal for practicing CRUD operations, component-based architecture, and modern frontend workflows.</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Tailwind css", "Git & Github", "Vercel"].map((tech, key) => (
                                <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">{tech}</span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://agentsuperuser.github.io/todo" className="text-green-400 hover:text-green-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Euphoria</h3>
                        <p className="text-gray-400 mb-4">Designed and developed a responsive and visually engaging website for our college's Food Festival. 
                            The project prioritized user experience through intuitive navigation, aesthetic design, and mobile-friendly layouts. 
                            Key features included an event schedule, vendor highlights, and interactive elements to enhance visitor engagement. 
                            Emphasis was placed on accessibility and smooth user flow to make the information easily accessible for attendees.</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Tailwind css", "Git & Github", "Figma", "Vercel", "Hostinger"].map((tech, key) => (
                                <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">{tech}</span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://rihmcteuphoria.vercel.app/" className="text-green-400 hover:text-green-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Yakai Baku Ecosystem</h3>
                        <p className="text-gray-400 mb-4">Developed the initial frontend for the Yakaibaku token ecosystem as part of a Web3 initiative. 
                            This project marked my entry into real-world development, where I focused on creating the layout, styling, and core user interface components. 
                            While not fully optimized, it provided hands-on experience in frontend development, component structuring, and connecting design concepts with user interaction. 
                            It helped me build confidence and set the foundation for my later projects.</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Tailwind css", "Git & Github", "Vercel"].map((tech, key) => (
                                <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">{tech}</span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://yakaibaku-zrjh.vercel.app/" className="text-green-400 hover:text-green-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>
                </div>

                <div className="p-6 mt-4 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">NFT Marketplace</h3>
                        <p className="text-gray-400 mb-4">Built a basic NFT marketplace using React, Solidity, and 
                            Web3.js to understand how smart contracts, token minting, and wallet integration work. 
                            This was an experimental project, 
                            but it helped me grasp key concepts in blockchain-based UI/UX and smart contract interactions.</p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Tailwind css", "Thirdweb", "Solidity", "Git & Github", "Vercel"].map((tech, key) => (
                                <span key={key} className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">{tech}</span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://timeless-gsgbpt7jh-agentsuperuser.vercel.app/" className="text-green-400 hover:text-green-300 transition-colors my-4">View Project</a>
                        </div>
                    </div>

            </div>
            </RevealOnScroll>
        </section>
    )
}