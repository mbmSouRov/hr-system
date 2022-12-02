import React, { useEffect, useState } from "react";

const AttendanceTable = ({ data }) => {
  const attendanceDate = Object.keys(data.attendance);
  const attendanceStatus = Object.values(data.attendance);
  const [keyId, setKeyId] = useState(1);

  //   --------------------------------------------------------
  //   --------------------------------------------------------
  //Since Early Submission will get priority and I am already 24hours late so, I had to submit without the "dynamic status change" part. In case of emergency, here is manual option I created. Change the dateId's value to get employee's attendance status change.
  useEffect((dateId = 10) => {
    setKeyId(dateId);
  }, []);
  //   --------------------------------------------------------
  //   --------------------------------------------------------

  return (
    <tr className="bg-white border-b dark:bg-slate-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {
          <select
            name="slot"
            className="select text-black rounded-lg p-2 bg-slate-400 font-light"
          >
            {attendanceDate.map((slot, i) => (
              <option
                value={slot}
                key={i}
                onClick={() => {
                  setKeyId(i);
                }}
              >
                {slot}
              </option>
            ))}
          </select>
        }
      </th>
      <td className="py-4 px-6 font-light">{data.branch}</td>
      <td className="py-4 px-6 text-left font-light">{data.name}</td>
      <td className="py-4 px-6 text-left font-light">{data.position}</td>
      <td className="py-4 px-6 text-green-400 font-semibold text-left cursor-pointer">
        {attendanceStatus[keyId].status}
      </td>
    </tr>
  );
};

export default AttendanceTable;
