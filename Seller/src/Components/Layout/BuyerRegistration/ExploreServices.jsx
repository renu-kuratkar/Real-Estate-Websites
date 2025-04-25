import React from "react";

const services = [
  {
    title: "Buying a commercial property",
    description: "Shops, offices, land, factories, warehouses and more",
    image: "https://static.99acres.com/universalhp/img/hp_commercial_buy.webp",
  },
  {
    title: "Leasing a commercial property",
    description: "Shops, offices, land, factories, warehouses and more",
    image: "https://static.99acres.com/universalhp/img/hp_lease.webp",
  },
  {
    title: "Buy Plots/Land",
    description: "Residential Plots, Agricultural Farm lands, Inst. Lands and more",
    image: "https://static.99acres.com/universalhp/img/hp_plot_land.webp",
  },
  {
    title: "Renting a home",
    description: "Apartments, builder floors, villas and more",
    image: "https://static.99acres.com/universalhp/img/hp_rent.webp",
  },
  {
    title: "PG and co-living",
    description: "Organised, owner and broker listed PGs",
    image: "https://static.99acres.com/universalhp/img/hp_pg.webp",
  },
];

const ExploreServices = () => {
  return (
    <div className="relative bg-[#FCF8F3] p-8 rounded-lg max-w-full mx-auto mt-10">
      {/* Background Image */}
      <div
  className="absolute inset-0 bg-cover bg-center opacity-10 h-full"
  style={{ backgroundImage: "url('./src/assets/sofa.png')" }}
></div>

      {/* Content Section */}
      <div className="relative z-10">
        <h2 className="text-gray-700 font-semibold text-lg">99acres</h2>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">Explore our services</h1>

        {/* Service Cards Container */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-10 grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-4 pb-4  last:border-none">
              <img src={service.image} alt={service.title} className="w-16 h-16 rounded-md object-cover" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;