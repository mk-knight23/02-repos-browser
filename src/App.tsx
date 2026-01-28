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
    Phone,
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
    Command,
    CircuitBoard
} from 'lucide-react';

// VIBE Ecosystem Products
const vibeProducts = [
    {
        name: 'VIBE CLI',
        tagline: 'Multi-agent AI coding tool',
        description: 'Single-command TUI, multi-LLM router, execution modes, security-first approvals.',
        icon: Terminal,
        status: 'IN DEV'
    },
    {
        name: 'VIBE VS Code',
        tagline: 'Multi-agent IDE assistant',
        description: 'CLI parity, state-machine orchestration, real-time streaming chat.',
        icon: Code2,
        status: 'PLANNED'
    },
    {
        name: 'VIBE Web',
        tagline: 'Documentation hub',
        description: 'Documentation and onboarding hub for the entire ecosystem.',
        icon: Globe,
        status: 'ONLINE'
    },
    {
        name: 'VIBE Chat',
        tagline: 'AI website builder',
        description: 'AI web app & website builder powered by generative agents.',
        icon: MessageSquare,
        status: 'PLANNED'
    }
];

// Selected Projects
const selectedProjects = [
    { name: 'VIBE Ecosystem', category: 'SYSTEM', tech: 'NEURAL, REACT, NODE', description: 'End-to-end AI developer platform with multi-agent orchestration' },
    { name: 'Ecommerce Platform', category: 'WEB', tech: 'NEXT.JS, SUPABASE', description: 'Full-stack store with auth, payments, and real-time DB' },
    { name: 'React Digital Hub', category: 'WEB', tech: 'REACT, API', description: 'Comprehensive dashboard with complex backend integration' },
    { name: 'Country Explorer', category: 'DATA', tech: 'REACT', description: 'Data-driven exploration dashboard' }
];

const skillsByCategory = {
    'CORE_SYSTEMS': ['React', 'TypeScript', 'Node.js', 'Next.js', 'Java Spring'],
    'DATA_LAYER': ['REST APIs', 'PostgreSQL', 'MongoDB', 'Supabase', 'Prisma'],
    'INTERFACE': ['Tailwind CSS', 'Framer Motion', 'CSS Grid', 'Responsive'],
    'DEPLOYMENT': ['Docker', 'CI/CD', 'Git', 'Cloud Infra', 'Vercel']
};

// Navigation items
const navItems = [
    { id: 'hero', label: 'TERMINAL', icon: Terminal },
    { id: 'about', label: 'IDENTITY', icon: User },
    { id: 'vibe', label: 'SYSTEMS', icon: CircuitBoard },
    { id: 'work', label: 'MODULES', icon: Code2 },
    { id: 'skills', label: 'CAPABILITIES', icon: Cpu },
    { id: 'resume', label: 'DATA_LOG', icon: FolderGit2 },
    { id: 'contact', label: 'SIGNAL', icon: Mail }
];

type Project = typeof selectedProjects[0];

