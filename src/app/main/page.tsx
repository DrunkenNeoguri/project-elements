"use client";
import { lazy, useContext } from "react";
import MainHeader from "./_components/main-header";
import { AuthContext } from "../../providers/auth-provider";
import Backdrop from "../../components/backdrop/backdrop";
import { Bar } from "../../components/loader/loader";

const ListSection = lazy(() => import("./_components/list-section"));

export default function Main() {
  const user = useContext(AuthContext);

  return (
    <>
      {!user && (
        <Backdrop colorTheme="loader" disabled>
          <Bar />
        </Backdrop>
      )}
      <MainHeader username={user?.displayName} />
      <ListSection uid={user?.uid} />
    </>
  );
}
