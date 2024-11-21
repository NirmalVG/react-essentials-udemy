import React from "react";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Time to get started!">
      <ul>
        {CORE_CONCEPTS.map((concept) => {
          return (
            <CoreConcept
              key={concept.title}
              title={concept.title}
              description={concept.description}
              image={concept.image}
            />
          );
        })}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
