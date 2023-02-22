import { IonRouterLink } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
      <div className="container">
        <p>ionic helloworld from louiscklaw.github.io</p>
        <IonRouterLink href="https://search.google.com/search-console?utm_source=about-page&resource_id=https://ionic-seo-tryout.iamon99.com/">
          google search console
        </IonRouterLink>
      </div>
    </>
  );
};

export default ExploreContainer;
