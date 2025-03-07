"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion"

interface DrawerProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  shouldScaleBackground?: boolean
  children?: React.ReactNode
}

interface DrawerContentProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode
}

const DrawerContext = React.createContext<{
  open?: boolean
  onOpenChange?: (open: boolean) => void
}>({})

const Drawer = ({
  shouldScaleBackground = true,
  open,
  onOpenChange,
  children,
  ...props
}: DrawerProps) => {
  return (
    <DrawerContext.Provider value={{ open, onOpenChange }}>
      <div {...props}>{children}</div>
    </DrawerContext.Provider>
  )
}
Drawer.displayName = "Drawer"

const DrawerTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { onOpenChange } = React.useContext(DrawerContext)
  return (
    <button
      ref={ref}
      className={className}
      onClick={() => onOpenChange?.(true)}
      {...props}
    />
  )
})
DrawerTrigger.displayName = "DrawerTrigger"

const DrawerClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { onOpenChange } = React.useContext(DrawerContext)
  return (
    <button
      ref={ref}
      className={className}
      onClick={() => onOpenChange?.(false)}
      {...props}
    />
  )
})
DrawerClose.displayName = "DrawerClose"

const DrawerPortal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>
}
DrawerPortal.displayName = "DrawerPortal"

const DrawerOverlay = React.forwardRef<
  HTMLDivElement,
  Omit<HTMLMotionProps<"div">, "ref">
>(({ className, ...props }, ref) => {
  const { open } = React.useContext(DrawerContext)
  
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm",
            className
          )}
          {...props}
        />
      )}
    </AnimatePresence>
  )
})
DrawerOverlay.displayName = "DrawerOverlay"

const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ className, children, ...props }, ref) => {
    const { open } = React.useContext(DrawerContext)

    return (
      <AnimatePresence>
        {open && (
          <>
            <DrawerOverlay />
            <motion.div
              ref={ref}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className={cn(
                "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
                className
              )}
              {...props}
            >
              <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )
  }
)
DrawerContent.displayName = "DrawerContent"

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DrawerTitle.displayName = "DrawerTitle"

const DrawerDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DrawerDescription.displayName = "DrawerDescription"

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
