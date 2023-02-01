import React, { useState } from 'react';

const TabBar = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex border-gray-200">
            <button
                className={`flex-1 py-2 px-4 text-center text-base sm:text-lg md:text-xl rounded-xl font-semibold ${activeTab === 1 ? 'bg-orange-400' : 'text-gray-600 hover:bg-gray-300'
                    }`}
                onClick={() => handleTabClick(1)}
            >
                Android
            </button>
            <button
                className={`flex-1 py-2 px-4 text-center text-base sm:text-lg md:text-xl rounded-xl font-semibold ${activeTab === 2 ? 'bg-orange-400' : 'text-gray-600 hover:bg-gray-300'
                    }`}
                onClick={() => handleTabClick(2)}
            >
                Web
            </button>
            <button
                className={`flex-1 py-2 px-4 text-center text-base sm:text-lg md:text-xl rounded-xl font-semibold ${activeTab === 3 ? 'bg-orange-400' : 'text-gray-600 hover:bg-gray-300'
                    }`}
                onClick={() => handleTabClick(3)}
            >
                Blockchain
            </button>
        </div>
    );
};

export default TabBar;
