"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, SendHorizontal } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { IoPricetagsOutline } from "react-icons/io5";
import { LuMessageCircleQuestion, LuMessageSquareShare } from "react-icons/lu";

import { MobileHeader } from "@/components/mobile-header";
import { MobileScreen } from "@/components/mobile-screen";
import { Button } from "@/components/ui/button";
import { FEATURES } from "@/lib/guide-features";
import { useRouter } from "next/navigation";

export default function PreparePage() {
  const [progress, setProgress] = useState(0);
const router = useRouter()
  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          window.clearInterval(interval);
          return 100;
        }

        return current + 2;
      });
    }, 120);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <MobileScreen>
      <MobileHeader title="Unlock Your Guide" backHref="/" />

      <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-6 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <div className="border-gradient-primary rounded-xl p-4">
          <p className="mb-3 text-sm font-semibold text-primary">
            What&apos;s included
          </p>

          <div className="space-y-2.5">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <feature.icon className="mt-0.5 size-4 shrink-0 text-primary" />

                <div>
                  <p className="text-sm font-semibold text-white">
                    {feature.title}
                  </p>

                  <p className="text-xs text-white/55">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-gradient-primary rounded-xl p-4">
          <h3 className="text-sm font-semibold text-white">
            Verify your email
          </h3>

          <p className="mt-1 text-xs text-white/55">
            Verify your email to unlock your purchased guide and subscription.
          </p>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex h-11 flex-1 items-center rounded-xl border border-white/10 bg-white/5 px-3">
              <Mail className="mr-2 h-4 w-4 shrink-0 text-white/40" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm text-white placeholder:text-white/35 outline-none"
              />
            </div>

            <button
            onClick={()=>router.push('/explore')}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-black transition hover:opacity-90"
              type="button"
            >
              <SendHorizontal className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <Button className="h-11 rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10">
              <IoPricetagsOutline className="mr-2 h-4 w-4" />
              Plans
            </Button>
          </div>
        </div>

        <div className="border-gradient-primary rounded-xl p-4">
          <div className="grid grid-cols-2 gap-2">
            <Button
              asChild
              className="h-11 border border-white/10 bg-white/5 font-semibold text-white hover:bg-white/10"
              disabled={progress < 20}
            >
              <Link href="/faqs">
                <LuMessageCircleQuestion />
                FAQ
              </Link>
            </Button>

            <Button
              asChild
              className="h-11 border border-white/10 bg-white/5 font-semibold text-white hover:bg-white/10"
              disabled={progress < 20}
            >
              <Link href="/chat">
                <LuMessageSquareShare />
                Ask Aurelia
              </Link>
            </Button>
          </div>

          <div className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="text-xs leading-5 text-white/60">
              Already booked your tour through our official website? Simply
              verify using the{" "}
              <span className="font-medium text-primary">
                same email address
              </span>{" "}
              you used for your booking to unlock your guide automatically.
            </p>

            <div className="my-3 h-px bg-white/10" />

            <p className="text-xs leading-5 text-white/60">
              After verifying your email, your guide can be activated on the{" "}
              <span className="font-medium text-primary">
                same number of devices
              </span>{" "}
              as the tickets purchased. For example, if you purchased{" "}
              <span className="font-medium text-primary">4 tickets</span>, you
              can use the guide on up to{" "}
              <span className="font-medium text-primary">4 devices</span>.
            </p>

            <div className="my-3 h-px bg-white/10" />

            <p className="text-xs leading-5 text-white/60">
              Guides unlocked through an official website booking remain active
              until{" "}
              <span className="font-medium text-primary">
                one week after your tour date
              </span>
              . Subscription plans purchased in the app expire according to the{" "}
              <span className="font-medium text-primary">selected plan</span>.
            </p>
          </div>
        </div>
      </div>
    </MobileScreen>
  );
}
