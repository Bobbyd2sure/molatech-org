"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Facebook, Instagram, Heart, MessageCircle, Share2, ExternalLink } from "lucide-react"
import { useLoading } from "@/components/loading-provider"

export function SocialMediaSection() {
  const { isLoading } = useLoading()
  const [currentPost, setCurrentPost] = useState(0)

  const socialPosts = [
    {
      platform: "facebook",
      content:
        "Just distributed 200 more JAMB forms to deserving students in Lagos! Seeing their smiles and hope for the future reminds me why this work is so important. Every student deserves a chance to pursue their dreams. 🎓✨ #EducationForAll #JAMBSupport #NigerianStudents",
      image: "/placeholder.svg?height=400&width=600&text=JAMB+Distribution+Lagos",
      likes: 1247,
      comments: 89,
      shares: 156,
      timestamp: "2 hours ago",
      link: "https://facebook.com/kennykunma",
    },
    {
      platform: "instagram",
      content:
        "Behind every successful student is a community that believed in them. Today's mentorship session with 30 amazing students reminded me of the power of guidance and support. 💪📚 #MentorshipMatters #StudentSuccess #CommunitySupport",
      image: "/placeholder.svg?height=400&width=600&text=Mentorship+Session",
      likes: 892,
      comments: 67,
      shares: 43,
      timestamp: "5 hours ago",
      link: "https://instagram.com/kennykunma",
    },
    {
      platform: "facebook",
      content:
        "Proud to announce that 95% of students we supported last year have successfully gained admission into universities! This is what happens when we invest in education and believe in our youth. 🎉🎓 #SuccessStory #EducationalImpact #ProudMentor",
      image: "/placeholder.svg?height=400&width=600&text=Success+Celebration",
      likes: 2156,
      comments: 234,
      shares: 445,
      timestamp: "1 day ago",
      link: "https://facebook.com/kennykunma",
    },
    {
      platform: "instagram",
      content:
        "From providing transport money to celebrating graduation day - this journey with our students is incredibly rewarding. Here's to building more futures together! 🚀 #StudentJourney #EducationalSupport #BuildingFutures",
      image: "/placeholder.svg?height=400&width=600&text=Graduation+Day",
      likes: 1534,
      comments: 123,
      shares: 89,
      timestamp: "2 days ago",
      link: "https://instagram.com/kennykunma",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPost((prev) => (prev + 1) % socialPosts.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [socialPosts.length])

  const currentPostData = socialPosts[currentPost]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {isLoading ? (
            <div className="flex flex-col items-center space-y-4">
              <Skeleton className="h-10 w-40 mx-auto" />
              <Skeleton className="h-16 w-96 mx-auto" />
              <Skeleton className="h-8 w-[500px] max-w-full mx-auto" />
            </div>
          ) : (
            <>
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 mb-4">
                <Share2 className="h-4 w-4 mr-2" />
                Social Media
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Follow My
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Journey
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Stay connected and get real-time updates on our educational initiatives, student success stories, and
                community impact.
              </p>
            </>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Featured Post */}
          <div className="space-y-6">
            {isLoading ? (
              <Skeleton className="h-96 w-full" />
            ) : (
              <Card className="border-0 shadow-xl bg-white overflow-hidden">
                <div className="relative">
                  <img
                    src={currentPostData.image || "/placeholder.svg"}
                    alt="Social media post"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${currentPostData.platform === "facebook" ? "bg-blue-600" : "bg-gradient-to-r from-purple-600 to-pink-600"} text-white`}
                    >
                      {currentPostData.platform === "facebook" ? (
                        <Facebook className="h-4 w-4 mr-2" />
                      ) : (
                        <Instagram className="h-4 w-4 mr-2" />
                      )}
                      {currentPostData.platform === "facebook" ? "Facebook" : "Instagram"}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                          KK
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Kenny Kunma</div>
                          <div className="text-sm text-slate-500">{currentPostData.timestamp}</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => window.open(currentPostData.link, "_blank")}>
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-slate-700 leading-relaxed">{currentPostData.content}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2 text-slate-600">
                          <Heart className="h-5 w-5 text-red-500" />
                          <span className="font-medium">{currentPostData.likes.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-600">
                          <MessageCircle className="h-5 w-5 text-blue-500" />
                          <span className="font-medium">{currentPostData.comments}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-600">
                          <Share2 className="h-5 w-5 text-green-500" />
                          <span className="font-medium">{currentPostData.shares}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Post Navigation */}
            {!isLoading && (
              <div className="flex justify-center space-x-2">
                {socialPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPost(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentPost ? "bg-emerald-600" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Social Media Links */}
          <div className="space-y-8">
            {isLoading ? (
              <div className="space-y-6">
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-32 w-full" />
              </div>
            ) : (
              <>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-r from-blue-50 to-blue-100">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-blue-600 p-4 rounded-2xl">
                        <Facebook className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">Facebook</h3>
                        <p className="text-slate-600">Follow for daily updates and stories</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">
                        <span className="font-semibold text-blue-600">12.5K</span> followers
                      </div>
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => window.open("https://facebook.com/kennykunma", "_blank")}
                      >
                        Follow
                        <Facebook className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-2xl">
                        <Instagram className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">Instagram</h3>
                        <p className="text-slate-600">Behind-the-scenes moments</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-slate-600">
                        <span className="font-semibold text-purple-600">8.7K</span> followers
                      </div>
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                        onClick={() => window.open("https://instagram.com/kennykunma", "_blank")}
                      >
                        Follow
                        <Instagram className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
