import React, {useState} from 'react';

let faqs = [];
let error = null;

try {
    const response = await fetch("http://localhost:8000/api/faqs");
    if (!response.ok) {
        throw new Error(`status ${response.status}`);
    }
    faqs = await response.json();
} catch (e) {
    error = e.message;
    console.error(error);
}

function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggle = (index) => {
        setOpenIndex (openIndex === index ? null : index)
    }

    return (
        <div className="FAQs mt-4">
            {faqs.map((faq, index) => (
                <div key={index} className="FAQ rounded-md border-gray-100 p-4 mt-4 shadow-sm">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full text-left flex justify-between items-center">
                        <span className="font-medium">{faq.question}</span>
                        <span>{openIndex === index ? "−" : "+"}</span>
                    </button>

                    <div className={`mt-2 text-gray-700 overflow-hidden transition-all duration-500 ease-out 
                        ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                        `}
                    >
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FAQs;