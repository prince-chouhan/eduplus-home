import React from 'react';
import { Play, Monitor, Smartphone, Users } from 'lucide-react';

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Experience Edu+
             {/* <span className="text-blue-600">Live Demo</span> */}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {/* Try our interactive demo and */}
             See how Edu+ transforms educational management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden">
                {/* Demo Interface Mockup */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Edu+ Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-100 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-600">98.5%</div>
                      <div className="text-xs text-blue-800">Attendance</div>
                    </div>
                    <div className="bg-green-100 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600">234</div>
                      <div className="text-xs text-green-800">Students</div>
                    </div>
                    <div className="bg-purple-100 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-purple-600">15</div>
                      <div className="text-xs text-purple-800">Classes</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-blue-600 rounded-full w-4/5"></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">CS101</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-green-600 rounded-full w-5/6"></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">MATH201</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-gray-200 rounded-full">
                          <div className="h-2 bg-purple-600 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">PHY301</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110">
                  <Play className="h-8 w-8 text-blue-600 ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Demo Features */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Monitor className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Teacher Dashboard</h3>
                  <p className="text-gray-600">
                    Comprehensive overview of attendance, student performance, and class management tools
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Portal</h3>
                  <p className="text-gray-600">
                    Mobile-friendly interface for students to track their attendance and academic progress
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Admin Panel</h3>
                  <p className="text-gray-600">
                    Advanced analytics and system management for educational administrators
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              {/* <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Try Demo Now</span>
              </button> */}
              {/* <p className="text-sm text-gray-500 mt-2">No signup required • Full access • 5 min trial</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;