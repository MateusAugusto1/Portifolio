/* Personal portfolio - no build tools or external JS dependencies. */
const translations = {
  pt: {
    skip: 'Ir para o conteúdo', navProjects: 'Projetos', navAbout: 'Sobre', navSkills: 'Habilidades', navExperience: 'Experiência', navContact: 'Contato <span aria-hidden="true">↗</span>',
    availability: 'Aberto a oportunidades remotas e internacionais', hello: 'OLÁ, EU SOU', role: 'Software Developer <span class="and">&</span> Game Developer',
    heroDescription: 'Desenvolvo experiências digitais e jogos independentes. Combino React, TypeScript e React Native com projetos em Unity e C#, sempre com foco em interfaces intuitivas, código organizado e evolução constante.',
    seeProjects: 'Explorar projetos', talk: 'Vamos conversar', heroLocation: 'Baseado no Brasil <span aria-hidden="true">·</span> Disponível para atuação remota',
    projectsLabel: 'PORTFÓLIO', projectsHeading: 'Projetos <span>selecionados.</span>', projectsDescription: 'Uma seleção de repositórios públicos verificados e projetos independentes em desenvolvimento.',
    filterAll: 'Todos <span>05</span>', filterWeb: 'Web', filterMobile: 'Mobile', filterGames: 'Jogos', illustrative: 'Visualização ilustrativa', typePublic: 'REPOSITÓRIO PÚBLICO', typeDev: 'EM DESENVOLVIMENTO',
    fleetDescription: 'Dashboard de rastreamento operacional com mapa interativo, histórico de rotas, estados das unidades e indicadores dinâmicos. Dados simulados em JSON.',
    source: 'Ver código no GitHub', transitTitle: 'Aplicativo de transporte', transitDescription: 'Protótipo mobile com navegação entre telas de linhas e veículos, desenvolvido com React Native e Expo.',
    ruinsDescription: 'Tower defense 2D independente com evolução de torres, inimigos, chefes e sistemas de progressão para PC.',
    aquaDescription: 'Simulador estilizado de loja de aquários, com cuidados dos peixes, manutenção, customização e gestão.',
    privateProject: 'Código não publicado', loginTitle: 'Interface de cadastro', loginDescription: 'Exercício de interface front-end com formulário, campos de entrada e estilização em HTML e CSS. Não inclui autenticação de backend.',
    projectNote: 'As miniaturas são ilustrações criadas para este portfólio, não capturas reais dos aplicativos. Os projetos no GitHub podem ser consultados nos links indicados.',
    allGithub: 'Explorar meu GitHub completo', aboutLabel: 'QUEM SOU', aboutHeading: 'Curiosidade que vira <span>código.</span>',
    aboutLead: 'Sou formado em Análise e Desenvolvimento de Sistemas pela UniCesumar e desenvolvo projetos pessoais nas áreas de software e jogos.',
    aboutP1: 'Trabalho com interfaces web e aplicações mobile em React, TypeScript e JavaScript. Paralelamente, crio protótipos e sistemas de gameplay em Unity e C# sob a identidade independente Veltrix Studios.',
    aboutP2: 'Minha trajetória anterior em operações e logística fortaleceu habilidades de organização, atenção a detalhes, uso de sistemas e colaboração entre equipes. Agora direciono esse repertório ao desenvolvimento de software.',
    degreeLabel: 'FORMAÇÃO', degreeValue: 'Análise e Desenvolvimento de Sistemas', locationLabel: 'LOCALIZAÇÃO', locationValue: 'Brasil', relocation: 'Aberto a oportunidades internacionais',
    skillsLabel: 'FERRAMENTAS', skillsHeading: 'Tecnologias <span>que utilizo.</span>', skillsDescription: 'Ferramentas utilizadas em projetos independentes, estudos e experiências anteriores.',
    skillFrontend: 'Desenvolvimento web', skillFrontendDesc: 'Interfaces, componentes e aplicações web.', skillMobile: 'Aplicações mobile', skillMobileDesc: 'Prototipação, navegação e experiência mobile.',
    skillGames: 'Desenvolvimento de jogos', skillGamesDesc: 'Gameplay, interfaces e sistemas independentes.', skillOther: 'Dados e ferramentas', skillOtherDesc: 'Bancos de dados, visualização e sistemas operacionais.',
    experienceLabel: 'TRAJETÓRIA', experienceHeading: 'Experiência & <span>formação.</span>', experienceDescription: 'Experiência operacional consolidada e evolução técnica através de projetos independentes.',
    roleMelitta: 'Assistente de Logística', melittaDesc: 'Conferência de notas fiscais e mercadorias, registros em SAP e comunicação entre departamentos.',
    roleCeva: 'Conferente de Armazém', cevaDesc: 'Controle de estoque, verificação de documentos e apoio aos processos de qualidade.',
    roleCooper: 'Operador de Produção', cooperDesc: 'Operação de equipamentos industriais, identificação de falhas e cumprimento de procedimentos técnicos.',
    educationTitle: 'Tecnólogo em Análise e Desenvolvimento de Sistemas', educationDesc: 'Graduação concluída. Base em programação, sistemas e desenvolvimento de software.',
    contactLabel: 'VAMOS CONVERSAR', contactHeading: 'Tem um projeto em mente?<br><span>Vamos construir algo.</span>',
    contactDescription: 'Estou aberto a conversar sobre oportunidades em desenvolvimento web, mobile, software e jogos — especialmente equipes que valorizam aprendizagem e colaboração.',
    contactButton: 'Enviar um e-mail', copyEmail: 'Copiar e-mail', backTop: 'Voltar ao topo ↑', emailCopied: 'E-mail copiado para a área de transferência.', copyFailed: 'Não foi possível copiar. Use o link de e-mail.',
    menuOpen: 'Abrir menu', menuClose: 'Fechar menu', themeLight: 'Ativar tema claro', themeDark: 'Ativar tema escuro', filterLabel: 'Filtrar projetos', navLabel: 'Navegação principal'
  },
  en: {
    skip: 'Skip to content', navProjects: 'Projects', navAbout: 'About', navSkills: 'Skills', navExperience: 'Experience', navContact: 'Contact <span aria-hidden="true">↗</span>',
    availability: 'Open to remote and international opportunities', hello: 'HI, I AM', role: 'Software Developer <span class="and">&</span> Game Developer',
    heroDescription: 'I build digital experiences and independent games. My work brings together React, TypeScript and React Native with Unity and C# projects, with a focus on intuitive interfaces, organized code and continuous growth.',
    seeProjects: 'Explore projects', talk: 'Get in touch', heroLocation: 'Based in Brazil <span aria-hidden="true">·</span> Available for remote roles',
    projectsLabel: 'PORTFOLIO', projectsHeading: 'Selected <span>projects.</span>', projectsDescription: 'A selection of verified public repositories and independent projects in development.',
    filterAll: 'All <span>05</span>', filterWeb: 'Web', filterMobile: 'Mobile', filterGames: 'Games', illustrative: 'Illustrative mockup', typePublic: 'PUBLIC REPOSITORY', typeDev: 'IN DEVELOPMENT',
    fleetDescription: 'Operations tracking dashboard with an interactive map, route history, equipment status and dynamic indicators. Uses simulated JSON data.',
    source: 'View code on GitHub', transitTitle: 'Transit mobile app', transitDescription: 'Mobile prototype featuring navigation between transit lines and vehicles, built with React Native and Expo.',
    ruinsDescription: 'Independent 2D tower defense with tower upgrades, enemies, bosses and progression systems for PC.',
    aquaDescription: 'Stylized aquarium shop simulator with fish care, tank maintenance, customization and management.',
    privateProject: 'Code not publicly available', loginTitle: 'Registration interface', loginDescription: 'Front-end UI exercise featuring a form, input fields and HTML/CSS styling. Does not include backend authentication.',
    projectNote: 'Project thumbnails are illustrations created for this portfolio, not actual application screenshots. Public GitHub projects can be inspected using the links provided.',
    allGithub: 'Browse my full GitHub profile', aboutLabel: 'ABOUT ME', aboutHeading: 'Curiosity turned into <span>code.</span>',
    aboutLead: 'I hold a degree in Systems Analysis and Development from UniCesumar and build personal software and game projects.',
    aboutP1: 'I work with web interfaces and mobile applications using React, TypeScript and JavaScript. I also create gameplay prototypes and systems in Unity and C# under my independent Veltrix Studios identity.',
    aboutP2: 'My previous experience in operations and logistics strengthened my organization, attention to detail, systems literacy and cross-functional communication. I now bring that background into software development.',
    degreeLabel: 'EDUCATION', degreeValue: 'Systems Analysis and Development', locationLabel: 'LOCATION', locationValue: 'Brazil', relocation: 'Open to international opportunities',
    skillsLabel: 'TOOLKIT', skillsHeading: 'Technologies <span>I work with.</span>', skillsDescription: 'Tools used in independent projects, learning and previous roles.',
    skillFrontend: 'Web development', skillFrontendDesc: 'Interfaces, components and web applications.', skillMobile: 'Mobile applications', skillMobileDesc: 'Prototyping, navigation and mobile UX.',
    skillGames: 'Game development', skillGamesDesc: 'Gameplay, UI and independent game systems.', skillOther: 'Data & tools', skillOtherDesc: 'Databases, visualization and operational systems.',
    experienceLabel: 'BACKGROUND', experienceHeading: 'Experience & <span>education.</span>', experienceDescription: 'An operations background combined with hands-on learning through independent development projects.',
    roleMelitta: 'Logistics Assistant', melittaDesc: 'Invoice and goods verification, SAP records and communication across departments.',
    roleCeva: 'Warehouse Checker', cevaDesc: 'Inventory control, document verification and support for quality routines.',
    roleCooper: 'Production Operator', cooperDesc: 'Industrial equipment operation, fault identification and technical procedure compliance.',
    educationTitle: 'Degree in Systems Analysis and Development', educationDesc: 'Completed degree. Foundations in programming, systems and software development.',
    contactLabel: 'LET’S TALK', contactHeading: 'Have a project in mind?<br><span>Let’s build something.</span>',
    contactDescription: 'I am open to discussing opportunities in web, mobile, software and game development, especially with teams that value learning and collaboration.',
    contactButton: 'Send an email', copyEmail: 'Copy email', backTop: 'Back to top ↑', emailCopied: 'Email copied to clipboard.', copyFailed: 'Could not copy. Please use the email link.',
    menuOpen: 'Open menu', menuClose: 'Close menu', themeLight: 'Activate light theme', themeDark: 'Activate dark theme', filterLabel: 'Filter projects', navLabel: 'Main navigation'
  }
};
const store = {
  getItem(key) { try { return window.localStorage.getItem(key); } catch { return null; } },
  setItem(key, value) { try { window.localStorage.setItem(key, value); } catch { /* Storage is optional */ } }
};
const doc = document.documentElement;
const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');
const filters = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('.project-card[data-category]');
let lang = store.getItem('mateus-portfolio-lang') === 'en' ? 'en' : 'pt';
let theme = store.getItem('mateus-portfolio-theme') === 'light' ? 'light' : 'dark';
let menuOpen = false;
function updateAccessibility() {
  const t = translations[lang];
  menuToggle.setAttribute('aria-label', menuOpen ? t.menuClose : t.menuOpen);
  themeToggle.setAttribute('aria-label', theme === 'dark' ? t.themeLight : t.themeDark);
  document.getElementById('navigation').setAttribute('aria-label', t.navLabel);
  document.querySelector('.filter-bar').setAttribute('aria-label', t.filterLabel);
  document.getElementById('copy-email').setAttribute('aria-label', t.copyEmail);
}
function setLanguage(next) {
  lang = next; doc.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const translation = translations[lang][el.dataset.i18n];
    if (translation !== undefined) el.innerHTML = translation; // trusted local literal strings only
  });
  document.title = lang === 'pt' ? 'Mateus Augusto | Desenvolvedor de Software & Jogos' : 'Mateus Augusto | Software & Game Developer';
  document.getElementById('meta-description').setAttribute('content', lang === 'pt' ?
    'Portfólio de Mateus Augusto Felisbino. Projetos em React, TypeScript, React Native, Unity e C#.' :
    'Portfolio of Mateus Augusto Felisbino. Projects in React, TypeScript, React Native, Unity and C#.');
  document.getElementById('og-description').setAttribute('content',lang === 'pt' ? 'Projetos reais em React, TypeScript e React Native, além de jogos independentes em Unity e C#.' : 'Public React, TypeScript and React Native projects plus independent Unity and C# games.');
  langToggle.innerHTML = lang === 'pt' ? 'EN <span aria-hidden="true">↗</span>' : 'PT <span aria-hidden="true">↗</span>';
  langToggle.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para português');
  store.setItem('mateus-portfolio-lang',lang);
  updateAccessibility();
  document.dispatchEvent(new CustomEvent('portfolio:language', {detail: {lang}}));
}
function setTheme(next) {
  theme = next; doc.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]').setAttribute('content',theme === 'dark' ? '#07090d' : '#f4f5f8');
  store.setItem('mateus-portfolio-theme',theme);
  updateAccessibility();
}
function setMenu(open) {
  menuOpen = open; menu.classList.toggle('open',open); menuToggle.setAttribute('aria-expanded',String(open)); updateAccessibility();
}
langToggle.addEventListener('click',()=>setLanguage(lang === 'pt' ? 'en' : 'pt'));
themeToggle.addEventListener('click',()=>setTheme(theme === 'dark' ? 'light' : 'dark'));
menuToggle.addEventListener('click',()=>setMenu(!menuOpen));
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',event=>{if(event.key === 'Escape') setMenu(false);});
filters.forEach(button=>button.addEventListener('click',()=>{
  const selected = button.dataset.filter;
  filters.forEach(filter=>{let active = filter===button;filter.classList.toggle('active',active);filter.setAttribute('aria-pressed',String(active));});
  projectCards.forEach(card=>{ card.hidden = selected!=='all' && card.dataset.category!==selected; });
}));
document.getElementById('copy-email').addEventListener('click',async()=>{
  const status = document.getElementById('copy-status');
  try { if(!navigator.clipboard) throw new Error('Clipboard unavailable'); await navigator.clipboard.writeText('amateus593@gmail.com'); status.textContent=translations[lang].emailCopied; }
  catch { status.textContent=translations[lang].copyFailed; }
  const btn=document.getElementById('copy-email'); btn.querySelector('[data-i18n]').textContent=status.textContent;
  window.clearTimeout(window._copyResetTimeout);
  window._copyResetTimeout = window.setTimeout(() => {btn.querySelector('[data-i18n]').textContent = translations[lang].copyEmail;}, 2400);
  btn.blur();
});
const progress = document.getElementById('scroll-progress');
let ticking = false;
window.addEventListener('scroll',()=>{
  if(!ticking){requestAnimationFrame(()=>{
    const total = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width=(total>0 ? (window.scrollY/total)*100 : 0)+'%';ticking=false;
  });ticking=true;}
},{passive:true});
document.getElementById('year').textContent=new Date().getFullYear();
setTheme(theme);setLanguage(lang);
