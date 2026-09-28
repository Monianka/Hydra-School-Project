import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useParams } from "react-router-dom";
import { ConsentFormatData, submiteConsentForm, validateConsentToken } from "../services/consent";
import { courses } from "../utils/coursesData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";
import "./CustomerConsent.css";

const CustomerConsent: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language].consent;
    const { token } = useParams<{ token: string }>();
    const [loading, setLoading] = useState(true);
    const [linkValid, setLinkValid] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState<ConsentFormatData>({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        phone: "",
        courseSlug: "",
        courseName: "",
        agreed: false,
        signatureName: "",
    });

    useEffect(() => {
        if (!token) {
            setError(t.missingToken);
            setLoading(false);
            return;
        }

        validateConsentToken(token)
            .then(() => {
                setLinkValid(true);
            })
            .catch(() => {
                setError(t.invalidToken);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [token, t.invalidToken, t.missingToken]);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = event.target;
        const checked = event.target instanceof HTMLInputElement ? event.target.checked : false;

        setFormData((currentData) => ({
            ...currentData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleCourseChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedSlug = event.target.value;
        const selectedCourse = courses.find((course) => course.slug === selectedSlug);

        setFormData((currentData) => ({
            ...currentData,
            courseSlug: selectedCourse?.slug ?? "",
            courseName: selectedCourse?.translations[language].title ?? "",
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!token) {
            setError(t.missingToken);
            return;
        }

        setSubmitting(true);
        setError("");

        try {
            await submiteConsentForm(token, formData);
            setSuccess(true);
        } catch (err) {
            setError(t.genericError);
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return <div className="consent-success">{t.loading}</div>;
    }

    if (error) {
        return <div className="consent-error">{error}</div>;
    }

    if (!linkValid) {
        return <div className="consent-invalid">{t.invalidLink}</div>;
    }

    if (success) {
        return <div className="consent-success">{t.success}</div>;
    }

    return (
        <div className="customer-consent-page">
            <Header />
            <main className="customer-consent-main">
                <section className="customer-consent-card">
                    <h1>{t.title}</h1>
                    <p>{t.intro}</p>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstName">{t.firstName}</label>
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
                            <label htmlFor="lastName">{t.lastName}</label>
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
                            <label htmlFor="email">{t.email}</label>
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
                            <label htmlFor="dob">{t.dob}</label>
                            <input
                                id="dob"
                                name="dob"
                                type="date"
                                value={formData.dob}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone">{t.phone}</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label htmlFor="courseSlug">{t.course}</label>
                            <select
                                id="courseSlug"
                                name="courseSlug"
                                value={formData.courseSlug}
                                onChange={handleCourseChange}
                                required
                            >
                                <option value="">{t.coursePlaceholder}</option>
                                {courses.map((course) => (
                                    <option key={course.id} value={course.slug ?? ""}>
                                        {course.translations[language].title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="signatureName">{t.signatureName}</label>
                            <input
                                id="signatureName"
                                name="signatureName"
                                type="text"
                                value={formData.signatureName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <section
                            className="customer-consent-terms"
                            tabIndex={0}
                            aria-label={t.termsTitle}
                        >
                            <h2>{t.termsTitle}</h2>
                            {t.termsSections.map((section) => (
                                <div className="customer-consent-terms-section" key={section.title}>
                                    <h3>{section.title}</h3>
                                    {section.blocks.map((block, blockIndex) =>
                                        block.type === "paragraph" ? (
                                            <p key={`${section.title}-paragraph-${blockIndex}`}>
                                                {block.text}
                                            </p>
                                        ) : (
                                            <ul key={`${section.title}-list-${blockIndex}`}>
                                                {block.items.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        )
                                    )}
                                </div>
                            ))}
                        </section>

                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    name="agreed"
                                    checked={formData.agreed}
                                    onChange={handleChange}
                                    required
                                />
                                {t.agree}
                            </label>
                        </div>

                        <button type="submit" disabled={submitting}>
                            {submitting ? t.submitting : t.submit}
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CustomerConsent;
