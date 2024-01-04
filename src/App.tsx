import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {
  About,
  Container,
  Earth,
  Footer,
  Header,
  Hello,
  Music,
  Projects,
} from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-950 text-white font-body">
      <div className="absolute z-50">
        <div className="flex flex-col min-h-screen items-start w-[90%] m-auto">
          <Header>
            <Music />
          </Header>
          <Container>
            <Routes>
              <Route index element={<Hello />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="*" element={"404"} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </div>
      <div className="fixed top-0 w-screen h-screen bg-gray-950">
        <Canvas>
          <Suspense fallback="Loading... ">
            <ambientLight intensity={0.25} />
            <directionalLight intensity={5} position={[5, 5, 5]} />
            <Earth />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default App;
