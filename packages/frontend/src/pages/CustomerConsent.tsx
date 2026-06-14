import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useParams } from "react-router-dom";
import { ConsentFormatData, submiteConsentForm, validateConsentToken } from "../services/consent";
import { courses } from '../utils/coursesData';

const CustomerConsent: React.FC = () => {
    const { token } = useParams<{ token: string }>();
    const [loading, setLoading] = useState(true);
    const [linkValid, setLinkValid] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState<ConsentFormatData>({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        phone: '',
        courseSlug: '',
        courseName: '',
        agreed: false,
        signatureName: '',
    });

    useEffect(() => {
        if (!token) {
            setError('Missing consent link token');
            setLoading(false);
            return;
        }

        validateConsentToken(token)
            .then(() => {
                setLinkValid(true);
            })
            .catch(() => {
                setError('This consent link is invalid or expired');
            })
            .finally(() => {
                setLoading(false);
            });
    }, [token]);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = event.target;
        const checked = event.target instanceof HTMLInputElement ? event.target.checked : false;
        setFormData((currentData) => ({
            ...currentData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleCourseChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedSlug = event.target.value;
        const selectedCourse = courses.find((course) => course.slug === selectedSlug);
        setFormData((currentData) => ({
            ...currentData,
            courseSlug: selectedCourse?.slug ?? '',
            courseName: selectedCourse?.translations.en.title ?? '',
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!token) {
            setError('Missing consent link token');
            return;
        }

        setSubmitting(true);
        setError('');

        try {
            await submiteConsentForm(token, formData);
            setSuccess(true);
        } catch (err) {
            setError('Something went wrong. Please check the form and try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return <div>Loading consent data...</div>;
    }

    if (error) {
        return <div className="consent-error">{error}</div>;
    }

    if (!linkValid) {
        return <div className="consent-invalid">This consent link is not valid.</div>;
    }

    if (success) {
        return <div className="consent-success">Thank you. Your consent form has been submitted.</div>;
    }

    return (
        <div className="customer-consent-page">
            <h1>Customer Consent</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                        id="dob"
                        name="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="courseSlug">Select Course</label>
                    <select
                        id="courseSlug"
                        name="courseSlug"
                        value={formData.courseSlug}
                        onChange={handleCourseChange}
                        required
                    >
                        <option value="">Select a course</option>
                        {courses.map((course) => (
                            <option key={course.id} value={course.slug ?? ''}>
                                {course.translations.en.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="signatureName">Signature Name</label>
                    <input
                        id="signatureName"
                        name="signatureName"
                        type="text"
                        value={formData.signatureName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="agreed"
                            checked={formData.agreed}
                            onChange={handleChange}
                            required
                        />
                        I agree to the consent terms
                    </label>
                </div>
                <button type="submit" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Submit Consent'}
                </button>
            </form>
        </div>
    );
};

export default CustomerConsent;
