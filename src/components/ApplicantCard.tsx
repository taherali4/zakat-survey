import { ArrowLeft, Mail, Phone, Calendar, Briefcase, User } from 'lucide-react';
import { Applicant } from '../App';

interface ApplicantCardProps {
  applicant: Applicant;
  onBack: () => void;
}

export function ApplicantCard({ applicant, onBack }: ApplicantCardProps) {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Applicants
      </button>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-purple-600" />
            </div>
            <div className="text-white">
              <h1 className="text-white mb-1">{applicant.name}</h1>
              <p className="text-purple-100">{applicant.position}</p>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-gray-500">Email</p>
                <p className="text-gray-900">{applicant.email}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="text-gray-900">{applicant.phone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-gray-500">Applied Date</p>
                <p className="text-gray-900">{new Date(applicant.appliedDate).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Briefcase className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-gray-500">Position</p>
                <p className="text-gray-900">{applicant.position}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                <div className={`w-3 h-3 rounded-full ${
                  applicant.status === 'approved' ? 'bg-green-500' :
                  applicant.status === 'rejected' ? 'bg-red-500' :
                  'bg-yellow-500'
                }`}></div>
              </div>
              <div>
                <p className="text-gray-500">Status</p>
                <span className={`inline-block px-3 py-1 rounded-full ${
                  applicant.status === 'approved' ? 'bg-green-100 text-green-800' :
                  applicant.status === 'rejected' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                </span>
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h2 className="text-gray-900 mb-4">Application Details</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600">
                This applicant has applied for the position of <span className="text-gray-900">{applicant.position}</span> on{' '}
                {new Date(applicant.appliedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}.
              </p>
              <p className="text-gray-600 mt-2">
                Current application status:{' '}
                <span className={`${
                  applicant.status === 'approved' ? 'text-green-700' :
                  applicant.status === 'rejected' ? 'text-red-700' :
                  'text-yellow-700'
                }`}>
                  {applicant.status.toUpperCase()}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
