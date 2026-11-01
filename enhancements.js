/* Portfolio interactive edition: browser-native JavaScript, no build or API keys required. */
(() => {
  'use strict';
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const motion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const byId = id => document.getElementById(id);
  const isEnglish = () => document.documentElement.lang.toLowerCase().startsWith('en');
  const locale = () => isEnglish() ? 'en' : 'pt';
  const text = (id, value) => { const el = byId(id); if(el) el.textContent = value; };
  const labels = {
    pt: {
      command:'Buscar', exploring:'Explorando agora', editorHint:'Experimente as abas do código', caseStudy:'Explorar detalhes',
      githubHeading:'O código continua evoluindo.',githubDesc:'Confira os repositórios públicos mais recentes, diretamente do GitHub.',
      githubButton:'Sincronizar GitHub',githubPlaceholder:'Clique para buscar as atualizações mais recentes.',
      githubDisclaimer:'Consulta opcional à API pública do GitHub. É necessária conexão com a internet.',
      dialogLearn:'O que este projeto demonstra',dialogCode:'Ver repositório',dialogNext:'Próximo projeto',
      paletteMove:'Navegar',paletteOpen:'Abrir',paletteClose:'Fechar',quickContact:'Dica: pressione Ctrl + K para navegar pelo site sem usar o mouse.',
      searchPlaceholder:'Buscar projeto, tecnologia ou seção...',repoUnavailable:'Projeto independente · sem repositório público',
      project:'PROJETO',open:'Abrir',section:'NAVEGAÇÃO',openProject:'PROJETOS',other:'AÇÕES',
      noResults:'Nenhum resultado. Tente React, Unity, GitHub ou Contato.',
      githubLoading:'Consultando repositórios públicos...',githubError:'Não foi possível acessar o GitHub agora. Use o link abaixo para consultar diretamente.',
      githubEmpty:'Nenhum repositório público retornado.',githubVisit:'Abrir GitHub',githubUpdated:'Atualizado',
      githubReady:'Repositórios atualizados',close:'Fechar detalhes',noCode:'Código ainda não publicado',
      sourceInfo:'Projeto com código público disponível',developing:'Projeto independente em desenvolvimento',
      syncSuccess:'Repositórios carregados do GitHub',syncFailed:'Não foi possível atualizar agora',
      relatedSearch:'Explorar projetos',cmdDescription:'Abrir busca rápida (Ctrl + K)',detailLabel:'Visualizar detalhes de',
      switches:['Web Apps','Game Systems','Mobile Experiences','Creative Coding']
    },
    en: {
      command:'Search',exploring:'Currently exploring',editorHint:'Click the code tabs to explore',caseStudy:'Explore details',
      githubHeading:'The code keeps evolving.',githubDesc:'Fetch recent public repositories directly from GitHub.',
      githubButton:'Sync GitHub',githubPlaceholder:'Click to load the latest public updates.',
      githubDisclaimer:'Optional public GitHub API request; internet connection required.',
      dialogLearn:'What this project demonstrates',dialogCode:'View repository',dialogNext:'Next project',
      paletteMove:'Navigate',paletteOpen:'Open',paletteClose:'Close',quickContact:'Tip: press Ctrl + K to navigate this site without using your mouse.',
      searchPlaceholder:'Search projects, tech stack or sections...',repoUnavailable:'Independent project · no public repository',
      project:'PROJECT',open:'Open',section:'NAVIGATION',openProject:'PROJECTS',other:'ACTIONS',
      noResults:'No matches. Try React, Unity, GitHub or Contact.',
      githubLoading:'Loading public repositories...',githubError:'Could not reach GitHub right now. Use the link below to browse directly.',
      githubEmpty:'No public repositories returned.',githubVisit:'Open GitHub',githubUpdated:'Updated',
      githubReady:'Repositories loaded',close:'Close details',noCode:'Code not published yet',
      sourceInfo:'Public source code available',developing:'Independent project in development',
      syncSuccess:'GitHub repositories loaded',syncFailed:'Could not fetch updates',
      relatedSearch:'Explore projects',cmdDescription:'Open quick search (Ctrl + K)',detailLabel:'Explore details of',
      switches:['Web Apps','Game Systems','Mobile Experiences','Creative Coding']
    }
  };
  const tr = key => labels[locale()][key];
  const projectDetails = {
    fleet: {
      title:'Fleet Tracker Dashboard', category:'web', tags:['React','TypeScript','Material UI','Leaflet'],
      github:'https://github.com/MateusAugusto1/Proje',
      pt:{label:'WEB · PROJETO PÚBLICO',desc:'Dashboard de rastreamento operacional que combina visualização geográfica com interface de acompanhamento de equipamentos e rotas. Projeto presente no meu GitHub.',items:['Componentização e construção de interfaces com React e TypeScript.','Representação de informações geográficas e rotas usando Leaflet.','Organização visual de informações e indicadores operacionais.']},
      en:{label:'WEB · PUBLIC REPOSITORY',desc:'Operations-tracking dashboard that combines geographic visualization with an interface for monitoring equipment and routes. The project is available on my GitHub.',items:['Component-driven interfaces with React and TypeScript.','Geographic information and route visualization using Leaflet.','Visual organization of operational information and indicators.']}
    },
    transit: {
      title:'Transit Mobile App', category:'mobile',tags:['React Native','Expo','JavaScript','Mobile UI'],
      github:'https://github.com/MateusAugusto1/testee',
      pt:{label:'MOBILE · PROJETO PÚBLICO',desc:'Protótipo de aplicativo móvel de transporte, com navegação entre linhas e veículos e exploração de interfaces mobile.',items:['Estrutura de telas e rotas com React Native e Expo.','Prática de componentes reutilizáveis e navegação.','Exploração de bibliotecas de mapas no ambiente mobile.']},
      en:{label:'MOBILE · PUBLIC REPOSITORY',desc:'Transit-focused mobile app prototype, featuring navigation between lines and vehicles and experimentation with mobile interfaces.',items:['Screen and navigation structure with React Native and Expo.','Reusable components and navigation practice.','Exploration of map libraries for mobile interfaces.']}
    },
    ruins: {
      title:'Reino em Ruínas',category:'games',tags:['Unity 2D','C#','Tower Defense','PC'],github:null,
      pt:{label:'GAMES · EM DESENVOLVIMENTO',desc:'Projeto independente de tower defense em fantasia sombria para PC. Explora progressão de torres, inimigos, chefes, habilidades e interface de loja.',items:['Mecânicas de estratégia e evolução de torres.','Organização modular de sistemas de gameplay em C#.','Design de interfaces e fluxos de progressão.']},
      en:{label:'GAMES · IN DEVELOPMENT',desc:'Independent dark-fantasy tower-defense project for PC. Explores tower progression, enemies, bosses, abilities and in-game shop interfaces.',items:['Tower-defense mechanics and upgrade progression.','Modular gameplay system organization in C#.','Interface design and progression flows.']}
    },
    aqua: {
      title:'AquaCare 3D',category:'games',tags:['Unity 3D','C#','Android','Simulation'],github:null,
      pt:{label:'GAMES · EM DESENVOLVIMENTO',desc:'Simulador estilizado de uma loja de aquários para Android. O projeto une cuidados de peixes, manutenção de tanques e gestão.',items:['Sistemas interconectados de cuidados, manutenção e recursos.','Design de feedback visual e progressão de um simulador.','Foco em interface e desempenho para dispositivos Android.']},
      en:{label:'GAMES · IN DEVELOPMENT',desc:'Stylized aquarium-shop simulation for Android, combining fish care, tank maintenance and management mechanics.',items:['Connected simulation systems for care, maintenance and resources.','Visual feedback and progression design for a simulator.','Attention to interface and performance on Android devices.']}
    },
    login: {
      title:'Registration UI',category:'web',tags:['HTML','CSS','UI Design'],github:'https://github.com/MateusAugusto1/Tela-de-login',
      pt:{label:'WEB · PROJETO PÚBLICO',desc:'Exercício prático de desenvolvimento front-end, com foco em composição visual de formulário e fundamentos de estilização. Não inclui autenticação real.',items:['Criação de layout com HTML e CSS.','Composição visual de campos e botões.','Prática de hierarquia de informações para uma tela de entrada.']},
      en:{label:'WEB · PUBLIC REPOSITORY',desc:'Front-end practice project focused on visual form composition and styling fundamentals. It does not include real authentication.',items:['Layout creation using HTML and CSS.','Visual composition of inputs and buttons.','Information hierarchy practice for a sign-in interface.']}
    }
  };
  const projectIds = Object.keys(projectDetails);
  const navigation = [
    {id:'inicio',pt:'Início',en:'Home'},
    {id:'projetos',pt:'Projetos',en:'Projects'},
    {id:'sobre',pt:'Sobre',en:'About'},
    {id:'habilidades',pt:'Habilidades',en:'Skills'},
    {id:'experiencia',pt:'Experiência',en:'Experience'},
    {id:'contato',pt:'Contato',en:'Contact'}
  ];

  // Editor: clickable, keyboard-operable code snippets. All snippets are illustrative.
  const editorSamples = {
    about:[
      `<span class="kw">const</span> <span class="fn">developer</span> = {`,
      `&nbsp;name: <span class="str">'Mateus Augusto'</span>,`,
      `&nbsp;focus: [`,
      `&nbsp;&nbsp;<span class="str">'Software Development'</span>,`,
      `&nbsp;&nbsp;<span class="str">'Game Development'</span>`,
      `&nbsp;],`,
      `&nbsp;stack: [<span class="str">'React'</span>, <span class="str">'C#'</span>, <span class="str">'Unity'</span>],`,
      `&nbsp;mindset: <span class="str">'keep building'</span>`,
      `};`,
      ``,
      `<span class="kw">export default</span> developer<span class="cursor"></span>`
    ],
    projects:[
      `<span class="str">"selectedProjects"</span>: [`,
      `&nbsp;{ <span class="fn">name</span>: <span class="str">"Fleet Tracker"</span>,`,
      `&nbsp;&nbsp;type: <span class="str">"React + TypeScript"</span> },`,
      `&nbsp;{ <span class="fn">name</span>: <span class="str">"Reino em Ruínas"</span>,`,
      `&nbsp;&nbsp;type: <span class="str">"Unity 2D + C#"</span> },`,
      `&nbsp;{ <span class="fn">name</span>: <span class="str">"AquaCare 3D"</span>,`,
      `&nbsp;&nbsp;type: <span class="str">"Unity 3D + C#"</span> }`,
      `]`,
      ``,
      `<span class="kw">// Build. Test. Iterate.</span><span class="cursor"></span>`
    ],
    focus:[
      `<span class="kw">function</span> <span class="fn">buildWithPurpose</span>() {`,
      `&nbsp;<span class="kw">const</span> values = [`,
      `&nbsp;&nbsp;<span class="str">'clean interfaces'</span>,`,
      `&nbsp;&nbsp;<span class="str">'reusable components'</span>,`,
      `&nbsp;&nbsp;<span class="str">'player experiences'</span>,`,
      `&nbsp;&nbsp;<span class="str">'continuous learning'</span>`,
      `&nbsp;];`,
      `&nbsp;<span class="kw">return</span> values.<span class="fn">map</span>(ship);`,
      `}`,``,
      `<span class="fn">buildWithPurpose</span>();<span class="cursor"></span>`
    ]
  };
  let editorTab = 'about';
  function selectEditor(key) {
    editorTab = key;
    const panel = byId('editor-panel');
    panel.classList.remove('panel-flash'); void panel.offsetWidth; panel.classList.add('panel-flash');
    panel.innerHTML = editorSamples[key].map((line, i) =>
      `<div${line ? '' : ' class="code-gap"'}><em>${String(i+1).padStart(2, '0')}</em> ${line}</div>`
    ).join('');
    qsa('[data-editor-tab]').forEach(button => {
      const selected = button.dataset.editorTab === key;
      button.setAttribute('aria-selected', String(selected)); button.tabIndex = selected ? 0 : -1;
    });
  }
  qsa('[data-editor-tab]').forEach((button, index, tabs) => {
    button.addEventListener('click', () => selectEditor(button.dataset.editorTab));
    button.addEventListener('keydown', e => {
      if(e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const next = tabs[(index + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      selectEditor(next.dataset.editorTab); next.focus();
    });
  });
  selectEditor('about');

  let typeIndex = 0, typePosition = 0, deleting = false, typingTimeout;
  const typeEl = byId('typewriter');
  function animateType() {
    const phrases = tr('switches');
    const full = phrases[typeIndex];
    if(!motion) {typeEl.textContent = phrases[0]; return;}
    typePosition += deleting ? -1 : 1;
    typeEl.textContent = full.slice(0, typePosition);
    if(!deleting && typePosition === full.length) {
      deleting = true; typingTimeout = window.setTimeout(animateType, 1700); return;
    }
    if(deleting && typePosition === 0) {
      deleting = false; typeIndex = (typeIndex + 1) % phrases.length;
      typingTimeout = window.setTimeout(animateType, 260);return;
    }
    typingTimeout = window.setTimeout(animateType, deleting ? 35 : 82);
  }
  animateType();

  // Accessible dialog for case studies.
  const dialogOverlay = byId('project-overlay');
  const dialog = qs('.project-dialog',dialogOverlay);
  let currentProject = 'fleet', lastFocused = null;
  function renderProject(id) {
    currentProject = id; const project = projectDetails[id], body = project[locale()];
    text('dialog-title',project.title); text('dialog-desc',body.desc);
    text('dialog-tag',body.label);
    text('dialog-eyebrow', `${String(projectIds.indexOf(id)+1).padStart(2,'0')} / 05`);
    const highlight = byId('dialog-highlights'); highlight.replaceChildren();
    body.items.forEach(item => { const li = document.createElement('li'); li.textContent = item; highlight.appendChild(li); });
    const stack = byId('dialog-stack'); stack.replaceChildren();
    project.tags.forEach(tag => {const item = document.createElement('span');item.textContent=tag;stack.append(item);});
    const link = byId('dialog-link');
    link.hidden = !project.github;
    if(project.github) link.href = project.github;
    const art = byId('dialog-art'); art.replaceChildren();
    const original = qs(`.project-card[data-project="${id}"] .project-art`);
    if(original){const clone=original.cloneNode(true); clone.classList.add('modal-project-art');art.append(clone);}
    byId('dialog-next').setAttribute('aria-label', `${tr('dialogNext')}: ${projectDetails[projectIds[(projectIds.indexOf(id)+1)%projectIds.length]].title}`);
  }
  function toggleOverlay(overlay, show, focusTarget) {
    if(show) {
      if(!overlay.hidden) return;
      if(overlay === dialogOverlay && !byId('palette-overlay').hidden) closePalette();
      if(overlay !== dialogOverlay && !dialogOverlay.hidden) closeProject();
      lastFocused = document.activeElement;
      overlay.hidden = false; document.body.classList.add('has-overlay');
      requestAnimationFrame(() => {overlay.classList.add('shown');(focusTarget||qs('[role="dialog"]',overlay)).focus();});
    } else {
      overlay.classList.remove('shown'); overlay.hidden = true;
      if(dialogOverlay.hidden && byId('palette-overlay').hidden) document.body.classList.remove('has-overlay');
      if(lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    }
  }
  function openProject(id) { renderProject(id); toggleOverlay(dialogOverlay,true,byId('dialog-close')); }
  function closeProject() { if(!dialogOverlay.hidden) toggleOverlay(dialogOverlay,false); }
  qsa('[data-open-project]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.openProject)));
  qsa('.project-card').forEach(card => card.addEventListener('keydown',event => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target === card) {event.preventDefault();openProject(card.dataset.project);}
  }));
  byId('dialog-close').addEventListener('click',closeProject);
  byId('dialog-next').addEventListener('click',()=>renderProject(projectIds[(projectIds.indexOf(currentProject)+1)%projectIds.length]));
  dialogOverlay.addEventListener('mousedown', e=>{if(e.target===dialogOverlay) closeProject();});

  // Keyboard command palette: navigate sections, projects and actions.
  const paletteOverlay=byId('palette-overlay');
  const paletteInput=byId('palette-input');
  const paletteResults=byId('palette-results');
  let activeResult=0;
  let availableActions=[];
  const paletteActions=()=>[
    ...navigation.map(item=>({group:'section',label:item[locale()], detail:'#'+item.id, search:item.id+' '+item.pt+' '+item.en, act:()=>location.hash=item.id})),
    ...projectIds.map(id=>({group:'openProject',label:projectDetails[id].title,detail:projectDetails[id].tags.join(' · '),search:projectDetails[id].tags.join(' ')+' '+projectDetails[id].title+' '+projectDetails[id].category,act:()=>openProject(id)})),
    {group:'other',label:isEnglish()?'Switch language':'Alternar idioma',detail:'PT / EN',search:'idioma language',act:()=>byId('lang-toggle').click()},
    {group:'other',label:isEnglish()?'Switch theme':'Alternar tema',detail:'Light / Dark',search:'tema theme dark light',act:()=>byId('theme-toggle').click()},
    {group:'other',label:'GitHub',detail:'MateusAugusto1',search:'repositorios github',act:()=>window.open('https://github.com/MateusAugusto1','_blank','noopener,noreferrer')}
  ];
  function normalize(input) {return input.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');}
  function renderPalette() {
    const term=normalize(paletteInput.value.trim());
    availableActions=paletteActions().filter(a=>normalize(a.label+' '+a.detail+' '+a.search).includes(term));
    activeResult = Math.max(0,Math.min(activeResult,availableActions.length-1));
    paletteResults.replaceChildren();
    if(!availableActions.length){const empty=document.createElement('p');empty.className='palette-empty';empty.textContent=tr('noResults');paletteResults.append(empty);return;}
    let prevGroup='';
    availableActions.forEach((item,i)=>{
      if(item.group!==prevGroup) {const h=document.createElement('div');h.className='palette-category';h.textContent=tr(item.group);paletteResults.append(h);prevGroup=item.group;}
      const button=document.createElement('button');button.type='button';button.className='palette-item';button.setAttribute('role','option');button.setAttribute('aria-selected',String(i===activeResult));
      button.dataset.actionIndex=i;
      const name=document.createElement('strong');name.textContent=item.label;
      const extra=document.createElement('small');extra.textContent=item.detail;
      const arrow=document.createElement('span');arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');
      button.append(name,extra,arrow);
      button.addEventListener('mouseenter',()=>{activeResult=i;updateSelectedAction();});
      button.addEventListener('click',()=>chooseAction(i));paletteResults.append(button);
    });
  }
  function updateSelectedAction() {qsa('.palette-item',paletteResults).forEach((item,i)=>item.setAttribute('aria-selected',String(i===activeResult)));}
  function chooseAction(index) {const action=availableActions[index];if(!action)return;closePalette();action.act();}
  function openPalette() {
    toggleOverlay(paletteOverlay,true,paletteInput);
    paletteInput.value='';activeResult=0;renderPalette();
  }
  function closePalette() {if(!paletteOverlay.hidden) toggleOverlay(paletteOverlay,false);}
  byId('command-trigger').addEventListener('click',openPalette);
  byId('palette-close').addEventListener('click',closePalette);
  paletteOverlay.addEventListener('mousedown',e=>{if(e.target===paletteOverlay)closePalette();});
  paletteInput.addEventListener('input',()=>{activeResult=0;renderPalette();});
  paletteInput.addEventListener('keydown',e=>{
    if(e.key==='ArrowDown'||e.key==='ArrowUp') {e.preventDefault();activeResult=(activeResult+(e.key==='ArrowDown'?1:availableActions.length-1))%Math.max(1,availableActions.length);updateSelectedAction();const selected=qs(`[data-action-index="${activeResult}"]`,paletteResults);selected?.scrollIntoView({block:'nearest'});}
    else if(e.key==='Enter'){e.preventDefault();chooseAction(activeResult);}
  });
  document.addEventListener('keydown',e=>{
    if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==='k'){e.preventDefault();paletteOverlay.hidden?openPalette():closePalette();}
    if(e.key==='Escape'){if(!paletteOverlay.hidden)closePalette();else if(!dialogOverlay.hidden)closeProject();}
    if(e.key==='Tab'){
      const open = !paletteOverlay.hidden ? paletteOverlay : !dialogOverlay.hidden ? dialogOverlay : null;
      if(!open) return;
      const focusables=qsa('button:not([disabled]):not([hidden]),a[href]:not([hidden]),input:not([disabled])',open).filter(x=>x.getClientRects().length);
      if(!focusables.length)return;
      const first=focusables[0],last=focusables.at(-1);
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
    }
  });

  // Subtle hover effects: only on precise pointing devices and without reduced motion.
  if(motion && window.matchMedia('(pointer: fine)').matches){
    qsa('.project-card').forEach(card=>{
      card.classList.add('tilt-ready');
      card.addEventListener('pointermove',e=>{
        const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
        card.style.setProperty('--card-x',`${(x*100).toFixed(1)}%`);
        card.style.setProperty('--card-y',`${(y*100).toFixed(1)}%`);
        card.style.setProperty('--rotate-y',`${((x-.5)*1.8).toFixed(2)}deg`);
        card.style.setProperty('--rotate-x',`${((.5-y)*1.8).toFixed(2)}deg`);
      },{passive:true});
      card.addEventListener('pointerleave',()=>{
        card.style.removeProperty('--card-x');card.style.removeProperty('--card-y');card.style.removeProperty('--rotate-x');card.style.removeProperty('--rotate-y');
      });
    });
    const visual=qs('.hero-visual');
    visual.addEventListener('pointermove',e=>{
      const r=visual.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      visual.style.setProperty('--hero-x',`${(x*13).toFixed(1)}px`);
      visual.style.setProperty('--hero-y',`${(y*13).toFixed(1)}px`);
    },{passive:true});
    visual.addEventListener('pointerleave',()=>{visual.style.removeProperty('--hero-x');visual.style.removeProperty('--hero-y');});
  }
  if(motion && 'IntersectionObserver' in window){
    const elements=qsa('.section-head,.project-card,.skill-panel,.timeline-item,.about-left,.about-right,.github-live');
    const reveal = new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-revealed');reveal.unobserve(entry.target);}
    }),{threshold:.07,rootMargin:'0px 0px -35px 0px'});
    elements.forEach((element,i)=>{element.classList.add('reveal-entry');element.style.setProperty('--stagger',`${Math.min(i%4,3)*48}ms`);reveal.observe(element);});
  }
  const navItems=qsa('.nav-menu a[href^="#"]');
  if('IntersectionObserver' in window){
    const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      navItems.forEach(link=>link.classList.toggle('current-section',link.getAttribute('href')==='#'+entry.target.id));
    }),{rootMargin:'-30% 0px -60% 0px'});
    navigation.forEach(item=>{const section=byId(item.id);if(section)sectionObserver.observe(section);});
  }

  // GitHub fetch is optional, public and never requires a token; data is rendered as text.
  const refresh=byId('github-refresh'), feed=byId('github-feed');
  let waiting=false;
  function createMessage(message,showLink=false){
    feed.replaceChildren();const p=document.createElement('p');p.className='github-placeholder';p.textContent=message;feed.append(p);
    if(showLink){const a=document.createElement('a');a.className='github-fallback';a.href='https://github.com/MateusAugusto1?tab=repositories';a.target='_blank';a.rel='noopener noreferrer';a.textContent=tr('githubVisit')+' ↗';feed.append(a);}
  }
  const dateValue = iso => {
    const d=new Date(iso);if(Number.isNaN(d.getTime()))return '';
    return d.toLocaleDateString(isEnglish()?'en-US':'pt-BR',{month:'short',year:'numeric'});
  };
  async function syncGithub(){
    if(waiting)return;waiting=true;refresh.disabled=true;refresh.classList.add('loading');createMessage(tr('githubLoading'));
    try{
      const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),10000);
      let response;
      try{response=await fetch('https://api.github.com/users/MateusAugusto1/repos?per_page=60&sort=updated&type=owner',{headers:{Accept:'application/vnd.github+json'},signal:controller.signal});}finally{clearTimeout(timeout);}
      if(!response.ok)throw new Error('GitHub: '+response.status);
      const json=await response.json();
      if(!Array.isArray(json))throw new Error('Invalid response');
      const repos=json.filter(repo=>!repo.fork && !repo.archived && repo.private===false && repo.html_url && new URL(repo.html_url).hostname==='github.com').sort((a,b)=>new Date(b.pushed_at||0)-new Date(a.pushed_at||0)).slice(0,3);
      feed.replaceChildren();
      if(!repos.length){createMessage(tr('githubEmpty'));return;}
      for(const repo of repos){
        const card=document.createElement('a');card.className='github-repo';card.href=repo.html_url;card.target='_blank';card.rel='noopener noreferrer';
        const title=document.createElement('strong');title.textContent=(repo.name||'Repository').slice(0,80);
        const desc=document.createElement('span');desc.textContent=(repo.description||'GitHub repository').slice(0,130);
        const badge=document.createElement('small');badge.textContent=[repo.language,tr('githubUpdated')+' '+dateValue(repo.pushed_at)].filter(Boolean).join(' · ');
        const arrow=document.createElement('b');arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');
        card.append(title,desc,badge,arrow);feed.append(card);
      }
    }catch(error){createMessage(tr('githubError'),true);}
    finally{waiting=false;refresh.disabled=false;refresh.classList.remove('loading');}
  }
  refresh.addEventListener('click',syncGithub);

  function updateDynamic(){
    qsa('[data-dynamic]').forEach(el=>{const val=tr(el.dataset.dynamic);if(typeof val==='string')el.textContent=val;});
    paletteInput.placeholder=tr('searchPlaceholder');
    byId('command-trigger').setAttribute('aria-label',tr('cmdDescription'));
    byId('dialog-close').setAttribute('aria-label',tr('close'));
    qsa('.project-card').forEach(card=>{card.setAttribute('aria-label',`${tr('detailLabel')} ${projectDetails[card.dataset.project].title}`);});
    if(!dialogOverlay.hidden)renderProject(currentProject);
    if(!paletteOverlay.hidden)renderPalette();
    clearTimeout(typingTimeout);typePosition=0;deleting=false;typeEl.textContent='';animateType();
  }

  // Ambient pointer-reactive glow for the sci-fi skin.
  const ultronPointer = event => {
    document.body.style.setProperty('--mx', `${event.clientX}px`);
    document.body.style.setProperty('--my', `${event.clientY}px`);
  };
  if(motion){
    window.addEventListener('pointermove', ultronPointer, {passive:true});
  }

  document.addEventListener('portfolio:language',updateDynamic);
  updateDynamic();
})();
