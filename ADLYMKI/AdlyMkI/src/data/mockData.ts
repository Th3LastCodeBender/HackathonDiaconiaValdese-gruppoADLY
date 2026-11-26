export type FacilityType = 'residential' | 'daily';

export interface Facility {
  id: string;
  name: string;
  type: FacilityType;
  address: string;
}

export type UserRole = 'admin' | 'coordinator' | 'educator' | 'guest' | 'parent';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  img?: string;
  phone?: string;
  roles: UserRole[];
  facilityIds?: string[];
  referenceEducatorId?: string; // For guests
  parentId?: string; // For guests to parents
  childrenIds?: string[]; // For parents
  avatarUrl?: string;
  xp?: number; // Gamification points for guests
  level?: number;
}

export type TaskType = 'chore' | 'therapy' | 'medical' | 'learning' | 'recreation';
export type TaskStatus = 'pending' | 'completed' | 'swapped' | 'failed' | 'pending_verification';

export interface Task {
  id: string;
  title: string;
  description: string;
  type: TaskType;
  assignedTo: string; // User ID
  facilityId: string;
  difficultyWeight: number; // 1-5
  status: TaskStatus;
  scheduledFor: string; // ISO string 
  completedAt?: string; // ISO string
  proofImageUrl?: string;
  requiresVerification: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name
  requiredXp: number;
}

export interface Feedback {
  id: string;
  guestId: string;
  educatorId: string;
  note: string;
  date: string; // ISO string
}

// --- MOCK DATA ---

export const mockFacilities: Facility[] = [
  { id: 'f1', name: 'Struttura 1 - Casa del Sole', type: 'residential', address: 'Via Roma 1, Firenze' },
  { id: 'f2', name: 'Struttura 2 - Centro Arcobaleno', type: 'daily', address: 'Via Milano 10, Firenze' },
  { id: 'f3', name: 'Struttura 3 - Villa Serena', type: 'residential', address: 'Via Verdi 12, Firenze' },
  { id: 'f4', name: 'Struttura 4 - Casa delle Rose', type: 'daily', address: 'Via Leopardi 8, Firenze' },
  { id: 'f5', name: 'Struttura 5 - Centro Stella', type: 'residential', address: 'Via Petrarca 4, Firenze' },
  { id: 'f6', name: 'Struttura 6 - Spazio Aurora', type: 'daily', address: 'Via Dante 20, Firenze' }
];

