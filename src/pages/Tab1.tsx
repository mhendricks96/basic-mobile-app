import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Card from '../components/Card';
import people from '../data/data.json'

type Person = {
  name: string;
  email: string;
  note: string;
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Pools</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Pools</IonTitle>
          </IonToolbar>
        </IonHeader>
        {people?.map((person: Person, index: number) => (
          <Card 
            key={index}
            title={person.name}
            content={person.note}
            subtitle={person.email}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
