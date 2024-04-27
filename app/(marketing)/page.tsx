import Image from "next/image";
import Link from "next/link";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col max-w-[988px] mx-auto w-full lg:flex-row justify-center items-center p-4 gap-6">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="hero.svg" alt="hero" fill />
      </div>
      <div className="flex items-center flex-col gap-y-8">
        <h1 className="text-xl lg:text-3xl font-extrabold text-neutral-600 max-w-[480px] text-center">
          Learn, Practice, and Master a new languages with Lingo!
        </h1>
        <div className="flex flex-col justify-center items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="w-5 h-5 animate-spin text-muted-foreground" />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button variant="secondary" size="lg" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button variant="primaryOutline" size="lg" className="w-full">
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button variant="secondary" size="lg" className="w-full" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
