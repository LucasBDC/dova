export default function Home() {
  const whatsappNumber = "5592992599494"; // Using the user's number (with 55 country code)
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%21+Gostaria+de+falar+sobre+um+projeto.`;

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl font-bold">diamond</span>
              <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">Dova</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#services">Serviços</a>
              <a className="text-sm font-medium hover:text-primary transition-colors" href="#process">Processo</a>
              <a className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all" href={whatsappLink} target="_blank" rel="noopener noreferrer">Começar Projeto</a>
            </nav>
            <button className="md:hidden text-slate-900 dark:text-slate-100">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-8">
                <h1 className="text-slate-900 dark:text-slate-100 text-5xl lg:text-7xl font-black leading-tight tracking-tight">Construindo Soluções Digitais de <span className="text-primary">Alto Nível</span> para Visionários</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg lg:text-xl max-w-xl">Desenvolvimento de software profissional, confiável e inovador, sob medida para escalar seu negócio para o futuro.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a className="flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:scale-[1.02] transition-transform" href={whatsappLink} target="_blank" rel="noopener noreferrer">Solicitar Consultoria Gratuita</a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="Modern software interface" className="w-full h-full object-cover aspect-video lg:aspect-square" data-alt="Sleek dark themed dashboard interface with glowing blue accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1ISI84Ukvdrdfj21RTEBsXw8_CRHoLQVF6cuc2W_WVWiqN2hHe-ZJaSNjL2vmli4mWKIn9jYkwdFWDTIP48Uc2AKglkJ9JfBFzEzRXyxkT9EobZoxbLuTdxzNMTqY0g5woNJWMU1Hs7vjOjcdmkPrK536K0-pE-ufcPaDUdOlFoccT9j06RAoi1w7Q-Xhx0itoA3Iz2IUcZ412VN7luY_8qiw7v3PU0FjDl1EkfMyTX1tk5u8o62n3AJ78g20Ysirefxl_E9QWwk" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Nossa Especialidade</h2>
              <h3 className="text-slate-900 dark:text-white text-3xl lg:text-5xl font-black tracking-tight">Serviços de Software Sob Medida</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Custom Software */}
              <div className="group p-8 rounded-2xl bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 hover:border-primary transition-all shadow-sm hover:shadow-xl">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Software Customizado</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Soluções sob medida construídas do zero para resolver seus desafios de negócios únicos e otimizar operações.</p>
              </div>
              {/* Web Apps */}
              <div className="group p-8 rounded-2xl bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 hover:border-primary transition-all shadow-sm hover:shadow-xl">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">browser_updated</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Aplicações Web</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Plataformas web escaláveis e de alto desempenho usando frameworks modernos como React, Next.js e Node.</p>
              </div>
              {/* Mobile Apps */}
              <div className="group p-8 rounded-2xl bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 hover:border-primary transition-all shadow-sm hover:shadow-xl">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">phone_iphone</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Apps Mobile</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Experiências móveis nativas e multiplataforma para iOS e Android que os usuários realmente amam usar.</p>
              </div>
              {/* AI Solutions */}
              <div className="group p-8 rounded-2xl bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 hover:border-primary transition-all shadow-sm hover:shadow-xl">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Soluções de IA</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Integrando machine learning e automação para preparar seu negócio para o futuro e ganhar vantagem competitiva.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24" id="process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3 text-left">Como Trabalhamos</h2>
                <h3 className="text-slate-900 dark:text-white text-3xl lg:text-5xl font-black tracking-tight mb-8">Nosso Ciclo de Vida de Desenvolvimento Comprovado</h3>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                    <div>
                      <h5 className="text-lg font-bold mb-2">Descoberta e Estratégia</h5>
                      <p className="text-slate-600 dark:text-slate-400">Mergulhamos profundamente em seus requisitos, necessidades de mercado e restrições técnicas para construir um roteiro sólido.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                    <div>
                      <h5 className="text-lg font-bold mb-2">Design e Arquitetura</h5>
                      <p className="text-slate-600 dark:text-slate-400">Criando UX/UI intuitivo e estruturas de backend robustas, construídas para escalar e seguras desde o primeiro dia.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                    <div>
                      <h5 className="text-lg font-bold mb-2">Desenvolvimento Ágil</h5>
                      <p className="text-slate-600 dark:text-slate-400">Codificação baseada em sprints com integração contínua e atualizações semanais para manter o projeto no caminho certo.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
                    <div>
                      <h5 className="text-lg font-bold mb-2">Lançamento e Suporte</h5>
                      <p className="text-slate-600 dark:text-slate-400">QA rigoroso seguido de implantação e manutenção pós-lançamento 24 horas por dia, 7 dias por semana para garantir operações tranquilas.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Team collaboration" className="rounded-2xl w-full h-64 object-cover mt-8" data-alt="Professional team in a modern office collaborating around a whiteboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz5EM3eVioeg9-A0VQb0wBQFn1mgd1xE7BltvV0RBTI4qpr760aNCtsNaZuYo5DhPiDxw-ZssCER5mAF9ne4Y4adusmEAIdKGTpRlpmM8r5DL8BSGSyiPQd82wh6QErKzfQoiaSJhDwvypSrAEZcrrS0upVl-qn4nrrw1samSst-bIOIUZbbAZ8Zz2nnryHnXd0mYFfy0bjRWXb4rKpe4UQ5Hzns4aeVacVbpcapmybIESGTUXglEGTz2vxsCoCPBbQLfFOO5wpYs" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Digital strategy" className="rounded-2xl w-full h-64 object-cover" data-alt="Group of developers looking at code on a laptop screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC11W2GNlLQL5qKEi9WFRJvUsbQiCGtF0PbFNEPGgxQDj0AgPAX4XbQ5bHVhM46uONwJqm3XkYbXX0Y46ynjWG2zosmN0ApULnvGefh--YA8ehSGiqJn0KhTz6WiQBv9vo8Drc6fqivHlGokM2RIxww7M13PdjWc5cKtp0TnIM1i-n2f97i2bhSFGlkmwjsXWnmIr8HBxr6jiRyQFWCt6EyMennOGjhocnPkvvvtx5UXHRVqQfzBvIW_vVVIhcgS-woDI4qnbvexmg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Modern office" className="rounded-2xl w-full h-64 object-cover" data-alt="Modern workspace with tech gadgets and minimalist design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzuNsRGkoCAOeyUCtixNQJDNU10iBOV_0D9rox8TIAm-e4dlxQOoGH3Czgzx_NfpRpJKlXkD5nLL2Y8x6Mi05G-2TtJtcg3ro9FTMXPNg7ILAKMgBW4FoCz3Lpn4rmWSkLZcpBEELpg2GlhOcMvCBaPgVJ8iu9jpv5zG1R-dWXMZrlXPHkHLmJyEW6WLPo2vNiy1SKb_OCKS7ZnKTds6UPIfjhNm8C57bxC_dUYInAapuFmHuNDFDSeE0k5-ub74XXGBAlj6G2Hxg" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="App development" className="rounded-2xl w-full h-64 object-cover mt-[-2rem]" data-alt="Close up of a tablet showing wireframe designs for an app" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo9b43sFlItDMfJjhFeqlun8rtRafssnSbsFJtxvPWvowlaI8Ikq1P7Ea-uc7xlHAJcpvHFZ3_FOcyYQrZ5YjuH60L6pVXGRh_6ZEqbEQHB4_3qKaaMp8jcAzHvO7ZNzwJGM1hesHoafN310SstmHMaMahEwgMmMEKWtBfN-6uk9u0HlpHy-7GEM_OeO3Pi-do8ncMIq6ZjVeGBh7AJy077EUsEJ8VYPSAue3mkRU-QWFfb31MmkS9inHJScQ4LMVEVb2EKc8-kaE" />
              </div>
            </div>
          </div>
        </section>



        {/* Contact Section */}
        <section className="py-24 bg-slate-900 text-white" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Entre em Contato</h2>
                <h3 className="text-4xl lg:text-5xl font-black tracking-tight mb-8">Pronto para Construir o Futuro?</h3>
                <p className="text-slate-400 text-lg mb-12">Entre em contato conosco hoje para uma consultoria técnica gratuita. Ajudaremos você a definir sua estratégia e construir uma solução duradoura.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">mail</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Envie-nos um e-mail</p>
                      <p className="font-bold">contato.vuly@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Sede</p>
                      <p className="font-bold">Manaus, AM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-background-dark p-8 lg:p-12 rounded-2xl shadow-2xl text-slate-900 dark:text-slate-100">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">Nome Completo</label>
                      <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="João Silva" type="text" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">E-mail Corporativo</label>
                      <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@company.com" type="email" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Tipo de Projeto</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary outline-none transition-all">
                      <option>Software Customizado</option>
                      <option>App Mobile</option>
                      <option>Plataforma Web</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Mensagem</label>
                    <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Conte-nos sobre seu projeto..." rows={4}></textarea>
                  </div>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block text-center w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">Enviar Mensagem pelo WhatsApp</a>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-light dark:bg-background-dark py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl font-bold">diamond</span>
              <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">Dova</h2>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <a className="hover:text-primary transition-colors" href="#">Política de Privacidade</a>
              <a className="hover:text-primary transition-colors" href="#">Termos de Serviço</a>
              <a className="hover:text-primary transition-colors" href="#">Política de Cookies</a>
            </div>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-sm">groups</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-sm">terminal</span>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">© 2026 Dova Software Solutions. Todos os direitos reservados. Construído para visionários.</div>
        </div>
      </footer>
    </>
  );
}
