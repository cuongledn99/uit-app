import { IonButton, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import NotificationComponent from '../components/NotificationComponent';
const Notification: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonButton fill="clear" href="#" >
              <IonIcon icon={chevronBackOutline}   color="light"  />
              <IonLabel color="light">Thông báo</IonLabel>
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <NotificationComponent/>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Notification;