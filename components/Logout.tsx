"use client";

import { useSession, signOut } from "next-auth/react";

const Logout = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p className="absolute top-20 right-20">Loading...</p>;
  }

  return (
    <div className="absolute top-20 right-20">
      <p>Welcome, {session.user?.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Logout;
