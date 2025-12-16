import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { ManagerList } from './components/ManagerList';
import { ManagerCard } from './components/ManagerCard';
import { VolunteerList } from './components/VolunteerList';
import { VolunteerCard } from './components/VolunteerCard';
import { ApplicantList } from './components/ApplicantList';
import { ApplicantCard } from './components/ApplicantCard';
import { AddManagerForm, ManagerFormData } from './components/AddManagerForm';
import { AddVolunteerForm, VolunteerFormData } from './components/AddVolunteerForm';
import { AddApplicantForm, ApplicantFormData } from './components/AddApplicantForm';

export interface Applicant {
  id: string;
  name: string;
  email: string;
  phone: string;
  appliedDate: string;
  status: 'pending' | 'approved' | 'rejected';
  position: string;
}

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  joiningDate: string;
  department: string;
  applicants: Applicant[];
}

export interface Manager {
  id: string;
  name: string;
  email: string;
  joiningDate: string;
  retirementDate: string;
  department: string;
  volunteers: Volunteer[];
  applicants: Applicant[];
}

// Mock data
const mockData: Manager[] = [
  {
    id: 'm1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    joiningDate: '2015-03-15',
    retirementDate: '2035-03-15',
    department: 'Operations',
    volunteers: [
      {
        id: 'v1',
        name: 'Michael Chen',
        email: 'michael.chen@company.com',
        joiningDate: '2020-06-01',
        department: 'Operations',
        applicants: [
          {
            id: 'a1',
            name: 'Emma Williams',
            email: 'emma.w@email.com',
            phone: '555-0101',
            appliedDate: '2024-01-15',
            status: 'pending',
            position: 'Volunteer Assistant'
          },
          {
            id: 'a2',
            name: 'James Brown',
            email: 'james.b@email.com',
            phone: '555-0102',
            appliedDate: '2024-02-20',
            status: 'approved',
            position: 'Volunteer Assistant'
          }
        ]
      },
      {
        id: 'v2',
        name: 'Lisa Anderson',
        email: 'lisa.anderson@company.com',
        joiningDate: '2021-09-12',
        department: 'Operations',
        applicants: [
          {
            id: 'a3',
            name: 'David Miller',
            email: 'david.m@email.com',
            phone: '555-0103',
            appliedDate: '2024-03-05',
            status: 'pending',
            position: 'Field Assistant'
          }
        ]
      }
    ],
    applicants: [
      {
        id: 'a4',
        name: 'Sophia Davis',
        email: 'sophia.d@email.com',
        phone: '555-0104',
        appliedDate: '2024-01-20',
        status: 'approved',
        position: 'Team Lead'
      },
      {
        id: 'a5',
        name: 'Oliver Wilson',
        email: 'oliver.w@email.com',
        phone: '555-0105',
        appliedDate: '2024-02-10',
        status: 'pending',
        position: 'Coordinator'
      }
    ]
  },
  {
    id: 'm2',
    name: 'Robert Martinez',
    email: 'robert.martinez@company.com',
    joiningDate: '2012-08-20',
    retirementDate: '2032-08-20',
    department: 'Community Outreach',
    volunteers: [
      {
        id: 'v3',
        name: 'Emily Taylor',
        email: 'emily.taylor@company.com',
        joiningDate: '2019-04-15',
        department: 'Community Outreach',
        applicants: [
          {
            id: 'a6',
            name: 'Noah Garcia',
            email: 'noah.g@email.com',
            phone: '555-0106',
            appliedDate: '2024-01-25',
            status: 'pending',
            position: 'Outreach Assistant'
          }
        ]
      }
    ],
    applicants: [
      {
        id: 'a7',
        name: 'Ava Martinez',
        email: 'ava.m@email.com',
        phone: '555-0107',
        appliedDate: '2024-03-01',
        status: 'pending',
        position: 'Program Manager'
      }
    ]
  },
  {
    id: 'm3',
    name: 'Jennifer Lee',
    email: 'jennifer.lee@company.com',
    joiningDate: '2018-01-10',
    retirementDate: '2038-01-10',
    department: 'Development',
    volunteers: [
      {
        id: 'v4',
        name: 'William Rodriguez',
        email: 'william.r@company.com',
        joiningDate: '2022-02-28',
        department: 'Development',
        applicants: []
      },
      {
        id: 'v5',
        name: 'Isabella Thompson',
        email: 'isabella.t@company.com',
        joiningDate: '2022-07-18',
        department: 'Development',
        applicants: [
          {
            id: 'a8',
            name: 'Ethan White',
            email: 'ethan.w@email.com',
            phone: '555-0108',
            appliedDate: '2024-02-15',
            status: 'approved',
            position: 'Development Aide'
          }
        ]
      }
    ],
    applicants: [
      {
        id: 'a9',
        name: 'Mia Johnson',
        email: 'mia.j@email.com',
        phone: '555-0109',
        appliedDate: '2024-01-30',
        status: 'rejected',
        position: 'Senior Coordinator'
      }
    ]
  }
];

