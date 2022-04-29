import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Web3 from "web3";
import Navbar from "../navbar";
import Card from "./card";


const web3 = new Web3(Web3.givenProvider);

function Mint() {
  const { isAuthenticated } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mt-5">
        <Card />
      </div>

    </>
  );
}

export default Mint;
