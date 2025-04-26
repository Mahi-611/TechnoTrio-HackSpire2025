import { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from 'recharts';
import { Calendar, PieChart, TrendingUp, Filter } from 'lucide-react';

// Mock data - would be replaced with real data from Supabase
const moodData = [
  { date: 'Jan 1', mood: 7, anxiety: 3, energy: 6, sleep: 8 },
  { date: 'Jan 2', mood: 6, anxiety: 4, energy: 5, sleep: 7 },
  { date: 'Jan 3', mood: 8, anxiety: 2, energy: 8, sleep: 8 },
  { date: 'Jan 4', mood: 5, anxiety: 6, energy: 4, sleep: 6 },
  { date: 'Jan 5', mood: 7, anxiety: 3, energy: 6, sleep: 7 },
  { date: 'Jan 6', mood: 9, anxiety: 1, energy: 9, sleep: 9 },
  { date: 'Jan 7', mood: 8, anxiety: 2, energy: 7, sleep: 8 },
  { date: 'Jan 8', mood: 7, anxiety: 3, energy: 7, sleep: 7 },
  { date: 'Jan 9', mood: 6, anxiety: 5, energy: 5, sleep: 6 },
  { date: 'Jan 10', mood: 8, anxiety: 2, energy: 8, sleep: 8 },
  { date: 'Jan 11', mood: 9, anxiety: 1, energy: 9, sleep: 9 },
  { date: 'Jan 12', mood: 7, anxiety: 3, energy: 7, sleep: 8 },
  { date: 'Jan 13', mood: 8, anxiety: 2, energy: 8, sleep: 7 },
  { date: 'Jan 14', mood: 9, anxiety: 1, energy: 9, sleep: 9 },
];

const weeklyAverages = [
  { week: 'Week 1', mood: 7.1, anxiety: 3.0, energy: 6.4, sleep: 7.6 },
  { week: 'Week 2', mood: 7.9, anxiety: 2.3, energy: 7.7, sleep: 8.0 },
];

const ProgressTrackerPage = () => {
  const [timeRange, setTimeRange] = useState('14days');
  const [metricFilter, setMetricFilter] = useState('all');
  
  // Filter data based on selected time range
  const filteredData = timeRange === '7days' ? moodData.slice(-7) : moodData;
  
  // Determine which metrics to show based on filter
  const showMood = metricFilter === 'all' || metricFilter === 'mood';
  const showAnxiety = metricFilter === 'all' || metricFilter === 'anxiety';
  const showEnergy = metricFilter === 'all' || metricFilter === 'energy';
  const showSleep = metricFilter === 'all' || metricFilter === 'sleep';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Progress Tracker</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Monitor your well-being journey over time 📊
        </p>
      </motion.div>
      
      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 flex flex-wrap gap-4"
      >
        <div className="card flex-1 flex items-center">
          <Calendar size={20} className="text-primary dark:text-primary-light mr-3" />
          <span className="text-sm text-neutral-700 dark:text-neutral-300 mr-4">Time Range:</span>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="input py-1 px-3 text-sm"
          >
            <option value="7days">Last 7 Days</option>
            <option value="14days">Last 14 Days</option>
            <option value="30days">Last 30 Days</option>
          </select>
        </div>
        
        <div className="card flex-1 flex items-center">
          <Filter size={20} className="text-primary dark:text-primary-light mr-3" />
          <span className="text-sm text-neutral-700 dark:text-neutral-300 mr-4">Metrics:</span>
          <select 
            value={metricFilter}
            onChange={(e) => setMetricFilter(e.target.value)}
            className="input py-1 px-3 text-sm"
          >
            <option value="all">All Metrics</option>
            <option value="mood">Mood Only</option>
            <option value="anxiety">Anxiety Only</option>
            <option value="energy">Energy Only</option>
            <option value="sleep">Sleep Only</option>
          </select>
        </div>
      </motion.div>
      
      {/* Main Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="card mb-8"
      >
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 flex items-center">
          <TrendingUp size={20} className="text-primary dark:text-primary-light mr-2" />
          Emotional Well-being Trends
        </h2>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={filteredData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="date" 
                stroke="#9ca3af"
                tick={{ fill: '#6b7280' }}
              />
              <YAxis 
                domain={[0, 10]} 
                stroke="#9ca3af"
                tick={{ fill: '#6b7280' }}
                label={{ 
                  value: 'Level (0-10)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fill: '#6b7280' }
                }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  color: '#374151'
                }}
              />
              {showMood && (
                <Line 
                  type="monotone" 
                  dataKey="mood" 
                  stroke="#4CAF82" 
                  strokeWidth={2}
                  dot={{ stroke: '#4CAF82', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Mood"
                />
              )}
              {showAnxiety && (
                <Line 
                  type="monotone" 
                  dataKey="anxiety" 
                  stroke="#F87171" 
                  strokeWidth={2}
                  dot={{ stroke: '#F87171', strokeWidth: 2, r: 4 }}
                  name="Anxiety"
                />
              )}
              {showEnergy && (
                <Line 
                  type="monotone" 
                  dataKey="energy" 
                  stroke="#FBBF24" 
                  strokeWidth={2}
                  dot={{ stroke: '#FBBF24', strokeWidth: 2, r: 4 }}
                  name="Energy"
                />
              )}
              {showSleep && (
                <Line 
                  type="monotone" 
                  dataKey="sleep" 
                  stroke="#9575CD" 
                  strokeWidth={2}
                  dot={{ stroke: '#9575CD', strokeWidth: 2, r: 4 }}
                  name="Sleep Quality"
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
      
      {/* Weekly Averages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card mb-8"
      >
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 flex items-center">
          <PieChart size={20} className="text-primary dark:text-primary-light mr-2" />
          Weekly Averages
        </h2>
        
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={weeklyAverages}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="week" 
                stroke="#9ca3af"
                tick={{ fill: '#6b7280' }}
              />
              <YAxis 
                domain={[0, 10]} 
                stroke="#9ca3af"
                tick={{ fill: '#6b7280' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  color: '#374151'
                }}
              />
              {showMood && (
                <Bar dataKey="mood" name="Mood" fill="#4CAF82" />
              )}
              {showAnxiety && (
                <Bar dataKey="anxiety" name="Anxiety" fill="#F87171" />
              )}
              {showEnergy && (
                <Bar dataKey="energy" name="Energy" fill="#FBBF24" />
              )}
              {showSleep && (
                <Bar dataKey="sleep" name="Sleep Quality" fill="#9575CD" />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
      
      {/* Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="card">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Insights</h2>
          <ul className="space-y-3 text-neutral-700 dark:text-neutral-400">
            <li className="flex items-start">
              <span className="text-primary dark:text-primary-light mr-2">•</span>
              Your overall mood has improved by 11% over the past two weeks.
            </li>
            <li className="flex items-start">
              <span className="text-success mr-2">•</span>
              Anxiety levels have decreased consistently, showing a positive trend.
            </li>
            <li className="flex items-start">
              <span className="text-primary dark:text-primary-light mr-2">•</span>
              Sleep quality correlates strongly with your mood the following day.
            </li>
            <li className="flex items-start">
              <span className="text-warning mr-2">•</span>
              Energy levels fluctuate mid-week, consider adding more rest periods.
            </li>
          </ul>
        </div>
        
        <div className="card">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Recommendations</h2>
          <ul className="space-y-3 text-neutral-700 dark:text-neutral-400">
            <li className="flex items-start">
              <span className="text-primary dark:text-primary-light mr-2">•</span>
              Continue your evening relaxation routine for improved sleep quality.
            </li>
            <li className="flex items-start">
              <span className="text-primary dark:text-primary-light mr-2">•</span>
              Consider a 10-minute meditation after lunch to maintain energy levels.
            </li>
            <li className="flex items-start">
              <span className="text-primary dark:text-primary-light mr-2">•</span>
              Your anxiety decreases after outdoor activities, try to incorporate more.
            </li>
            <li className="flex items-start">
              <span className="text-primary dark:text-primary-light mr-2">•</span>
              Log your mood in the morning and evening for more detailed insights.
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ProgressTrackerPage;