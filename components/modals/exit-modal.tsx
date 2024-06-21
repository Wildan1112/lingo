'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useExitModal } from '@/store/use-exit-modal'
import { Button } from '../ui/button'

export const ExitModal = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState<boolean>(false)

  const { isOpen, close } = useExitModal()

  useEffect(() => setIsClient(true), [])

  if (!isClient) return null

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className='flex items-center justify-center w-full mb-5'>
            <Image
              src="/mascot_sad.svg"
              alt="Logo"
              width={80}
              height={80}
            />
          </div>

          <DialogTitle className="text-center font-bold text-2xl">
            Wait, don&apos;t go!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Are you sure to leave this lesson ?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className='mb-4'>
          <div className='flex flex-col gap-y-2 w-full'>
            <Button
              variant={"primary"}
              size={"lg"}
              className="w-full"
              onClick={close}
            >
              Keep Learning
            </Button>
            <Button
              variant={"dangerOutline"}
              size={"lg"}
              className="w-full"
              onClick={() => {
                close()
                router.push('/learn')
              }}
            >
              End session
            </Button>
          </div>
        </DialogFooter>


      </DialogContent>
    </Dialog >
  )
}