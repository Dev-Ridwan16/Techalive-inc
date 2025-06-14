import { Text } from '../ui/Text'
import { Wrapper } from '../ui/Wrapper'

export default function Footer() {
  return (
    <div className='w-full h-[400px]'>
      <Wrapper>
        <div className='flex items-center justify-between'>
          <div>
            <header>
              <Text text='Techalive' size={30} />
            </header>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Wrapper>
    </div>
  )
}
