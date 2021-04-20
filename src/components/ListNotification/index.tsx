import "./ListNotify.css";
import {
  IonItem,
  IonList,
  IonLabel,
  IonRow,
  IonGrid,
  IonCol,
  IonIcon,
  IonText,
  IonAvatar,
} from "@ionic/react";

const ListNotification = ({ listNotify }) => {
  return (
    <IonList>
      {listNotify.map((notify, index) => (
        <IonItem key={index}>
          <IonGrid>
            <IonRow>
              <IonCol size="2">
                <IonAvatar>
                  <img className="img_notify" src={notify.image} />
                </IonAvatar>
              </IonCol>

              <IonCol size="10">
                <IonLabel className="title_mail">{notify.title}</IonLabel>
                <p className="time_mail">{notify.time}</p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      ))}
    </IonList>
  );
};

export { ListNotification };
