"use client";

import { HeaderLanding } from "@/components/custom/HeaderLanding";
import { AuthLoginForm } from "@/components/custom/pages/auth/AuthLoginForm";
import Image from "next/image";
import { useState } from "react";

export enum AuthStatus {
  LOGIN,
  REGISTER,
}

export default function Login() {
  const [authActive, setAuthActive] = useState<AuthStatus>(AuthStatus.LOGIN);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col">
      <HeaderLanding />

      <div className="w-full h-[calc(100dvh-72px)] p-8 xl:px-0 flex flex-row items-center justify-center">
        {/* Left */}
        <div className="flex flex-1 flex-col">
          {authActive === AuthStatus.LOGIN ? (
            <AuthLoginForm setAuthActive={setAuthActive} />
          ) : (
            <AuthLoginForm setAuthActive={setAuthActive} />
          )}
        </div>

        {/* Right */}
        <div className="flex flex-1 flex-col items-center">
          <Image
            alt="Image illustration"
            src={"/images/illustrations/secure-auth.svg"}
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
