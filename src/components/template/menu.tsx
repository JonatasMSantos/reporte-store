"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet"
import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { Separator } from "@/components/ui/separator"

interface Props {

}

export default function (props?: Props) {
  const { status, data } = useSession()

  const handleLoginClick = async () => {
    await signIn();
  }

  const handleLogoutClick = async () => {
    await signOut();
  }

  return <>
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="text-left text-lg font-semibold">
          Menu
          {/* <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>


        {
          status === 'authenticated' && data?.user && (
            <div className="flex flex-col">
              <div className="py-4 flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>
                    {data.user.name?.[0].toUpperCase()}
                  </AvatarFallback>

                  {
                    data.user.image &&
                    <AvatarImage src={data.user.image} />
                  }

                </Avatar>
                <div className="flex flex-col">
                  <p className="font-medium">{data.user.name}</p>
                  <p className="text-sm opacity-75">Boas compras!</p>
                </div>

              </div>
              <Separator />
            </div>
          )
        }

        <div className="mt-4 flex flex-col gap-2">
          {
            status === "unauthenticated" && (
              <Button onClick={handleLoginClick} variant="outline" className="w-full justify-start gap-2">
                <LogInIcon size={16} />
                Fazer login
              </Button>
            )
          }

          {
            status === "authenticated" && (
              <Button onClick={handleLogoutClick} variant="outline" className="w-full justify-start gap-2">
                <LogOutIcon size={16} />
                Fazer Logout
              </Button>
            )
          }

          <Button variant="outline" className="w-full justify-start gap-2">
            <HomeIcon size={16} />
            Início
          </Button>

          <Button variant="outline" className="w-full justify-start gap-2">
            <PercentIcon size={16} />
            Ofertas
          </Button>

          <Button variant="outline" className="w-full justify-start gap-2">
            <ListOrderedIcon size={16} />
            Catálogo
          </Button>
        </div>

      </SheetContent>
    </Sheet>
  </>
}