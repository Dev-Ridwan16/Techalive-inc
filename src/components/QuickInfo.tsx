import { Text } from "./ui/Text"
import { Wrapper } from "./ui/Wrapper"

export const QuickInfo = () => {
  return (
    <Wrapper>
      <div className="hidden lg:flex justify-between items-center text-[var(--color-secondary)]">
        <div className="flex items-center gap-[10px]">
          <Text text="Need help? Call us" />
          <a href="tel:+2348050500466">+234 805 050 0466</a>
        </div>
        <hr className="h-[30px] border" />
        <div className="flex items-center gap-[10px]">
          <Text text="Summer sale discount off 60% off!" />
          <a href="" className="underline">
            Shop Now
          </a>
        </div>
        <hr className="h-[30px] border" />
        <div className="flex items-center gap-[10px]">
          <Text text="2-3 business days delivery & free returns" />
        </div>
      </div>
    </Wrapper>
  )
}
