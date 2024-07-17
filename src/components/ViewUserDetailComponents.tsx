"use client";
import { useUpdateDataUserStore } from "@/stores/UpdateDataUserStore";
import SideBar from "./SideBar";
import Image from "next/image";

export default function ViewUserDetailComponents() {
  const { data } = useUpdateDataUserStore();

  return (
    <main className="flex min-h-screen bg-gray-100">
      <SideBar />
      <div className="flex w-full flex-col p-6">
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex items-center">
            <Image
              width={96}
              height={96}
              src={data.image}
              alt={`${data.firstName} ${data.lastName}`}
              className="w-24 h-24 rounded-full mr-6"
            />
            <div>
              <h1 className="text-3xl font-bold">
                {data.firstName} {data.lastName}
              </h1>
              <p className="text-gray-600">{data.email}</p>
              <p className="text-gray-600">{data.phone}</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
          <p>
            <strong>Age:</strong> {data.age}
          </p>
          <p>
            <strong>Gender:</strong> {data.gender}
          </p>
          <p>
            <strong>Birth Date:</strong> {data.birthDate}
          </p>
          <p>
            <strong>Blood Group:</strong> {data.bloodGroup}
          </p>
          <p>
            <strong>Height:</strong> {data.height} cm
          </p>
          <p>
            <strong>Weight:</strong> {data.weight} kg
          </p>
          <p>
            <strong>Eye Color:</strong> {data.eyeColor}
          </p>
          <p>
            <strong>Hair:</strong> {data.hair.color}, {data.hair.type}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Address</h2>
          <p>
            <strong>Address:</strong> {data.address.address}
          </p>
          <p>
            <strong>City:</strong> {data.address.city}
          </p>
          <p>
            <strong>State:</strong> {data.address.state} (
            {data.address.stateCode})
          </p>
          <p>
            <strong>Postal Code:</strong> {data.address.postalCode}
          </p>
          <p>
            <strong>Country:</strong> {data.address.country}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Company</h2>
          <p>
            <strong>Company:</strong> {data.company.name}
          </p>
          <p>
            <strong>Department:</strong> {data.company.department}
          </p>
          <p>
            <strong>Title:</strong> {data.company.title}
          </p>
          <p>
            <strong>Address:</strong> {data.company.address.address},{" "}
            {data.company.address.city}, {data.company.address.state} (
            {data.company.address.stateCode}), {data.company.address.postalCode}
            , {data.company.address.country}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Bank Information</h2>
          <p>
            <strong>Card Number:</strong> {data.bank.cardNumber}
          </p>
          <p>
            <strong>Card Type:</strong> {data.bank.cardType}
          </p>
          <p>
            <strong>Card Expire:</strong> {data.bank.cardExpire}
          </p>
          <p>
            <strong>Currency:</strong> {data.bank.currency}
          </p>
          <p>
            <strong>IBAN:</strong> {data.bank.iban}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Crypto Information</h2>
          <p>
            <strong>Coin:</strong> {data.crypto.coin}
          </p>
          <p>
            <strong>Wallet:</strong> {data.crypto.wallet}
          </p>
          <p>
            <strong>Network:</strong> {data.crypto.network}
          </p>
        </div>
      </div>
    </main>
  );
}
