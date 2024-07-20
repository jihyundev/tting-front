type TypographyProps = {
    variant: 'header1'
        | 'header2'
        | 'header3'
        | 'header4'
        | 'header5'
        | 'subtitle1'
        | 'subtitle2'
        | 'subtitle3'
        | 'content'
        | 'description'
        | 'alert'
        | 'button1'
        | 'button2'
        | 'body1'
        | 'body2'
        | 'body3'
    component?: keyof JSX.IntrinsicElements
    className?: string
    children: React.ReactNode
}

const Typography = ({ variant, component = "div", className, children, ...props }: TypographyProps) => {
    const variants = {
        header1: "text-[40px] font-semibold",
        header2: "text-[32px] font-semibold",
        header3: "text-2xl font-semibold",
        header4: "text-xl font-semibold",
        header5: "text-lg font-semibold",
        subtitle1: "text-[32px] font-normal text-gray-400",
        subtitle2: "text-2xl font-normal text-gray-400",
        subtitle3: "text-lg font-normal text-gray-400",
        content: "text-sm font-medium text-gray-600",
        description: "text-xs font-normal text-gray-400",
        alert: "text-sm font-normal text-[#FF4D4D]",
        button1: "text-base font-medium text-gray-600",
        button2: "text-xs font-medium text-gray-600",
        body1: "text-2xl font-normal text-gray-600",
        body2: "text-xl font-normal text-gray-600",
        body3: "text-base font-normal text-gray-600",
    }
    const Component = component
    const classes = `${variants[variant]} ${className}`
    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    )
}

export { Typography }
