import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

interface HeaderProps {
  
}

export default function Header() {
  return <Card className="flex justify-between items-center p-[1.875rem]">
      <Button size="icon" variant="outline">
        <MenuIcon/>
      </Button>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">Reporte</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon/>
      </Button>
  </Card>
}