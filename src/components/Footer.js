import linkedin from "../static/linkedin.svg"
import github from "../static/github.svg"
const navigation = [
    {
        name: 'GitHub',
        href: 'https://github.com/WalterZaninetti',
        icon: github
    },
    {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/walter-zaninetti-99808a83',
        icon: linkedin
    },
]

export default function Footer() {
    return (
        <footer className="bg-green-600">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-black">
                            <span className="sr-only">{item.name}</span>
                            <img className="h-8 w-8" src={item.icon} alt={item.name} aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center font-bold text-black">&copy; 2022 Zaninetti Walter - <a href="mailto:zaninettiwalter@gmail.com" className="text-blue-800 font-bold">zaninettiwalter@gmail.com</a></p>
                </div>
            </div>
        </footer>
    )
}
