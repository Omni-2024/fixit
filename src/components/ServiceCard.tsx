
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-brand-yellow-400">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="text-brand-blue-700 bg-brand-blue-100 p-3 rounded-lg">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <a href="#" className="font-semibold text-brand-blue-700 group-hover:text-brand-yellow-500 flex items-center gap-2">
          Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
