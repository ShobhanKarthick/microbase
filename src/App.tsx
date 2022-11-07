import React, { Suspense, lazy } from "react"
import { ChakraProvider, theme, } from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

const Home = lazy(() => import("./pages/Home"))
const Project = lazy(() => import("./pages/Project"))
const ProjectHead = lazy(() => import("./pages/ProjectHead"))
const ProjectTable = lazy(() => import("./pages/ProjectsTable"))
const Team = lazy(() => import("./pages/Team"))
const Application = lazy(() => import("./pages/Application"))



export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectTable />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/projectHeads/:id" element={<ProjectHead />} />
          <Route path="/application" element={<Application />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  </ChakraProvider>
)
