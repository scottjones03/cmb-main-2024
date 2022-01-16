import React from "react";
import Container from "../components/Container";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";
import JobsDisplay from "../components/main/JobsDisplay";

export default function WorkForUsPage() {
  return (
    <Container>
      <Header />
      <JobsDisplay />
      <Footer />
    </Container>
  );
}
