type UserProfile = {
    id: string;
    name: string;
    profileImageUrl: string;
    role: 'DEFAULT_USER' | 'ADMIN';
    createdAt: string;
    updatedAt: string;
}

export type { UserProfile };
