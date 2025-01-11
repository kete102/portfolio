/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as createAstro, b as addAttribute, f as createTransitionScope, g as renderComponent, h as renderHead, i as renderSlot } from '../chunks/astro/server_DvnFkuR7.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$j = createAstro();
const $$SunIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$SunIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path> <path d="M4 12h.01"></path> <path d="M12 4v.01"></path> <path d="M20 12h.01"></path> <path d="M12 20v.01"></path> <path d="M6.31 6.31l-.01 -.01"></path> <path d="M17.71 6.31l-.01 -.01"></path> <path d="M17.7 17.7l.01 .01"></path> <path d="M6.3 17.7l.01 .01"></path> </svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/SunIcon.astro", void 0);

const $$Astro$i = createAstro();
const $$MoonIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$MoonIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path> <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path> <path d="M19 11h2m-1 -1v2"></path> </svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/MoonIcon.astro", void 0);

const $$Astro$h = createAstro();
const $$SytemIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$SytemIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M3 19l18 0"></path> <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"></path> </svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/SytemIcon.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const THEMES = ["Light", "Dark", "System"];
  return renderTemplate(_a || (_a = __template(["", '<div class="relative -ml-3 -mr-3 md:ml-1 md:mr-1" data-astro-cid-x3pjskd3> <button id="theme-toggle-btn" class="borde-none flex appearance-none transition hover:scale-125" data-astro-cid-x3pjskd3', '> <span class="sr-only" data-astro-cid-x3pjskd3>Elige el tema</span> ', " ", " ", ' </button> <div id="themes-menu" class="scale-80 absolute right-0 top-8 hidden min-w-[8rem] rounded-md border border-gray-100 bg-white/90 p-1 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md dark:border-gray-500/20 dark:bg-gray-900/90" data-astro-cid-x3pjskd3', "> <ul data-astro-cid-x3pjskd3> ", " </ul> </div> </div>  <script>\n	let remove = null\n	const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')\n	const themesMenu = document.getElementById('themes-menu')\n\n	const getThemePreference = () => {\n		if (typeof localStorage !== 'undefined') {\n			return localStorage.getItem('theme') ?? 'system'\n		}\n\n		return window.matchMedia('(prefers-color-scheme: dark)').matches\n			? 'dark'\n			: 'light'\n	}\n\n	const updateIcon = themePreference => {\n		document.querySelectorAll('.theme-toggle-icon').forEach(element => {\n			element.style.scale = element.id === themePreference ? '1' : '0'\n		})\n	}\n\n	const updateTheme = () => {\n		if (remove != null) {\n			remove()\n		}\n		matchMedia.addEventListener('change', updateTheme)\n		remove = () => {\n			matchMedia.removeEventListener('change', updateTheme)\n		}\n\n		const themePreference = getThemePreference()\n		const isDark =\n			themePreference === 'dark' ||\n			(themePreference === 'system' && matchMedia.matches)\n\n		updateIcon(themePreference)\n		document.documentElement.classList[isDark ? 'add' : 'remove']('dark')\n	}\n\n	updateTheme()\n\n	document.addEventListener('click', () => themesMenu.classList.remove('open'))\n\n	document.getElementById('theme-toggle-btn').addEventListener('click', e => {\n		e.stopPropagation()\n		const isClosed = !themesMenu.classList.contains('open')\n		themesMenu.classList[isClosed ? 'add' : 'remove']('open')\n	})\n\n	document.querySelectorAll('.themes-menu-option').forEach(element => {\n		element.addEventListener('click', e => {\n			localStorage.setItem('theme', e.target.innerText.toLowerCase().trim())\n			updateTheme()\n		})\n	})\n\n	document.addEventListener('astro:after-swap', () => {\n		updateTheme()\n		window.scrollTo({ left: 0, top: 0, behavior: 'instant' })\n	})\n<\/script>"])), maybeRenderHead(), addAttribute(createTransitionScope($$result, "ko5uysgj"), "data-astro-transition-persist"), renderComponent($$result, "SunIcon", $$SunIcon, { "id": "light", "class": "theme-toggle-icon size-6 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "MoonIcon", $$MoonIcon, { "id": "dark", "class": "theme-toggle-icon absolute size-6 transition-all", "data-astro-cid-x3pjskd3": true }), renderComponent($$result, "SystemIcon", $$SytemIcon, { "id": "system", "class": "theme-toggle-icon absolute size-6 transition-all", "data-astro-cid-x3pjskd3": true }), addAttribute(createTransitionScope($$result, "d5hlxqxh"), "data-astro-transition-persist"), THEMES.map((theme) => renderTemplate`<li class="themes-menu-option cursor-default rounded-sm px-2 py-1.5 hover:bg-neutral-400/40 dark:hover:bg-gray-500/50" data-astro-cid-x3pjskd3> ${theme} </li>`));
}, "/home/zion/dev/portfolio/src/components/ThemeToggle.astro", "self");

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/#proyectos"
    },
    {
      title: "Sobre m\xED",
      label: "sobre-mi",
      url: "/#sobre-mi"
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:kete102@gmail.com"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="mx-auto mt-6 flex w-full max-w-sm items-center justify-between rounded-lg bg-slate-300/90 p-2 shadow-2xl backdrop:blur-2xl dark:bg-slate-950/90 md:max-w-6xl md:px-6"> <nav class="invisible flex flex-row items-center gap-x-10 px-4 md:visible"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.url, "href")}${addAttribute(item.url, "aria-label")} class="text-lg font-medium opacity-80"> ${item.title} </a>`)} </nav> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </header>`;
}, "/home/zion/dev/portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="m-4 rounded-lg bg-white/10 shadow-2xl backdrop:blur-2xl dark:bg-zinc-900/30"> <div class="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between"> <span class="text-sm text-gray-800/70 dark:text-gray-300/70 sm:text-center">© 2025 <a target="_blank" rel="noopener" href="https://github.com/kete102" class="hover:underline">Flavius Catalin Neacsu™</a>. Todos los derechos reservados.
</span> <ul class="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-800/70 dark:text-gray-300/70 sm:mt-0"> <li> <a href="#sobre-mi" class="me-4 hover:underline md:me-6">Sobre mí</a> </li> <li> <a href="mailto:kete102@gmail.com" class="hover:underline">Contacto</a> </li> </ul> </div> </footer>`;
}, "/home/zion/dev/portfolio/src/components/Footer.astro", void 0);

const $$Astro$g = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="relative text-black dark:text-white"> <div class="absolute inset-0 -z-10 min-h-screen w-full items-center bg-white px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/zion/dev/portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$f = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Section;
  const { id, classname } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`w-full  flex flex-col mx-auto max-w-4xl ${classname}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/zion/dev/portfolio/src/components/Section.astro", void 0);

