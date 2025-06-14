import Image from "next/image"
import Image1 from "../../public/assets/laptop-hero.png"
import { Wrapper } from "@/components/ui/Wrapper"
import { Text } from "@/components/ui/Text"
import { Button } from "@/components/ui/Button"

export const Hero = () => {
  return (
    <div className="bg-[#F5F5F5] text-[var(--color-secondary)] h-[82vh] w-full grid place-items-center overflow-hidden">
      <Wrapper>
        <div className="flex items-center justify-between">
          <aside className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Text text="Technology in all spheres..." size={51} />
              <Text text="Limited stocks available. Grab yours now" size={18} />
            </div>
              <div className="w-[200px]">
                <Button name="SHOP COLLECTION" />
              </div>
          </aside>
          <aside>
            <Image src={Image1} alt="Hero - Image" width={600} />
          </aside>
        </div>
      </Wrapper>
    </div>
  )
}
