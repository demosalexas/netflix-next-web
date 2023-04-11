import Billboard from "@/netflix-next-web/components/Billboard";
import Navbar from "@/netflix-next-web/components/Navbar";
import useCurrentUser from "@/netflix-next-web/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <Navbar />
      <Billboard />
    </>
  )
}
