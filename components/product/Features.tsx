import { Card, CardContent } from "@/components/ui/card";
import { RotateCcw, Shield, Truck } from "lucide-react";

export default function Features() {
  const features = [
    { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
    { icon: Shield, title: "Warranty", desc: "1 year guarantee" },
    { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-2">
    </div>
  );
}