export const mockUsers: User[] = [
  { id: 'u1', firstName: 'Super', lastName: 'Admin', roles: ['admin'], email: 'admin@valdesi.it', phone: '333 1234567' },
  { id: 'u2', firstName: 'Laura', lastName: 'Bianchi', roles: ['coordinator', 'educator'], facilityIds: ['f1', 'f2'], email: 'lbianchi@valdesi.it', phone: '333 9876543', avatarUrl: '/profile_pics/laura.bianchi.jpg' },
  { id: 'u3', firstName: 'Marco', lastName: 'Rossi', roles: ['educator'], facilityIds: ['f1'], email: 'mrossi@valdesi.it', phone: '334 1122334', avatarUrl: '/profile_pics/marco.rossi.jpg' },
  { id: 'u4', firstName: 'Giulia', lastName: 'Verdi', roles: ['guest'], facilityIds: ['f1'], referenceEducatorId: 'u3', xp: 450, level: 3, phone: '338 5566778', avatarUrl: '/profile_pics/giulia.verdi.jpg' },
  { id: 'u5', firstName: 'Andrea', lastName: 'Neri', roles: ['guest'], facilityIds: ['f1'], referenceEducatorId: 'u2', xp: 120, level: 1, avatarUrl: '/profile_pics/andrea.neri.jpg' },
  { id: 'u6', firstName: 'Elena', lastName: 'Verdi', roles: ['parent'], childrenIds: ['u4'], email: 'everdi@example.com', phone: '339 9988776', avatarUrl: '/profile_pics/elena.verdi.jpg' },
  { id: 'u7', firstName: 'Sara', lastName: 'Conti', roles: ['educator'], facilityIds: ['f2'], email: 'sconti@valdesi.it', avatarUrl: '/profile_pics/sara.conti.jpg' },
  { id: 'u8', firstName: 'Paolo', lastName: 'Galli', roles: ['guest'], facilityIds: ['f2'], referenceEducatorId: 'u7', xp: 260, level: 2, avatarUrl: '/profile_pics/paolo.galli.jpg' },
  { id: 'u9', firstName: 'Marta', lastName: 'Fontana', roles: ['educator'], facilityIds: ['f3'], avatarUrl: '/profile_pics/marta.fontana.jpg' },
  { id: 'u10', firstName: 'Luca', lastName: 'Moretti', roles: ['guest'], facilityIds: ['f3'], referenceEducatorId: 'u9', xp: 380, level: 3, avatarUrl: '/profile_pics/luca.moretti.jpg' },
  { id: 'u11', firstName: 'Anna', lastName: 'Sala', roles: ['educator'], facilityIds: ['f4'], avatarUrl: '/profile_pics/anna.sara.jpg' },
  { id: 'u12', firstName: 'Francesco', lastName: 'Riva', roles: ['guest'], facilityIds: ['f4'], referenceEducatorId: 'u11', xp: 180, level: 1 },
  { id: 'u13', firstName: 'Chiara', lastName: 'Ferri', roles: ['educator'], facilityIds: ['f5'], avatarUrl: '/profile_pics/chiara.ferri.jpg' },
  { id: 'u14', firstName: 'Tommaso', lastName: 'Leone', roles: ['guest'], facilityIds: ['f5'], referenceEducatorId: 'u13', xp: 520, level: 4 },
  { id: 'u15', firstName: 'Irene', lastName: 'Costa', roles: ['educator'], facilityIds: ['f6'] },
  { id: 'u16', firstName: 'Nicolò', lastName: 'Marini', roles: ['guest'], facilityIds: ['f6'], referenceEducatorId: 'u15', xp: 95, level: 1 }
];

