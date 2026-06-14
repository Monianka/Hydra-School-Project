import api from './api';

export type ConsentFormatData = {
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    phone: string;
    agreed: boolean;
    signatureName: string;
    courseSlug: string;
    courseName: string;
}

export async function validateConsentToken(token: string){
    const response = await api.get(`/api/consent/${token}`)
    return response.data;
}

export async function submiteConsentForm(token:string, formData: ConsentFormatData){
    const response = await api.post(`/api/consent/${token}`, formData)
    return response.data;
}