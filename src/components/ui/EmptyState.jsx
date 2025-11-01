import React from 'react';
import { FaRegFolderOpen } from 'react-icons/fa6';

const EmptyState = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center text-gray-500">
            <FaRegFolderOpen className="text-6xl text-gray-400 mb-5" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Data Available</h2>
            <p className="max-w-md mb-6">
                There’s nothing to show right now. Please check back later.
            </p>
        </div>
    );
};

export default EmptyState;