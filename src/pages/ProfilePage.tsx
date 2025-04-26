import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Bell, Moon, Sun, Lock, LogOut, Edit2, Check, X } from 'lucide-react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'Jamie Smith',
    email: 'jamie.smith@example.com',
    joined: 'May 2023',
  });
  
  const [settings, setSettings] = useState({
    dailyReminders: true,
    weeklyReports: true,
    darkModeSystem: true,
    emailNotifications: true,
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  
  const handleToggleSetting = (setting: keyof typeof settings) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });
  };
  
  const handleSaveProfile = () => {
    setUser({
      ...user,
      name: editedName,
    });
    setIsEditing(false);
  };
  
  const handleCancelEdit = () => {
    setEditedName(user.name);
    setIsEditing(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Your Profile</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Manage your account settings and preferences
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card"
        >
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 dark:bg-primary/10 flex items-center justify-center mr-4">
              <User size={32} className="text-primary dark:text-primary-light" />
            </div>
            
            {isEditing ? (
              <div className="flex-grow">
                <div className="mb-2">
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="input"
                    placeholder="Your name"
                  />
                </div>
                <div className="flex space-x-2">
                  <button onClick={handleSaveProfile} className="text-success flex items-center">
                    <Check size={16} className="mr-1" /> Save
                  </button>
                  <button onClick={handleCancelEdit} className="text-error flex items-center">
                    <X size={16} className="mr-1" /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 dark:text-white flex items-center">
                  {user.name}
                  <button
                    onClick={() => setIsEditing(true)}
                    className="ml-2 p-1 text-neutral-500 dark:text-neutral-400 hover:text-primary dark:hover:text-primary-light"
                    aria-label="Edit profile"
                  >
                    <Edit2 size={16} />
                  </button>
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400">Member since {user.joined}</p>
              </div>
            )}
          </div>
          
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
            <div className="flex items-center py-3">
              <Mail size={20} className="text-neutral-500 dark:text-neutral-400 mr-3" />
              <span className="text-neutral-700 dark:text-neutral-300">{user.email}</span>
            </div>
          </div>
          
          <div className="mt-6">
            <button className="w-full btn-outline">
              <Lock size={16} className="mr-2" /> Change Password
            </button>
          </div>
          
          <div className="mt-4">
            <button className="w-full text-center py-2 px-4 rounded-lg border border-error text-error 
              hover:bg-error hover:text-white transition-colors duration-300">
              <LogOut size={16} className="mr-2 inline" /> Sign Out
            </button>
          </div>
        </motion.div>
        
        {/* Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="card mb-8">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Notifications</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell size={20} className="text-neutral-500 dark:text-neutral-400 mr-3" />
                  <div>
                    <h3 className="text-neutral-800 dark:text-neutral-200 font-medium">Daily Check-in Reminders</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Receive a daily reminder to log your mood and progress
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.dailyReminders}
                    onChange={() => handleToggleSetting('dailyReminders')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer 
                    dark:bg-neutral-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                    after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                    after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell size={20} className="text-neutral-500 dark:text-neutral-400 mr-3" />
                  <div>
                    <h3 className="text-neutral-800 dark:text-neutral-200 font-medium">Weekly Progress Reports</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Get a summary of your weekly progress and insights
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.weeklyReports}
                    onChange={() => handleToggleSetting('weeklyReports')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer 
                    dark:bg-neutral-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                    after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                    after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Mail size={20} className="text-neutral-500 dark:text-neutral-400 mr-3" />
                  <div>
                    <h3 className="text-neutral-800 dark:text-neutral-200 font-medium">Email Notifications</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Receive important updates and information via email
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailNotifications}
                    onChange={() => handleToggleSetting('emailNotifications')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer 
                    dark:bg-neutral-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                    after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                    after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Appearance</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {settings.darkModeSystem ? (
                    <Moon size={20} className="text-neutral-500 dark:text-neutral-400 mr-3" />
                  ) : (
                    <Sun size={20} className="text-neutral-500 dark:text-neutral-400 mr-3" />
                  )}
                  <div>
                    <h3 className="text-neutral-800 dark:text-neutral-200 font-medium">Use System Theme</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Automatically switch between light and dark mode based on system preferences
                    </p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.darkModeSystem}
                    onChange={() => handleToggleSetting('darkModeSystem')}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer 
                    dark:bg-neutral-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                    after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
                    after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <button className="btn-primary">Save Settings</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;

