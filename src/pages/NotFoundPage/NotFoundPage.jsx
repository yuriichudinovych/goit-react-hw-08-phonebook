import { Section, SectionContainer } from 'globalStyles';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Section>
      <SectionContainer>
        <h1 className="page-title">Page not found</h1>
        <Link to="/contacts">Contacts</Link>
      </SectionContainer>
    </Section>
  );
};

export default NotFoundPage;
