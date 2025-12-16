import { User, Calendar, Users } from 'lucide-react';
import { Volunteer } from '../App';
import { ActionButtons } from './ActionButtons';

interface VolunteerListProps {
  volunteers: Array<Volunteer & { managerName: string }>;
  onVolunteerClick: (volunteer: Volunteer) => void;
  onShowAddForm: () => void;
}

export function VolunteerList({ volunteers, onVolunteerClick, onShowAddForm }: VolunteerListProps) {
  const handleUpdate = (volunteer: Volunteer) => {
    alert(`Update Volunteer: ${volunteer.name}`);
  };

  const handleDelete = (volunteer: Volunteer) => {
    if (confirm(`Are you sure you want to delete ${volunteer.name}?`)) {
      alert(`Delete Volunteer: ${volunteer.name}`);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1>Volunteers</h1>
        <ActionButtons onAdd={onShowAddForm} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteers.map(volunteer => (
          <div
            key={volunteer.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div
              onClick={() => onVolunteerClick(volunteer)}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-gray-900">{volunteer.name}</h3>
                  <p className="text-gray-500">{volunteer.department}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-gray-600">
                  <p className="text-gray-500">Manager</p>
                  <p>{volunteer.managerName}</p>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Joined: {new Date(volunteer.joiningDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{volunteer.applicants.length} Applicants</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <ActionButtons 
                onUpdate={() => handleUpdate(volunteer)} 
                onDelete={() => handleDelete(volunteer)}
                size="sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}