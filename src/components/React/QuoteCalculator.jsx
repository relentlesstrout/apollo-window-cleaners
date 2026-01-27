import React, {useState} from 'react';

function QuoteCalculator() {
    const [inputs, setInputs] = useState({
        frenchDoors: 0,
        smallWindows: 0,
        largeWindows: 0
    });
    const [quote, setQuote] = useState(5);

    const frenchDoorsPrice = 2
    const smallWindowsPrice = 1
    const largeWindowsPrice = 2
    const flatCharge = 3

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
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            {/* Calculator Section - max-w-md */}
            <div className="max-w-md mb-8">
                <h2 className="text-xl font-semibold mb-4">Calculate Your Quote</h2>
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
                    <label htmlFor="smallWindows" className="block mb-1 font-medium">
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
                    <label htmlFor="largeWindows" className="block mb-1 font-medium">
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
                <div className="text-lg font-semibold mt-6 p-4 bg-green-100 rounded">
                    Total: £{quote}
                </div>
            </div>

            {/* Form Section - Wider */}
            <div>
                <form action="http://localhost:8000/api/quotes" method="POST" className="border-t pt-6">
                    <h2 className="text-xl font-semibold mb-4">Request Quote</h2>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium">Estimate</label>
                        <input
                            name="estimate"
                            type="text"
                            value={`£${quote}`}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                        />
                    </div>

                    {/* Address fields in a grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block mb-1 font-medium">House Number/Name</label>
                            <input
                                name="house"
                                type="text"
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Street</label>
                            <input
                                name="street"
                                type="text"
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Area</label>
                            <input
                                name="area"
                                type="text"
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block mb-1 font-medium">Phone</label>
                            <input
                                name="phone"
                                type="tel"
                                required
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Cleaning Frequency (weeks)</label>
                            <select
                                name="cleaning_frequency_weeks"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="1">Every 4 weeks</option>
                                <option value="2">Every 8 weeks</option>
                                <option value="4">Every 12 weeks</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block mb-1 font-medium">Best Day to Call</label>
                            <select
                                name="day_to_call"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                            </select>

                        </div>

                        <div>
                            <label className="block mb-1 font-medium">Best Time to Call</label>
                            <input
                                type="time"
                                name="time_to_call"
                                min="09:00"
                                max="18:00"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                required
                            />
                            <small>9:00am-18:00pm</small>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition-colors"
                    >
                        Submit Quote Request
                    </button>
                </form>
            </div>
        </div>
    )
}

export default QuoteCalculator;