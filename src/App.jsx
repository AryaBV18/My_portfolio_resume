import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ChevronRight, 
  Terminal, 
  Cpu, 
  Code, 
  Send 
} from 'lucide-react';

// --- DATA FROM RESUME ---
const PORTFOLIO_DATA = {
  name: "Arya B V",
  role: "Electronics and Embedded Engineer",
  email: "aryabv0212@gmail.com",
  phone: "8050141198",
  linkedin: "https://linkedin.com/in/aryabv12",
  github: "https://github.com/AryaBV18",
  objective: "To obtain a challenging position in a reputed organization where I can utilize my technical and problem-solving skills in Electronics and Communication Engineering, while contributing to the company's growth and gaining practical industry experience.",
  skills: [
    { category: "Programming", items: ["C", "C++"] },
    { category: "Hardware Description", items: ["Verilog", "System Verilog"] },
    { category: "Tools & Software", items: ["MATLAB", "Simulink", "Vivado", "Cadence Virtuoso", "Keil µVision", "Arduino IDE"] },
    { category: "Core Concepts", items: ["Digital Logic Design", "Analog Electronics", "Signals & Systems", "VLSI Design", "Microcontrollers", "Control Systems"] }
  ],
  education: [
    {
      institution: "RV College of Engineering, Bengaluru",
      degree: "Bachelor of Engineering (B.E), Electronics and Communication",
      year: "2026",
      score: "CGPA: 6.97"
    },
    {
      institution: "Siddaganaga Polytechnic College, Tumkur",
      degree: "Diploma in Electrical and Electronics Engineering",
      year: "2023",
      score: "CGPA: 9.74"
    },
    {
      institution: "St. Moses English School, Tumkur",
      degree: "Class X",
      year: "2020",
      score: "79.36%"
    }
  ],
  projects: [
    {
      title: "Energy Enerlytics",
      subtitle: "Grid interactive solar PV system",
      description: "IoT-based smart solar energy management using ESP32. Dynamically controls battery charging and grid export using weather forecast data. Features anti-islanding protection and a web dashboard.",
      tags: ["ESP32", "IoT", "Solar", "Microgrid"]
    },
    {
      title: "Automated Bio-Sorting System",
      subtitle: "AI Object Detection & Robotic Manipulation",
      description: "AI-powered biomedical waste segregation using YOLO (90%+ accuracy). Integrated Jetson Nano, ESP32, and a 5-DOF robotic arm for autonomous pick-and-place sorting.",
      tags: ["Python", "YOLO", "Jetson Nano", "Robotics"]
    },
    {
      title: "Teach Safe Headgear",
      subtitle: "Smart Safety Helmet",
      description: "IoT-based smart helmet for mine workers using ESP32. Monitors gas, temperature, and motion. Features Wi-Fi remote tracking and real-time dashboard alerts for hazardous conditions.",
      tags: ["ESP32", "Sensors", "IoT", "Dashboard"]
    },
    {
      title: "BengaluruClean",
      subtitle: "Smart Waste Management Ecosystem",
      description: "React Native and Firebase app for waste pickup scheduling and real-time GPS tracking. Includes a camera-based Proof of Work system and a Green Points reward mechanism.",
      tags: ["React Native", "Firebase", "Google Maps"]
    },
    {
      title: "Vaidya Mithra",
      subtitle: "AI Powered Healthcare Assistant",
      description: "Full-stack healthcare platform using React, Firebase, and Gemini AI. Provides symptom triage, non-diagnostic guidance, and real-time appointment scheduling.",
      tags: ["React", "Firebase", "Gemini AI"]
    }
  ]
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Handle Scroll to update navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleDownloadCV = () => {
    // In a real Vercel deployment, you would put Arya_resume.pdf in the /public folder
    // and use an actual <a href="/Arya_resume.pdf" download> tag.
    const link = document.createElement('a');
    link.href = '/Arya_resume.pdf';
    link.download = 'Arya_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("CV Download triggered!");
  };

  return (
    <div className="bg-slate-900 text-slate-200 font-sans min-h-screen selection:bg-teal-500 selection:text-white">
      
      {/* --- TOAST NOTIFICATION --- */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 bg-teal-500 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 cursor-pointer" onClick={() => scrollTo('home')}>
            ABV.
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`hover:text-teal-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-teal-400' : 'text-slate-300'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 md:px-12 text-center z-10">
          <p className="text-teal-400 font-mono mb-4 tracking-wider">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            {PORTFOLIO_DATA.name}.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">
            I'm an {PORTFOLIO_DATA.role}.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed">
            Specializing in IoT, Embedded Systems, and AI integration. I build smart, hardware-driven solutions that bridge the gap between the physical and digital worlds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={handleDownloadCV} className="group relative px-8 py-3 bg-teal-500 text-slate-900 font-bold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
            <button onClick={() => scrollTo('contact')} className="px-8 py-3 bg-transparent border-2 border-teal-500 text-teal-400 font-bold rounded-lg transition-all hover:bg-teal-500/10 flex items-center gap-2">
              Contact Me
            </button>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <a href={PORTFOLIO_DATA.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all">
              <Github size={28} />
            </a>
            <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all">
              <Linkedin size={28} />
            </a>
            <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-slate-400 hover:text-white hover:-translate-y-1 transition-all">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <div className="h-px bg-slate-700 flex-grow"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 text-lg text-slate-300 leading-relaxed space-y-6">
              <p>
                Hello! I'm Arya, a passionate engineering student currently pursuing my B.E in Electronics and Communication at RV College of Engineering. 
              </p>
              <p>
                {PORTFOLIO_DATA.objective}
              </p>
              <p>
                Whether it's designing IoT-based smart helmets, automating waste sorting with robotic arms, or building full-stack platforms, I love tackling complex problems that require a mix of hardware and software expertise.
              </p>
            </div>
            <div className="relative group mx-auto md:mx-0 w-64 h-64 border-2 border-teal-500 rounded-lg translate-x-2 translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all duration-300">
              <div className="absolute inset-0 bg-slate-700 rounded-lg -translate-x-4 -translate-y-4 flex items-center justify-center overflow-hidden">
                <Terminal size={64} className="text-slate-500 opacity-50" />
                <span className="absolute bottom-4 text-xs text-slate-400">profile_photo.png</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
            <div className="h-px bg-slate-700 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.skills.map((skillGroup, index) => (
              <div key={index} className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-teal-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  {index % 2 === 0 ? <Code className="text-teal-400" /> : <Cpu className="text-blue-400" />}
                  <h3 className="text-xl font-semibold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="bg-slate-900 text-slate-300 text-sm px-4 py-2 rounded-full border border-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section id="education" className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Education</h2>
            <div className="h-px bg-slate-700 flex-grow"></div>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-600 before:to-transparent">
            {PORTFOLIO_DATA.education.map((edu, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-teal-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-teal-500/10 hover:border-teal-500/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="font-bold text-white text-lg">{edu.degree}</h3>
                    <span className="text-teal-400 font-mono text-sm shrink-0">{edu.year}</span>
                  </div>
                  <p className="text-slate-400 mb-3">{edu.institution}</p>
                  <p className="text-slate-300 font-medium bg-slate-900/50 inline-block px-3 py-1 rounded border border-slate-700">{edu.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
            <div className="h-px bg-slate-700 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <div key={index} className="group relative h-80 rounded-xl bg-slate-800 overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                
                {/* Default Card View */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 transition-opacity duration-300 group-hover:opacity-0">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-teal-400 text-sm font-medium">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-2 text-slate-400 items-center">
                    <ChevronRight size={20} className="animate-pulse" />
                    <span className="text-sm font-mono tracking-wider">Hover to explore</span>
                  </div>
                </div>

                {/* Hover Reveal Card View */}
                <div className="absolute inset-0 p-6 bg-gradient-to-br from-teal-900/90 to-slate-900/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-teal-300 mb-3">{project.title}</h3>
                    <p className="text-slate-200 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs font-mono px-2 py-1 bg-slate-900 text-teal-400 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-24 bg-slate-800/50">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-slate-400 mb-12 text-lg">
            My inbox is always open. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>

          <ContactForm />

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-slate-500 text-sm">
        <p>Built with React & Tailwind CSS.</p>
        <p className="mt-2">© {new Date().getFullYear()} Arya B V. All rights reserved.</p>
      </footer>
    </div>
  );
}

// --- CONTACT FORM COMPONENT ---
function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Using EmailJS REST API directly - no imports required!
    const payload = {
      service_id: 'service_jk4d4rm',
      template_id: 'template_ap2o6nh',
      user_id: 'EK-EAvNesrYv_MKI5',
      template_params: {
        name: formData.name,       
        email: formData.email,     
        message: formData.message, 
      }
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then((response) => {
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-900 p-8 rounded-xl border border-slate-700 shadow-2xl text-left">
      <div className="mb-6">
        <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">Name</label>
        <input 
          type="text" id="name" name="name" required
          value={formData.name} onChange={handleChange}
          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
          placeholder="John Doe"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">Email Address</label>
        <input 
          type="email" id="email" name="email" required
          value={formData.email} onChange={handleChange}
          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors"
          placeholder="john@example.com"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">Message</label>
        <textarea 
          id="message" name="message" required rows="5"
          value={formData.message} onChange={handleChange}
          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-colors resize-none"
          placeholder="Hello Arya, I'd like to talk about..."
        ></textarea>
      </div>

      <button 
        type="submit" disabled={status === 'submitting'}
        className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : (
          <>
            Send Message
            <Send size={18} />
          </>
        )}
      </button>

      {status === 'success' && (
        <div className="mt-6 p-4 bg-teal-500/20 border border-teal-500/50 rounded-lg text-teal-400 text-center text-sm">
          Message sent successfully! Acknowledgment email triggered. I'll get back to you soon.
        </div>
      )}
      
      {status === 'error' && (
        <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center text-sm">
          Oops! Something went wrong. Please try again later.
        </div>
      )}
    </form>
  );
}
