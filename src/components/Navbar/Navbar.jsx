import  Logo  from '../../assets/favicon.svg';

const navItems = [
    {
        name: 'Home',
        href: '#',
    },
    {
        name: 'App',
        href: '#',
    },
    {
        name: 'Account',
        href: '#',
    },
    {
        name: 'Export',
        href: '#',
    },
];

export default function Navbar() {
    return (
        <nav>
            <div className="flex max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-1 mt-2 border px-4 rounded-md mx-auto">
                <div>
                    <img src={Logo} alt='Logo' className="h-14" />
                </div>

                <div className="hidden md:block">
                    <ul className="flex gap-4 text-gray-500 font-medium">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} className="hover:text-gray-900">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="px-6 py-2 bg-teal-600 text-white w-fit rounded-md">
                    Get App
                </div>
            </div>
        </nav>
    );
}




