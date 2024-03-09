/* eslint-disable react/prop-types */
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({ headerTitle }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="inline-block text-xl mt-6 xs:ml-14 lg:ml-6 font-bold">
        {headerTitle}
      </h2>
      <div>
        <div className="flex gap-4 mt-2 px-3 text-xl items-center">
          <div
            className="border-2 border-[#ec4f22] px-2 py-[3px] rounded-full cursor-pointer"
            title="Profile"
          >
            <FontAwesomeIcon icon={faUser} />
          </div>
          <button
            type="button"
            className="bg-[#EC4F22] p-2 rounded-lg text-white cursor-pointer xs:text-[12px] md:text-sm lg:text-lg hover:bg-orange-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
