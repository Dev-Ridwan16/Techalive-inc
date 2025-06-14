import * as TablerIcons from "@tabler/icons-react"
import React from "react"

interface IconInterface {
    name: keyof typeof TablerIcons
    size?: number
    color?: string
    className?: string
}

export const Icon: React.FC<IconInterface> = ({name, size=20, color, className}) => {
    const IconComponent = TablerIcons[name] as React.ElementType

    return <IconComponent size={size} color={color} className={className} />
}