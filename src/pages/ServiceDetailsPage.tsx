
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Phone, Clock, Shield, CheckCircle, Star } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { services } from "../data/services"
import React, { useState } from "react"

const ServiceDetailPage = () => {
    const { slug } = useParams<{ slug: string }>()
    const [activeRate, setActiveRate] = useState<"weekday" | "weekend">("weekday")

    const service = services.find((s) => s.slug === slug)

    if (!service) {
        return (
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
                    <Link to="/services" className="text-brand-primary-100 hover:underline">
                        ← Back to Services
                    </Link>
                </div>
        )
    }

    const currentRates = service.rates[activeRate]

    return (
            <div className="container mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                    <Link to="/" className="hover:text-brand-primary-100">
                        Home
                    </Link>
                    <span>/</span>
                    <Link to="/services" className="hover:text-brand-primary-100">
                        Services
                    </Link>
                    <span>/</span>
                    <span className="text-brand-primary-100">{service.title}</span>
                </div>

                {/* Back Button */}
                <Button variant="outline" asChild className="mb-8 bg-transparent">
                    <Link to="/services" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Services
                    </Link>
                </Button>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Header */}
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-[#f0eeeb] text-white p-4 rounded-lg">
                                    {/*<div className="bg-[#f0eeeb] p-3 rounded-lg">*/}
                                        <img src={service.icon} alt={service.title} className="h-8 w-8 object-contain" />
                                    {/*</div>*/}
                                </div>
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
                                    <p className="text-lg text-muted-foreground mt-1">{service.description}</p>
                                </div>
                            </div>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {service.emergencyAvailable && (
                                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                                        <Clock className="h-3 w-3 mr-1" />
                                        24/7 Emergency
                                    </Badge>
                                )}
                                {service.certifications?.map((cert) => (
                                    <Badge key={cert} variant="outline">
                                        <Shield className="h-3 w-3 mr-1" />
                                        {cert}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        {/* Service Image */}
                        <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                            <img
                                src={service.image || "/placeholder.svg?height=400&width=600"}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">About This Service</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">{service.longDescription}</p>
                        </div>

                        {/* Features */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">What We Provide</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {service.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Testimonial */}
                        <Card className="bg-gray-50">
                            <CardContent className="p-6">
                                <div className="flex text-brand-yellow-100 mb-3">
                                    {[...Array(5)].map((_, star) => (
                                        <Star key={star} fill="currentColor" className="h-4 w-4" />
                                    ))}
                                </div>
                                <blockquote className="text-lg font-medium text-gray-900 mb-3">
                                    "Excellent service! The technician was professional, punctual, and solved our problem quickly. Highly
                                    recommend WEFIX LTD for anyone needing reliable repairs."
                                </blockquote>
                                <cite className="text-muted-foreground">- Michael O'Brien, Dublin</cite>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Contact */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Phone className="h-5 w-5" />
                                    Get Immediate Help
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    Need this service urgently? Call us now for immediate assistance.
                                </p>
                                <Button
                                    asChild
                                    className="w-full bg-brand-yellow-100 hover:bg-brand-yellow-100/90 text-brand-primary-100"
                                >
                                    <a href="tel:+353868758890" className="flex items-center justify-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        +353 (86) 8758890
                                    </a>
                                </Button>
                                <Button asChild variant="outline" className="w-full bg-transparent">
                                    <Link to="/contact">Request Quote</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Pricing */}
                        {(service.rates.weekday || service.rates.weekend) && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Service Rates</CardTitle>
                                    <p className="text-sm text-muted-foreground">Transparent pricing with no hidden fees</p>
                                </CardHeader>
                                <CardContent>
                                    {/* Rate Toggle */}
                                    <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
                                        <button
                                            onClick={() => setActiveRate("weekday")}
                                            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                                                activeRate === "weekday"
                                                    ? "bg-white text-brand-primary-100 shadow-sm"
                                                    : "text-gray-600 hover:text-brand-primary-100"
                                            }`}
                                        >
                                            Weekday
                                        </button>
                                        <button
                                            onClick={() => setActiveRate("weekend")}
                                            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                                                activeRate === "weekend"
                                                    ? "bg-white text-brand-primary-100 shadow-sm"
                                                    : "text-gray-600 hover:text-brand-primary-100"
                                            }`}
                                        >
                                            Weekend
                                        </button>
                                    </div>

                                    {/* Rates Display */}
                                    {currentRates ? (
                                        <div className="space-y-3">
                                            {Object.entries(currentRates).map(([timeSlot, rate]) => {
                                                if (rate === null) return null

                                                let timeLabel = ""
                                                switch (timeSlot) {
                                                    case "07-19":
                                                        timeLabel = "Standard Hours (7AM - 7PM)"
                                                        break
                                                    case "19-24":
                                                        timeLabel = "Evening (7PM - 12AM)"
                                                        break
                                                    case "00-07":
                                                        timeLabel = "Night/Emergency (12AM - 7AM)"
                                                        break
                                                }

                                                return (
                                                    <div
                                                        key={timeSlot}
                                                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                                                    >
                                                        <span className="text-sm text-muted-foreground">{timeLabel}</span>
                                                        <span className="font-semibold text-brand-primary-100">€{rate}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    ) : (
                                        <p className="text-muted-foreground text-sm">
                                            {activeRate === "weekday" ? "Not available on weekdays" : "Not available on weekends"}
                                        </p>
                                    )}

                                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                        <p className="text-xs text-blue-800">
                                            * Rates shown are per hour. Final cost depends on job complexity and materials needed.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Emergency Notice */}
                        {service.emergencyAvailable && (
                            <Card className="border-red-200 bg-red-50">
                                <CardContent className="p-4">
                                    <div className="flex items-center gap-2 text-red-800 mb-2">
                                        <Clock className="h-4 w-4" />
                                        <span className="font-semibold">Emergency Service</span>
                                    </div>
                                    <p className="text-sm text-red-700">
                                        This service is available 24/7 for emergency situations. Additional charges may apply for
                                        out-of-hours calls.
                                    </p>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
    )
}

export default ServiceDetailPage
