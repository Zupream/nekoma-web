import { Outlet } from "react-router-dom";
import Headeradmin from "../admin/Headeradmin";
import PageContainer from "./PageContainer";

function AdminContainer() {
  return (
    <>
      <PageContainer>
        <Headeradmin />
      </PageContainer>
      <Outlet />
    </>
  );
}

export default AdminContainer;
