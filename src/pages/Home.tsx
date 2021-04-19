
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HomeComponent from '../components/HomeComponent';



const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <HomeComponent/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
