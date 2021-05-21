// @ts-nocheck
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
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import { chevronBackOutline, addCircleOutline } from "ionicons/icons";
import { Header } from "../components/header";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import { fetchBalance } from './../api/transactions/index'
import { Balance } from "../components/balance/index";
import { TransactionType } from "../types";
import { TransactionList } from "../components/transaction-list";
import { RefresherEventDetail } from '@ionic/core';
import { chevronDownCircleOutline } from 'ionicons/icons';


const USER_DATA = {
  name: "Huy Cuong",
};





declare const window: any
const postMessage = (amount) => {
  const phoneNumer = '0909209304'

  const data = {
    phoneNumer,
    amount
  }
  console.log(data, '==datapost mess')
  window?.ReactNativeWebView?.postMessage(JSON.stringify(data))
}



const Tab3: React.FC = () => {
  const [showAlert4, setShowAlert4] = useState(false);

  const transactions: TransactionType[] = useStoreState((state) => state.globalStore.transactions);
  const balance = useStoreState((state) => state.globalStore.balance);


  const fetchListTransactions = useStoreActions(
    (actions) => actions.fetchListTransaction
  );
  const fetchBalance = useStoreActions(
    (actions) => actions.fetchBalance
  );


  useEffect(() => {
    fetchListTransactions();
    fetchBalance()
  }, []);

  const doRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    fetchListTransactions();
    fetchBalance()
    setTimeout(() => {
      event.detail.complete();
    }, 300);
  }

  return (
    <IonPage>
      <Header label={USER_DATA.name} />

      <IonContent>
        <Balance balance={balance.data} onClick={() => setShowAlert4(true)} />
        <TransactionList data={transactions} />
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent
            pullingIcon={chevronDownCircleOutline}
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="Refreshing..."
          >
          </IonRefresherContent>
        </IonRefresher>


      </IonContent>
      <IonAlert
        isOpen={showAlert4}
        onDidDismiss={() => setShowAlert4(false)}
        cssClass='my-custom-class'
        header={'Nap asdftien !'}
        inputs={[
          {
            name: 'amount',
            type: 'number',
            placeholder: 'Nhap so tien can nap:',
          }
        ]}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
          {
            text: 'Ok',
            handler: (data) => {

              postMessage(data.amount)
            }
          }
        ]}
      />
    </IonPage>
  );
};

export default Tab3;
