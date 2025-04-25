import React, { useState } from "react";

const ActivityBox = () => {
  const [user, setUser] = useState({
    name: "Guest User",
    activity: "Viewed",
    rank: 2,
    buttonLabel: "Login/Register to Save Activity",
  });

  // Handle Login/Register Action
  const handleLogin = () => {
    console.log("Login/Register button clicked!");
    // Add login/register logic here
  };

  return (
    <div
      className="pageComponent abox__activityBox bg-white shadow-md rounded-xl p-4 md:p-6 max-w-lg mx-auto"
      data-label="ACTIVITY_SECTION"
    >
      {/* User Info */}
      <div className="abox__userInfo flex items-center gap-3">
        <i className="icon_grayProf iconS_Common_24 bg-gray-300 rounded-full w-10 h-10"></i>
        <div>
          <div className="list_header_semiBold Ng800 text-lg font-semibold">
            {user.name}
          </div>
        </div>
      </div>

      <div className="spacer20 my-4"></div>

      {/* Recent Activity Section */}
      <div className="abox__recentActivityCard bg-gray-100 rounded-lg p-4">
        <div className="caption_strong_small bold spacer16 text-lg font-bold mb-4">
          Your Recent Activity
        </div>

        {/* Activity Card */}
        <div className="abox__cardWrap flex justify-between items-center bg-white p-4 shadow rounded-md">
          <div className="pageComponent" data-label="TUPLE">
            <div className="title_l_semiBold spacer8 text-2xl font-bold">
              {user.rank}
            </div>
            <div className="caption_strong_medium_semi text-lg">
              {user.activity}
            </div>
          </div>
          <div className="abox__arrow3Line abox__orangeArr w-6 h-6 bg-orange-500 rounded-full"></div>
        </div>
      </div>

      <div className="spacer16 my-4"></div>

      {/* Login/Register Button */}
      <button
        onClick={handleLogin}
        className="pageComponent buttons__primaryRegular bg-[#6f272b] text-white text-sm px-6 py-2 rounded-full hover:bg-[#5a1e23] transition duration-300"
        data-sstheme="_BUTTON_TOP_LEVEL"
      >
        {user.buttonLabel}
      </button>

      <div className="spacer8 my-2"></div>

      {/* Additional Info */}
      <div className="caption_strong_small textC text-gray-600 text-sm text-center">
        &amp; see your activities across browsers &amp; devices...
      </div>
    </div>
  );
};

export default ActivityBox;
