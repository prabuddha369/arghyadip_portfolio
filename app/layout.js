import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata= {
  title: 'Arghyadip Biswas',
  description: 'I am Arghyadip Biswas, fitness coach, nutrition expert, and calisthenics coach. My expertise spans exercise physiology, nutrition science, and bodyweight training. I design personalized workout programs, offer comprehensive nutrition guidance, and specialize in dynamic calisthenics routines. Committed to continuous learning, I aim to inspire positive transformations in individuals, fostering holistic well-being. Join me on the journey to optimal health and vitality!',
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta property="og:title" content="Arghyadip Biswas" />
      <meta property="og:description" content="I am Arghyadip Biswas, fitness coach, nutrition expert, and calisthenics coach. My expertise spans exercise physiology, nutrition science, and bodyweight training. I design personalized workout programs, offer comprehensive nutrition guidance, and specialize in dynamic calisthenics routines. Committed to continuous learning, I aim to inspire positive transformations in individuals, fostering holistic well-being. Join me on the journey to optimal health and vitality!" />
      <meta property="og:image" content="/my_pic.png" />
      <meta name="keywords" content="fitness trainer,fitness coach,best nutrition and fitness coach in West Bengal,FitnessJourney, NutritionExpert, CalisthenicsCoach, BodyweightTraining, DynamicWorkouts, ExercisePhysiology, HolisticWellness, PersonalizedFitness, HealthyLiving, TransformWithArghyadip, WellnessWarrior, FitLife, InspireFitness, VitalityLifestyle, ContinuousLearning, OptimalHealth, NutritionGuidance, PositiveTransformations, FitnessMotivation, FitForLife" />
      <link rel="icon" href="/favicon.ico" />
      <body className={inter.className}>{children}<SpeedInsights /></body>
    </html>
  )
}
