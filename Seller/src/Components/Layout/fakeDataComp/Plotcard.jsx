import React from "react";

const PlotCard = ({ title, description, imageUrl }) => {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className="min-w-0 shrink-0 grow-0 pl-2 sm:pl-4 basis-44 sm:basis-1/4 lg:basis-1/3 xl:basis-1/4"
    >
      <div className="border border-neutral-200 bg-white text-neutral-950 shadow-sm rounded-lg group hover:shadow-lg p-0 h-full w-full transition-all">
        {/* Image Section */}
        <div className="flex-col space-y-1.5 p-0 flex flex-grow-0 rounded-tl-lg">
          <div className="flex relative aspect-video rounded-t-lg overflow-hidden">
            <img
              alt={title}
              loading="lazy"
              decoding="async"
              className="rounded-lg object-cover group-hover:scale-110 transition-all object-center"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: "transparent",
              }}
              src={imageUrl}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full p-2 sm:p-4">
          <div className="w-full space-y-1 sm:space-y-2">
            <span className="text-sm sm:text-base font-medium">{title}</span>
            <p className="text-xs sm:text-sm text-neutral-800">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlotCard;
