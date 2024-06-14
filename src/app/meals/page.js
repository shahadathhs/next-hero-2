import MealsSearch from '@/components/MealsSearch'
import React from 'react'
import { Headland_One } from 'next/font/google'

const headland_One = Headland_One({ weight: ['400'],subsets: ["latin"] });

export const metadata = {
  title: 'Meals',
  description: 'This is our meals',
}

export default function MealPage() {
  return (
    <div className={`${headland_One.className} p-7`}>
      <h2>Choose your meal</h2>
      <h2>Choose your meal of your choice by searching</h2>
      <MealsSearch />
    </div>
  )
}
