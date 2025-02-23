import { ButtonHamburguer } from "./buttonHamburguer";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";


export function SheetButton() {
    return (
        <Sheet>
            <SheetTrigger>
                <ButtonHamburguer />
            </SheetTrigger>
            <SheetContent>
               
            </SheetContent>
        </Sheet>
    )
}