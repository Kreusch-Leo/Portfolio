const GlassPlate = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=" black-glass
            flex flex-col items-center justify-center mx-35 p-5 my-15
        ">
            {children}
        </div>
    );
};

export default GlassPlate;