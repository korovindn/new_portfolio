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
    <div className="bg-gray-950 text-white font-body lg:text-xl">
      <div className="absolute z-50 w-screen pointer-events-none">
        <div className="flex flex-col min-h-screen items-start w-[95%] m-auto">
          <Header>
            <Music />
          </Header>
          <div className="flex-1 w-full">
            <Routes>
              <Route
                index
                element={
                  <Container>
                    <Hello />
                  </Container>
                }
              />
              <Route
                path="about"
                element={
                  <Container>
                    <About />
                  </Container>
                }
              />
              <Route
                path="projects"
                element={
                  <Container>
                    <Projects />
                  </Container>
                }
              />
              <Route path="earth" element={<></>} />
              <Route path="*" element={"404"} />
            </Routes>
          </div>
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
