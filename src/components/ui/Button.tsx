import React from "react"
import { Text } from "./Text"
import { Icon } from "./Icon"
import * as TablerIcon from "@tabler/icons-react"

export const Button: React.FC<{
  name?: string
  icon?: keyof typeof TablerIcon
  type?: "primary" | "secondary"
  fontSize?: number
}> = ({ name, icon, type = "primary", fontSize=14 }) => {
  const background =
    type === "primary" ? "bg-[var(--color-primary)]" : "bg-[var(--color-secondary)]"

  return (
    <button
      className={`px-[20px] py-[10px] flex items-center gap-[10px] justify-center rounded-full text-[var(--color-accent)] ${background}`}
    >
      {icon && <Icon name={icon} />}
      {name && <Text text={name} size={fontSize} />}
    </button>
  )
}
