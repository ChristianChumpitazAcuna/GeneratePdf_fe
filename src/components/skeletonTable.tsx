export default function SkeletonTable() {
    return (
        <div className="w-1/2 p-4 rounded-3xl shadow-2xl bg-white 
            dark:bg-gray-800 border border-white/50">
            <div className="w-full flex flex-col gap-y-4">
                <div className="h-8 bg-gray-50 dark:bg-gray-600 w-full mb-2"></div>
                <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-full animate-pulse"></div>
            </div>
        </div>
    );
}