import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Terminal,
    Code2,
    Globe,
    MessageSquare,
    FolderGit2,
    User,
    Mail,
    Github,
    Linkedin,
    ExternalLink,
    Search,
    ChevronRight,
    Layers,
    Cpu,
    Zap,
    Shield,
    CheckCircle2,
    Menu,
    X,
    Command
} from 'lucide-react';

// VIBE Ecosystem Products
const vibeProducts = [
    {
        name: 'VIBE CLI',
        tagline: 'Multi-agent AI coding tool',
        description: 'Single-command TUI, multi-LLM router, execution modes, security-first approvals.',
        icon: Terminal,
        status: 'In Development'
    },
    {
        name: 'VIBE VS Code',
        tagline: 'Multi-agent IDE assistant',
        description: 'CLI parity, state-machine orchestration, real-time streaming chat.',
        icon: Code2,
        status: 'Planned'
    },
    {
        name: 'VIBE Web',
        tagline: 'Documentation hub',
        description: 'Documentation and onboarding hub for the entire ecosystem.',
        icon: Globe,
        status: 'Live'
    },
    {
        name: 'VIBE Chat',
        tagline: 'AI website builder',
        description: 'AI web app & website builder powered by generative agents.',
        icon: MessageSquare,
        status: 'Planned'
    }
];

// Selected Projects
const selectedProjects = [
    { name: 'Country Explorer', category: 'Web', tech: 'React', description: 'Country data exploration dashboard' },
    { name: 'Recipe Finder', category: 'Web', tech: 'Vue', description: 'Recipe discovery application' },
    { name: 'Meme Generator', category: 'Web', tech: 'React', description: 'Custom meme creation tool' },
    { name: 'Mini Games', category: 'Game', tech: 'React', description: 'Collection of mini-games' }
];

const skillsByCategory = {
    'AI & Agents': ['RAG', 'H-RAG', 'Multi-Agent Systems', 'Tooling', 'LLM Routing'],
    'Developer Platforms': ['CLI Tools', 'VS Code Extensions', 'Automation', 'DX'],
    'Engineering & Stack': ['Python', 'Node.js', 'React', 'TypeScript', 'APIs', 'Cloud'],
    'LLM Ecosystem': ['OpenAI', 'Claude', 'Gemini', 'OpenRouter', 'Ollama']
};

// Navigation items
const navItems = [
    { id: 'hero', label: 'Overview', icon: User },
    { id: 'about', label: 'About', icon: FolderGit2 },
    { id: 'vibe', label: 'VIBE Ecosystem', icon: Terminal },
    { id: 'work', label: 'Projects', icon: Code2 },
    { id: 'skills', label: 'Skills', icon: Layers },
    { id: 'contact', label: 'Contact', icon: Mail }
];

type Project = typeof selectedProjects[0];