const $$Astro$e = createAstro();
const $$UserIcons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$UserIcons;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path> <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path> </svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/UserIcons.astro", void 0);

const $$Astro$d = createAstro();
const $$ProyectsIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ProyectsIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M7 8l-4 4l4 4"></path> <path d="M17 8l4 4l-4 4"></path> <path d="M14 4l-4 16"></path> </svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/ProyectsIcon.astro", void 0);

const $$Astro$c = createAstro();
const $$ExpressIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ExpressIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64"><path fill="#fff" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"></path></svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/ExpressIcon.astro", void 0);

const $$Astro$b = createAstro();
const $$FirebaseIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$FirebaseIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="600" height="600" fill="none" viewBox="0 0 600 600"><path fill="#FF9100" d="M213.918 560.499c23.248 9.357 48.469 14.909 74.952 15.834 35.84 1.252 69.922-6.158 100.391-20.234-36.537-14.355-69.627-35.348-97.869-61.448-18.306 29.31-45.382 52.462-77.474 65.848Z"></path><path fill="#FFC400" d="M291.389 494.66c-64.466-59.622-103.574-145.917-100.269-240.568.108-3.073.27-6.145.46-9.216a166.993 166.993 0 0 0-36.004-5.241 167.001 167.001 0 0 0-51.183 6.153c-17.21 30.145-27.594 64.733-28.888 101.781-3.339 95.611 54.522 179.154 138.409 212.939 32.093-13.387 59.168-36.51 77.475-65.848Z"></path><path fill="#FF9100" d="M291.39 494.657c14.988-23.986 24.075-52.106 25.133-82.403 2.783-79.695-50.792-148.251-124.942-167.381-.19 3.071-.352 6.143-.46 9.216-3.305 94.651 35.803 180.946 100.269 240.568Z"></path><path fill="#DD2C00" d="M308.231 20.858C266 54.691 232.652 99.302 212.475 150.693c-11.551 29.436-18.81 61.055-20.929 94.2 74.15 19.13 127.726 87.686 124.943 167.38-1.058 30.297-10.172 58.39-25.134 82.404 28.24 26.127 61.331 47.093 97.868 61.447 73.337-33.9 125.37-106.846 128.383-193.127 1.952-55.901-19.526-105.724-49.875-147.778-32.051-44.477-159.5-194.36-159.5-194.36Z"></path></svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/FirebaseIcon.astro", void 0);

