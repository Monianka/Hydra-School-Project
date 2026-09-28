import api from './api';

export type AdminUser = {
    id: string;
    email: string;
    name: string;
    role: string;
}

export type AdminLoginResponse = {
    token: string;
    admin: AdminUser;
}

export type CreateInvitationData = {
    courseSlug: string;
    language: 'en' | 'pl';
    bookingMode: 'student_selects' | 'admin_selected' | 'general';
    sessionId: string | null;
    expiresInDays: number;
    note?: string;
    oneTime: boolean;
    source: 'instagram' | 'facebook' | 'website' | 'email' | 'phone' | 'manual';
}

export type CourseSnapshot = {
    id: string;
    slug: string;
    name: string;
    priceAmount: number;
    currency: string;
}

export type InvitationSummary = {
    id: string;
    courseSlug: string;
    courseSnapshot: CourseSnapshot;
    language: 'en' | 'pl';
    bookingMode: 'student_selects' | 'admin_selected' | 'general';
    sessionId: string | null;
    expiresAt: string;
    oneTime: boolean;
    active: boolean;
    source: 'instagram' | 'facebook' | 'website' | 'email' | 'phone' | 'manual';
    note?: string;
    createdAt: string;
};

export type CreateInvitationResponse = {
    link: string;
    invitation: InvitationSummary;
}

export async function loginAdmin(email: string , password: string): Promise<AdminLoginResponse> {
    const response = await api.post<AdminLoginResponse>('/api/admin/login', {email, password});
    return response.data;
} 

export async function createInvitation(
    data: CreateInvitationData,
    idempotencyKey: string,
): Promise<CreateInvitationResponse> {
    const response = await api.post<CreateInvitationResponse>(
        '/api/admin/invitations',
        data,
        {
            headers: {
                'Idempotency-Key': idempotencyKey,
            },
        },
    );

    return response.data;
}