function App() {
    const [activeSection, setActiveSection] = useState('hero');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'vibe', 'work', 'skills', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const filteredProjects = selectedProjects.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.tech.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#0d1117] text-slate-300 font-sans flex">
            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{ width: sidebarOpen ? 260 : 0 }}
                className="fixed left-0 top-0 h-full bg-[#161b22] border-r border-[#30363d] z-40 overflow-hidden"
            >
                <div className="w-[260px] h-full flex flex-col">
                    {/* Logo */}
                    <div className="p-4 border-b border-[#30363d]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#238636] rounded-lg flex items-center justify-center">
                                <Command className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="font-bold text-white">MK</h1>
                                <p className="text-xs text-slate-500">Portfolio v2</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-3 overflow-y-auto">
                        <div className="space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all ${
                                        activeSection === item.id
                                            ? 'bg-[#238636]/20 text-[#58a6ff]'
                                            : 'hover:bg-[#21262d] text-slate-400 hover:text-white'
                                    }`}
                                >
                                    <item.icon className="w-4 h-4" />
                                    <span>{item.label}</span>
                                    {activeSection === item.id && (
                                        <ChevronRight className="w-4 h-4 ml-auto" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Quick Links */}
                        <div className="mt-8">
                            <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                Quick Links
                            </p>
                            <div className="space-y-1">
                                <a
                                    href="https://github.com/mk-knight23"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-[#21262d] text-slate-400 hover:text-white transition-all"
                                >
                                    <Github className="w-4 h-4" />
                                    <span>GitHub Profile</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kazi-musharraf-0674871a4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm hover:bg-[#21262d] text-slate-400 hover:text-white transition-all"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </nav>

                    {/* User Info */}
                    <div className="p-4 border-t border-[#30363d]">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#238636] rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                MK
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white truncate">Musharraf Kazi</p>
                                <p className="text-xs text-slate-500 truncate">AI Engineer & Indie Builder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.aside>

            {/* Toggle Button */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="fixed left-4 top-4 z-50 p-2 bg-[#161b22] border border-[#30363d] rounded-md hover:bg-[#21262d] transition-colors"
            >
                {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

            {/* Main Content */}
            <main
                className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-[260px]' : 'ml-0'}`}
            >
                <div className="max-w-5xl mx-auto p-8">
                    {/* Hero Section */}
                    <section id="hero" className="min-h-[80vh] flex items-center py-16">
                        <div className="w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-8"
                            >
                                <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#238636]/10 text-[#58a6ff] rounded-full text-sm font-medium mb-4">
                                    <span className="w-2 h-2 bg-[#58a6ff] rounded-full animate-pulse"></span>
                                    AI Engineer & Indie Builder
                                </span>
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                                    MUSHARRAF <span className="text-slate-600">KAZI</span>
                                </h1>
                                <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                                    Building the <strong className="text-[#a5b4fc]">VIBE Ecosystem</strong> — a multi-product AI
                                    developer platform focused on AI-powered coding workflows, multi-agent orchestration,
                                    and production-grade developer tooling.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="flex flex-wrap gap-4 mb-12"
                            >
                                <button
                                    onClick={() => scrollTo('vibe')}
                                    className="px-6 py-3 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-semibold transition-all flex items-center gap-2"
                                >
                                    <Terminal className="w-5 h-5" />
                                    Explore VIBE
                                </button>
                                <button
                                    onClick={() => scrollTo('work')}
                                    className="px-6 py-3 bg-[#21262d] hover:bg-[#30363d] text-white rounded-lg font-semibold transition-all"
                                >
                                    View Projects
                                </button>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="grid grid-cols-3 gap-4"
                            >
                                <div className="p-4 bg-[#161b22] border border-[#30363d] rounded-lg">
                                    <div className="text-3xl font-bold text-white">60+</div>
                                    <div className="text-sm text-slate-500">Projects</div>
                                </div>
                                <div className="p-4 bg-[#161b22] border border-[#30363d] rounded-lg">
                                    <div className="text-3xl font-bold text-white">4</div>
                                    <div className="text-sm text-slate-500">Products</div>
                                </div>
                                <div className="p-4 bg-[#161b22] border border-[#30363d] rounded-lg">
                                    <div className="text-3xl font-bold text-[#a5b4fc]">AI</div>
                                    <div className="text-sm text-slate-500">Focus</div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about" className="py-16 border-t border-[#30363d]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <FolderGit2 className="w-6 h-6 text-[#58a6ff]" />
                                About
                            </h2>
                            <div className="prose prose-slate max-w-none">
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    AI Engineer and Indie Product Builder specializing in <strong className="text-white">Agentic AI</strong>,
                                    <strong className="text-white"> Developer Tools</strong>,
                                    <strong className="text-white"> Multi-LLM Routing</strong>, and
                                    <strong className="text-white"> SaaS Automation</strong>.
                                </p>
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    Building the <strong className="text-[#a5b4fc]">VIBE Ecosystem</strong> — a multi-product AI developer
                                    platform (CLI, VS Code Extension, Web SaaS, and Agents) focused on AI-powered coding workflows,
                                    multi-agent orchestration, and production-grade developer tooling.
                                </p>
                                <p className="text-slate-400 leading-relaxed">
                                    Experienced in <strong className="text-white">system architecture</strong>,
                                    <strong className="text-white"> product strategy</strong>,
                                    <strong className="text-white"> execution</strong>,
                                    <strong className="text-white"> research</strong>, and
                                    <strong className="text-white"> full-stack implementation</strong>.
                                </p>
                            </div>
                        </motion.div>
                    </section>

                    {/* VIBE Ecosystem Section */}
                    <section id="vibe" className="py-16 border-t border-[#30363d]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3 py-1 bg-[#a5b4fc]/10 text-[#a5b4fc] rounded-full text-sm font-medium">
                                    Flagship Project
                                </span>
                                <h2 className="text-2xl font-bold text-white">VIBE Ecosystem</h2>
                            </div>
                            <p className="text-slate-400 mb-8">
                                Founder & AI Engineer — A multi-product AI developer platform
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {vibeProducts.map((product, index) => (
                                    <motion.div
                                        key={product.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -2 }}
                                        className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#238636]/50 transition-all group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-[#21262d] rounded-lg group-hover:bg-[#238636]/20 transition-colors">
                                                <product.icon className="w-5 h-5 text-[#58a6ff]" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h3 className="font-semibold text-white">{product.name}</h3>
                                                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                                                        product.status === 'Live'
                                                            ? 'bg-[#238636]/10 text-[#3fb950]'
                                                            : 'bg-[#30363d] text-slate-400'
                                                    }`}>
                                                        {product.status}
                                                    </span>
                                                </div>
                                                <p className="text-[#a5b4fc] text-sm mb-2">{product.tagline}</p>
                                                <p className="text-slate-500 text-sm">{product.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Technical Highlights */}
                            <div className="p-6 bg-[#161b22] border border-[#30363d] rounded-lg">
                                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-[#238636]" />
                                    Technical Highlights
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        'Hierarchical RAG (H-RAG) + Decision Agents + Orchestrator',
                                        'Multi-provider LLM routing with fallback and evaluation',
                                        '55-feature roadmap with 4-tier system prompt strategy',
                                        'Competitive analysis across 60 AI coding tools',
                                        'Monorepo strategy with ecosystem boundaries',
                                        'Security-first architecture'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                                            <ChevronRight className="w-4 h-4 text-[#58a6ff] shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* Work Section */}
                    <section id="work" className="py-16 border-t border-[#30363d]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Code2 className="w-6 h-6 text-[#58a6ff]" />
                                Selected Projects
                            </h2>
                            <p className="text-slate-400 mb-8">A showcase of recent work across web, games, and tools.</p>

                            {/* Search */}
                            <div className="relative mb-6">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 bg-[#161b22] border border-[#30363d] rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:border-[#58a6ff]"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <AnimatePresence>
                                    {filteredProjects.map((project, index) => (
                                        <motion.div
                                            key={project.name}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#58a6ff]/50 transition-all cursor-pointer group"
                                        >
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="px-2 py-1 bg-[#a5b4fc]/10 text-[#a5b4fc] rounded text-xs font-medium">
                                                    {project.category}
                                                </span>
                                                <span className="px-2 py-1 bg-[#30363d] text-slate-400 rounded text-xs">
                                                    {project.tech}
                                                </span>
                                            </div>
                                            <h3 className="font-semibold text-white mb-1 group-hover:text-[#58a6ff] transition-colors">
                                                {project.name}
                                            </h3>
                                            <p className="text-sm text-slate-500">{project.description}</p>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            <a
                                href="https://github.com/mk-knight23?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-8 text-[#58a6ff] hover:text-[#79c0ff] transition-colors"
                            >
                                View all 60 projects
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </section>

                    {/* Skills Section */}
                    <section id="skills" className="py-16 border-t border-[#30363d]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Layers className="w-6 h-6 text-[#58a6ff]" />
                                Skills & Expertise
                            </h2>
                            <p className="text-slate-400 mb-8">Core competencies across AI, development, and product.</p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {Object.entries(skillsByCategory).map(([category, skills], index) => (
                                    <motion.div
                                        key={category}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-5 bg-[#161b22] border border-[#30363d] rounded-lg"
                                    >
                                        <div className="flex items-center gap-2 mb-4">
                                            {category.includes('AI') ? (
                                                <Cpu className="w-5 h-5 text-[#a5b4fc]" />
                                            ) : category.includes('Developer') ? (
                                                <Layers className="w-5 h-5 text-[#a5b4fc]" />
                                            ) : category.includes('LLM') ? (
                                                <Zap className="w-5 h-5 text-[#a5b4fc]" />
                                            ) : (
                                                <Shield className="w-5 h-5 text-[#a5b4fc]" />
                                            )}
                                            <h3 className="font-semibold text-white">{category}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-[#21262d] text-slate-300 rounded-full text-sm"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="py-16 border-t border-[#30363d]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Mail className="w-6 h-6 text-[#58a6ff]" />
                                Get In Touch
                            </h2>
                            <p className="text-slate-400 mb-6 max-w-2xl">
                                Actively building the VIBE Ecosystem and open to opportunities in AI Engineering,
                                Applied AI, Agent Systems, Developer Tools, SaaS Platforms, and Cloud AI roles.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <span className="px-4 py-2 bg-[#161b22] border border-[#30363d] rounded-lg text-sm">
                                    <span className="text-slate-500">Location:</span>{' '}
                                    <span className="text-white">India</span>
                                </span>
                                <span className="px-4 py-2 bg-[#161b22] border border-[#30363d] rounded-lg text-sm">
                                    <span className="text-slate-500">Available:</span>{' '}
                                    <span className="text-[#3fb950]">Remote & Hybrid</span>
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="mailto:mk.knight970@gmail.com"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#238636] hover:bg-[#2ea043] text-white rounded-lg font-semibold transition-all"
                                >
                                    <Mail className="w-5 h-5" />
                                    Email
                                </a>
                                <a
                                    href="https://github.com/mk-knight23"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#21262d] hover:bg-[#30363d] text-white rounded-lg font-semibold transition-all"
                                >
                                    <Github className="w-5 h-5" />
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kazi-musharraf-0674871a4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#21262d] hover:bg-[#30363d] text-white rounded-lg font-semibold transition-all"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    LinkedIn
                                </a>
                            </div>
                        </motion.div>
                    </section>

                    {/* Footer */}
                    <footer className="py-8 mt-16 border-t border-[#30363d]">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                            <p>&copy; 2025 MUSHARRAF KAZI. All rights reserved.</p>
                            <p>Part of a 60-project portfolio ecosystem</p>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
}

export default App;
