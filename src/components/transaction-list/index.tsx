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
import { TransactionItem } from './transaction-item'

type PropsTransactionList = {
    data: TransactionType[]
}
export const TransactionList = (props: PropsTransactionList) => {
    return (<div>
        {props.data.map((item, index) => <TransactionItem index={index}  {...item} />)}
    </div>)
}