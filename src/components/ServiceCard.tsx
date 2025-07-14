// ServiceCard.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {Link} from "react-router-dom";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    longDescription: string;
    rates: {
        weekday: Record<string, number | null> | null;
        weekend: Record<string, number | null> | null;
    };
    activeRate: "weekday" | "weekend";
    onLearnMore: () => void;
    slug:string
}


const ServiceCard = ({ icon, title, description, rates, activeRate,longDescription,onLearnMore,slug }: ServiceCardProps) => {
    const rateObject = rates[activeRate];
    const price = rateObject?.["07-19"] ?? "N/A";

    return (
        <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-brand-yellow-100 relative">
            <CardHeader className="flex flex-row items-center gap-4">
                <div className="text-brand-secondary-50 bg-brand-primary-100 p-3 rounded-lg">
                    {icon}
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">{description}</p>
                <div className="flex items-center justify-between">
                    {/*<a*/}
                    {/*    onClick={onLearnMore}*/}
                    {/*    className="cursor-pointer font-semibold text-brand-primary-100  flex items-center gap-2"*/}
                    {/*>*/}
                    {/*    Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />*/}
                    {/*</a>*/}
                    <Link
                        to={`/services/${slug}`}
                        className="font-semibold text-brand-primary-100 hover:text-brand-yellow-100 transition-colors flex items-center gap-2 group"
                    >
                        View Details & Pricing
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
          {/*          <span className="font-semibold text-brand-yellow-500 text-lg transition-opacity duration-300">*/}
          {/*  {typeof price === "number" ? `€${price}` : "N/A"}*/}
          {/*</span>*/}
                </div>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;
