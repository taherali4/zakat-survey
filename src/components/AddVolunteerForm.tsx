import { useState } from 'react';
import { Save } from 'lucide-react';
import { Manager } from '../App';

interface AddVolunteerFormProps {
  managers: Manager[];
  onSave: (data: VolunteerFormData) => void;
  onCancel: () => void;
}

export interface VolunteerFormData {
  name: string;
  masjidId: string;
  managerId: string;
  joiningDate: string;
  retiredDate: string;
  email: string;
  phone: string;
  department: string;
}

export function AddVolunteerForm({ managers, onSave, onCancel }: AddVolunteerFormProps) {
  const [formData, setFormData] = useState<VolunteerFormData>({
    name: '',
    masjidId: '',
    managerId: '',
    joiningDate: '',
    retiredDate: '',
    email: '',
    phone: '',
    department: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  // Filter active managers (not retired)
  const activeManagers = managers.filter(manager => {
    const retirementDate = new Date(manager.retirementDate);
    const today = new Date();
    return retirementDate > today;
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-gray-900 mb-6">Add New Volunteer</h2>
      
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
            <label htmlFor="managerId" className="block text-gray-700 mb-2">
              Manager Name *
            </label>
            <select
              id="managerId"
              name="managerId"
              value={formData.managerId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a Manager</option>
              {activeManagers.map(manager => (
                <option key={manager.id} value={manager.id}>
                  {manager.name} - {manager.department}
                </option>
              ))}
            </select>
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
            <label htmlFor="retiredDate" className="block text-gray-700 mb-2">
              Retired Date *
            </label>
            <input
              id="retiredDate"
              name="retiredDate"
              type="date"
              value={formData.retiredDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <Save className="w-5 h-5" />
            Save Volunteer
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
