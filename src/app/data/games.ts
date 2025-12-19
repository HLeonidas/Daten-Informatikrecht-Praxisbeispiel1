export type Genre = 'Action' | 'RPG' | 'Indie' | 'Co-op' | 'Racing' | 'Strategy';

export type Game = {
	id: string;
	title: string;
	genre: Genre;
	rating: number; // 0..5
	cloud: boolean;
	isNew: boolean;
	description: string;
	longDescription: string;
	features: string[];
	tags: string[];
	coverSrc: string;
	coverAlt: string;
};

export const GAMES: Game[] = [
	{
		id: 'g1',
		title: 'Neon Drift',
		genre: 'Racing',
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
		id: 'g2',
		title: 'Runebound',
		genre: 'RPG',
		rating: 4.7,
		cloud: false,
		isNew: false,
		description: 'Story-RPG mit Crafting (mock).',
		longDescription:
			'Runebound ist ein story-getriebenes RPG mit Quests, Crafting und Party-Building. '
			+ 'Alle Inhalte sind Mock-Daten für die Übung.',
		features: ['Quests (mock)', 'Crafting (mock)', 'Party-System (mock)'],
		tags: ['Story', 'Crafting', 'Quests'],
		coverSrc: '',
		coverAlt: 'Covergrafik zu Runebound'
	},
	{
		id: 'g3',
		title: 'Tiny Galaxy',
		genre: 'Indie',
		rating: 4.1,
		cloud: true,
		isNew: true,
		description: 'Cozy Space-Adventure (mock).',
		longDescription:
			'Tiny Galaxy ist ein kleines Indie-Abenteuer im All mit gemütlichem Gameplay. '
			+ 'Mock-Daten für Studienprojekt.',
		features: ['Cozy Gameplay (mock)', 'Exploration (mock)', 'Kurz-Story (mock)'],
		tags: ['Cozy', 'Space', 'Indie'],
		coverSrc: '',
		coverAlt: 'Covergrafik zu Tiny Galaxy'
	},
	{
		id: 'g4',
		title: 'Party Protocol',
		genre: 'Co-op',
		rating: 4.3,
		cloud: false,
		isNew: false,
		description: 'Chaotischer Co-op Spaß (mock).',
		longDescription:
			'Party Protocol ist ein Co-op Spiel für 2–4 Spieler mit schnellen Runden. '
			+ 'Mock-Daten für Studienprojekt.',
		features: ['2–4 Spieler (mock)', 'Minigames (mock)', 'Local/Online (mock)'],
		tags: ['Co-op', 'Party', 'Minigames'],
		coverSrc: '',
		coverAlt: 'Covergrafik zu Party Protocol'
	},
	{
		id: 'g5',
		title: 'Hex Tactics',
		genre: 'Strategy',
		rating: 4.5,
		cloud: true,
		isNew: false,
		description: 'Rundenstrategie mit Tiefgang (mock).',
		longDescription:
			'Hex Tactics ist ein rundenbasiertes Strategiespiel auf Hex-Feldern. '
			+ 'Mock-Daten für Studienprojekt.',
		features: ['Rundenbasiert (mock)', 'Einheiten-Upgrades (mock)', 'Skirmish (mock)'],
		tags: ['Tactics', 'Turn-based', 'Hex'],
		coverSrc: '',
		coverAlt: 'Covergrafik zu Hex Tactics'
	},
	{
		id: 'g6',
		title: 'Crimson Runner',
		genre: 'Action',
		rating: 3.9,
		cloud: false,
		isNew: false,
		description: 'Fast-paced Action Platformer (mock).',
		longDescription:
			'Crimson Runner ist ein schneller Platformer mit Bossfights und Combo-Moves. '
			+ 'Mock-Daten für Studienprojekt.',
		features: ['Bossfights (mock)', 'Combos (mock)', 'Speedrun Mode (mock)'],
		tags: ['Platformer', 'Action', 'Speedrun'],
		coverSrc: '',
		coverAlt: 'Covergrafik zu Crimson Runner'
	},
	{
		id: 'g7',
		title: 'Forest Echoes',
		genre: 'Indie',
		rating: 4.0,
		cloud: true,
		isNew: false,
		description: 'Atmosphärisches Puzzle (mock).',
		longDescription:
			'Forest Echoes ist ein Puzzle-Spiel mit Atmosphäre und ruhigem Storytelling. '
			+ 'Mock-Daten für Studienprojekt.',
		features: ['Puzzle (mock)', 'Atmosphäre (mock)', 'Story (mock)'],
		tags: ['Puzzle', 'Atmosphere', 'Story'],
		coverSrc: '',
		coverAlt: 'Covergrafik zu Forest Echoes'
	},
	{
		id: 'g8',
		title: 'Guild & Glory',
		genre: 'RPG',
		rating: 4.2,
		cloud: false,
		isNew: true,
		description: 'Party-RPG mit Quests (mock).',
		longDescription:
			'Guild & Glory kombiniert Party-RPG und Quest-Hubs. '
			+ 'Mock-Daten für Studienprojekt.',
		features: ['Party-Building (mock)', 'Quest-Hub (mock)', 'Loot (mock)'],
		tags: ['Party', 'Loot', 'Quests'],
		coverSrc: '',
		coverAlt: 'Covergrafik zu Guild & Glory'
	},
	{
		id: 'g9',
		title: 'Co-op Kitchen Chaos',
		genre: 'Co-op',
		rating: 4.6,
		cloud: true,
		isNew: false,
		description: 'Kochen im Team unter Zeitdruck (mock).',
		longDescription:
			'Co-op Kitchen Chaos ist ein Team-Kochspiel mit Zeitdruck und Chaos. '
			+ 'Mock-Daten für Studienprojekt.',
		features: ['Teamwork (mock)', 'Zeitdruck (mock)', 'Level-Progression (mock)'],
		tags: ['Cooking', 'Co-op', 'Chaos'],
		coverSrc: '',
		coverAlt: 'Covergrafik zu Co-op Kitchen Chaos'
	},
	{
		id: 'g10',
		title: 'Apex Circuit',
		genre: 'Racing',
		rating: 4.3,
		cloud: false,
		isNew: false,
		description: 'Simcade-Racing (mock).',
		longDescription:
			'Apex Circuit bietet simcade-lastige Rennen und kurze Saisons. '
			+ 'Mock-Daten für Studienprojekt.',
		features: ['Saisons (mock)', 'Tuning (mock)', 'Time Trials (mock)'],
		tags: ['Simcade', 'Tuning', 'Circuit'],
		coverSrc: '',
		coverAlt: 'Covergrafik zu Apex Circuit'
	},
	{
		id: 'g11',
		title: 'Star Siege',
		genre: 'Strategy',
		rating: 4.1,
		cloud: true,
		isNew: true,
		description: 'Base-Building im All (mock).',
		longDescription:
			'Star Siege ist ein Base-Building Strategy Spiel im Sci-Fi Setting. '
			+ 'Mock-Daten für Studienprojekt.',
		features: ['Base-Building (mock)', 'Tech Tree (mock)', 'Skirmish (mock)'],
		tags: ['Base', 'Sci-Fi', 'Tech'],
		coverSrc: '',
		coverAlt: 'Covergrafik zu Star Siege'
	},
	{
		id: 'g12',
		title: 'Shadow Strike',
		genre: 'Action',
		rating: 4.8,
		cloud: true,
		isNew: false,
		description: 'Stealth-Action mit Missionen (mock).',
		longDescription:
			'Shadow Strike kombiniert Stealth und Action in kurzen Missionen. '
			+ 'Mock-Daten für Studienprojekt.',
		features: ['Stealth (mock)', 'Missionen (mock)', 'Ausrüstung (mock)'],
		tags: ['Stealth', 'Action', 'Mission'],
		coverSrc: '',
		coverAlt: 'Covergrafik zu Shadow Strike'
	}
];
