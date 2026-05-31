const translations = {
  en: {
    intro: "Hello, I'm",
    title: "Director of Operations",
    blurb: "I am a security-focused Director of Operations, cloud architect, and polyglot developer. Driven by a passion for privacy, operational resilience, and UX/DX, I thrive at the intersection of robust security engineering, compliance, and building tools that developers love to use.",
    certsTitle: "Professional Credentials",
    connectTitle: "Connect & Network",
    projectsTitle: "Featured Projects",
    badge_cysa: "CompTIA CySA+ ce Certification",
    badge_az104: "Microsoft Certified: Azure Administrator Associate",
    badge_firstaid: "Heart & Stroke: Standard First Aid + CPR",
    project_boomoji_desc: "A mobile-first progressive web app emoji game for toddlers — tap, pop, and discover across eight game modes.",
    project_intelcom_desc: "A custom tracking dashboard and scraper for monitoring Canadian Intelcom Express package delivery status.",
    project_mdr_desc: "A terminal and web Markdown reader and renderer, delivering fast and beautiful document styling.",
    project_switch_aws_desc: "An interactive PowerShell CLI tool that provides quick profile switching for AWS SSO accounts with arrow-key navigation.",
    project_unclear_desc: "A lightweight user script and extension designed to clean up LinkedIn profiles by removing the 'Verify with CLEAR' buttons.",
    project_node_virtualbox_desc: "A popular Node.js library wrapper around the VirtualBox VBoxManage CLI tool to manage and control virtual machines.",
    project_speak_epub_desc: "A Python tool that converts EPUB eBooks into high-quality audiobooks using Microsoft Edge's neural text-to-speech engine.",
    view_repo: "GitHub Repository",
    launch_app: "Launch Project",
    chrome_store: "Chrome Web Store"
  },
  fr: {
    intro: "Bonjour, je suis",
    title: "Directeur des opérations",
    blurb: "Je suis un directeur des opérations axé sur la sécurité, architecte cloud et développeur polyglotte. Animé par une passion pour la confidentialité, la résilience opérationnelle et l'expérience utilisateur/développeur, j'excelle à l'intersection de l'ingénierie de sécurité robuste, de la conformité et de la création d'outils que les développeurs adorent utiliser.",
    certsTitle: "Certifications professionnelles",
    connectTitle: "Connexions & Réseau",
    projectsTitle: "Projets en vedette",
    badge_cysa: "Certification CompTIA CySA+ ce",
    badge_az104: "Microsoft Certified : Azure Administrator Associate",
    badge_firstaid: "Cœur + AVC : Premiers soins standard + RCR",
    project_boomoji_desc: "Un jeu d'émojis en application web progressive pour les tout-petits — tapez, éclatez et découvrez à travers huit modes de jeu.",
    project_intelcom_desc: "Un tableau de bord personnalisé de suivi de colis pour surveiller le statut des livraisons d'Intelcom Express au Canada.",
    project_mdr_desc: "Un lecteur et moteur de rendu de Markdown pour terminal et web, offrant un style de document rapide et épuré.",
    project_switch_aws_desc: "Un outil CLI interactif pour PowerShell facilitant le basculement rapide entre les profils AWS SSO grâce aux touches fléchées.",
    project_unclear_desc: "Un script utilisateur léger conçu pour épurer les profils LinkedIn en masquant les boutons intrusifs 'Verify with CLEAR'.",
    project_node_virtualbox_desc: "Une bibliothèque Node.js populaire enveloppant l'outil CLI VBoxManage de VirtualBox pour gérer et contrôler les machines virtuelles.",
    project_speak_epub_desc: "Un outil Python qui convertit les eBooks EPUB en livres audio de haute qualité à l'aide de la synthèse vocale neuronale de Microsoft Edge.",
    view_repo: "Dépôt GitHub",
    launch_app: "Lancer le projet",
    chrome_store: "Chrome Web Store"
  },
  de: {
    intro: "Hallo, ich bin",
    title: "Leiter IT-Betrieb",
    blurb: "Ich bin ein sicherheitsorientierter Betriebsleiter, Cloud-Architekt und polyglotter Entwickler. Angetrieben von einer Leidenschaft für Datenschutz, betriebliche Resilienz und UX/DX, arbeite ich an der Schnittstelle von robustem Security Engineering, Compliance und der Entwicklung von Tools, die Entwickler gerne nutzen.",
    certsTitle: "Berufliche Zertifizierungen",
    connectTitle: "Vernetzung & Kontakte",
    projectsTitle: "Ausgewählte Projekte",
    badge_cysa: "CompTIA CySA+ ce Zertifizierung",
    badge_az104: "Microsoft Certified: Azure Administrator Associate",
    badge_firstaid: "Heart & Stroke: Standard-Erste-Hilfe + HLW",
    project_boomoji_desc: "Eine mobile Progressive Web App mit Emoji-Spiel für Kleinkinder — tippen, platzen und entdecken in acht Spielmodi.",
    project_intelcom_desc: "Ein benutzerdefiniertes Tracking-Dashboard zur Überwachung des Zustellungsstatus von Intelcom Express Paketen in Kanada.",
    project_mdr_desc: "Ein schneller und eleganter Markdown-Reader und -Renderer für das Terminal und die Webansicht.",
    project_switch_aws_desc: "Ein interaktives PowerShell-CLI-Tool zum schnellen Wechseln von AWS-SSO-Profilen per Pfeiltastennavigation.",
    project_unclear_desc: "Ein leichtes Browser-Skript zur Bereinigung von LinkedIn-Profilen durch Entfernen der Schaltflächen 'Verify with CLEAR'.",
    project_node_virtualbox_desc: "Eine beliebte Node.js-Bibliothek als Wrapper für die VBoxManage-CLI von VirtualBox zur Steuerung von virtuellen Maschinen.",
    project_speak_epub_desc: "Ein Python-Tool, das EPUB-eBooks mithilfe der neuronalen Text-to-Speech-Engine von Microsoft Edge in Hörbücher konvertiert.",
    view_repo: "GitHub-Repository",
    launch_app: "Projekt starten",
    chrome_store: "Chrome Web Store"
  }
};

function setLanguage(lang) {
  const strings = translations[lang];
  if (!strings) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!strings[key]) return;

    if (el.tagName === "IMG") {
      el.alt = strings[key];
    } else {
      el.textContent = strings[key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  localStorage.setItem("lang", lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

setLanguage(localStorage.getItem("lang") || "en");
