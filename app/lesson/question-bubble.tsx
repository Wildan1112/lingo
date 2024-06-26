import Image from "next/image"

type Props = {
  question: string
}

export const QuestionBubble = ({ question }: Props) => {
  return (
    <div className="flex items-center gap-x-6 mb-6">
      <Image
        src="/mascot.svg"
        alt="Mascot"
        width={60}
        height={60}
        className="hidden lg:block"
      />
      <Image
        src="/mascot.svg"
        alt="Mascot"
        width={40}
        height={40}
        className="lg:hidden block"
      />

      <div className="relative px-4 py-2 border-2 rounded-xl text-sm lg:text-base">
        {question}
        <div className="absolute w-0 h-0 -left-3 top-1/2 border-x-8 border-t-8 border-x-transparent transform -translate-y-1/2 rotate-90"></div>
      </div>

    </div>
  )
}