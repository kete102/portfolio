import ExpressIcon from '@/components/icons/ExpressIcon.astro'
import FirebaseIcon from '@/components/icons/FirebaseIcon.astro'
import MongoIcon from '@/components/icons/MongoIcon.astro'
import NodeIcon from '@/components/icons/NodeIcon.astro'
import ReactIcon from '@/components/icons/ReactIcon.astro'
import TailwindcssIcon from '@/components/icons/TailwindcssIcons.astro'
import TypescriptIcon from '@/components/icons/TypescriptIcon.astro'
import NeovimIcon from '@/components/icons/NeovimIcon.astro'
import TmuxIcon from '@/components/icons/TmuxIcon.astro'
import WeztermIcon from '@/components/icons/WeztermIcon.astro'

const TAGS = {
	MONGO: {
		name: 'Mongo',
		class: 'bg-zinc-700 border-2 border-zinc-900 text-white',
		icon: MongoIcon
	},
	REACT: {
		name: 'React',
		class: 'bg-blue-500 border-2 border-blue-900 text-white',
		icon: ReactIcon // Asegúrate de importar o definir este ícono
	},
	TAILWINDCSS: {
		name: 'TailwindCSS',
		class: 'bg-teal-700  border-2 border-teal-900 text-white',
		icon: TailwindcssIcon // Asegúrate de importar o definir este ícono
	},
	EXPRESS: {
		name: 'Express',
		class: 'bg-gray-800 border-2 border-gray-900 text-white',
		icon: ExpressIcon // Asegúrate de importar o definir este ícono
	},
	NODE: {
		name: 'Node',
		class: 'bg-green-500 border-2 border-green-900  text-white',
		icon: NodeIcon // Asegúrate de importar o definir este ícono
	},
	FIREBASE: {
		name: 'Firebase',
		class: 'bg-yellow-500 border-2 border-yellow-900 text-black',
		icon: FirebaseIcon // Asegúrate de importar o definir este ícono
	},
	TYPESCRIPT: {
		name: 'Typescript',
		class: 'bg-sky-500 border-2 border-sky-900 text-white',
		icon: TypescriptIcon
	},
	NEOVIM: {
		name: 'Neovim',
		class: 'bg-emerald-500 border-2 border-emerald-900 text-white',
		icon: NeovimIcon
	},
	TMUX: {
		name: 'Tmux',
		class: 'bg-gray-500 border-2 border-gray-900 text-white',
		icon: TmuxIcon
	},
	WEZTERM: {
		name: 'Wezterm',
		class: 'bg-violet-500 border-2 border-violet-900 text-white',
		icon: WeztermIcon
	}
}

export const PROYECTS = [
	{
		title: 'Kanban Board App',
		description:
			'Aplicación fullstack para organizar tareas de manera visual y eficiente.',
		link: 'https://github.com/kete102/kanban-board',
		image: '#',
		techStack: [
			TAGS.TAILWINDCSS,
			TAGS.EXPRESS,
			TAGS.MONGO,
			TAGS.REACT,
			TAGS.NODE
		]
	},
	{
		title: 'FIFO Tasks',
		description: `Herramienta para gestionar procesos y tareas siguiendo el principio "First In, First Out.`,
		link: 'https://github.com/kete102/FIFO-prueba-tecnica',
		image: '#',
		techStack: [TAGS.REACT, TAGS.TAILWINDCSS, TAGS.FIREBASE]
	},
	{
		title: 'Movies App',
		description:
			'Buscador de películas usando una API.Incluye funciones de filtrado, ordenación y optimización de rendimiento.',
		link: 'https://github.com/kete102/movies-app',
		image: '#',
		techStack: [TAGS.REACT, TAGS.TYPESCRIPT]
	},
	{
		title: 'Cat facts',
		description:
			'This project fetches a random cat fact and generates a custom cat image based on the first three words of the fact. The generated cat image is personalized with the words extracted from the fact.',
		link: 'https://github.com/kete102/Cat-Facts-with-Image',
		image: '#',
		techStack: [TAGS.REACT, TAGS.TYPESCRIPT]
	},
	{
		title: 'My dotfiles',
		description:
			'Repositorio con mis configuraciones personalizadas para Neovim, tmux, WezTerm y bashrc, diseñadas para maximizar la productividad.',
		link: 'https://github.com/kete102/dotFiles',
		image: '#',
		techStack: [TAGS.NEOVIM, TAGS.TMUX, TAGS.WEZTERM]
	}
]
