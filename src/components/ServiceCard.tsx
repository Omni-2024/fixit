// ServiceCard.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    rates: {
        weekday: Record<string, number | null> | null;
        weekend: Record<string, number | null> | null;
    };
    activeRate: "weekday" | "weekend";
}

const ServiceCard = ({ icon, title, description, rates, activeRate }: ServiceCardProps) => {
    const rateObject = rates[activeRate];
    const price = rateObject?.["07-19"] ?? "N/A";

    return (
        <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-brand-yellow-400 relative">
            <CardHeader className="flex flex-row items-center gap-4">
                <div className="text-brand-blue-700 bg-brand-blue-100 p-3 rounded-lg">
                    {icon}
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">{description}</p>
                <div className="flex items-center justify-between">
                    <a
                        href="#"
                        className="font-semibold text-brand-blue-700 group-hover:text-brand-yellow-500 flex items-center gap-2"
                    >
                        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <span className="font-semibold text-brand-yellow-500 text-lg transition-opacity duration-300">
            {typeof price === "number" ? `€${price}` : "N/A"}
          </span>
                </div>
            </CardContent>
        </Card>
    );
};

export default ServiceCard;
