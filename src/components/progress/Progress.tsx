import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress as ProgressIndicator } from '@/components/ui/progress';
import { ChartLine, Leaf, Calendar, ClockArrowUp } from 'lucide-react';

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const Progress = () => {
  const [activeTab, setActiveTab] = useState('weekly');
  
  // Mock data for weekly progress
  const weeklyData = [
    { day: 'Mon', growth: 76, water: 25, nutrients: 45 },
    { day: 'Tue', growth: 78, water: 35, nutrients: 48 },
    { day: 'Wed', growth: 79, water: 32, nutrients: 50 },
    { day: 'Thu', growth: 82, water: 38, nutrients: 53 },
    { day: 'Fri', growth: 85, water: 40, nutrients: 55 },
    { day: 'Sat', growth: 88, water: 42, nutrients: 58 },
    { day: 'Sun', growth: 90, water: 45, nutrients: 60 }
  ];
  
  // Mock data for monthly progress
  const monthlyData = [
    { week: 'Week 1', growth: 65, water: 120, nutrients: 40 },
    { week: 'Week 2', growth: 75, water: 135, nutrients: 48 },
    { week: 'Week 3', growth: 85, water: 150, nutrients: 56 },
    { week: 'Week 4', growth: 92, water: 165, nutrients: 64 }
  ];
  
  // Mock tasks data
  const weeklyTasks = [
    { id: 1, task: 'Apply nitrogen fertilizer', done: true, dueDay: 'Monday' },
    { id: 2, task: 'Check for pest infestations', done: true, dueDay: 'Tuesday' },
    { id: 3, task: 'Prune damaged leaves', done: false, dueDay: 'Thursday' },
    { id: 4, task: 'Test soil moisture levels', done: false, dueDay: 'Friday' },
    { id: 5, task: 'Apply fungal treatment', done: false, dueDay: 'Saturday' }
  ];
  
  const monthlyTasks = [
    { id: 1, task: 'Soil nutrient analysis', done: true, dueWeek: 'Week 1' },
    { id: 2, task: 'Crop rotation planning', done: true, dueWeek: 'Week 1' },
    { id: 3, task: 'Irrigation system maintenance', done: false, dueWeek: 'Week 2' },
    { id: 4, task: 'Pest control assessment', done: false, dueWeek: 'Week 3' },
    { id: 5, task: 'Harvest preparation', done: false, dueWeek: 'Week 4' }
  ];
  
  const weeklyRecommendations = [
    'Increase watering frequency as temperatures are rising',
    'Monitor for signs of aphid infestation on leaves',
    'Consider adding shade during peak afternoon hours',
    'Apply foliar spray to support current growth phase'
  ];
  
  const monthlyRecommendations = [
    'Implement crop rotation in next planting cycle',
    'Upgrade irrigation system for better water efficiency',
    'Consider introducing beneficial insects for pest control',
    'Plan for soil amendments before next growing season'
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Progress Tracking
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Monitor your crop's growth, receive timely recommendations, and track your farming tasks
          to optimize your agricultural practices.
        </p>
      </div>
      
      <Tabs defaultValue="weekly" className="max-w-5xl mx-auto" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="weekly">
            <Calendar className="mr-2 h-4 w-4" />
            Weekly Progress
          </TabsTrigger>
          <TabsTrigger value="monthly">
            <ClockArrowUp className="mr-2 h-4 w-4" />
            Monthly Progress
          </TabsTrigger>
        </TabsList>
        
        {/* Weekly Progress Tab */}
        <TabsContent value="weekly">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Chart */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChartLine className="h-5 w-5 text-crop-green-600" />
                  Weekly Growth Metrics
                </CardTitle>
                <CardDescription>
                  Monitor your crop's growth, water usage, and nutrient levels over the past week
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={weeklyData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="growth" stackId="1" stroke="#8BC34A" fill="#C5E1A5" name="Growth %" />
                    <Area type="monotone" dataKey="water" stackId="2" stroke="#03A9F4" fill="#B3E5FC" name="Water (L)" />
                    <Area type="monotone" dataKey="nutrients" stackId="3" stroke="#795548" fill="#D7CCC8" name="Nutrients (g)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            {/* Task Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-crop-blue-600" />
                  Weekly Tasks
                </CardTitle>
                <CardDescription>
                  Track your farming tasks for this week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyTasks.map(task => (
                    <div key={task.id} className="flex items-start gap-3">
                      <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center ${task.done ? 'bg-crop-green-500' : 'border-2 border-gray-300'}`}>
                        {task.done && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${task.done ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                          {task.task}
                        </p>
                        <p className="text-sm text-gray-500">{task.dueDay}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Task Completion</span>
                    <span className="text-sm font-medium text-gray-700">
                      {weeklyTasks.filter(t => t.done).length}/{weeklyTasks.length}
                    </span>
                  </div>
                  <ProgressIndicator value={40} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            {/* Recommendations */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-crop-green-600" />
                  Weekly Recommendations
                </CardTitle>
                <CardDescription>
                  Personalized recommendations based on your current progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {weeklyRecommendations.map((recommendation, index) => (
                    <div key={index} className="bg-crop-green-50 border border-crop-green-100 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-8 h-8 rounded-full bg-crop-green-100 flex items-center justify-center">
                          <Leaf className="h-4 w-4 text-crop-green-600" />
                        </div>
                        <div>
                          <p className="text-gray-700">{recommendation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Monthly Progress Tab */}
        <TabsContent value="monthly">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Chart */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ChartLine className="h-5 w-5 text-crop-green-600" />
                  Monthly Growth Metrics
                </CardTitle>
                <CardDescription>
                  Monitor your crop's growth, water usage, and nutrient levels over the past month
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={monthlyData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="growth" stackId="a" fill="#8BC34A" name="Growth %" />
                    <Bar dataKey="water" stackId="b" fill="#03A9F4" name="Water (L)" />
                    <Bar dataKey="nutrients" stackId="c" fill="#795548" name="Nutrients (g)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            {/* Task Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-crop-blue-600" />
                  Monthly Tasks
                </CardTitle>
                <CardDescription>
                  Track your farming tasks for this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyTasks.map(task => (
                    <div key={task.id} className="flex items-start gap-3">
                      <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center ${task.done ? 'bg-crop-green-500' : 'border-2 border-gray-300'}`}>
                        {task.done && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${task.done ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                          {task.task}
                        </p>
                        <p className="text-sm text-gray-500">{task.dueWeek}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Task Completion</span>
                    <span className="text-sm font-medium text-gray-700">
                      {monthlyTasks.filter(t => t.done).length}/{monthlyTasks.length}
                    </span>
                  </div>
                  <ProgressIndicator value={40} className="h-2" />
                </div>
              </CardContent>
            </Card>
            
            {/* Recommendations */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-crop-green-600" />
                  Monthly Recommendations
                </CardTitle>
                <CardDescription>
                  Long-term recommendations based on your monthly progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {monthlyRecommendations.map((recommendation, index) => (
                    <div key={index} className="bg-crop-green-50 border border-crop-green-100 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 w-8 h-8 rounded-full bg-crop-green-100 flex items-center justify-center">
                          <Leaf className="h-4 w-4 text-crop-green-600" />
                        </div>
                        <div>
                          <p className="text-gray-700">{recommendation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 bg-gray-50 p-6 rounded-lg max-w-5xl mx-auto">
        <h2 className="font-heading text-xl font-semibold mb-4">Tips for Effective Progress Tracking</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Consistent Monitoring</h3>
            <p className="text-gray-600">
              Set a regular schedule for recording data and tracking progress. Consistency is key to identifying trends and patterns.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Document Everything</h3>
            <p className="text-gray-600">
              Keep detailed notes on weather conditions, treatments applied, and any unusual observations to correlate with your data.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Act on Recommendations</h3>
            <p className="text-gray-600">
              Don't just collect data—use it! Implement the recommended actions and track how your crops respond over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
