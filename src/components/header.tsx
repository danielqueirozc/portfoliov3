import { kalam } from "@/app/fonts";
import { SheetButton } from "./sheetButton";

export function Header() {
    return (
        <header className="flex justify-between py-4">
            <div className="flex">
                <h1 className={`${kalam.className} text-2xl`}>Daniel</h1>
                <h1 className={`${kalam.className} text-2xl font-bold`}>Queiroz</h1>
            </div>
            <SheetButton />
        </header>
    );
}