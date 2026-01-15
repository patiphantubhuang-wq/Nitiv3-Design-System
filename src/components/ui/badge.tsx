import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // Notification Badges (พื้นหลังเข้ม) - สำหรับ badge notification, new, counts
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // Status Badges (พื้นหลังอ่อน) - สำหรับแสดงสถานะ
        "status-success":
          "border-transparent bg-status-success text-status-success-foreground",
        "status-warning":
          "border-transparent bg-status-warning text-status-warning-foreground",
        "status-error":
          "border-transparent bg-status-error text-status-error-foreground",
        "status-info":
          "border-transparent bg-status-info text-status-info-foreground",
        "status-pending":
          "border-transparent bg-status-pending text-status-pending-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
