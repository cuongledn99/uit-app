import {
    IonContent,
    IonHeader,
    IonItem,
    IonGrid,
    IonRow,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonAvatar,
    IonCol,
    IonAlert,
    IonRefresher,
    IonRefresherContent
} from "@ionic/react";
import { chevronBackOutline, addCircleOutline } from "ionicons/icons";


type TBlance = {
    balance: number
    onClick: () => void
}
export const Balance = (props: TBlance) => {
    return (
        <div className="money_box ion-align-items-center">
            <IonCol size="6">
                <IonLabel className="money_title">Số dư</IonLabel>
                <p>{props.balance}</p>
            </IonCol>
            <IonCol size="6">
                <div className="d-flex" style={{ justifyContent: "flex-end" }}>
                    <IonIcon className="icon_plus" icon={addCircleOutline} onClick={props.onClick} />
                </div>
            </IonCol>
        </div>

    );
};

