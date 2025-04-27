import React, { useState } from 'react';
import { Button, Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import TypingPlaceholderInput from '../TypingPlaceholderInput/TypingPlaceholderInput';

// Define types for options
interface Option {
  title: string;
  description: string;
  cost: string;
  keywords: string[];
}

// Define options with relevant keywords
const options: Option[] = [
  {
    title: 'Migraine Relief',
    description: 'Helps relieve migraine symptoms and inflammation while replenishing essential nutrients.',
    cost: '$250',
    keywords: ['headache', 'migraine', 'pain relief', 'inflammation', 'nausea'],
  },
  {
    title: 'Myers Cocktail',
    description: 'Combines essential nutrients to support energy, immune function, and overall wellness.',
    cost: '$200',
    keywords: ['energy boost', 'hydration', 'fatigue', 'stress reduction', 'wellness', 'hungover'],
  },
  {
    title: 'High-Dose Vitamin C',
    description: 'Boosts the immune system and promotes detoxification.',
    cost: '$150 - $600',
    keywords: ['immune support', 'detox', 'healing', 'anti-inflammatory', 'sickness', 'sick'],
  },
  {
    title: 'NAD+',
    description: 'Boosts energy and improves cognitive function and cellular repair.',
    cost: '$1 per mg',
    keywords: ['anti-aging', 'cognitive', 'energy', 'cellular repair', 'recovery'],
  },
  {
    title: 'Hydration IV',
    description: 'Restores fluids and electrolytes for overall hydration balance.',
    cost: '$120',
    keywords: ['hydration', 'electrolyte balance', 'fatigue', 'dehydration', 'recovery', 'hungover'],
  }
];

// Function to map user feelings to keywords
const getKeywordsForFeeling = (feeling: string): string[] => {
  const feelingsToKeywords: { [key: string]: string[] } = {
    tired: ['energy', 'fatigue', 'recovery'],
    headache: ['headache', 'pain relief', 'migraine', 'nausea'],
    dehydrated: ['hydration', 'electrolyte balance', 'fatigue', 'hungover'],
    nauseous: ['nausea', 'hydration', 'pain relief'],
    stressed: ['stress reduction', 'wellness', 'energy boost'],
    immune: ['immune support', 'detox', 'healing', 'sick', 'sickness'],
    hungover: ['hydration', 'fatigue', 'recovery', 'nausea', 'energy boost'],
    sick: ['immune support', 'detox', 'healing', 'sick', 'sickness'],
    inflammation: ['inflammation', 'pain relief', 'migraine', 'nausea'],
    recovery: ['recovery', 'energy', 'cognitive', 'cellular repair', 'anti-aging'],
    antiaging: ['anti-aging', 'cognitive', 'energy', 'cellular repair', 'recovery'],
    wellness: ['wellness', 'energy boost', 'hydration', 'fatigue', 'stress reduction'],
    energy: ['energy boost', 'hydration', 'fatigue', 'stress reduction', 'wellness'],
    hydration: ['hydration', 'electrolyte balance', 'fatigue', 'dehydration', 'recovery'],
    fatigue: ['energy', 'fatigue', 'recovery', 'hydration', 'stress reduction'],
    stress: ['stress reduction', 'wellness', 'energy boost', 'hydration', 'fatigue'],
    pain: ['pain relief', 'inflammation', 'migraine', 'nausea'],
  };

  // Normalize input and match the keywords
  const lowerFeeling = feeling.toLowerCase();
  let matchedKeywords: string[] = [];
  for (const [key, value] of Object.entries(feelingsToKeywords)) {
    if (lowerFeeling.includes(key)) {
      matchedKeywords = [...matchedKeywords, ...value];
    }
  }
  return matchedKeywords;
};

// Main component to handle user input and provide recommendations
const IVRecommendationPrompt: React.FC = () => {
  const [userFeeling, setUserFeeling] = useState<string>('');
  const [recommendedOptions, setRecommendedOptions] = useState<Option[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleUserFeeling = () => {
    setIsLoading(true); // Start loading
    const userKeywords = getKeywordsForFeeling(userFeeling);

    // Filter options based on matching keywords
    const filteredOptions = options.filter((option) =>
      option.keywords.some((keyword) => userKeywords.includes(keyword))
    );

    // If no matches, default to "Hydration IV"
    if (filteredOptions.length === 0) {
      setRecommendedOptions([options.find((opt) => opt.title === 'Hydration IV')!]);
    } else {
      setRecommendedOptions(filteredOptions);
    }

    setIsLoading(false); // Stop loading
  };

  return (
    <Container className="text-center my-5" style={{backgroundColor: "#FFF6F5" }}>
      <h2 className="mb-4" style={{color: '#E4B7C2'}}>How are you feeling today?</h2>
      <TypingPlaceholderInput userFeeling={userFeeling} setUserFeeling={setUserFeeling} />
      <Button onClick={handleUserFeeling} className="btn btn-primary" style={{ backgroundColor: '#E4B7C2', borderColor: '#E4B7C2', fontWeight: 'bold'}}>
        Get Recommendations
      </Button>

      {/* Show loading state while filtering options */}
      {isLoading ? (
        <Spinner animation="border" role="status" className="mt-4">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row className="justify-content-center mt-4">
          {recommendedOptions.length > 0 && (
            <>
              <h3 className="mb-4" style={{color: '#E4B7C2'}}>We recommend the following IV options for you:</h3>
              {recommendedOptions.map((opt) => (
                <Col md={4} sm={6} key={opt.title} className="mb-3">
                  <Card className="shadow">
                    <Card.Body>
                      <Card.Title>{opt.title}</Card.Title>
                      <Card.Text>{opt.description}</Card.Text>
                      <div className="mb-1 mt-1 cost-text"><strong>{opt.cost}</strong></div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </>
          )}
        </Row>
      )}
    </Container>
  );
};

export default IVRecommendationPrompt;
