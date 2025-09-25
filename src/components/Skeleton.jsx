function Skeleton() {
  return (
    <div className="p-4 max-w-sm w-full mx-auto animate-pulse">
      <div className="bg-gray-300 dark:bg-gray-700 h-48 rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
      <div className="flex space-x-2">
        <div className="h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        <div className="h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
}

export default Skeleton;