type Tab = 'managers' | 'volunteers' | 'applicants';
type UserRole = 'head' | 'manager' | 'volunteer';

interface User {
  email: string;
  role: UserRole;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('managers');
  const [selectedManager, setSelectedManager] = useState<Manager | null>(null);
  const [selectedVolunteer, setSelectedVolunteer] = useState<Volunteer | null>(null);
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState<ManagerFormData | VolunteerFormData | ApplicantFormData | null>(null);

  // Flatten all volunteers from all managers
  const allVolunteers = mockData.flatMap(manager => 
    manager.volunteers.map(volunteer => ({
      ...volunteer,
      managerName: manager.name
    }))
  );

  // Flatten all applicants from managers and volunteers
  const allApplicants = [
    ...mockData.flatMap(manager => 
      manager.applicants.map(applicant => ({
        ...applicant,
        appliedTo: `Manager: ${manager.name}`
      }))
    ),
    ...mockData.flatMap(manager => 
      manager.volunteers.flatMap(volunteer =>
        volunteer.applicants.map(applicant => ({
          ...applicant,
          appliedTo: `Volunteer: ${volunteer.name}`
        }))
      )
    )
  ];

  const handleLogin = (email: string) => {
    let role: UserRole = 'volunteer';
    if (email === 'username_head@gmail.com') {
      role = 'head';
      setActiveTab('managers');
    } else if (email === 'username_manager@gmail.com') {
      role = 'manager';
      setActiveTab('volunteers');
    } else if (email === 'username_volunteer@gmail.com') {
      role = 'volunteer';
      setActiveTab('applicants');
    }
    setUser({ email, role });
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedManager(null);
    setSelectedVolunteer(null);
    setSelectedApplicant(null);
    setActiveTab('managers');
    setShowAddForm(false);
  };

  const handleManagerClick = (manager: Manager) => {
    setSelectedManager(manager);
    setSelectedVolunteer(null);
    setSelectedApplicant(null);
    setShowAddForm(false);
  };

  const handleVolunteerClick = (volunteer: Volunteer) => {
    setSelectedVolunteer(volunteer);
    setSelectedApplicant(null);
    setShowAddForm(false);
  };

