import React from 'react';
import ReadingProgress from '../components/ReadingProgress';
import EssaySection, { EssayBox, Bibliography } from '../components/EssaySection';

const Essay = () => {
  const introContent = [
    "User experience (UX) design is not merely about usability; it actively shapes behavior, expectations, and cognition. While UX frameworks claim to enhance autonomy, many deploy behavioral engineering tactics that exploit cognitive biases for commercial gain. One of the most pervasive examples is infinite scroll—a feature that promises seamless content discovery but ultimately hijacks attention, trapping users in endless engagement loops on platforms like TikTok, Instagram, and Twitter.",
    "At the core of this phenomenon lies persuasive design. Psychological principles such as Hick's Law, Fitts's Law, and the Zeigarnik Effect have become weapons of habit formation in UX. Social media platforms exploit these principles to condition compulsive scrolling, using algorithmic curation and personalized recommendations to reinforce user dependency.",
    "This essay critically examines where persuasive UX crosses into manipulation, using infinite scroll as a case study. By analyzing its origins, implementation, and consequences, it questions whether modern UX empowers users or merely maximizes engagement at the cost of autonomy. As digital interfaces become increasingly habit-forming, the ethical dilemma remains: Is UX still designed for the user, or has it become a system of digital coercion?"
  ];

  const cognitiveItems = [
    {
      title: "Hick's Law",
      description: "By removing pagination, infinite scroll eliminates deliberate choice, tricking users into passive consumption. TikTok's swipe-up gesture, requiring minimal cognitive effort, increases session durations by 27% (DataReportal, 2024)."
    },
    {
      title: "Fitts's Law",
      description: "Infinite scroll reduces effort, making engagement instinctive rather than intentional. Unlike early web design, which required deliberate clicks, today's swipe-based navigation removes friction, fostering uninterrupted engagement."
    },
    {
      title: "Zeigarnik Effect",
      description: "Infinite scroll removes stopping cues, exploiting the Zeigarnik Effect—the tendency to seek resolution for unfinished tasks. Neuroscientific studies show that infinite scrolling triggers dopamine surges similar to those in gambling and slot machines, reinforcing compulsive behavior (Smith et al., 2023)."
    }
  ];

  const bibliographyEntries = [
    "Chadha, A. (2024). The Rise of Infinite Scroll in Web Design: A Case Study on User Behavior and Engagement. Journal of Digital Interaction and Design, 12(4), 85-102.",
    "DataReportal. (2024). TikTok and the Evolution of User Engagement: The Impact of Swipe-Based Navigation.",
    "European Commission. (2023). Digital Services Act (DSA) and its Impact on UX Design Patterns. Brussels: European Commission.",
    "McLuhan, M. (1964). Understanding Media: The Extensions of Man. McGraw-Hill.",
    "Papanek, V. (1984). Design for the Real World: Human Ecology and Social Change. Chicago: Academy Chicago Publishers.",
    "Pew Research. (2024). The Psychology of Social Media: How Gen Z Experiences 'Scroll Guilt'.",
    "Smith, J., Brown, L., & Thomas, P. (2023). The Neuropsychology of Infinite Scroll: Dopamine, Compulsion, and the Brain's Reward System. Journal of Neuroscience and Behavior, 31(7), 453-466."
  ];

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <ReadingProgress />
      
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Title Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'white',
            marginBottom: '1.5rem'
          }}>
            The Dark Side of UX: How Infinite Scroll Manipulates User Behavior
          </h1>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.9rem'
          }}>
            <span>Academic Essay</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
        </div>

        {/* Main Content */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '1rem',
          padding: 'clamp(1.5rem, 5vw, 3rem)',
          marginBottom: '2rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
        }}>
          <EssaySection
            title="Introduction"
            content={introContent}
          />

          <EssaySection
            title="The Role of UX in Shaping User Behavior"
            content="UX design is not neutral; it is a behavioral architecture that shapes cognition, decision-making, and social engagement. By embedding behavioral conditioning into digital interactions, UX engineers craft interfaces that do not just guide users but condition them, often blurring the line between empowerment and exploitation. Infinite scroll exemplifies this shift, transforming content consumption from a conscious choice into an algorithmically dictated behavior."
          />

          <EssaySection
            title="UX as a System of Influence: Rewiring Cognition"
            content="UX functions as a hidden curriculum, encoding behavioral scripts into everyday interactions. As McLuhan (1964) stated, 'the medium is the message'. Interfaces do not just deliver content; they dictate how users engage with it."
            level={3}
          />

          <EssayBox
            title="Three cognitive principles illustrate how infinite scroll alters user behavior:"
            items={cognitiveItems}
          />

          <Bibliography entries={bibliographyEntries} />
        </div>
      </div>
    </div>
  );
};

export default Essay;
