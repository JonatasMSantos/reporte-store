"use client"


import Cart from "@/components/cart/cart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CartContext } from "@/providers/cart";
import Link from "next/link";
import { useContext } from "react";
import Menu from "./menu";

import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { ShoppingCartIcon } from "lucide-react";

export default function Header() {

  const { products } = useContext(CartContext)

  const cartQuantityItems = products.length

  return <Card className="flex justify-between items-center p-[1.875rem]">
    <Menu />
    <Link href="/">
      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>
    </Link>

    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="relative">
          {cartQuantityItems > 0 && (
            <span className="bg-primary rounded-lg w-6 h-6 flex items-center justify-center text-sm font-bold absolute top-[calc(-1.25rem/2)] right-[calc(-1.25rem/2)]">
              {cartQuantityItems}
            </span>
          )}
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>

      <SheetContent className="w-[350px]">
        <Cart />
      </SheetContent>
    </Sheet>

  </Card>
}