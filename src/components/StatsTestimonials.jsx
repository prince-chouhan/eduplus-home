import React from 'react';
import { Clock, TrendingUp, Users, Star } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: '100+',
    label: 'Hours Saved Monthly',
    description: 'Automated attendance tracking',
    color: 'blue'
  },
  {
    icon: TrendingUp,
    value: '40%',
    label: 'Engagement Increase',
    description: 'Improved student participation',
    color: 'green'
  },
  {
    icon: Users,
    value: '5000+',
    label: 'Students Managed',
    description: 'Across multiple institutions',
    color: 'purple'
  },
  {
    icon: Star,
    value: '99.9%',
    label: 'Accuracy Rate',
    description: 'AI-powered recognition',
    color: 'yellow'
  }
];

const testimonials = [
  {
    quote: "Edu+ has completely transformed how we manage attendance. The AI accuracy is incredible and has saved our staff countless hours.",
    author: "Dr. Vivek Richhariya",
    role: "HOD CSE",
    school: "LNCT",
    avatar: "VR"
  },
  {
    quote: "The routine planner feature is a game-changer. It optimizes our class schedules better than any manual system we've used.",
    author: "Prof. Hitesh Gupta",
    role: "PROFESSOR",
    school: "LNCT CSE DEPARTMENT",
    avatar: "HG"
  },
  {
    quote: "Students love the real-time dashboard. It keeps them engaged and aware of their attendance patterns.",
    author: "Dr. Puneet Nema",
    role: "TnP COORDINATOR",
    school: "LNCT",
    avatar: "PN"
  }
];

const StatsTestimonials = () => {
  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      yellow: 'bg-yellow-100 text-yellow-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Impact <span className="text-blue-600">Statistics</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Edu+ is making a real difference in educational institutions worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`inline-flex p-3 rounded-xl ${getColorClasses(stat.color)} mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Educators <span className="text-blue-600">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from educational professionals using Edu+
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.school}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsTestimonials;