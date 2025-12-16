import { User, Calendar, Mail, Phone } from 'lucide-react';
import { Applicant } from '../App';
import { ActionButtons } from './ActionButtons';

interface ApplicantListProps {
  applicants: Array<Applicant & { appliedTo: string }>;
  onApplicantClick?: (applicant: Applicant) => void;
  onShowAddForm: () => void;
}

export function ApplicantList({ applicants, onApplicantClick, onShowAddForm }: ApplicantListProps) {
  const handleUpdate = (applicant: Applicant) => {
    alert(`Update Applicant: ${applicant.name}`);
  };

  const handleDelete = (applicant: Applicant) => {
    if (confirm(`Are you sure you want to delete ${applicant.name}?`)) {
      alert(`Delete Applicant: ${applicant.name}`);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1>Applicants</h1>
        <ActionButtons onAdd={onShowAddForm} />
      </div>
      <div className="space-y-4">
        {applicants.map(applicant => (
          <div
            key={applicant.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div
              onClick={() => onApplicantClick?.(applicant)}
              className={onApplicantClick ? 'cursor-pointer hover:opacity-80 transition-opacity' : ''}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{applicant.name}</h3>
                    <p className="text-gray-600 mb-3">{applicant.position}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center text-gray-600">
                        <Mail className="w-4 h-4 mr-2" />
                        <span>{applicant.email}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="w-4 h-4 mr-2" />
                        <span>{applicant.phone}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Applied: {new Date(applicant.appliedDate).toLocaleDateString()}</span>
                      </div>
                      <div className="text-gray-600">
                        <span>Applied to: {applicant.appliedTo}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <span className={`px-3 py-1 rounded-full flex-shrink-0 ${
                  applicant.status === 'approved' ? 'bg-green-100 text-green-800' :
                  applicant.status === 'rejected' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <ActionButtons 
                onUpdate={() => handleUpdate(applicant)} 
                onDelete={() => handleDelete(applicant)}
                size="sm"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}