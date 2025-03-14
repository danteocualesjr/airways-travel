
import { Check, X } from "lucide-react";
import { 
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@/components/ui/table";

const Comparison = () => {
  const features = [
    {
      category: "Access & Search",
      items: [
        { name: "Loyalty Program Access", basic: "50+", premium: "100+", ultimate: "150+" },
        { name: "Award Flight Search", basic: true, premium: true, ultimate: true },
        { name: "Award Hotel Search", basic: false, premium: true, ultimate: true },
        { name: "Partner Transfer Options", basic: "Limited", premium: "Full", ultimate: "Full+" },
        { name: "Award Space Alerts", basic: false, premium: true, ultimate: true },
      ]
    },
    {
      category: "Tools & Analysis",
      items: [
        { name: "Points Valuation", basic: "Basic", premium: "Advanced", ultimate: "Advanced+" },
        { name: "Historical Award Pricing", basic: false, premium: true, ultimate: true },
        { name: "Credit Card Recommendations", basic: "Basic", premium: "Personalized", ultimate: "Custom" },
        { name: "Travel Goal Planning", basic: false, premium: true, ultimate: true },
        { name: "Account Balance Tracking", basic: "Manual", premium: "Automated", ultimate: "Automated+" },
      ]
    },
    {
      category: "Support & Services",
      items: [
        { name: "Customer Support", basic: "Email", premium: "Priority Email", ultimate: "Phone & Email" },
        { name: "Response Time", basic: "48 Hours", premium: "24 Hours", ultimate: "4 Hours" },
        { name: "Booking Assistance", basic: false, premium: false, ultimate: true },
        { name: "Expert Strategy Session", basic: false, premium: false, ultimate: true },
        { name: "Exclusive Partner Bonuses", basic: false, premium: false, ultimate: true },
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-900">Plan Comparison</h2>
          <p className="text-lg text-navy-700">
            Detailed breakdown of what's included in each plan.
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Feature</TableHead>
                <TableHead className="w-1/5 text-center">Basic</TableHead>
                <TableHead className="w-1/5 text-center">Premium</TableHead>
                <TableHead className="w-1/5 text-center">Ultimate</TableHead>
              </TableRow>
            </TableHeader>
            
            {features.map((featureGroup, groupIndex) => (
              <TableBody key={groupIndex}>
                <TableRow className="bg-gray-100">
                  <TableCell colSpan={4} className="font-medium text-navy-900">
                    {featureGroup.category}
                  </TableCell>
                </TableRow>
                
                {featureGroup.items.map((feature, featureIndex) => (
                  <TableRow key={featureIndex}>
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    
                    <TableCell className="text-center">
                      {feature.basic === true ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : feature.basic === false ? (
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      ) : (
                        <span>{feature.basic}</span>
                      )}
                    </TableCell>
                    
                    <TableCell className="text-center">
                      {feature.premium === true ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : feature.premium === false ? (
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      ) : (
                        <span>{feature.premium}</span>
                      )}
                    </TableCell>
                    
                    <TableCell className="text-center">
                      {feature.ultimate === true ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : feature.ultimate === false ? (
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      ) : (
                        <span>{feature.ultimate}</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ))}
          </Table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
