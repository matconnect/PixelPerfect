import { useState } from 'react';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        setSubmitted(true);
    };

    return submitted ? (
        <div className="text-center text-green-600 font-semibold">
            Merci pour votre message ! Nous vous répondrons sous peu.
        </div>
    ) : (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl w-full mx-auto bg-card shadow-md rounded-lg p-6 sm:p-8 space-y-6"
        >
            <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium mb-1">
                    Nom
                </label>
                <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium mb-1">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium mb-1">
                    Message
                </label>
                <textarea
                    name="message"
                    rows="5"
                    required
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full resize-none"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            >
                Envoyer
            </button>
        </form>
    );
}
