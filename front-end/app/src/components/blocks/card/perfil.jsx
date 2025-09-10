"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Profile() {
  return (
    <div className="relative w-full">
      <Card className="w-full bg-purple-100 shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardContent className="relative h-48 flex items-end px-6 pb-6">
          <div className="absolute top-full left-6 transform -translate-y-1/2">
            <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
              <AvatarFallback>DC</AvatarFallback>
            </Avatar>
          </div>

          <p className="text-2xl font-bold text-gray-800 ml-44">
            Banner
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
