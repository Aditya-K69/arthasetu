"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  function gotoDemo(){
    router.push("/demo")
  }

    function gotoSignup(){
    router.push("/signup")
  }


  return (
    <div>
      <AnimatedText
        text="A₹thaSetu"
        textClassName="text-9xl mt-10 font-bold"
        underlineDuration={6}
      />
      <div className="my-15 text-4xl text-center">
        Welcome To ArthaSetu, One stop solution to all your investing education needs
      </div>
      <div className="font-extrabold text-3xl text-center my-10">Choose your path</div>

      <div className="flex flex-col items-center gap-y-8">
        <div className="w-[400px]">
          <Card className="h-full bg-gradient-to-br from-[#0f0f0f] to-[#1c1c1c] text-white border border-neutral-800 shadow-2xl rounded-2xl p-6">
            <CardHeader className="space-y-2">
              <CardTitle className="text-3xl font-extrabold tracking-tight text-white">
                Explorer
              </CardTitle>
              <CardDescription className="text-sm text-neutral-400">
                New to ArthaSetu? Sign up immediately or check out the demo first.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base text-neutral-300">
                Welcome to ArthaSetu. Click the button below to experience the demo.
              </p>
              <Button
                variant="outline"
                className="border-white text-black hover:cursor-pointer"
                onClick={gotoDemo}
              >
                Take me to the Demo
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-neutral-500 italic">
                This demo does not include all features.
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="w-[400px]">
          <Card className="h-full bg-gradient-to-br from-[#0f0f0f] to-[#1c1c1c] text-white border border-neutral-800 shadow-2xl rounded-2xl p-6">
            <CardHeader className="space-y-2">
              <CardTitle className="text-3xl font-extrabold tracking-tight text-white">
                Newcomer
              </CardTitle>
              <CardDescription className="text-sm text-neutral-400">
                Sign Up to access all the features ArthaSetu can provide and improve your investment skills.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-relaxed text-neutral-300">
                Click below to sign up.
              </p>
              <Button
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-black transition duration-200 rounded-full px-6 py-2 cursor-pointer"
                onClick={gotoSignup}
              >
                SIGNUP
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-neutral-500 italic">
                ArthaSetu is only a simulation and does not use real-time price changes.
              </p>
            </CardFooter>
          </Card>
        </div>

        <div className="w-[400px]">
          <Card className="h-full bg-gradient-to-br from-[#0f0f0f] to-[#1c1c1c] text-white border border-neutral-800 shadow-2xl rounded-2xl p-6">
            <CardHeader className="space-y-2">
              <CardTitle className="text-3xl font-extrabold tracking-tight text-white">
                Investor
              </CardTitle>
              <CardDescription className="text-sm text-neutral-400">
                Login to your ArthaSetu account and continue your journey.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base leading-relaxed text-neutral-300">
                Login below.
              </p>
              <Button
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-black transition duration-200 rounded-full px-6 py-2 cursor-pointer"
              >
                LOGIN
              </Button>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-neutral-500 italic">
                Do not view the simulations as investment indicators. The data is historical and does not reflect current trends.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
