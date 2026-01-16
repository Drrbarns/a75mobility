
const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We understand your mobility needs and recommend the best solutions for your requirements.',
      icon: 'ri-discuss-line',
      details: ['Needs assessment', 'Solution design', 'Cost estimation', 'Timeline planning']
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Detailed project planning including logistics, timelines, and resource allocation.',
      icon: 'ri-file-list-line',
      details: ['Project roadmap', 'Resource planning', 'Risk assessment', 'Quality standards']
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'Professional execution of services with regular updates and quality monitoring.',
      icon: 'ri-settings-line',
      details: ['Service delivery', 'Quality control', 'Progress tracking', 'Regular updates']
    },
    {
      number: '04',
      title: 'Support',
      description: 'Ongoing support and maintenance to ensure optimal performance and satisfaction.',
      icon: 'ri-customer-service-line',
      details: ['24/7 support', 'Maintenance services', 'Performance monitoring', 'Continuous improvement']
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
              Our Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6">
            How We Work
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven four-step process ensures successful project delivery and exceptional customer satisfaction from consultation to ongoing support.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#F29F05] to-[#F29F05]/20 z-0"></div>
              )}

              {/* Step Card */}
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center z-10">
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#F29F05] to-[#e89004] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-[#F29F05]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${step.icon} text-2xl text-[#F29F05]`}></i>
                </div>

                <h3 className="text-2xl font-bold text-[#0B1A33] mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center justify-center text-sm text-gray-500">
                      <i className="ri-check-line text-[#F29F05] mr-2"></i>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-[#0B1A33] to-[#1E5AA8] rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F29F05]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90 mb-8">
              Let's discuss your mobility needs and create a customized solution that drives your success forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#F29F05] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                Start Your Project
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0B1A33] transition-all cursor-pointer whitespace-nowrap"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