const $$Astro$a = createAstro();
const $$MongoIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MongoIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" width="256" height="549" preserveAspectRatio="xMidYMid"><path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z"></path></svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/MongoIcon.astro", void 0);

const $$Astro$9 = createAstro();
const $$NodeIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$NodeIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256" height="292"><defs><linearGradient id="a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"></stop><stop offset="32.88%" stop-color="#418B3D"></stop><stop offset="63.52%" stop-color="#419637"></stop><stop offset="93.19%" stop-color="#3FA92D"></stop><stop offset="100%" stop-color="#3FAE2A"></stop></linearGradient><linearGradient id="c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"></stop><stop offset="40.32%" stop-color="#54A044"></stop><stop offset="71.36%" stop-color="#66B848"></stop><stop offset="90.81%" stop-color="#6CC04A"></stop></linearGradient><linearGradient id="f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"></stop><stop offset="28.64%" stop-color="#66B848"></stop><stop offset="59.68%" stop-color="#54A044"></stop><stop offset="86.24%" stop-color="#41873F"></stop></linearGradient><path id="b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><path id="e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path></defs><path fill="url(#a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><mask id="d" fill="#fff"><use xlink:href="#b"></use></mask><path fill="url(#c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#d)"></path><mask id="g" fill="#fff"><use xlink:href="#e"></use></mask><path fill="url(#f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#g)"></path></svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/NodeIcon.astro", void 0);

const $$Astro$8 = createAstro();
const $$ReactIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ReactIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 228" width="256" height="228" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"></path></svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/ReactIcon.astro", void 0);

const $$Astro$7 = createAstro();
const $$TailwindcssIcons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TailwindcssIcons;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 154" width="256" height="154" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"> <stop stop-color="#2298BD" offset="0%"></stop> <stop stop-color="#0ED7B5" offset="100%"></stop> </linearGradient></defs> <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"></path></svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/TailwindcssIcons.astro", void 0);

const $$Astro$6 = createAstro();
const $$TypescriptIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TypescriptIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 256 256" width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"></path><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"></path></svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/TypescriptIcon.astro", void 0);

const $$Astro$5 = createAstro();
const $$NeovimIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$NeovimIcon;
  return renderTemplate`<!--?xml version="1.0" encoding="UTF-8" standalone="no"?-->${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="602px" height="734px" viewBox="0 0 602 734" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <title>neovim-mark@2x</title> <description>Created with Sketch (http://www.bohemiancoding.com/sketch)</description> <defs> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1"> <stop stop-color="#16B0ED" stop-opacity="0.800235524" offset="0%"></stop> <stop stop-color="#0F59B2" stop-opacity="0.83700023" offset="100%"></stop> </linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2"> <stop stop-color="#7DB643" offset="0%"></stop> <stop stop-color="#367533" offset="100%"></stop> </linearGradient> <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-3"> <stop stop-color="#88C649" stop-opacity="0.8" offset="0%"></stop> <stop stop-color="#439240" stop-opacity="0.84" offset="100%"></stop> </linearGradient> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="mark-copy" transform="translate(2.000000, 3.000000)"> <path d="M0,155.5704 L155,-1 L154.999997,727 L0,572.237919 L0,155.5704 Z" id="Left---green" fill="url(#linearGradient-1)"></path> <path d="M443.060403,156.982405 L600,-1 L596.818792,727 L442,572.219941 L443.060403,156.982405 Z" id="Right---blue" fill="url(#linearGradient-2)" transform="translate(521.000000, 363.500000) scale(-1, 1) translate(-521.000000, -363.500000) "></path> <path d="M154.986294,0 L558,615.189696 L445.224605,728 L42,114.172017 L154.986294,0 Z" id="Cross---blue" fill="url(#linearGradient-3)"></path> <path d="M155,283.83232 L154.786754,308 L31,124.710606 L42.4619486,113 L155,283.83232 Z" id="Shadow" fill-opacity="0.13" fill="#000000"></path> </g> </g> </svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/NeovimIcon.astro", void 0);

const $$Astro$4 = createAstro();
const $$TmuxIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TmuxIcon;
  return renderTemplate`${maybeRenderHead()}<svg fill="none" height="2500" width="2500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160"${spreadAttributes(Astro2.props)}><g clip-rule="evenodd" fill-rule="evenodd"><path d="M0 116h160v28.996c0 8.287-6.722 15.004-14.998 15.004H14.998C6.716 160 0 153.293 0 144.996zm0 0h160v30H0z" fill="#1bb91f"></path><path d="M83 70V0h-6v146h6V76h77v-6zM0 15.007C0 6.719 6.722 0 14.998 0h130.004C153.285 0 160 6.725 160 15.007V146H0z" fill="#3c3c3c"></path></g></svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/TmuxIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$WeztermIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$WeztermIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="55mm" viewBox="0 0 55.010814 55" version="1.1" id="svg8" inkscape:export-filename="/Users/wez/Documents/wezterm-icon.png" inkscape:export-xdpi="59.112728" inkscape:export-ydpi="59.112728"> <defs id="defs2"> <linearGradient id="linearGradient1113"> <stop style="stop-color:#2b383f;stop-opacity:1" offset="0" id="stop1109"></stop> <stop style="stop-color:#172024;stop-opacity:1" offset="1" id="stop1111"></stop> </linearGradient> ${renderComponent($$result, "inkscape:path-effect", "inkscape:path-effect", { "effect": "fillet_chamfer", "id": "path-effect943", "is_visible": "true", "lpeversion": "1", "satellites_param": "F,0,0,1,0,2.6458333,0,1 @ F,0,0,1,0,2.6458333,0,1 @ F,0,0,1,0,0,0,1 @ F,0,0,1,0,0,0,1", "unit": "px", "method": "auto", "mode": "F", "radius": "10", "chamfer_steps": "1", "flexible": "false", "use_knot_distance": "true", "apply_no_radius": "true", "apply_with_radius": "true", "only_selected": "false", "hide_knots": "false" })} ${renderComponent($$result, "inkscape:path-effect", "inkscape:path-effect", { "effect": "fillet_chamfer", "id": "path-effect939", "is_visible": "true", "lpeversion": "1", "satellites_param": "F,0,0,1,0,0,0,1 @ F,0,0,1,0,0,0,1 @ F,0,0,1,0,0,0,1 @ F,0,0,1,0,0,0,1", "unit": "px", "method": "auto", "mode": "C", "radius": "10", "chamfer_steps": "1", "flexible": "false", "use_knot_distance": "true", "apply_no_radius": "true", "apply_with_radius": "true", "only_selected": "true", "hide_knots": "false" })} ${renderComponent($$result, "inkscape:path-effect", "inkscape:path-effect", { "effect": "fillet_chamfer", "id": "path-effect934", "is_visible": "true", "lpeversion": "1", "satellites_param": "F,1,0,1,0,0.1,0,1 @ F,1,0,1,0,0.1,0,1 @ F,1,0,1,0,0.1,0,1 @ F,1,0,1,0,0.1,0,1", "unit": "px", "method": "auto", "mode": "F", "radius": "10", "chamfer_steps": "1", "flexible": "true", "use_knot_distance": "true", "apply_no_radius": "true", "apply_with_radius": "true", "only_selected": "false", "hide_knots": "false" })} <linearGradient id="linearGradient905"> <stop style="stop-color:#ff00ff;stop-opacity:1;" offset="0" id="stop901"></stop> <stop style="stop-color:#ff00ff;stop-opacity:0;" offset="1" id="stop903"></stop> </linearGradient> ${renderComponent($$result, "inkscape:path-effect", "inkscape:path-effect", { "effect": "fillet_chamfer", "id": "path-effect3137", "is_visible": "true", "lpeversion": "1", "satellites_param": "F,1,0,1,0,0.1,0,1 @ F,1,0,1,0,0.1,0,1 @ F,1,0,1,0,0.1,0,1 @ F,1,0,1,0,0.1,0,1", "unit": "px", "method": "auto", "mode": "F", "radius": "10", "chamfer_steps": "1", "flexible": "true", "use_knot_distance": "true", "apply_no_radius": "true", "apply_with_radius": "true", "only_selected": "false", "hide_knots": "false" })} ${renderComponent($$result, "inkscape:path-effect", "inkscape:path-effect", { "effect": "fillet_chamfer", "id": "path-effect2756", "is_visible": "true", "lpeversion": "1", "satellites_param": "F,1,0,1,0,0.2,0,1 @ F,1,0,1,0,0.2,0,1 @ F,1,0,1,0,0.2,0,1 @ F,1,0,1,0,0.2,0,1", "unit": "px", "method": "auto", "mode": "F", "radius": "20", "chamfer_steps": "1", "flexible": "true", "use_knot_distance": "true", "apply_no_radius": "true", "apply_with_radius": "true", "only_selected": "false", "hide_knots": "false" })} <linearGradient xlink:href="#linearGradient905" id="linearGradient907" x1="39.079655" y1="72.459702" x2="90.17334" y2="72.459702" gradientUnits="userSpaceOnUse"></linearGradient> <linearGradient xlink:href="#linearGradient1113" id="linearGradient1115" x1="66.095612" y1="43.676846" x2="66.095612" y2="98.112801" gradientUnits="userSpaceOnUse"></linearGradient> </defs> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="2.8190618" inkscape:cx="85.466562" inkscape:cy="106.8872" inkscape:document-units="mm" inkscape:current-layer="layer1" inkscape:document-rotation="0" showgrid="false" inkscape:window-width="1252" inkscape:window-height="847" inkscape:window-x="54" inkscape:window-y="25" inkscape:window-maximized="0" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0"></sodipodi:namedview> <metadata id="metadata5"> <rdf:RDF> <cc:Work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title></dc:title> <dc:creator> <cc:Agent> <dc:title>Wez Furlong</dc:title> </cc:Agent> </dc:creator> </cc:Work> </rdf:RDF> </metadata> <g id="layer1" transform="translate(-37.656612,-43.207115)"> <path style="opacity:1;fill:url(#linearGradient1115);fill-opacity:1;stroke:none;stroke-width:7.01263;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none" id="rect10" width="55" height="55" x="37.656612" y="43.207115" d="m 48.656612,43.207115 h 33 a 11,11 45 0 1 11,11 v 33 a 11,11 135 0 1 -11,11 h -33 a 11,11 45 0 1 -11,-11 v -33 a 11,11 135 0 1 11,-11 z" inkscape:path-effect="#path-effect2756"></path> <g aria-label="$W" id="text3144" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:47.9778px;line-height:1.25;font-family:'Operator Mono';-inkscape-font-specification:'Operator Mono';fill:#4e49ee;fill-opacity:1;stroke-width:0.264583" transform="matrix(0.84051205,0,0,0.84423619,11.628829,8.3486634)"> <path d="m 47.07925,66.906972 c 0,-1.247423 1.247423,-2.015068 4.270024,-2.015068 l -1.007534,5.517447 c -1.871134,-1.247423 -3.26249,-2.39889 -3.26249,-3.502379 z m 8.06027,13.625694 c 0,1.295401 -1.295401,2.159001 -4.270024,2.302935 l 1.055511,-5.853292 c 1.871135,1.247423 3.214513,2.350912 3.214513,3.550357 z m -5.277558,11.99445 0.911578,-5.421491 c 7.244648,-0.67169 10.075338,-3.598335 10.075338,-6.812848 0,-3.310468 -4.030135,-5.901269 -7.724426,-8.156225 l 1.343379,-7.100715 c 1.535289,0.143934 3.358446,0.431801 5.517447,0.863601 l 0.623711,-4.941713 C 58.977744,60.717836 57.442454,60.62188 56.00312,60.525924 l 1.10349,-5.277558 -4.749802,-0.04798 -0.911579,5.373513 c -7.244647,0.575734 -10.075337,3.598335 -10.075337,6.812847 0,3.262491 4.030135,5.757336 7.724425,7.916337 l -1.343378,7.436559 c -1.727201,-0.09596 -3.838224,-0.383822 -6.285092,-0.815623 l -0.959556,4.941714 c 2.063046,0.239889 3.982158,0.383822 5.709358,0.4318 l -1.055511,5.181602 z" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:47.9778px;font-family:'Operator Mono';-inkscape-font-specification:'Operator Mono';fill:#4e49ee;fill-opacity:1;stroke-width:0.264583" id="path854"></path> <path d="m 81.132992,88.73687 h 5.373513 c 0.671689,-5.613403 1.631245,-16.936163 2.254957,-29.746235 h -5.133625 c -0.143933,3.022601 -0.671689,21.014275 -0.8636,22.501587 h -0.143934 c -1.2954,-4.845757 -2.350912,-8.779937 -3.646312,-13.577717 h -2.926646 c -1.247423,4.79778 -2.111023,8.396115 -3.406424,13.577717 H 72.44901 C 72.305077,80.00491 71.489454,62.013236 71.393499,58.990635 h -5.325536 c 0.623711,12.810072 1.53529,24.132832 2.206979,29.746235 H 73.5525 l 3.69429,-14.249406 z" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:47.9778px;font-family:'Operator Mono';-inkscape-font-specification:'Operator Mono';fill:#4e49ee;fill-opacity:1;stroke-width:0.264583" id="path856"></path> </g> </g> </svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/WeztermIcon.astro", void 0);

const TAGS = {
  MONGO: {
    name: "Mongo",
    class: "bg-zinc-700 border-2 border-zinc-900 text-white",
    icon: $$MongoIcon
  },
  REACT: {
    name: "React",
    class: "bg-blue-500 border-2 border-blue-900 text-white",
    icon: $$ReactIcon
    // Asegúrate de importar o definir este ícono
  },
  TAILWINDCSS: {
    name: "TailwindCSS",
    class: "bg-teal-700  border-2 border-teal-900 text-white",
    icon: $$TailwindcssIcons
    // Asegúrate de importar o definir este ícono
  },
  EXPRESS: {
    name: "Express",
    class: "bg-gray-800 border-2 border-gray-900 text-white",
    icon: $$ExpressIcon
    // Asegúrate de importar o definir este ícono
  },
  NODE: {
    name: "Node",
    class: "bg-green-500 border-2 border-green-900  text-white",
    icon: $$NodeIcon
    // Asegúrate de importar o definir este ícono
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-yellow-500 border-2 border-yellow-900 text-black",
    icon: $$FirebaseIcon
    // Asegúrate de importar o definir este ícono
  },
  TYPESCRIPT: {
    name: "Typescript",
    class: "bg-sky-500 border-2 border-sky-900 text-white",
    icon: $$TypescriptIcon
  },
  NEOVIM: {
    name: "Neovim",
    class: "bg-emerald-500 border-2 border-emerald-900 text-white",
    icon: $$NeovimIcon
  },
  TMUX: {
    name: "Tmux",
    class: "bg-gray-500 border-2 border-gray-900 text-white",
    icon: $$TmuxIcon
  },
  WEZTERM: {
    name: "Wezterm",
    class: "bg-violet-500 border-2 border-violet-900 text-white",
    icon: $$WeztermIcon
  }
};
const PROYECTS = [
  {
    title: "Kanban Board App",
    description: "Aplicación fullstack para organizar tareas de manera visual y eficiente.",
    link: "https://github.com/kete102/kanban-board",
    image: "#",
    techStack: [
      TAGS.TAILWINDCSS,
      TAGS.EXPRESS,
      TAGS.MONGO,
      TAGS.REACT,
      TAGS.NODE
    ]
  },
  {
    title: "FIFO Tasks",
    description: `Herramienta para gestionar procesos y tareas siguiendo el principio "First In, First Out.`,
    link: "https://github.com/kete102/FIFO-prueba-tecnica",
    image: "#",
    techStack: [TAGS.REACT, TAGS.TAILWINDCSS, TAGS.FIREBASE]
  },
  {
    title: "Movies App",
    description: "Buscador de películas usando una API.Incluye funciones de filtrado, ordenación y optimización de rendimiento.",
    link: "https://github.com/kete102/movies-app",
    image: "#",
    techStack: [TAGS.REACT, TAGS.TYPESCRIPT]
  },
  {
    title: "Cat facts",
    description: "This project fetches a random cat fact and generates a custom cat image based on the first three words of the fact. The generated cat image is personalized with the words extracted from the fact.",
    link: "https://github.com/kete102/Cat-Facts-with-Image",
    image: "#",
    techStack: [TAGS.REACT, TAGS.TYPESCRIPT]
  },
  {
    title: "My dotfiles",
    description: "Repositorio con mis configuraciones personalizadas para Neovim, tmux, WezTerm y bashrc, diseñadas para maximizar la productividad.",
    link: "https://github.com/kete102/dotFiles",
    image: "#",
    techStack: [TAGS.NEOVIM, TAGS.TMUX, TAGS.WEZTERM]
  }
];

const $$ProyectsSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 class="inline-flex items-center gap-2 text-2xl font-bold"> ${renderComponent($$result, "ProyectsIcon", $$ProyectsIcon, { "class": "size-8" })}Proyectos
</h2> <div class="mx-auto mt-6 grid w-full grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-2 lg:gap-x-4"> ${PROYECTS.map((proyect) => renderTemplate`<article class="block h-fit max-w-sm rounded-lg border border-black bg-transparent p-6 shadow-2xl transition-all backdrop:blur-2xl hover:scale-105 dark:bg-zinc-900"> <a${addAttribute(proyect.link, "href")} rel="noopener" target="_blank"> <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> ${proyect.title} </h5> <p class="text-pretty font-normal text-gray-700 dark:text-gray-400"> ${proyect.description} </p> <div class="my-3"> <ul class="flex flex-wrap items-center gap-x-1 gap-y-2"> ${proyect.techStack.map((tag) => renderTemplate`<li${addAttribute(`inline-flex items-center gap-2 rounded-full px-1.5 py-0.5 ${tag.class}`, "class")}> <span>${tag.name}</span> ${renderComponent($$result, "tag.icon", tag.icon, { "class": "size-5" })} </li>`)} </ul> </div> </a> </article>`)} </div>`;
}, "/home/zion/dev/portfolio/src/components/sections/ProyectsSection.astro", void 0);

const $$Badge = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span class="text-md me-2 rounded-full bg-blue-400 px-2.5 py-0.5 font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"> ${renderSlot($$result, $$slots["default"])} </span>`;
}, "/home/zion/dev/portfolio/src/components/Badge.astro", void 0);

