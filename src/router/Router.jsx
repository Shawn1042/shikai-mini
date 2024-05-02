import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import AnimeInfo from "../components/AnimeInfo";
import NavBar from "./NavBar";
import Err from "../components/Err";
import Watch from "../components/Watch";
import Results from "../components/Results";
import Footer from "../components/Footer";
import TopAiring from "../components/TopAiring";
import Genres from "../components/Genres";
import Genre from "../components/Genre";
import LotsOfInfo from "../components/LotsOfInfoPage";
import RainBackground from "../components/RainBackground";

const Router = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <RainBackground />
              <App />
            </>
          }
        />
        <Route path="/top" element={<TopAiring />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/results/:search" element={<Results />} />
        <Route path="/info/:id" element={<AnimeInfo />} />
        <Route path="/watch/:epID" element={<Watch />} />
        <Route path="/genres/:genreID" element={<Genre />} />
        <Route path="/LotsOfInfo" element={<LotsOfInfo />} />
        <Route path="*" element={<Err />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
