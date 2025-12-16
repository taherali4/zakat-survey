import { ArrowLeft, Mail, Calendar, Users, User } from 'lucide-react';
import { Manager, Volunteer } from '../App';

interface ManagerCardProps {
  manager: Manager;
  onBack: () => void;
  onVolunteerClick: (volunteer: Volunteer) => void;
}

export function ManagerCard({ manager, onBack, onVolunteerClick }: ManagerCardProps) {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Managers
      </button>

      {/* Manager Info Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600">
              {manager.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h1 className="text-gray-900 mb-1">{manager.name}</h1>
            <p className="text-gray-600">{manager.department}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            <span>{manager.email}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Joined: {new Date(manager.joiningDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>Retirement: {new Date(manager.retirementDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span>{manager.volunteers.length} Volunteers, {manager.applicants.length} Applicants</span>
          </div>
        </div>
      </div>

      {/* Volunteers List */}
      <div>
        <h2 className="text-gray-900 mb-4">Volunteers</h2>
        {manager.volunteers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {manager.volunteers.map(volunteer => (
              <div
                key={volunteer.id}
                onClick={() => onVolunteerClick(volunteer)}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
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
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No volunteers assigned</p>
        )}
      </div>
    </div>
  );
}