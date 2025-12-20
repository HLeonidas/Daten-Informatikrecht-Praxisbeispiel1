export type Genre = 'Action' | 'RPG' | 'Indie' | 'Co-op' | 'Racing' | 'Strategy' | 'Simulation' | 'Adventure' | 'Puzzle' | 'Open World';
export const DEFAULT_COVER_SRC = 'assets/covers/default-cover.svg';
export const DEFAULT_COVER_NOTE =
	'Mock-Cover (Studienprojekt) – kein offizielles Artwork, keine Logos/Typografie der Publisher.';

export type Game = {
	id: string;
	title: string;
	genres: Genre[];
	rating: number; // 0..5
	cloud: boolean;
	isNew: boolean;
	description: string;
	longDescription: string;
	features: string[];
	tags: string[];
	coverSrc: string;
	coverAlt: string;
	publisher?: string;
	releaseYear?: number;
	coverNote?: string;
};

export const GAMES: Game[] = [
	{
		id: 'elden-ring',
		title: 'Elden Ring',
		genres: ['Action', 'RPG', 'Open World'],
		rating: 4.9,
		cloud: true,
		isNew: false,

		description: 'Ein Open-World-Action-RPG mit düsterer Fantasy-Welt und forderndem Gameplay.',
		longDescription:
			'Elden Ring ist ein Open-World-Action-RPG, das für seine offene Spielwelt, anspruchsvolle Kämpfe '
			+ 'und atmosphärische Erzählweise bekannt ist. '
			+ 'Dieses Listing ist Teil eines Studienprojekts und nutzt eigenständig erstellte Mock-Cover.',

		features: [
			'Offene Spielwelt',
			'Anspruchsvolle Kämpfe',
			'Erkundung & Charakterentwicklung'
		],

		tags: ['Fantasy', 'Open World', 'Soulslike'],

		publisher: 'FromSoftware / Bandai Namco',
		releaseYear: 2022,

		coverSrc: 'assets/covers/elden-ring-mock.svg',
		coverAlt: 'Mock-Cover zu Elden Ring',
		coverNote: 'Eigenständig erstelltes Mock-Cover – kein offizielles Artwork'
	},
	{
		id: 'g1',
		title: 'Neon Drift',
		genres: ['Racing'],
		rating: 4.4,
		cloud: true,
		isNew: true,
		description: 'Arcade-Racer mit Neon-Vibes (mock).',
		longDescription:
			'Neon Drift ist ein schneller Arcade-Racer mit kurzen Runden, Drift-Boosts und einem stylischen Neon-Look. '
			+ 'Dieses Listing ist Teil eines Studienprojekts und nutzt Mock-Daten.',
		features: ['Kurz-Runden (mock)', 'Drift-Boost (mock)', 'Leaderboards (mock)'],
		tags: ['Arcade', 'Neon', 'Boost'],
		coverSrc: 'assets/covers/neon-drift.svg',
		coverAlt: 'Covergrafik zu Neon Drift'
	},
	{
		id: 'the-witcher-3',
		title: 'The Witcher 3: Wild Hunt',
		genres: ['RPG', 'Open World', 'Adventure'],
		rating: 4.8,
		cloud: true,
		isNew: false,
		description: 'Story-lastiges Open-World-RPG in düsterer Fantasy.',
		longDescription:
			'The Witcher 3: Wild Hunt ist ein Open-World-RPG mit starkem Fokus auf Story, Quests und Entscheidungen. ' +
			'Dieses Listing ist Teil eines Studienprojekts und nutzt eigenständig erstellte Mock-Cover.',
		features: ['Offene Welt', 'Entscheidungsbasierte Quests', 'Charakterentwicklung'],
		tags: ['Fantasy', 'Open World', 'Story'],
		publisher: 'CD Projekt',
		releaseYear: 2015,
		coverSrc: 'assets/covers/witcher-3-mock.svg',
		coverAlt: 'Default Mock-Cover zu The Witcher 3',
		coverNote: DEFAULT_COVER_NOTE
	},
	{
		id: 'cyberpunk-2077',
		title: 'Cyberpunk 2077',
		genres: ['RPG', 'Open World', 'Action'],
		rating: 4.2,
		cloud: true,
		isNew: false,
		description: 'Open-World-RPG in einer dystopischen Sci-Fi-Metropole.',
		longDescription:
			'Cyberpunk 2077 ist ein story-getriebenes Open-World-RPG in Night City. ' +
			'Dieses Listing ist Teil eines Studienprojekts und nutzt Mock-Daten sowie Mock-Cover.',
		features: ['Open World', 'Story-Missionen', 'Builds & Skills'],
		tags: ['Sci-Fi', 'Dystopie', 'Open World'],
		publisher: 'CD Projekt',
		releaseYear: 2020,
		coverSrc: DEFAULT_COVER_SRC,
		coverAlt: 'Default Mock-Cover zu Cyberpunk 2077',
		coverNote: DEFAULT_COVER_NOTE
	},
	{
		id: 'hades',
		title: 'Hades',
		genres: ['Action', 'Indie'],
		rating: 4.7,
		cloud: true,
		isNew: false,
		description: 'Rasanter Roguelike-Action-Hit mit starkem Artstyle.',
		longDescription:
			'Hades kombiniert schnelle Kämpfe mit Roguelike-Struktur und einer erzählerischen Meta-Progression. ' +
			'Dieses Listing ist Teil eines Studienprojekts und nutzt Mock-Cover.',
		features: ['Schnelle Kämpfe', 'Roguelike Runs', 'Meta-Progression'],
		tags: ['Roguelike', 'Indie', 'Action'],
		publisher: 'Supergiant Games',
		releaseYear: 2020,
		coverSrc: DEFAULT_COVER_SRC,
		coverAlt: 'Default Mock-Cover zu Hades',
		coverNote: DEFAULT_COVER_NOTE
	},
	{
		id: 'stardew-valley',
		title: 'Stardew Valley',
		genres: ['Indie', 'Simulation'],
		rating: 4.6,
		cloud: true,
		isNew: false,
		description: 'Farming- und Life-Sim mit viel Charme (und sehr viel Content).',
		longDescription:
			'Stardew Valley ist eine entspannte Farming- und Lebenssimulation mit Sammeln, Crafting und Beziehungen. ' +
			'Dieses Listing ist Teil eines Studienprojekts und nutzt Mock-Cover.',
		features: ['Farming', 'Crafting', 'Entspannte Progression'],
		tags: ['Farming', 'Cozy', 'Indie'],
		publisher: 'ConcernedApe',
		releaseYear: 2016,
		coverSrc: DEFAULT_COVER_SRC,
		coverAlt: 'Default Mock-Cover zu Stardew Valley',
		coverNote: DEFAULT_COVER_NOTE
	},
	{
		id: 'civilization-vi',
		title: 'Sid Meier’s Civilization VI',
		genres: ['Strategy', 'Simulation'],
		rating: 4.4,
		cloud: false,
		isNew: false,
		description: 'Rundenbasierte 4X-Strategie: Baue ein Imperium über Jahrhunderte.',
		longDescription:
			'Civilization VI ist eine rundenbasierte Strategiesimulation, in der du Technologien erforschst, Städte ausbaust ' +
			'und diplomatisch oder militärisch agierst. Studienprojekt-Listing mit Mock-Cover.',
		features: ['4X-Gameplay', 'Tech-Tree', 'Diplomatie & Expansion'],
		tags: ['4X', 'Rundenbasiert', 'Strategie'],
		publisher: 'Firaxis Games / 2K',
		releaseYear: 2016,
		coverSrc: DEFAULT_COVER_SRC,
		coverAlt: 'Default Mock-Cover zu Civilization VI',
		coverNote: DEFAULT_COVER_NOTE
	},
	{
		id: 'forza-horizon-5',
		title: 'Forza Horizon 5',
		genres: ['Racing', 'Open World'],
		rating: 4.5,
		cloud: true,
		isNew: false,
		description: 'Open-World-Racer mit Festival-Feeling und riesiger Map.',
		longDescription:
			'Forza Horizon 5 ist ein Open-World-Rennspiel mit großen Events, vielen Fahrzeugen und frei befahrbarer Welt. ' +
			'Studienprojekt-Listing, Mock-Cover.',
		features: ['Open-World-Racing', 'Events & Challenges', 'Fahrzeug-Sammlung'],
		tags: ['Racing', 'Open World', 'Festival'],
		publisher: 'Playground Games / Xbox Game Studios',
		releaseYear: 2021,
		coverSrc: DEFAULT_COVER_SRC,
		coverAlt: 'Default Mock-Cover zu Forza Horizon 5',
		coverNote: DEFAULT_COVER_NOTE
	},
	{
		id: 'portal-2',
		title: 'Portal 2',
		genres: ['Puzzle', 'Adventure'],
		rating: 4.9,
		cloud: false,
		isNew: false,
		description: 'Kult-Puzzle-Adventure mit Portal-Mechanik und viel Humor.',
		longDescription:
			'Portal 2 ist ein Puzzle-Adventure rund um Portale, Physik und cleveres Level-Design. ' +
			'Dieses Listing ist Teil eines Studienprojekts und nutzt Mock-Cover.',
		features: ['Puzzle-Levels', 'Physik-Mechaniken', 'Koop-Modus (optional)'],
		tags: ['Puzzle', 'Kult', 'Humor'],
		publisher: 'Valve',
		releaseYear: 2011,
		coverSrc: 'assets/covers/portal-2-mock.svg',
		coverAlt: 'Default Mock-Cover zu Portal 2',
		coverNote: DEFAULT_COVER_NOTE
	},
	{
		id: 'minecraft',
		title: 'Minecraft',
		genres: ['Simulation', 'Adventure'],
		rating: 4.7,
		cloud: true,
		isNew: false,
		description: 'Sandbox-Klassiker: Bauen, Erkunden, Überleben (oder kreativ sein).',
		longDescription:
			'Minecraft ist ein Sandbox-Spiel, das Kreativität, Erkundung und Survival verbindet. ' +
			'Studienprojekt-Listing mit Mock-Cover (keine offiziellen Assets).',
		features: ['Sandbox', 'Bauen & Crafting', 'Erkundung'],
		tags: ['Sandbox', 'Creative', 'Survival'],
		publisher: 'Mojang Studios',
		releaseYear: 2011,
		coverSrc: DEFAULT_COVER_SRC,
		coverAlt: 'Default Mock-Cover zu Minecraft',
		coverNote: DEFAULT_COVER_NOTE
	},
	{
		id: 'baldurs-gate-3',
		title: "Baldur’s Gate 3",
		genres: ['RPG', 'Strategy', 'Adventure'],
		rating: 4.8,
		cloud: true,
		isNew: false,
		description: 'RPG mit starkem Fokus auf Entscheidungen, Party und taktische Kämpfe.',
		longDescription:
			"Baldur’s Gate 3 ist ein modernes Party-RPG mit taktischen, rundenbasierten Kämpfen und vielen Entscheidungen. " +
			'Studienprojekt-Listing mit Mock-Cover.',
		features: ['Party-RPG', 'Taktische Kämpfe', 'Entscheidungsfreiheit'],
		tags: ['RPG', 'Taktik', 'Story'],
		publisher: 'Larian Studios',
		releaseYear: 2023,
		coverSrc: 'assets/covers/baldurs-gate-3-mock.svg',
		coverAlt: 'Default Mock-Cover zu Baldur’s Gate 3',
		coverNote: DEFAULT_COVER_NOTE
	},
	{
		id: 'subnautica',
		title: 'Subnautica',
		genres: ['Adventure', 'Simulation', 'Open World'],
		rating: 4.5,
		cloud: false,
		isNew: false,
		description: 'Survival-Adventure unter Wasser: Erkunden, craften, überleben.',
		longDescription:
			'Subnautica ist ein Survival-Adventure in einer offenen Unterwasserwelt mit Basenbau und Erkundung. ' +
			'Studienprojekt-Listing mit Mock-Cover.',
		features: ['Erkundung', 'Survival & Crafting', 'Basenbau'],
		tags: ['Survival', 'Underwater', 'Exploration'],
		publisher: 'Unknown Worlds Entertainment',
		releaseYear: 2018,
		coverSrc: DEFAULT_COVER_SRC,
		coverAlt: 'Default Mock-Cover zu Subnautica',
		coverNote: DEFAULT_COVER_NOTE
	}

];
