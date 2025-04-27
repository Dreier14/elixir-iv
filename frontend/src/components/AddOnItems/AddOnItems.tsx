import { Card, Row, Col } from 'react-bootstrap';

// Define a type for the infusion options data
  interface AdditionalItem {
    title: string;
    description: string;
  }
  
  // Ensure the `options` prop is properly typed as an array of `InfusionOption`
  interface AdditionalItemProps {
    options: AdditionalItem[];  // This ensures options is an array
  }

const AddOnItems: React.FC<AdditionalItemProps> = ({options}) => {
    console.log("AddOnItems options:", options);
  return (
    <div className="therapy-options-container">
      <h1 className="therapy-options-title">Additional Items</h1>
      <Row className="card-row mb-4">
        {options.map((option) => (
            <Col lg={4} md={6} sm={12} xs={12} key={option.title} className="d-flex mx-auto">
                <Card className="mb-4 card-container w-100 d-flex flex-column">
                    <Card.Body className="d-flex flex-column card-body">
                        <div>
                            <Card.Title className="card-title text-center">{option.title}</Card.Title>
                            <Card.Text className="card-text">{option.description}</Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        ))}
      </Row>
    </div>
  );
};

export default AddOnItems;
