import { Header, Carousel, CarouselProduct } from "../components";
export default function Home() {
  return (
    <main className="">
      <Header />

      <div className="div-main">
        <Carousel />
        <div className="p-40">
          <CarouselProduct />

        </div>
      </div>
    </main>
  )
}
