import "./NotificationComponent.css";
import { IonButton, IonGrid, IonIcon, IonSearchbar, IonRow, IonCol, IonList, IonItem, IonLabel} from '@ionic/react';
import React, { useEffect} from 'react';
import { useStoreState, useStoreActions } from '../store/index';


const NotificationComponent: React.FC = () => {
    const tran = useStoreState((state) => state.transaction.items);

    const fetchtran  = useStoreActions((actions) => actions.transaction.fetchtran);

    useEffect(()=>{
        fetchtran()
    }, [])

    return(
        <div>
        
            <IonList>
            {
                tran.map(item =>{
                    return(
                    <IonItem>
                        <IonLabel>
                            <p>Ban vua thanh toan {item.amount} cho bai giu xe</p>
                        </IonLabel>
                    </IonItem>
                    );
                    
                })
            }
            </IonList>
        </div>
    );
}

export default NotificationComponent;