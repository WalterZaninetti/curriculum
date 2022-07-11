export default function Stack({stackType}) {
    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <p className="text-center text-base font-bold text-xl uppercase text-green-600 tracking-wider">
                    {stackType.title}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                    {stackType.tech.map((tech) => (
                        <div className="col-span-1 py-8 px-8 bg-gray-50" key={tech.id}>
                            <div className="flex justify-center">
                                <img
                                    className="max-h-12"
                                    src={tech.icon}
                                    alt={tech.name}
                                />
                            </div>
                            <p className="font-extrabold text-xl text-black text-center my-4">{tech.name}</p>
                            <p className="font-bold text-lg text-black text-center my-4">{tech.experience}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
