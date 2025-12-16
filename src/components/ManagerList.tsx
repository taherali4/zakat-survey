import { Users, Calendar } from 'lucide-react';
import { Manager } from '../App';
import { ActionButtons } from './ActionButtons';

interface ManagerListProps {
  managers: Manager[];
  onManagerClick: (manager: Manager) => void;
  onShowAddForm: () => void;
}

export function ManagerList({ managers, onManagerClick, onShowAddForm }: ManagerListProps) {
  const handleUpdate = (manager: Manager) => {
    alert(`Update Manager: ${manager.name}`);
  };

  const handleDelete = (manager: Manager) => {
    if (confirm(`Are you sure you want to delete ${manager.name}?`)) {
      alert(`Delete Manager: ${manager.name}`);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1>Managers</h1>
        <ActionButtons onAdd={onShowAddForm} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {managers.map(manager => (
          <div
            key={manager.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div
              onClick={() => onManagerClick(manager)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">
                    {manager.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-gray-900">{manager.name}</h3>
                  <p className="text-gray-500">{manager.department}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Joined: {new Date(manager.joiningDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{manager.volunteers.length} Volunteers</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{manager.applicants.length} Applicants</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <ActionButtons 
                onUpdate={() => handleUpdate(manager)} 
                onDelete={() => handleDelete(manager)}
                size="sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}