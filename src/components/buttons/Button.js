const getVariant = variant => {
    switch (variant) {
      case "primary":
        return "bg-[#008081] hover:bg-black text-white shadow shadow-black-600/25 hover:shadow-black-600/75"
      case "secondary":
        return "bg-[#ffffffab] hover:bg-black text-white shadow shadow-black-600/25 hover:shadow-black-600/75"
  
      case "outline-primary":
        return "bg-white text-black border border-black hover:text-white hover:bg-[#181818]"
  
      default:
        return "bg-violet-500 hover:bg-violet-700 text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75"
    }
  }
  export const Button = ({
    className,
    children,
    variant,
    square,
    paddingLess,
    type = "button",
    onClick,
    imgSrc, 
    imgAlt, 
    iconPresent,
    ...props
  }) => {
    return (
      <button
        {...props}
        type={type}
        onClick={onClick}
        className={`
          ${getVariant(variant)}  transition duration-75  ${!paddingLess &&
          "xl:w-[140px] xl:h-[42px]  md:h-[40px] md:w-[100px] w-[120px] h-[40px] "}  ${!square &&
          "rounded-[6px] sm:rounded-[8px] "} active:scale-95 ${className}  ${!iconPresent &&
            "flex justify-center items-center gap-2"} text-sm font-medium`}
      >
        {imgSrc && <img src={imgSrc} alt={imgAlt} className="" />} 
        {children}
      </button>
    )
  }
  