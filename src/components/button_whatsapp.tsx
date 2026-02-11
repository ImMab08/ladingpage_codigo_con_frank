import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "./button_component";

export function ButtonWhatsapp() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        asChild
        size="lg"
        className="bg-yellow-300 text-primary hover:bg-yellow-300/90 gap-2 text-base"
      >
        <Link target="_blank" href="https://wa.me/message/4KVV5SVUMXGSC1">
          Iniciar misión
          <ArrowRight size={18} />
        </Link>
      </Button>
    </div>
  );
}
