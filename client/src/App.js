import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TableComponent from "./Component/Librians/Members/ViewMembers";
import Navbar from "./Component/Librians/navbar";
import View from "./Component/Librians/Members/AddMembers";
import Dashboard from "./Component/Librians/DashBoard/DashBoard";
import DeleteMembers from "./Component/Librians/Members/DeleteMembers";
import UpdateMember from "./Component/Librians/Members/UpdateMem";
import Signup from "./Component/Login/Sign/Signup";
import Login from "./Component/Login/Sign/Login";
import AddBooks from "./Component/Librians/Books/Addbooks";
import UpdateBooks from "./Component/Librians/Books/UpdateBooks";
import DeleteBooks from "./Component/Librians/Books/DeleteBooks";
import ViewBooks from "./Component/Librians/Books/ViewBooks";
import AdNavbar from "./Component/Admin/Navbar/AdNavbar";
import AdDashboard from "./Component/Admin/Dashboard/AdDashboard";
import AddLibrians from "./Component/Admin/Librians/AddViewLibrians";
import DeleteLibrians from "./Component/Admin/Librians/DeleteLibrians";
import UpdateLibrians from "./Component/Admin/Librians/UpdateLibrians";
import ViewShedule from "./Component/Admin/Shedule/ViewShedule";
import AddShedule from "./Component/Admin/Shedule/AddShedule";
import DeleteShedule from "./Component/Admin/Shedule/DeleteShedule";
import UpdateShedule from "./Component/Admin/Shedule/UpdateShedule";
import AddDonors from "./Component/Admin/Donors/AddDonors";
import ViewWorkerShedule from "./Component/Librians/Shedule/ViewWorkershedule";
import ViewDonors from "./Component/Admin/Donors/ViewDonors";
import DeleteDonor from "./Component/Admin/Donors/DeleteDonors";
import EditDonors from "./Component/Admin/Donors/EditDonors";
import BookDetails from "./Component/Librians/Books/SearchBook";
axios.defaults.baseURL = "http://localhost:8080/";

function App() {
  const [dataList, setDataList] = useState([]);
  const [dataListBook, setDataListBook] = useState([]);
  const dataLen = dataList.length;
  const dataLenBook = dataListBook.length;

  const getFetchData = async () => {
    const data = await axios.get("/members/");

    if (data.data.succcess) {
      setDataList(data.data.data);
      getFetchData();
    }
  };
  useEffect(() => {
    getFetchData();
  }, []);

  const getFetchDataBook = async () => {
    const data = await axios.get("/books/bookget/");
    if (data.data.succcess) {
      setDataListBook(data.data.data);
      getFetchDataBook();
    }
  };
  useEffect(() => {
    getFetchDataBook();
  }, []);

  const location = useLocation();
  const currentRoute = location.pathname;
  const allowedRoutes = [
    "/DashBoard",
    "/AddMembers",
    "/ViewMembers",
    "/Addbooks",
    "/ViewBooks",
    "/workshedule",
  ];
  const allowAdnavbar = [
    "/Librians",
    "/home",
    "/donors",
    "/shedule",
    "/librians",
    "/createshedule",
    "/Updatelibrian/:id",
   
  ];
  const shouldShowNavbar = allowedRoutes.includes(currentRoute);
  const shouldShowAdNavbar = allowAdnavbar.includes(currentRoute);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {shouldShowAdNavbar && <AdNavbar />}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/DashBoard"
          element={<Dashboard dataLen={dataLen} dataLenBook={dataLenBook} /> }
        />
        <Route path="/AddMembers" element={<View />} />
        <Route
          path="/UpdateMember/:id"
          element={<UpdateMember dataList={dataList} />}
        />
        <Route
          path="/UpdateBooks/:id"
          element={<UpdateBooks dataListBook={dataListBook} />}
        />
        <Route
          path="/ViewMembers"
          element={
            <TableComponent dataList={dataList} DeleteMembers={DeleteMembers} />
          }
        />
        <Route path="/AddBooks" element={<AddBooks />}></Route>
        <Route
          path="/ViewBooks"
          element={<ViewBooks DeleteBooks={DeleteBooks} />}
        ></Route>
        <Route
          path="/home"
          element={<AdDashboard dataLen={dataLen} dataLenBook={dataLenBook} />}
        />
        <Route
          path="/librians"
          element={<AddLibrians DeleteLibrians={DeleteLibrians} />}
        />
        <Route path="/Updatelibrian/:id" element={<UpdateLibrians />} />

        <Route
          path="/shedule"
          element={<ViewShedule DeleteShedule={DeleteShedule} />}
        />
        <Route path="/createshedule" element={<AddShedule />}></Route>
        <Route path="/updateshedule/:id" element={<UpdateShedule />}></Route>
        <Route path="/workshedule" element={<ViewWorkerShedule />}></Route>
        <Route path="/adminViewBooks" element={<ViewBooks DeleteBooks={DeleteBooks}/>}></Route>
        <Route path="/updatedonor/:id" element={<EditDonors />}></Route>
        <Route path="/adminViewMembers" element={<TableComponent dataList={dataList} DeleteMembers={DeleteMembers}/>}></Route>
        <Route
          path="/donors"
          element={<ViewDonors DeleteDonor={DeleteDonor} />}
        ></Route>
        <Route path="/addDonors" element={<AddDonors />}></Route>
      </Routes>
    </>
  );
}
<div>
  <View />
</div>;
export default App;
