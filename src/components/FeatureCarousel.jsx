import React, { useState, useEffect } from 'react';
import { Camera, Calendar, ClipboardList, Database, Target, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    icon: Camera,
    title: 'Smart CCTV & Wifi Attendance',
    description: 'AI-powered facial recognition and Wifi tracking for seamless attendance management',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Calendar,
    title: 'AI-powered Routine Planner',
    description: 'Intelligent scheduling that optimizes class timings and resource allocation',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: ClipboardList,
    title: 'Detain List Generator',
    description: 'Automated generation of student detention lists based on attendance patterns',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Database,
    title: 'ERP Integration',
    description: 'Seamless integration with existing school management systems and databases',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Target,
    title: 'Skill-based Suggestions',
    description: 'Personalized learning recommendations based on student performance analytics',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: BarChart3,
    title: 'Real-time Dashboards',
    description: 'Comprehensive analytics and insights for educators and administrators',
    gradient: 'from-yellow-500 to-orange-500'
  }
];

const FeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextFeature = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const getVisibleFeatures = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(features[(currentIndex + i) % features.length]);
    }
    return visible;
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful <span className="text-blue-600">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Edu+ revolutionizes education management with cutting-edge AI technology
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Desktop Carousel */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
            {getVisibleFeatures().map((feature, index) => {
              const Icon = feature.icon;
              const isCenter = index === 1;
              
              return (
                <div
                  key={`${feature.title}-${index}`}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                    isCenter ? 'scale-105 ring-2 ring-blue-200' : 'hover:scale-105'
                  }`}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Mobile Single Card */}
          <div className="md:hidden">
            <div className="bg-white rounded-2xl p-8 shadow-lg mx-4">
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${features[currentIndex].gradient} mb-6`}>
                {React.createElement(features[currentIndex].icon, { className: "h-8 w-8 text-white" })}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{features[currentIndex].title}</h3>
              <p className="text-gray-600 leading-relaxed">{features[currentIndex].description}</p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevFeature}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-blue-50"
            >
              <ChevronLeft className="h-6 w-6 text-blue-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextFeature}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-blue-50"
            >
              <ChevronRight className="h-6 w-6 text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCarousel;