type CardProps = {
    title: string;
    value: string | number;
    change: number;
    icon: React.ReactNode;
  };
  
  export const StatCard = ({ title, value, change, icon }: CardProps) => {
    const isPositive = change >= 0;
  
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? '↑' : '↓'} {Math.abs(change)}% vs last period
            </p>
          </div>
          <div className="p-3 rounded-full bg-blue-50 text-blue-600">
            {icon}
          </div>
        </div>
      </div>
    );
  };
  
  export const ProgressCard = ({ title, progress, color = 'primary' }: { title: string; progress: number; color?: string }) => {
    const colorClasses = {
      primary: 'bg-blue-600',
      secondary: 'bg-green-600',
      red: 'bg-red-600',
      yellow: 'bg-yellow-600',
    };
  
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`${colorClasses[color as keyof typeof colorClasses]} h-2.5 rounded-full`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-1 text-right text-sm font-medium text-gray-500">{progress}%</p>
      </div>
    );
  };