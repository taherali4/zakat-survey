import { useState } from 'react';
import { Save } from 'lucide-react';

interface AddManagerFormProps {
  onSave: (data: ManagerFormData) => void;
  onCancel: () => void;
}

export interface ManagerFormData {
  name: string;
  masjidId: string;
  aadharNumber: string;
  address: string;
  joiningDate: string;
  retireDate: string;
  email: string;
  phone: string;
  department: string;
}

export function AddManagerForm({ onSave, onCancel }: AddManagerFormProps) {
  const [formData, setFormData] = useState<ManagerFormData>({
    name: '',
    masjidId: '',
    aadharNumber: '',
    address: '',
    joiningDate: '',
    retireDate: '',
    email: '',
    phone: '',
    department: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      <h2 className="text-gray-900 mb-6">Add New Manager</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
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
            <label htmlFor="masjidId" className="block text-gray-700 mb-2">
              Masjid ID *
            </label>
            <input
              id="masjidId"
              name="masjidId"
              type="text"
              value={formData.masjidId}
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
            <label htmlFor="department" className="block text-gray-700 mb-2">
              Department *
            </label>
            <input
              id="department"
              name="department"
              type="text"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="joiningDate" className="block text-gray-700 mb-2">
              Joining Date *
            </label>
            <input
              id="joiningDate"
              name="joiningDate"
              type="date"
              value={formData.joiningDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="retireDate" className="block text-gray-700 mb-2">
              Retirement Date *
            </label>
            <input
              id="retireDate"
              name="retireDate"
              type="date"
              value={formData.retireDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
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

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Save className="w-5 h-5" />
            Save Manager
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
