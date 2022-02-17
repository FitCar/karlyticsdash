import "./userList.css";

import firebaseApp from "../../firebase";
import { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const firestore = firebaseApp.firestore();

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true on component mount

  useEffect(() => {
    const subscriber = firestore
      .collection("users")
      .onSnapshot((querySnapshot) => {
        const users = [];

        querySnapshot.forEach((documentSnapshot) => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        
        setUsers(users);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };

  

  console.log(users);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: "name",
      headerName: "Username",
      width: 150,
      editable: true,
      // renderCell: (params) => {
      //   return (
      //     <div className="userListUser">
      //       {params.row.name}
      //     </div>
      //   );
      // },
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    }, 
    {
      field: "uid",
      headerName: "User",
      width: 150,
      editable: true,
    }, 
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.uid}>
              <button className="userListEdit">View</button>
            </Link>
            {/* <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    },
  ];

  return (
  <div className="userList">
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
  </div>
  )
}
