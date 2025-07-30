"use client"

import type React from "react"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface ModalContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)

  return <ModalContext.Provider value={{ open, setOpen }}>{children}</ModalContext.Provider>
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}

export const Modal = ({ children }: { children: React.ReactNode }) => {
  return <ModalProvider>{children}</ModalProvider>
}

export const ModalTrigger = ({
  children,
  className,
  onModalOpen,
}: {
  children: React.ReactNode
  className?: string
  onModalOpen?: () => void
}) => {
  const { setOpen } = useModal()

  const handleClick = () => {
    setOpen(true)
    onModalOpen?.()
  }

  return (
    <button
      className={cn("px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden", className)}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export const ModalBody = ({
  children,
  className,
  onModalClose,
}: {
  children: React.ReactNode
  className?: string
  onModalClose?: () => void
}) => {
  const { open, setOpen } = useModal()

  const handleClose = () => {
    setOpen(false)
    onModalClose?.()
  }

  // Remove the body scroll lock - let the page remain scrollable
  // useEffect(() => {
  //   if (open) {
  //     document.body.style.overflow = "hidden"
  //   } else {
  //     document.body.style.overflow = "auto"
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto"
  //   }
  // }, [open])

  const modalRef = useRef(null)
  useOutsideClick(modalRef, handleClose)

  // Add escape key support
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      }
    }

    if (open) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
        >
          {/* Backdrop - now allows scrolling through */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
            onClick={handleClose}
          />

          {/* Modal - positioned to allow background scrolling */}
          <motion.div
            ref={modalRef}
            className={cn(
              "relative w-full max-w-2xl max-h-[85vh] bg-white dark:bg-neutral-950 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto mx-auto",
              className,
            )}
            initial={{
              opacity: 0,
              scale: 0.5,
              rotateX: 40,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotateX: 10,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 group cursor-pointer hover:scale-110 transition-transform"
            >
              <div className="bg-white dark:bg-neutral-950 h-8 w-8 rounded-full flex items-center justify-center shadow-lg border border-neutral-200 dark:border-neutral-700">
                <X className="h-4 w-4 text-black dark:text-white group-hover:scale-125 group-hover:rotate-3 transition duration-200" />
              </div>
            </button>

            {/* Content - scrollable within modal */}
            <div className="overflow-y-auto max-h-[85vh]">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const ModalContent = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <div className={cn("p-6 md:p-8", className)}>{children}</div>
}

export const ModalFooter = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "p-4 bg-gray-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  )
}

export const useOutsideClick = (ref: React.RefObject<HTMLDivElement>, callback: Function) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      callback(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref])
}
