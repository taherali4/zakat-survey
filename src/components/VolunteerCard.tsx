import { ArrowLeft, Mail, Calendar, User, Users } from 'lucide-react';
import { Volunteer, Applicant } from '../App';

interface VolunteerCardProps {
  volunteer: Volunteer;
  onBack: () => void;
  onApplicantClick: (applicant: Applicant) => void;
}

export function VolunteerCard({ volunteer, onBack, onApplicantClick }: VolunteerCardProps) {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Volunteers
      </button>

      {/* Volunteer Info Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h1 className="text-gray-900 mb-1">{volunteer.name}</h1>
            <p className="text-gray-600">{volunteer.department}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            <span>{volunteer.email}</span>
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

      {/* Applicants List */}
      <div>
        <h2 className="text-gray-900 mb-4">Applicants</h2>
        {volunteer.applicants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {volunteer.applicants.map(applicant => (
              <div
                key={applicant.id}
                onClick={() => onApplicantClick(applicant)}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900">{applicant.name}</h3>
                    <p className="text-gray-500">{applicant.position}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Applied: {new Date(applicant.appliedDate).toLocaleDateString()}</span>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full ${
                    applicant.status === 'approved' ? 'bg-green-100 text-green-800' :
                    applicant.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No applicants</p>
        )}
      </div>
    </div>
  );
}