export const mockTasks: Task[] = [
  { id: 't1', title: 'Clean the kitchen', description: 'Wash dishes and wipe the counters after dinner', type: 'chore', assignedTo: 'u4', facilityId: 'f1', difficultyWeight: 3, status: 'pending', scheduledFor: new Date().toISOString(), requiresVerification: true },
  { id: 't2', title: 'Psychologist session', description: 'Weekly meeting with Dr. Moretti', type: 'therapy', assignedTo: 'u4', facilityId: 'f1', difficultyWeight: 1, status: 'completed', scheduledFor: new Date(Date.now() - 86400000).toISOString(), completedAt: new Date(Date.now() - 86000000).toISOString(), requiresVerification: false },
  { id: 't3', title: 'Take out the trash', description: 'Organic and plastic', type: 'chore', assignedTo: 'u5', facilityId: 'f1', difficultyWeight: 2, status: 'pending_verification', scheduledFor: new Date().toISOString(), requiresVerification: true, proofImageUrl: 'mock-trash-proof.jpg' },
  { id: 't4', title: 'Morning walk', description: 'Short assisted walk in the garden', type: 'recreation', assignedTo: 'u8', facilityId: 'f2', difficultyWeight: 1, status: 'pending', scheduledFor: new Date().toISOString(), requiresVerification: false },
  { id: 't5', title: 'Laundry folding', description: 'Fold and sort clean laundry', type: 'chore', assignedTo: 'u10', facilityId: 'f3', difficultyWeight: 2, status: 'completed', scheduledFor: new Date(Date.now() - 43200000).toISOString(), completedAt: new Date(Date.now() - 42800000).toISOString(), requiresVerification: false },
  { id: 't6', title: 'Table setting', description: 'Prepare the dining room before lunch', type: 'learning', assignedTo: 'u12', facilityId: 'f4', difficultyWeight: 2, status: 'pending_verification', scheduledFor: new Date().toISOString(), requiresVerification: true },
  { id: 't7', title: 'Water the plants', description: 'Care for the greenhouse area', type: 'recreation', assignedTo: 'u14', facilityId: 'f5', difficultyWeight: 1, status: 'completed', scheduledFor: new Date(Date.now() - 7200000).toISOString(), completedAt: new Date(Date.now() - 7100000).toISOString(), requiresVerification: false },
  { id: 't8', title: 'Organize books', description: 'Sort the reading corner materials', type: 'learning', assignedTo: 'u16', facilityId: 'f6', difficultyWeight: 2, status: 'pending', scheduledFor: new Date().toISOString(), requiresVerification: false },
  { id: 't9', title: 'Invitare un amico a casa', description: 'Giulia chiede di poter invitare la sua amica Sara a trascorrere il pomeriggio in struttura sabato 18 maggio, dalle 15:00 alle 18:00.', type: 'recreation', assignedTo: 'u4', facilityId: 'f1', difficultyWeight: 1, status: 'swapped', scheduledFor: new Date().toISOString(), requiresVerification: true },
  { id: 't10', title: 'Pulizia bagno', description: 'Pulire il bagno condiviso del piano', type: 'chore', assignedTo: 'u17', facilityId: 'f1', difficultyWeight: 2, status: 'completed', scheduledFor: new Date(Date.now() - 43200000).toISOString(), completedAt: new Date(Date.now() - 40000000).toISOString(), requiresVerification: false },
  { id: 't11', title: 'Corso di italiano', description: 'Lezione settimanale di italiano', type: 'learning', assignedTo: 'u17', facilityId: 'f1', difficultyWeight: 2, status: 'pending', scheduledFor: new Date().toISOString(), requiresVerification: false },
  { id: 't12', title: 'Seduta fisioterapia', description: 'Appuntamento con la fisioterapista', type: 'therapy', assignedTo: 'u18', facilityId: 'f1', difficultyWeight: 1, status: 'completed', scheduledFor: new Date(Date.now() - 86400000).toISOString(), completedAt: new Date(Date.now() - 84000000).toISOString(), requiresVerification: false },
  { id: 't13', title: 'Preparazione tavola pranzo', description: 'Apparecchiare il tavolo per il pranzo comune', type: 'chore', assignedTo: 'u19', facilityId: 'f1', difficultyWeight: 1, status: 'pending_verification', scheduledFor: new Date().toISOString(), requiresVerification: true },
  { id: 't14', title: 'Passeggiata pomeridiana', description: 'Uscita nel parco con accompagnatore', type: 'recreation', assignedTo: 'u20', facilityId: 'f1', difficultyWeight: 1, status: 'completed', scheduledFor: new Date(Date.now() - 7200000).toISOString(), completedAt: new Date(Date.now() - 6800000).toISOString(), requiresVerification: false },
  { id: 't15', title: 'Riordino camera', description: 'Sistemare e riordinare la propria stanza', type: 'chore', assignedTo: 'u20', facilityId: 'f1', difficultyWeight: 2, status: 'pending', scheduledFor: new Date().toISOString(), requiresVerification: false }
];

export const mockAchievements: Achievement[] = [
  { id: 'a1', title: 'Sparkling Clean', description: 'Complete 10 cleaning chores', icon: 'Sparkles', requiredXp: 100 },
  { id: 'a2', title: 'Master Chef', description: 'Cook dinner for the facility 5 times', icon: 'ChefHat', requiredXp: 200 },
  { id: 'a3', title: 'Reliable Roommate', description: 'Complete 20 tasks without missing a deadline', icon: 'Medal', requiredXp: 500 }
];

export const mockFeedbacks: Feedback[] = [
  { id: 'fb1', guestId: 'u4', educatorId: 'u3', note: 'Giulia is showing great improvement in following the rules this week.', date: new Date().toISOString() }
];
