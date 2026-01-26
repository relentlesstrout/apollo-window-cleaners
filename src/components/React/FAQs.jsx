import React, {useState} from 'react';

const faqs = [
    {
        question: "Do you clean commercial buildings?",
        answer: "Yes, we offer professional commercial cleaning for offices and shops."
    },
    {
        question: "What areas do you cover?",
        answer: "We cover Blaydon, Gateshead, Newcastle, and surrounding areas."
    },
    {
        question: "Do you provide gutter cleaning?",
        answer: "Absolutely! We provide full gutter cleaning and maintenance."
    },
];

function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (index) => {
        setOpenIndex (openIndex === index ? null : index)
    }

    return (
        <div className="FAQs mt-4">
            {faqs.map((faq, index) => (
                <div key={index} className="FAQ border rounded-md p-4 mt-4 shadow-sm">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full text-left flex justify-between items-center">
                        <span className="font-medium">{faq.question}</span>
                        <span>{openIndex === index ? "−" : "+"}</span>
                    </button>
                    {openIndex === index && (
                        <div className="mt-2 text-gray-700">
                            {faq.answer}
                        </div>
                    )}
                </div>
                )
            )}
        </div>
    )
}

export default FAQs;