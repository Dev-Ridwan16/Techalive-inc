import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function MissionValue({
  values,
}: {
  values: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
}) {
  return (
    <section className='py-20 md:py-32'>
      <div className='container px-4 md:px-6'>
        <div className='mx-auto max-w-3xl text-center mb-16'>
          <h2 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            Our Mission & Values
          </h2>
          <p className='text-lg text-muted-foreground md:text-xl'>
            We believe technology should empower seamless connectivity and
            productivity by restoring devices to their full potential, fostering
            reliability, and driving positive impact through expert repair
            solutions.
          </p>
        </div>

        <div className='mb-16'>
          <Card className='border-2 border-orange-100 bg-gradient-to-r from-orange-50 to-red-50'>
            <CardHeader className='text-center pb-4'>
              <CardTitle className='text-2xl md:text-3xl'>
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className='text-center'>
              <p className='text-lg text-muted-foreground max-w-4xl mx-auto'>
                To democratize access to reliable technology through expert
                repair solutions, empowering businesses and individuals to
                thrive in the digital world while promoting sustainable device
                use and fostering seamless connectivity.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {values.map((value, index) => (
            <Card
              key={index}
              className='text-center hover:shadow-lg transition-shadow'
            >
              <CardHeader>
                <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100'>
                  {value.icon}
                </div>
                <CardTitle className='text-xl'>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-muted-foreground'>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
