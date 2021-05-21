import { TransactionType } from "../../types"
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

type PropsTransactionItem = TransactionType & {
    index: string | number
}
export const TransactionItem = (props: PropsTransactionItem) => {
    return <IonItem key={props.index}>

        <IonGrid>
            <IonRow>
                <IonCol size="2">
                    <img className="img_notify" src={props.img} />
                </IonCol>
                <IonCol size="10">
                    <div>
                        <IonLabel className="title_mail">{props.name}</IonLabel>
                        <div
                            className="d-flex"
                            style={{ justifyContent: "space-between" }}
                        >
                            <p className="time_mail">{props.date}</p>
                            <p className="time_mail">{props.amount}</p>
                        </div>
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonItem>
}