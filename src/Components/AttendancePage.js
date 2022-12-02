import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import logo from "../Images/ultimate hrm logo-05-02 2.png";
import AttendanceTable from "./AttendanceTable";
import "./style.css";
const AttendancePage = () => {
  const navigate = useNavigate("");
  const [searchparams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [attendanceInfo, setAttendanceInfo] = useState();
  useEffect(() => {
    fetch("https://test.nexisltd.com/test", {
      headers: {
        authorization: `Bearer ${searchparams.get("id")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data[2]) {
          setAttendanceInfo(data);
          setLoading(false);
        }
      });
  }, [searchparams]);

  if (loading) {
    return (
      <p className="text-2xl px-10 py-2 rounded-full bg-lime-800 text-white animate-ping">
        Loading.....
      </p>
    );
  }

  return (
    <div>
      <img
        className="flex justify-start items-start cursor-pointer"
        src={logo}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />
      <p className="flex justify-center items-center attendanceInfo text-3xl rounded-lg w-fit mx-auto my-10">
        Attendance Information
      </p>

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        {
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-gray-400 uppercase bg-gray-50 dark:bg-gray-500 dark:text-gray-900">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Branch
                </th>
                <th scope="col" className="py-3 px-6">
                  Employee Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Job Position
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-lg text-gray-400 uppercase bg-gray-50 dark:bg-gray-500 dark:text-white">
              {Object.values(attendanceInfo).map((x) => (
                <AttendanceTable key={x.id} data={x}></AttendanceTable>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
};

export default AttendancePage;
