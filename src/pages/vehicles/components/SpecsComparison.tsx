
const SpecsComparison = () => {
  const comparisonData = [
    {
      feature: 'Environmental Impact',
      electric: 'Zero Emissions',
      fuel: 'Low Emissions',
      electricIcon: 'ri-leaf-line',
      fuelIcon: 'ri-plant-line'
    },
    {
      feature: 'Operating Cost',
      electric: 'GHS 0.15/km',
      fuel: 'GHS 0.45/km',
      electricIcon: 'ri-money-dollar-circle-line',
      fuelIcon: 'ri-gas-station-line'
    },
    {
      feature: 'Maintenance',
      electric: 'Minimal Service',
      fuel: 'Regular Service',
      electricIcon: 'ri-tools-line',
      fuelIcon: 'ri-settings-line'
    },
    {
      feature: 'Refueling/Charging',
      electric: '30-45 minutes',
      fuel: '5 minutes',
      electricIcon: 'ri-charging-pile-line',
      fuelIcon: 'ri-gas-station-fill'
    },
    {
      feature: 'Range',
      electric: '200-350 km',
      fuel: '400-600 km',
      electricIcon: 'ri-battery-line',
      fuelIcon: 'ri-roadster-line'
    },
    {
      feature: 'Noise Level',
      electric: 'Silent Operation',
      fuel: 'Engine Noise',
      electricIcon: 'ri-volume-mute-line',
      fuelIcon: 'ri-volume-down-line'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
              Vehicle Comparison
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6">
            Electric vs Fuel-Powered
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Compare the key differences between our electric and fuel-powered vehicles to make an informed decision that suits your lifestyle and budget.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-[#0B1A33] to-[#1E5AA8] text-white">
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold">Features</h3>
            </div>
            <div className="p-6 text-center border-l border-white/20">
              <div className="flex items-center justify-center mb-2">
                <i className="ri-flashlight-line text-2xl text-[#F29F05] mr-2"></i>
                <h3 className="text-xl font-bold">Electric Vehicles</h3>
              </div>
              <p className="text-sm opacity-80">Sustainable & Modern</p>
            </div>
            <div className="p-6 text-center border-l border-white/20">
              <div className="flex items-center justify-center mb-2">
                <i className="ri-gas-station-line text-2xl text-[#F29F05] mr-2"></i>
                <h3 className="text-xl font-bold">Fuel-Powered</h3>
              </div>
              <p className="text-sm opacity-80">Proven & Reliable</p>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((row, index) => (
            <div 
              key={index}
              className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}
            >
              <div className="p-6 font-semibold text-[#0B1A33] border-r border-gray-200">
                {row.feature}
              </div>
              <div className="p-6 border-r border-gray-200">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <i className={`${row.electricIcon} text-green-600`}></i>
                  </div>
                  <span className="text-gray-700">{row.electric}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <i className={`${row.fuelIcon} text-blue-600`}></i>
                  </div>
                  <span className="text-gray-700">{row.fuel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Electric CTA */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-leaf-line text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Choose Electric</h3>
              <p className="mb-6 opacity-90">
                Join the sustainable mobility revolution with zero emissions and lower operating costs.
              </p>
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                Explore Electric Models
              </button>
            </div>
          </div>

          {/* Fuel CTA */}
          <div className="bg-gradient-to-br from-[#1E5AA8] to-[#0B1A33] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F29F05]/10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-gas-station-line text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Choose Fuel-Powered</h3>
              <p className="mb-6 opacity-90">
                Reliable performance with proven technology and extensive service network coverage.
              </p>
              <button className="bg-[#F29F05] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e89004] transition-colors cursor-pointer whitespace-nowrap">
                Explore Fuel Models
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsComparison;
