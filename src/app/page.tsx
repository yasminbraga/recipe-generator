"use client";

import Card from "./components/card";
import Modal from "./components/modal";
import { MealProvider } from "./contexts/mealContext";

export default function Home() {
  return (
    <MealProvider>
      <main className="w-full flex min-h-screen flex-col items-center justify-between ">
        <Card />
        <Modal />
      </main>
    </MealProvider>
  );
}