const $$Astro$2 = createAstro();
const $$GitHubIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GitHubIcon;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 250" width="256" height="250" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"${spreadAttributes(Astro2.props)}> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/GitHubIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$LinkedInIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkedInIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} width="256" height="256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path></svg>`;
}, "/home/zion/dev/portfolio/src/components/icons/LinkedInIcon.astro", void 0);

const $$Astro = createAstro();
const $$SocilaLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocilaLink;
  const { link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/zion/dev/portfolio/src/components/SocilaLink.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="inline-flex items-center gap-x-4"> <h1 class="my-1 inline-flex items-center gap-x-2 text-5xl font-bold">
Flavius Catalin Neacsu
</h1> <img src="https://lh3.googleusercontent.com/ogw/AF2bZyhAbv3QFpmVf9oiRmY6zSjZt6I5ij-Ptbdkqfk2oB-O-ztW=s32-c-mo" alt="flavius photo" class="h-14 w-14 rounded-full"> </div> <a href="https://www.linkedin.com/in/flaviuscatalinneacsu/" class="w-fit transition-all hover:scale-110" target="_blank" rel="noopener"> ${renderComponent($$result, "Badge", $$Badge, {}, { "default": ($$result2) => renderTemplate`Disponible para trabajar` })} </a> <h2 class="my-4 text-pretty text-xl font-normal opacity-80"> <span class="font-medium text-violet-700">Desarrollador Web</span>. Disfruto
	creando aplicaciones funcionales, eficientes y atractivas. Me apasiona la
	programación y aprender cosas nuevas.
</h2> <ul class="flex items-center gap-x-2 md:gap-x-4"> <li> ${renderComponent($$result, "SocialLink", $$SocilaLink, { "link": "https://github.com/kete102" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GitHubIcon", $$GitHubIcon, { "class": "size-5" })} Github
` })} </li> <li> ${renderComponent($$result, "SocialLink", $$SocilaLink, { "link": "https://www.linkedin.com/in/flaviuscatalinneacsu/" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LinkedInIcon", $$LinkedInIcon, { "class": "size-5" })} LinkedIn
` })} </li> </ul>`;
}, "/home/zion/dev/portfolio/src/components/sections/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="mt-8 flex flex-row items-center"> <div class="w-full max-w-2xl space-y-6 text-pretty"> <p class="text-normal font-mono text-xl">
Me llamo <strong class="text-purple-500">Neacsu Flavius Catalin</strong>,
			pero todo el mundo me conoce como '<i>Kete</i>'. Descrubí el mundo de la
			programación a través un creador de contenido japonés, <a class="text-purple-500 underline" rel="noopener" target="_blank" href="https://www.youtube.com/@devaslife">Takuya Matsuyama</a>. Con sus videos emepecé a navegar en este mundo, así como desarrollar mi
			afición por <a class="text-purple-500 underline" target="_blank" rel="noopener" href="https://github.com/kete102/dotFiles">Neovim</a>.
</p> <p class="text-normal font-mono text-xl">
Diseñar aplicaciones me permite unir lógica y creatividad, un balance que
			también busco fuera del código. La música y la lectura son mis vías para
			desconectar, inspirarme y regresar con una visión más clara para resolver
			problemas o crear algo completamente nuevo.
</p> </div> <img> </article>`;
}, "/home/zion/dev/portfolio/src/components/sections/About.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Flavius Catalin Neacsu - Desarrollador y Programador Web", "description": "Entusiaste de la programcion y el desarrollo web." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mx-auto w-full max-w-md p-2 md:max-w-full"> ${renderComponent($$result2, "Section", $$Section, { "classname": "mt-8 px-2 md:px-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ` })} ${renderComponent($$result2, "Section", $$Section, { "id": "proyectos", "classname": "mt-16 p-2 md:px-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "ProyectosSection", $$ProyectsSection, {})} ` })} ${renderComponent($$result2, "Section", $$Section, { "id": "sobre-mi", "classname": "mt-20 p-2 md:px-4" }, { "default": ($$result3) => renderTemplate` <h2 class="inline-flex items-center gap-2 text-2xl font-bold"> ${renderComponent($$result3, "UserIcon", $$UserIcons, { "class": "size-8" })}Sobre mí
</h2> ${renderComponent($$result3, "About", $$About, {})} ` })} </main> ` })}`;
}, "/home/zion/dev/portfolio/src/pages/index.astro", void 0);

const $$file = "/home/zion/dev/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
