import '../app/globals.css';
import Layout from '../components/Layout';
import { StatCard, ProgressCard } from '../components/Cards';
import { FiDollarSign, FiUsers, FiShoppingCart, FiActivity } from 'react-icons/fi';
import RecentActivity from '../components/RecentActivity';

export default function Dashboard() {
  return (
    <Layout title="Dashboard">
      <div className="bg-red-500 p-4 text-white">Test Tailwind</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard 
          title="Total Revenue" 
          value="$45,231" 
          change={12.5} 
          icon={<FiDollarSign size={24} />} 
        />
        <StatCard 
          title="Users" 
          value="2,345" 
          change={8.1} 
          icon={<FiUsers size={24} />} 
        />
        <StatCard 
          title="New Orders" 
          value="1,234" 
          change={-2.3} 
          icon={<FiShoppingCart size={24} />} 
        />
        <StatCard 
          title="Active Now" 
          value="573" 
          change={5.7} 
          icon={<FiActivity size={24} />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sales Overview</h2>
          <div className="h-80 bg-gray-50 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Sales chart will go here</p>
          </div>
        </div>
        <div className="space-y-6">
          <ProgressCard title="Task Completion" progress={75} color="primary" />
          <ProgressCard title="Project Milestone" progress={45} color="secondary" />
          <ProgressCard title="Team Performance" progress={89} color="yellow" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <RecentActivity />
      </div>
    </Layout>
  );
}