import { RevealOnScroll } from "./RevealOnScroll"


export const Home = () => {
    return(
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zinc-800 to-green-500 bg-clip-text text-transparent leading-right">Hi, I'm Akash Susil</h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto"> 
                Hi, I'm Akash Susil — a self-taught MERN stack developer passionate about building responsive web apps and exploring Web3. 
                I love solving problems with code and turning ideas into real projects.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>

                    <a href="#contact" className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-500/10">Contact me</a>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}