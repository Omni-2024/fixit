import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import { services } from "../data/services"

const ServicesPage = () => {
    return (
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Comprehensive repair and maintenance services for your home and business. Professional, reliable, and
                        available when you need us most.
                    </p>
                </div>

                {/* Emergency Banner */}
                {/*<div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">*/}
                {/*    <div className="flex items-center justify-between flex-wrap gap-4">*/}
                {/*        <div className="flex items-center gap-3">*/}
                {/*            <Clock className="h-6 w-6 text-red-600" />*/}
                {/*            <div>*/}
                {/*                <h3 className="font-semibold text-red-800">24/7 Emergency Service Available</h3>*/}
                {/*                <p className="text-red-600">Fast response times for urgent repairs</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <Button asChild className="bg-red-600 hover:bg-red-700 text-white">*/}
                {/*            <a href="tel:+353868758890" className="flex items-center gap-2">*/}
                {/*                <Phone className="h-4 w-4" />*/}
                {/*                Emergency Call*/}
                {/*            </a>*/}
                {/*        </Button>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {services.map((service) => (
                        <Card key={service.slug} className="group hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-primary-100 text-white p-3 rounded-lg">
                                        <service.icon size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                                        <CardDescription className="text-base">{service.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4 line-clamp-3">{service.longDescription}</p>

                                {/* Key Features */}
                                <div className="mb-6">
                                    <h4 className="font-semibold mb-2">Key Services Include:</h4>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        {service.features.slice(0, 3).map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="text-brand-yellow-100 mt-1">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Emergency Badge */}
                                {service.emergencyAvailable && (
                                    <div className="flex items-center gap-2 mb-4">
                                        <Shield className="h-4 w-4 text-green-600" />
                                        <span className="text-sm text-green-600 font-medium">24/7 Emergency Available</span>
                                    </div>
                                )}

                                <div className="flex items-center justify-between">
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="font-semibold text-brand-primary-100 hover:text-brand-yellow-100 transition-colors flex items-center gap-2 group"
                                    >
                                        View Details & Pricing
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-brand-primary-100 text-white rounded-lg p-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand-secondary-50">Need Help Choosing a Service?</h2>
                    <p className="text-lg mb-6 opacity-90">
                        Our experts are here to help you find the right solution for your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-brand-yellow-100 hover:bg-brand-yellow-100/90 text-brand-primary-100"
                        >
                            <a href="tel:+353868758890" className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                Call Now
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-brand-primary-100 bg-transparent"
                        >
                            <Link to="/contact">Get a Quote</Link>
                        </Button>
                    </div>
                </div>
            </div>
    )
}

export default ServicesPage
