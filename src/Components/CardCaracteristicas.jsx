const CardProducts = ({ products }) => {
    return (
        <div className="md:mt-96 mt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-22">
                {products &&
                    products.map((elem, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center w-44 h-44 md:h-44 p-4 md:p-8  transition-transform transform-gpu hover:scale-105 hover:transition-transform duration-300"
                        >
                            <img
                                className=" mt-1 object-cover h-auto  md:h-60 md:w-screen"
                                src={elem.image}
                                alt="producto"
                            />
                            <div className="flex flex-col gap-2 items-center justify-start w-full">
                                <h6 data-aos="fade-in" data-aos-duration="1500" className="text-lg md:text-2xl font-extralight font-montserrat_alternates text-center">
                                    {elem.name}
                                </h6>
                                <span className="text-center text-gray-800 w-full font-semibold md:text-sm">
                                    {elem.description}
                                </span>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CardProducts;