function App() {
    const [activeSection, setActiveSection] = useState('hero');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [search, setSearch] = useState('');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) setSidebarOpen(false);
    }, [isMobile]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'vibe', 'work', 'skills', 'resume', 'contact'];
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
        <div className="min-h-screen bg-[#030712] text-cyan-400 font-mono flex relative overflow-hidden">
            {/* Grid Background */}
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
            </div>

            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{ width: sidebarOpen ? 280 : 0 }}
                className="fixed left-0 top-0 h-full bg-[#0a0f1a]/95 backdrop-blur-xl border-r border-cyan-500/20 z-40 overflow-hidden"
            >
                <div className="w-[280px] h-full flex flex-col">
                    {/* Logo */}
                    <div className="p-5 border-b border-cyan-500/20">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-400/30 rounded-lg flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-cyan-400/10 animate-pulse"></div>
                                <CircuitBoard className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h1 className="font-bold text-cyan-400 tracking-wider">MK_SYS</h1>
                                <p className="text-xs text-cyan-600">v.3.0.1</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4 overflow-y-auto">
                        <div className="space-y-1">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded text-xs tracking-wider transition-all ${
                                        activeSection === item.id
                                            ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                                            : 'hover:bg-cyan-950/30 text-cyan-700 hover:text-cyan-500 border border-transparent'
                                    }`}
                                >
                                    <item.icon className="w-4 h-4" />
                                    <span className="font-bold">{item.label}</span>
                                    {activeSection === item.id && (
                                        <ChevronRight className="w-4 h-4 ml-auto text-cyan-400" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Quick Links */}
                        <div className="mt-8">
                            <p className="px-3 text-[10px] font-bold text-cyan-700 uppercase tracking-widest mb-3">
                                // EXTERNAL LINKS
                            </p>
                            <div className="space-y-1">
                                <a
                                    href="https://github.com/mk-knight23"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-xs hover:bg-cyan-950/30 text-cyan-700 hover:text-cyan-500 transition-all border border-transparent"
                                >
                                    <Github className="w-4 h-4" />
                                    <span className="font-bold">GITHUB_REPOSITORY</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kazi-musharraf-0674871a4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-xs hover:bg-cyan-950/30 text-cyan-700 hover:text-cyan-500 transition-all border border-transparent"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span className="font-bold">LINKEDIN_PROFILE</span>
                                </a>
                            </div>
                        </div>
                    </nav>

                    {/* User Info */}
                    <div className="p-4 border-t border-cyan-500/20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-400/30 rounded flex items-center justify-center">
                                <User className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-cyan-400 truncate">KAZI MUSHARRAF</p>
                                <p className="text-[10px] text-cyan-700 truncate">FULL STACK DEVELOPER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.aside>

            {/* Toggle Button */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="fixed left-4 top-4 z-50 p-2.5 bg-[#0a0f1a]/90 border border-cyan-500/30 rounded hover:border-cyan-400 transition-colors md:left-auto md:right-4"
                aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
            >
                {sidebarOpen ? <X className="w-4 h-4 text-cyan-400" /> : <Menu className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Mobile overlay */}
            {isMobile && sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main
                className={`flex-1 transition-all duration-300 ${!isMobile && sidebarOpen ? 'ml-[280px]' : 'ml-0'}`}
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
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-px bg-cyan-500/30 flex-1"></div>
                                    <span className="text-[10px] font-bold text-cyan-600 tracking-[0.3em] uppercase">
                                        System Online
                                    </span>
                                    <div className="h-px bg-cyan-500/30 flex-1"></div>
                                </div>

                                <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-4 tracking-tight" style={{ textShadow: '0 0 40px rgba(6,182,212,0.3)' }}>
                                    KAZI{' '}
                                    <span className="text-cyan-800">MUSHARRAF</span>
                                </h1>

                                <p className="text-sm text-cyan-600 max-w-2xl leading-relaxed mb-8">
                                    <span className="text-cyan-500">&gt;</span> FULL_STACK_DEVELOPER specializing in{' '}
                                    <span className="text-cyan-400 font-bold">END-TO-END APPLICATIONS</span> at Wipro.
                                    Focused on scalable architecture, REST APIs, and production-grade deployment.
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
                                    className="px-6 py-3 bg-cyan-500/10 border border-cyan-400/50 text-cyan-400 rounded font-bold text-xs tracking-wider transition-all hover:bg-cyan-500/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center gap-2"
                                >
                                    <Terminal className="w-4 h-4" />
                                    EXPLORE_SYSTEMS
                                </button>
                                <button
                                    onClick={() => scrollTo('work')}
                                    className="px-6 py-3 bg-transparent border border-cyan-700 text-cyan-600 rounded font-bold text-xs tracking-wider transition-all hover:border-cyan-400 hover:text-cyan-400"
                                >
                                    VIEW_MODULES
                                </button>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="grid grid-cols-3 gap-4"
                            >
                                <div className="p-5 bg-[#0a0f1a]/50 border border-cyan-500/20 rounded-lg relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>
                                    <div className="relative">
                                        <div className="text-4xl font-bold text-cyan-400 font-mono">60+</div>
                                        <div className="text-[10px] text-cyan-700 tracking-wider mt-1">MODULES_DEPLOYED</div>
                                    </div>
                                </div>
                                <div className="p-5 bg-[#0a0f1a]/50 border border-cyan-500/20 rounded-lg relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>
                                    <div className="relative">
                                        <div className="text-4xl font-bold text-cyan-400 font-mono">04</div>
                                        <div className="text-[10px] text-cyan-700 tracking-wider mt-1">ACTIVE_SYSTEMS</div>
                                    </div>
                                </div>
                                <div className="p-5 bg-[#0a0f1a]/50 border border-cyan-500/20 rounded-lg relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>
                                    <div className="relative">
                                        <div className="text-4xl font-bold text-cyan-300 font-mono">AI</div>
                                        <div className="text-[10px] text-cyan-700 tracking-wider mt-1">CORE_FOCUS</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section id="about" className="py-16 border-t border-cyan-500/10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FolderGit2 className="w-5 h-5 text-cyan-400" />
                                <h2 className="text-xl font-bold text-cyan-400 tracking-wider">// IDENTITY_LOG</h2>
                            </div>

                            <div className="p-6 bg-[#0a0f1a]/30 border border-cyan-500/10 rounded-lg">
                                <p className="text-cyan-600 leading-relaxed mb-4 text-sm">
                                    <span className="text-cyan-400">&gt;</span> FULL_STACK_ENGINEER and System Architect specializing in{' '}
                                    <span className="text-cyan-400 font-bold">END-TO-END_DEPLOYMENT</span>.
                                </p>
                                <p className="text-cyan-600 leading-relaxed mb-4 text-sm">
                                    <span className="text-cyan-400">&gt;</span> Currently <span className="text-cyan-400">PROJECT_ENGINEER (TURBO)</span> at Wipro — architecting robust full-stack applications using React, TypeScript, and Java. Track record: 80+ successful deployments.
                                </p>
                                <p className="text-cyan-600 leading-relaxed text-sm">
                                    <span className="text-cyan-400">&gt;</span> Expertise in <span className="text-cyan-400">REACT_BACKEND_BRIDGE</span>, <span className="text-cyan-400">API_ARCHITECTURE</span>, and <span className="text-cyan-400">PRODUCT_OWNERSHIP</span>. Bridging technical complexity with intuitive interfaces.
                                </p>
                            </div>
                        </motion.div>
                    </section>

                    {/* VIBE Ecosystem Section */}
                    <section id="vibe" className="py-16 border-t border-cyan-500/10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 rounded text-[10px] font-bold tracking-wider">
                                    FLAGSHIP_SYSTEM
                                </span>
                                <CircuitBoard className="w-5 h-5 text-cyan-400" />
                                <h2 className="text-xl font-bold text-cyan-400 tracking-wider">// VIBE_ECOSYSTEM</h2>
                            </div>
                            <p className="text-cyan-600 mb-8 text-sm">
                                <span className="text-cyan-400">&gt;</span> Founder & AI Engineer — Multi-product AI developer platform
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {vibeProducts.map((product, index) => (
                                    <motion.div
                                        key={product.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.02 }}
                                        className="p-5 bg-[#0a0f1a]/30 border border-cyan-500/20 rounded-lg hover:border-cyan-400/40 transition-all group relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="relative">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-cyan-950/50 border border-cyan-500/20 rounded group-hover:border-cyan-400/40 transition-colors">
                                                    <product.icon className="w-5 h-5 text-cyan-400" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h3 className="font-bold text-cyan-400 text-sm">{product.name}</h3>
                                                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold tracking-wider ${
                                                            product.status === 'ONLINE'
                                                                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
                                                                : product.status === 'IN DEV'
                                                                ? 'bg-amber-500/20 text-amber-400 border border-amber-400/30'
                                                                : 'bg-slate-800 text-slate-500 border border-slate-700'
                                                        }`}>
                                                            {product.status}
                                                        </span>
                                                    </div>
                                                    <p className="text-cyan-500 text-xs mb-2 font-bold">{product.tagline}</p>
                                                    <p className="text-cyan-700 text-xs">{product.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Technical Highlights */}
                            <div className="p-6 bg-[#0a0f1a]/50 border border-cyan-500/10 rounded-lg">
                                <h3 className="font-bold text-cyan-400 mb-4 flex items-center gap-2 text-sm">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>// SYSTEM_SPECIFICATIONS</span>
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        'H-RAG + Decision Agents + Orchestrator',
                                        'Multi-provider LLM routing with fallback',
                                        '55-feature roadmap, 4-tier prompt strategy',
                                        'Competitive analysis across 60 tools',
                                        'Monorepo with ecosystem boundaries',
                                        'Security-first architecture'
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2 text-xs text-cyan-600">
                                            <span className="text-cyan-400 mt-0.5">→</span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* Work Section */}
                    <section id="work" className="py-16 border-t border-cyan-500/10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Code2 className="w-5 h-5 text-cyan-400" />
                                <h2 className="text-xl font-bold text-cyan-400 tracking-wider">// PROJECT_MODULES</h2>
                            </div>
                            <p className="text-cyan-600 mb-8 text-sm">
                                <span className="text-cyan-400">&gt;</span> Recent deployments across web, systems, and interfaces.
                            </p>

                            {/* Search */}
                            <div className="relative mb-4">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-700" />
                                <input
                                    type="text"
                                    placeholder="SEARCH_MODULES..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-[#0a0f1a]/50 border border-cyan-500/20 rounded text-cyan-400 placeholder-cyan-800 focus:outline-none focus:border-cyan-400/50 text-xs font-mono"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-cyan-700 font-mono">
                                    {filteredProjects.length}/{selectedProjects.length}
                                </div>
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
                                            className="p-5 bg-[#0a0f1a]/30 border border-cyan-500/20 rounded-lg hover:border-cyan-400/40 transition-all cursor-pointer group relative overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <div className="relative">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 rounded text-[10px] font-bold tracking-wider">
                                                        {project.category}
                                                    </span>
                                                    <span className="px-2 py-1 bg-cyan-950/50 text-cyan-700 rounded text-[10px]">
                                                        {project.tech}
                                                    </span>
                                                </div>
                                                <h3 className="font-bold text-cyan-400 mb-1 text-sm group-hover:text-cyan-300 transition-colors">
                                                    {project.name}
                                                </h3>
                                                <p className="text-xs text-cyan-700">{project.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>

                            <a
                                href="https://github.com/mk-knight23?tab=repositories"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-bold"
                            >
                                <span>[</span>
                                ACCESS_ALL_60_MODULES
                                <ExternalLink className="w-4 h-4" />
                                <span>]</span>
                            </a>
                            <p className="text-[10px] text-cyan-800 mt-3">
                                <span className="text-cyan-900">//</span> 4 modules shown · 56+ in repository
                            </p>
                        </motion.div>
                    </section>

                    {/* Skills Section */}
                    <section id="skills" className="py-16 border-t border-cyan-500/10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Cpu className="w-5 h-5 text-cyan-400" />
                                <h2 className="text-xl font-bold text-cyan-400 tracking-wider">// CAPABILITIES</h2>
                            </div>
                            <p className="text-cyan-600 mb-8 text-sm">
                                <span className="text-cyan-400">&gt;</span> Core competencies across all system layers.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {Object.entries(skillsByCategory).map(([category, skills], index) => (
                                    <motion.div
                                        key={category}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="p-5 bg-[#0a0f1a]/30 border border-cyan-500/20 rounded-lg"
                                    >
                                        <div className="flex items-center gap-2 mb-4">
                                            {category.includes('CORE') ? (
                                                <Cpu className="w-4 h-4 text-cyan-400" />
                                            ) : category.includes('DATA') ? (
                                                <Layers className="w-4 h-4 text-cyan-400" />
                                            ) : category.includes('INTERFACE') ? (
                                                <Zap className="w-4 h-4 text-cyan-400" />
                                            ) : (
                                                <Shield className="w-4 h-4 text-cyan-400" />
                                            )}
                                            <h3 className="font-bold text-cyan-400 text-xs tracking-wider">{category}</h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-cyan-950/50 border border-cyan-500/10 text-cyan-500 rounded text-xs"
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

                    {/* Resume Section */}
                    <section id="resume" className="py-16 border-t border-cyan-500/10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <FolderGit2 className="w-5 h-5 text-cyan-400" />
                                <h2 className="text-xl font-bold text-cyan-400 tracking-wider">// DATA_LOG</h2>
                            </div>
                            <p className="text-cyan-600 mb-8 text-sm">
                                <span className="text-cyan-400">&gt;</span> Full Stack Developer — Professional profile
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Main Resume Content */}
                                <div className="md:col-span-2 space-y-6">
                                    {/* Experience */}
                                    <div className="p-5 bg-[#0a0f1a]/30 border border-cyan-500/20 rounded-lg">
                                        <h3 className="font-bold text-cyan-400 mb-4 text-sm flex items-center gap-2">
                                            <Command className="w-4 h-4" />
                                            EXPERIENCE_DATA
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="border-l border-cyan-500/20 pl-4">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h4 className="text-cyan-300 font-bold text-sm">Project Engineer (TURBO)</h4>
                                                    <span className="text-[10px] text-cyan-700 font-mono">Jul 2022 – PRESENT</span>
                                                </div>
                                                <p className="text-cyan-600 text-xs mb-2">WIPRO_SYSTEMS</p>
                                                <p className="text-cyan-700 text-xs leading-relaxed">
                                                    Building full-stack applications with React, TypeScript, and Java. Architecting
                                                    REST APIs, database schemas, and frontend systems. 80+ successful deployments
                                                    across web, mobile, and enterprise platforms.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Education */}
                                    <div className="p-5 bg-[#0a0f1a]/30 border border-cyan-500/20 rounded-lg">
                                        <h3 className="font-bold text-cyan-400 mb-4 text-sm">EDUCATION_DATA</h3>
                                        <div className="border-l border-cyan-500/20 pl-4">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="text-cyan-300 font-bold text-sm">B.Tech Computer Science & Engineering</h4>
                                                <span className="text-[10px] text-cyan-700 font-mono">2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="space-y-6">
                                    {/* Tech Stack */}
                                    <div className="p-5 bg-[#0a0f1a]/30 border border-cyan-500/20 rounded-lg">
                                        <h3 className="font-bold text-cyan-400 mb-4 text-sm">TECH_STACK</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {['React', 'TypeScript', 'Node.js', 'Next.js', 'Java', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Docker', 'Vercel'].map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 bg-cyan-950/50 border border-cyan-500/10 text-cyan-500 rounded text-[10px] font-mono"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Connect */}
                                    <div className="p-5 bg-[#0a0f1a]/30 border border-cyan-500/20 rounded-lg">
                                        <h3 className="font-bold text-cyan-400 mb-4 text-sm">UPLINKS</h3>
                                        <div className="space-y-2">
                                            <a
                                                href="https://github.com/mk-knight23"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-cyan-600 hover:text-cyan-400 transition-colors text-xs"
                                            >
                                                <Github className="w-3 h-3" />
                                                github.com/mk-knight23
                                            </a>
                                            <a
                                                href="https://www.linkedin.com/in/kazi-musharraf-0674871a4"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-cyan-600 hover:text-cyan-400 transition-colors text-xs"
                                            >
                                                <Linkedin className="w-3 h-3" />
                                                linkedin.com/in/kazi-musharraf
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* What I'll Build Section */}
                    <section id="what-ill-build" className="py-16 border-t border-cyan-500/10 bg-[#0a0f1a]/30">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 rounded text-[10px] font-bold tracking-wider">
                                    IF_YOU_HIRE_ME
                                </span>
                            </div>
                            <h2 className="text-xl font-bold text-cyan-400 tracking-wider mb-2">// DEPLOYMENT_PLAN</h2>
                            <p className="text-cyan-600 mb-8 text-sm">
                                <span className="text-cyan-400">&gt;</span> First 3–6 months as your Full Stack Developer
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-5 bg-[#0a0f1a]/50 border border-cyan-500/20 rounded-lg">
                                    <div className="text-[10px] text-cyan-700 font-mono mb-2">// MODULE_01</div>
                                    <h3 className="text-cyan-300 font-bold text-sm mb-2">Full-Stack Assessment</h3>
                                    <p className="text-cyan-700 text-xs leading-relaxed">
                                        Audit your existing frontend and backend systems. Identify bottlenecks,
                                        tech debt, and opportunities for improvement. Create a prioritized
                                        roadmap aligned with business goals.
                                    </p>
                                </div>

                                <div className="p-5 bg-[#0a0f1a]/50 border border-cyan-500/20 rounded-lg">
                                    <div className="text-[10px] text-cyan-700 font-mono mb-2">// MODULE_02</div>
                                    <h3 className="text-cyan-300 font-bold text-sm mb-2">API & Database Architecture</h3>
                                    <p className="text-cyan-700 text-xs leading-relaxed">
                                        Design and implement RESTful APIs with proper error handling,
                                        authentication, and documentation. Optimize database queries
                                        and schema for scalability.
                                    </p>
                                </div>

                                <div className="p-5 bg-[#0a0f1a]/50 border border-cyan-500/20 rounded-lg">
                                    <div className="text-[10px] text-cyan-700 font-mono mb-2">// MODULE_03</div>
                                    <h3 className="text-cyan-300 font-bold text-sm mb-2">Frontend Systems</h3>
                                    <p className="text-cyan-700 text-xs leading-relaxed">
                                        Build responsive, accessible UIs with React and TypeScript.
                                        Implement state management, form handling, and data fetching
                                        with proper loading and error states.
                                    </p>
                                </div>

                                <div className="p-5 bg-[#0a0f1a]/50 border border-cyan-500/20 rounded-lg">
                                    <div className="text-[10px] text-cyan-700 font-mono mb-2">// MODULE_04</div>
                                    <h3 className="text-cyan-300 font-bold text-sm mb-2">Deployment Pipeline</h3>
                                    <p className="text-cyan-700 text-xs leading-relaxed">
                                        Set up CI/CD pipelines, container orchestration, and
                                        monitoring. Ensure smooth deployments with zero downtime
                                        and quick rollback capabilities.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="py-16 border-t border-cyan-500/10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Mail className="w-5 h-5 text-cyan-400" />
                                <h2 className="text-xl font-bold text-cyan-400 tracking-wider">// ESTABLISH_UPLINK</h2>
                            </div>
                            <p className="text-cyan-600 mb-6 max-w-2xl text-sm">
                                <span className="text-cyan-400">&gt;</span> Actively developing VIBE Ecosystem. Open to collaborations in Full Stack Development, Web Applications, API Development, and Cloud Architecture.
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <span className="px-4 py-2 bg-[#0a0f1a]/30 border border-cyan-500/20 rounded text-xs">
                                    <span className="text-cyan-700">LOCATION:</span>{' '}
                                    <span className="text-cyan-400">HYDERABAD_INDIA</span>
                                </span>
                                <span className="px-4 py-2 bg-[#0a0f1a]/30 border border-cyan-500/20 rounded text-xs">
                                    <span className="text-cyan-700">STATUS:</span>{' '}
                                    <span className="text-cyan-400">REMOTE_ENABLED</span>
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="mailto:mk.knight970@gmail.com"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-400/50 text-cyan-400 rounded font-bold text-xs tracking-wider transition-all hover:bg-cyan-500/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                                >
                                    <Mail className="w-4 h-4" />
                                    TRANSMIT_EMAIL
                                </a>
                                <a
                                    href="tel:+919765490536"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-cyan-700 text-cyan-600 rounded font-bold text-xs tracking-wider transition-all hover:border-cyan-400 hover:text-cyan-400"
                                >
                                    <Phone className="w-4 h-4" />
                                    CALL_SIGNAL
                                </a>
                                <a
                                    href="https://github.com/mk-knight23"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-cyan-700 text-cyan-600 rounded font-bold text-xs tracking-wider transition-all hover:border-cyan-400 hover:text-cyan-400"
                                >
                                    <Github className="w-4 h-4" />
                                    GITHUB_REPOSITORY
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kazi-musharraf-0674871a4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-cyan-700 text-cyan-600 rounded font-bold text-xs tracking-wider transition-all hover:border-cyan-400 hover:text-cyan-400"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    LINKEDIN_PROFILE
                                </a>
                            </div>
                        </motion.div>
                    </section>

                    {/* Footer */}
                    <footer className="py-8 mt-16 border-t border-cyan-500/10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cyan-800">
                            <p>&copy; 2025 KAZI MUSHARRAF // FULL_STACK_DEVELOPER</p>
                            <p>HYDERABAD_INDIA</p>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
}

export default App;
