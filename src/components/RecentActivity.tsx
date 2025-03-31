const RecentActivity = () => {
    const activities = [
      {
        id: 1,
        user: 'John Doe',
        action: 'completed',
        task: 'Dashboard design',
        time: '2 hours ago',
        avatar: 'JD',
      },
      {
        id: 2,
        user: 'Jane Smith',
        action: 'started',
        task: 'API integration',
        time: '4 hours ago',
        avatar: 'JS',
      },
      {
        id: 3,
        user: 'Robert Johnson',
        action: 'commented',
        task: 'Mobile responsive',
        time: '1 day ago',
        avatar: 'RJ',
      },
      {
        id: 4,
        user: 'Emily Davis',
        action: 'updated',
        task: 'Project timeline',
        time: '2 days ago',
        avatar: 'ED',
      },
    ];
  
    return (
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold mr-3">
              {activity.avatar}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">
                {activity.user} <span className="text-gray-500 font-normal">{activity.action}</span> {activity.task}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default RecentActivity;