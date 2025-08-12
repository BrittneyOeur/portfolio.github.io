import Hero from "@/components/Hero";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <main className="relative bg-white flex flex-col min-h-screen mx-auto sm:px-6 md:px-24 overflow-clip">
      <div className="flex-1">
        <NavBar />
        <Hero />
        <Footer />
      </div>
    </main>
  )
}