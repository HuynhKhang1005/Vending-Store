import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../api";
import { Avatar } from "../assets";
import { setAllUserDetails } from "../context/actions/allUsersAction";
import DataTable from "./DataTable";

const DBUsers = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!allUsers) {
      getAllUsers().then((data) => {
        dispatch(setAllUserDetails(data));
      });
    }

  }, [ dispatch,allUsers]);

  return (
    <div className="flex items-center justify-self-center gap-4 pt-6 w-full">
      <DataTable
        columns={[
          {
            title: "Ảnh",
            field: "photoURL",
            render: (rowData) => (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                src={rowData.photoURL ? rowData.photoURL : Avatar}
                className="w-32 h-16 object-contain rounded-md"
              />
            ),
          },
          {
            title: "Tên",
            field: "displayName",
          },
          {
            title: "Email",
            field: "email",
          },
          {
            title: "Xác thực",
            field: "emailVerified",
            render: (rowData) => (
              <p
                className={`px-2 py-1 w-32 text-center text-primary rounded-md ${
                  rowData.emailVerified ? "bg-emerald-500" : "bg-red-500"
                }`}
              >
                {rowData.emailVerified ? "Đã xác thực" : "Chưa xác thực"}
              </p>
            ),
          },
        ]}
        data={allUsers}
        title="Danh sách người dùng"    
      />
    </div>
  );
};

export default DBUsers;
