import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

export default function Mentors() {
  return (
    <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex justify-between w-full items-center">
        <div>
          <h1 className="text-2xl font-semibold  mt-10">Experienced Mentor</h1>
          <p className=" ">
            Get the best teaching experience with our mentors{" "}
          </p>
        </div>
        <Button
          variant="link"
          className="bg-transparent w-fit px-0 text-transparent bg-gradient-to-r from-[#009245] to-[#FCEE21] bg-clip-text"
        >
          View more
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10 mt-10">
        <Card className="text-center p-0 rounded-xl">
          <CardHeader className=" p-0">
            <img
              className="rounded-t-xl w-full h-auto mx-auto"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar"
            />
          </CardHeader>
          <CardContent className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              David Forren
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Founder / CEO
            </p>
          </CardContent>
        </Card>
        <Card className="text-center p-0 rounded-xl">
          <CardHeader className=" p-0">
            <img
              className="rounded-t-xl w-full h-auto mx-auto"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar"
            />
          </CardHeader>
          <CardContent className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              David Forren
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Founder / CEO
            </p>
          </CardContent>
        </Card>
        <Card className="text-center p-0 rounded-xl">
          <CardHeader className=" p-0">
            <img
              className="rounded-t-xl w-full h-auto mx-auto"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar"
            />
          </CardHeader>
          <CardContent className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              David Forren
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Founder / CEO
            </p>
          </CardContent>
        </Card>
        <Card className="text-center p-0 rounded-xl">
          <CardHeader className=" p-0">
            <img
              className="rounded-t-xl w-full h-auto mx-auto"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Avatar"
            />
          </CardHeader>
          <CardContent className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">
              David Forren
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">
              Founder / CEO
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
