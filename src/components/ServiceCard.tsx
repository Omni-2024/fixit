import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface ServiceCardSimpleProps {
    icon: string
    title: string
    description: string
    slug: string
}

const ServiceCardSimple = ({ icon, title, description, slug }: ServiceCardSimpleProps) => {
    return (
        <Link
            to={`/services/${slug}`}
            className="block group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-brand-yellow-100 relative"
        >
            <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-[#f0eeeb] p-3 rounded-lg">
                        <img src={icon} alt={title} className="h-8 w-8 object-contain" />
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">{description}</p>
                    <div className="flex items-center justify-between">
                        <span className="font-semibold text-brand-primary-100 flex items-center gap-2 group-hover:text-brand-yellow-100 transition-colors">
                            Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default ServiceCardSimple
