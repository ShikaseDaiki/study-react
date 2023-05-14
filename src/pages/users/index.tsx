import Head from "next/head";
import { Header } from "@/components/Header";
import { Users as UsersComponent } from "@/components/Users";

const Users = () => {
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <Header />
      <UsersComponent />
    </div>
  );
};

export default Users;
