import { useState } from 'react';
import { Save } from 'lucide-react';

interface AddApplicantFormProps {
  onSave: (data: ApplicantFormData) => void;
  onCancel: () => void;
}

export interface ApplicantFormData {
  // Personal Data
  name: string;
  aadharNumber: string;
  familyMembers: string;
  address: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  gender: string;
  
  // Educational
  highestQualification: string;
  institution: string;
  yearOfPassing: string;
  specialization: string;
  
  // Financial
  annualIncome: string;
  employmentStatus: string;
  occupation: string;
  bankAccountNumber: string;
  ifscCode: string;
  
  // Beneficiary Details
  beneficiaryName: string;
  beneficiaryRelation: string;
  beneficiaryPhone: string;
  beneficiaryAddress: string;
}

export function AddApplicantForm({ onSave, onCancel }: AddApplicantFormProps) {
  const [formData, setFormData] = useState<ApplicantFormData>({
    // Personal Data
    name: '',
    aadharNumber: '',
    familyMembers: '',
    address: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    
    // Educational
    highestQualification: '',
    institution: '',
    yearOfPassing: '',
    specialization: '',
    
    // Financial
    annualIncome: '',
    employmentStatus: '',
    occupation: '',
    bankAccountNumber: '',
    ifscCode: '',
    
    // Beneficiary Details
    beneficiaryName: '',
    beneficiaryRelation: '',
    beneficiaryPhone: '',
    beneficiaryAddress: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-gray-900 mb-6">Add New Applicant</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Data Section */}
        <div>
          <h3 className="text-gray-900 mb-4 pb-2 border-b border-gray-200">Personal Data</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="aadharNumber" className="block text-gray-700 mb-2">
                Aadhar Number *
              </label>
              <input
                id="aadharNumber"
                name="aadharNumber"
                type="text"
                value={formData.aadharNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                pattern="[0-9]{12}"
                placeholder="12 digit Aadhar number"
              />
            </div>

            <div>
              <label htmlFor="dateOfBirth" className="block text-gray-700 mb-2">
                Date of Birth *
              </label>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-gray-700 mb-2">
                Gender *
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="familyMembers" className="block text-gray-700 mb-2">
                Number of Family Members *
              </label>
              <input
                id="familyMembers"
                name="familyMembers"
                type="number"
                value={formData.familyMembers}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                min="1"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-gray-700 mb-2">
                Address *
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        {/* Educational Section */}
        <div>
          <h3 className="text-gray-900 mb-4 pb-2 border-b border-gray-200">Educational Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="highestQualification" className="block text-gray-700 mb-2">
                Highest Qualification *
              </label>
              <input
                id="highestQualification"
                name="highestQualification"
                type="text"
                value={formData.highestQualification}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="institution" className="block text-gray-700 mb-2">
                Institution/University *
              </label>
              <input
                id="institution"
                name="institution"
                type="text"
                value={formData.institution}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="yearOfPassing" className="block text-gray-700 mb-2">
                Year of Passing *
              </label>
              <input
                id="yearOfPassing"
                name="yearOfPassing"
                type="text"
                value={formData.yearOfPassing}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                pattern="[0-9]{4}"
                placeholder="YYYY"
              />
            </div>

            <div>
              <label htmlFor="specialization" className="block text-gray-700 mb-2">
                Specialization/Field
              </label>
              <input
                id="specialization"
                name="specialization"
                type="text"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Financial Section */}
        <div>
          <h3 className="text-gray-900 mb-4 pb-2 border-b border-gray-200">Financial Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="annualIncome" className="block text-gray-700 mb-2">
                Annual Income (₹) *
              </label>
              <input
                id="annualIncome"
                name="annualIncome"
                type="number"
                value={formData.annualIncome}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                min="0"
              />
            </div>

            <div>
              <label htmlFor="employmentStatus" className="block text-gray-700 mb-2">
                Employment Status *
              </label>
              <select
                id="employmentStatus"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Status</option>
                <option value="employed">Employed</option>
                <option value="self-employed">Self-Employed</option>
                <option value="unemployed">Unemployed</option>
                <option value="student">Student</option>
                <option value="retired">Retired</option>
              </select>
            </div>

            <div>
              <label htmlFor="occupation" className="block text-gray-700 mb-2">
                Occupation *
              </label>
              <input
                id="occupation"
                name="occupation"
                type="text"
                value={formData.occupation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="bankAccountNumber" className="block text-gray-700 mb-2">
                Bank Account Number *
              </label>
              <input
                id="bankAccountNumber"
                name="bankAccountNumber"
                type="text"
                value={formData.bankAccountNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="ifscCode" className="block text-gray-700 mb-2">
                IFSC Code *
              </label>
              <input
                id="ifscCode"
                name="ifscCode"
                type="text"
                value={formData.ifscCode}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                pattern="[A-Z]{4}0[A-Z0-9]{6}"
                placeholder="e.g., SBIN0001234"
              />
            </div>
          </div>
        </div>

        {/* Beneficiary Details Section */}
        <div>
          <h3 className="text-gray-900 mb-4 pb-2 border-b border-gray-200">Beneficiary Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="beneficiaryName" className="block text-gray-700 mb-2">
                Beneficiary Name *
              </label>
              <input
                id="beneficiaryName"
                name="beneficiaryName"
                type="text"
                value={formData.beneficiaryName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="beneficiaryRelation" className="block text-gray-700 mb-2">
                Relation with Beneficiary *
              </label>
              <input
                id="beneficiaryRelation"
                name="beneficiaryRelation"
                type="text"
                value={formData.beneficiaryRelation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="beneficiaryPhone" className="block text-gray-700 mb-2">
                Beneficiary Phone Number *
              </label>
              <input
                id="beneficiaryPhone"
                name="beneficiaryPhone"
                type="tel"
                value={formData.beneficiaryPhone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="beneficiaryAddress" className="block text-gray-700 mb-2">
                Beneficiary Address *
              </label>
              <textarea
                id="beneficiaryAddress"
                name="beneficiaryAddress"
                value={formData.beneficiaryAddress}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4 border-t border-gray-200">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Save className="w-5 h-5" />
            Save Applicant
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
