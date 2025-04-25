import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    image: "https://newprojects.99acres.com/projects/unique_group_and_ams_landmarks/unique_k_town/images/orcnrp8k_med.jpg",
    description: "A beautiful luxury villa with modern amenities.",
  },
  {
    id: 2,
    title: "City Apartment",
    image: "https://newprojects.99acres.com/projects/ranjekar_realty_llp/ranjekar_dhansampada/images/qxkrci0_1733304278_535431045_med.jpg",
    description: "Spacious apartment in the heart of the city.",
  },
  {
    id: 3,
    title: "City Apartment",
    image: "https://newprojects.99acres.com/projects/ranjekar_realty_llp/ranjekar_dhansampada/images/qxkrci0_1733304278_535431045_med.jpg",
    description: "Spacious apartment in the heart of the city.",
  },
  {
    id: 4,
    title: "Plots",
    image: "https://newprojects.99acres.com/projects/unique_group_and_ams_landmarks/unique_k_town/images/orcnrp8k_med.jpg",
    description: "A beautiful luxury plot with modern amenities.",
  },
];

const SelectionCard = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">🏡 New Upcoming Property</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {properties.map((property) => (
          <Card
            key={property.id}
            className="relative group shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-[1.05] hover:shadow-2xl"
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
            }}
          >
            {/* Card Image with Gradient Overlay */}
            <div className="relative">
              <CardMedia
                component="img"
                height="230"
                image={property.image}
                alt={property.title}
                className="transition-opacity duration-300 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Card Content */}
            <CardContent
              className="bg-white rounded-b-lg p-6 transition-all duration-300 group-hover:bg-gray-100"
              sx={{ textAlign: "center" }}
            >
              <Typography variant="h5" className="font-semibold text-gray-900">
                {property.title}
              </Typography>
              <Typography variant="body2" className="text-gray-600 mt-2">
                {property.description}
              </Typography>

              {/* CTA Button */}
              <Button
                variant="contained"
                className="mt-4 w-full bg-red-900 hover:bg-red-900 transition-all duration-300"
                sx={{
                  borderRadius: "10px",
                  padding: "10px 16px",
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                View 
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SelectionCard;
