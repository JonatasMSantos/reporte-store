import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet"
import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon } from "lucide-react"
import { Button } from "../ui/button"

interface Props {

}

export default function (props?: Props) {
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

        <div className="mt-2 flex flex-col gap-2">
          <Button variant="outline" className="w-full justify-start gap-2">
            <LogInIcon size={16}/>
            Fazer login
          </Button>

          <Button variant="outline" className="w-full justify-start gap-2">
            <HomeIcon size={16}/>
            Início
          </Button>

          <Button variant="outline" className="w-full justify-start gap-2">
            <PercentIcon size={16}/>
            Ofertas
          </Button>

          <Button variant="outline" className="w-full justify-start gap-2">
            <ListOrderedIcon size={16}/>
            Catálogo
          </Button>
        </div>

      </SheetContent>
    </Sheet>
  </>
}