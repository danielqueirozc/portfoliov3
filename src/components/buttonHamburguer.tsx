

export function ButtonHamburguer() {

    return (
        <button className="flex flex-col justify-around items-center w-[1.875rem] h-[1.5625rem] bg-transparent border-0 cursor-pointer focus:outline-none focus:shadow-none max-[481px]:w-[1.5625rem] max-[481px]:h-[1.25rem]">
            <span className="h-[0.1875rem] w-full bg-gray-100 rounded-[16px] transition-all duration-400 ease-in-out"></span>
            <span className="h-[0.1875rem] w-full bg-gray-100 rounded-[16px] transition-all duration-400 ease-in-out"></span>
            <span className="h-[0.1875rem] w-full bg-gray-100 rounded-[16px] transition-all duration-400 ease-in-out"></span>
        </button>
    )
}