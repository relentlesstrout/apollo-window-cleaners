import React, {useState} from 'react';

function QuoteCalculator() {
    const [inputs, setInputs] = useState({
        frenchDoors: 0,
        smallWindows: 0,
        largeWindows: 0
    });
    const [quote, setQuote] = useState(0);

    const frenchDoorsPrice = 2
    const smallWindowsPrice = 1
    const largeWindowsPrice = 2
    const flatCharge = 5

    const calculateTotal = (e) => {
        const {name, value} = e.target;
        const updatedInputs = {...inputs, [name]: value};

        setInputs(updatedInputs);

        let total =
            frenchDoorsPrice * updatedInputs.frenchDoors +
            smallWindowsPrice * updatedInputs.smallWindows +
            largeWindowsPrice * updatedInputs.largeWindows +
            flatCharge;

        const vibe = Math.floor(Math.random()) + 1;

        total = total.toFixed(2);
        total = total * vibe;

        setQuote(total);
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="frenchDoors" className="block mb-1 font-medium">
                    French Doors
                </label>
                <input
                    name="frenchDoors"
                    min="0"
                    type="number"
                    placeholder="Enter the number of French doors"
                    onChange={calculateTotal}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="frenchDoors" className="block mb-1 font-medium">
                    Small Windows
                </label>
                <input
                    name="smallWindows"
                    min="0"
                    type="number"
                    placeholder="Enter the number of small windows"
                    onChange={calculateTotal}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="frenchDoors" className="block mb-1 font-medium">
                    Large Windows
                </label>
                <input
                    name="largeWindows"
                    min="0"
                    type="number"
                    placeholder="Enter the number of large windows"
                    onChange={calculateTotal}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="text-lg font-semibold mt-6">
                Total: £{quote}
            </div>
        </div>
    )
}

export default QuoteCalculator;