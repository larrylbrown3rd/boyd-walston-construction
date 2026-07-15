import HomePage from '@/components/HomePage'
import PageStructuredData from '@/components/PageStructuredData'

export default function Home() {
  return (
    <>
      <PageStructuredData pathname="/" includeFaq includeBreadcrumbs={false} />
      <HomePage />
    </>
  )
}
