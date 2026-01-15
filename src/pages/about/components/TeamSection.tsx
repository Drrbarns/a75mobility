
const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Kwame Asante',
      position: 'Chief Executive Officer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20business%20executive%20in%20modern%20office%20setting%2C%20confident%20leader%20wearing%20business%20attire%2C%20clean%20corporate%20headshot%20with%20natural%20lighting%20and%20contemporary%20background&width=400&height=500&seq=ceo-portrait&orientation=portrait',
      bio: 'Visionary leader with 15+ years in automotive industry and sustainable transportation.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Ama Osei',
      position: 'Chief Technology Officer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20female%20engineer%20in%20modern%20tech%20environment%2C%20confident%20technology%20leader%20wearing%20business%20attire%2C%20clean%20corporate%20headshot%20with%20natural%20lighting%20and%20contemporary%20background&width=400&height=500&seq=cto-portrait&orientation=portrait',
      bio: 'Expert in electric vehicle technology and battery systems with international experience.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Kofi Mensah',
      position: 'Head of Operations',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20operations%20manager%20in%20industrial%20setting%2C%20experienced%20leader%20wearing%20business%20attire%2C%20clean%20corporate%20headshot%20with%20natural%20lighting%20and%20contemporary%20background&width=400&height=500&seq=ops-portrait&orientation=portrait',
      bio: 'Operations specialist focused on supply chain optimization and quality assurance.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Akosua Darko',
      position: 'Head of Sales & Marketing',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20female%20marketing%20executive%20in%20modern%20office%2C%20confident%20sales%20leader%20wearing%20business%20attire%2C%20clean%20corporate%20headshot%20with%20natural%20lighting%20and%20contemporary%20background&width=400&height=500&seq=marketing-portrait&orientation=portrait',
      bio: 'Marketing strategist with deep understanding of Ghana\'s automotive market dynamics.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Yaw Boateng',
      position: 'Chief Financial Officer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20financial%20executive%20in%20corporate%20office%2C%20experienced%20CFO%20wearing%20business%20attire%2C%20clean%20corporate%20headshot%20with%20natural%20lighting%20and%20contemporary%20background&width=400&height=500&seq=cfo-portrait&orientation=portrait',
      bio: 'Financial expert with extensive experience in automotive financing and investment.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Efua Adjei',
      position: 'Head of Customer Success',
      image: 'https://readdy.ai/api/search-image?query=Professional%20African%20female%20customer%20service%20executive%20in%20modern%20office%2C%20friendly%20leader%20wearing%20business%20attire%2C%20clean%20corporate%20headshot%20with%20natural%20lighting%20and%20contemporary%20background&width=400&height=500&seq=customer-portrait&orientation=portrait',
      bio: 'Customer experience specialist dedicated to ensuring exceptional service delivery.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#F29F05]/10 text-[#F29F05] rounded-full text-sm font-semibold">
              Our Team
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1A33] mb-6">
            Meet the Visionaries
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together decades of experience in automotive, technology, and business to drive Ghana's mobility transformation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A33]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0B1A33] mb-2">
                  {member.name}
                </h3>
                
                <div className="text-[#F29F05] font-semibold mb-4">
                  {member.position}
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  <a 
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-[#1E5AA8] rounded-lg flex items-center justify-center text-white hover:bg-[#0B1A33] transition-colors cursor-pointer"
                  >
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="w-10 h-10 bg-[#F29F05] rounded-lg flex items-center justify-center text-white hover:bg-[#e89004] transition-colors cursor-pointer"
                  >
                    <i className="ri-twitter-x-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-20 bg-gradient-to-r from-[#0B1A33] to-[#1E5AA8] rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F29F05]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="w-24 h-24 bg-[#F29F05] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-team-line text-4xl text-white"></i>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Our Team</h3>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90 mb-8">
              Be part of Ghana's mobility revolution. We're always looking for passionate individuals who share our vision of sustainable transportation.
            </p>
            
            <button className="bg-[#F29F05] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#e89004] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