  const handleApplicantClick = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setShowAddForm(false);
  };

  const handleBackToManagerList = () => {
    setSelectedManager(null);
    setSelectedVolunteer(null);
    setSelectedApplicant(null);
    setShowAddForm(false);
  };

  const handleBackToVolunteerList = () => {
    setSelectedVolunteer(null);
    setSelectedApplicant(null);
    setShowAddForm(false);
  };

  const handleBackToApplicantList = () => {
    setSelectedApplicant(null);
    setShowAddForm(false);
  };

  const handleShowAddForm = () => {
    setShowAddForm(true);
    setSelectedManager(null);
    setSelectedVolunteer(null);
    setSelectedApplicant(null);
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
  };

  // Show login page if not logged in
  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Determine visible tabs based on user role
  const canSeeManagers = user.role === 'head';
  const canSeeVolunteers = user.role === 'head' || user.role === 'manager';
  const canSeeApplicants = true; // All roles can see applicants

  // Get current user name
  const getUserName = () => {
    if (user.role === 'head') return 'Head Administrator';
    if (user.role === 'manager') return 'Manager';
    return 'Volunteer';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header with user info */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white">
                  {getUserName().split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-gray-900">{getUserName()}</p>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'managers' && canSeeManagers && (
          <>
            {!selectedManager && !showAddForm ? (
              <ManagerList 
                managers={mockData} 
                onManagerClick={handleManagerClick}
                onShowAddForm={handleShowAddForm}
              />
            ) : showAddForm ? (
              <div className="mb-8">
                <button
                  onClick={handleCloseAddForm}
                  className="text-gray-600 hover:text-gray-900 mb-4"
                >
                  ← Back to List
                </button>
                <AddManagerForm
                  onSave={(data) => {
                    console.log('Manager data saved:', data);
                    alert(`Manager ${data.name} added successfully!`);
                    handleCloseAddForm();
                  }}
                  onCancel={handleCloseAddForm}
                />
              </div>
            ) : !selectedVolunteer ? (
              <ManagerCard 
                manager={selectedManager!} 
                onBack={handleBackToManagerList}
                onVolunteerClick={handleVolunteerClick}
              />
            ) : !selectedApplicant ? (
              <VolunteerCard 
                volunteer={selectedVolunteer} 
                onBack={handleBackToVolunteerList}
                onApplicantClick={handleApplicantClick}
              />
            ) : (
              <ApplicantCard
                applicant={selectedApplicant}
                onBack={handleBackToApplicantList}
              />
            )}
          </>
        )}

        {activeTab === 'volunteers' && canSeeVolunteers && (
          <>
            {!selectedVolunteer && !showAddForm ? (
              <VolunteerList 
                volunteers={allVolunteers} 
                onVolunteerClick={handleVolunteerClick}
                onShowAddForm={handleShowAddForm}
              />
            ) : showAddForm ? (
              <div className="mb-8">
                <button
                  onClick={handleCloseAddForm}
                  className="text-gray-600 hover:text-gray-900 mb-4"
                >
                  ← Back to List
                </button>
                <AddVolunteerForm
                  managers={mockData}
                  onSave={(data) => {
                    console.log('Volunteer data saved:', data);
                    alert(`Volunteer ${data.name} added successfully!`);
                    handleCloseAddForm();
                  }}
                  onCancel={handleCloseAddForm}
                />
              </div>
            ) : !selectedApplicant ? (
              <VolunteerCard 
                volunteer={selectedVolunteer} 
                onBack={handleBackToManagerList}
                onApplicantClick={handleApplicantClick}
              />
            ) : (
              <ApplicantCard
                applicant={selectedApplicant}
                onBack={handleBackToApplicantList}
              />
            )}
          </>
        )}

        {activeTab === 'applicants' && canSeeApplicants && (
          <>
            {!selectedApplicant && !showAddForm ? (
              <ApplicantList 
                applicants={allApplicants} 
                onApplicantClick={handleApplicantClick}
                onShowAddForm={handleShowAddForm}
              />
            ) : showAddForm ? (
              <div className="mb-8">
                <button
                  onClick={handleCloseAddForm}
                  className="text-gray-600 hover:text-gray-900 mb-4"
                >
                  ← Back to List
                </button>
                <AddApplicantForm
                  onSave={(data) => {
                    console.log('Applicant data saved:', data);
                    alert(`Applicant ${data.name} added successfully!`);
                    handleCloseAddForm();
                  }}
                  onCancel={handleCloseAddForm}
                />
              </div>
            ) : (
              <ApplicantCard
                applicant={selectedApplicant}
                onBack={handleBackToApplicantList}
              />
            )}
          </>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around">
            {canSeeManagers && (
              <button
                onClick={() => {
                  setActiveTab('managers');
                  handleBackToManagerList();
                }}
                className={`flex-1 py-4 text-center transition-colors ${
                  activeTab === 'managers'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Managers
              </button>
            )}
            {canSeeVolunteers && (
              <button
                onClick={() => {
                  setActiveTab('volunteers');
                  handleBackToManagerList();
                }}
                className={`flex-1 py-4 text-center transition-colors ${
                  activeTab === 'volunteers'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Volunteers
              </button>
            )}
            {canSeeApplicants && (
              <button
                onClick={() => {
                  setActiveTab('applicants');
                  handleBackToManagerList();
                }}
                className={`flex-1 py-4 text-center transition-colors ${
                  activeTab === 'applicants'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Applicants
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}