import React, { useState } from 'react';
import { IonMenu, IonHeader, IonToolbar, IonContent, IonItem, IonList, IonTitle, IonRouterOutlet } from '@ionic/react';
import { sunny } from 'ionicons/icons';
import { RangeValue } from '@ionic/core';

export default function Card() {

    const [value, setValue] = useState(0);
    const [rangeValue, setRangeValue] = useState<{
        lower: number;
        upper: number;
    }>({ lower: 0, upper: 0 });

    return (
        <IonMenu side="start" menuId="first" contentId="main-menu">
            <IonHeader>
                <IonToolbar color="primary">
                    <IonTitle>Start Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                    <IonItem>Menu Item</IonItem>
                </IonList>
            </IonContent>
            <IonRouterOutlet id="main-menu"></IonRouterOutlet>

        </IonMenu>

    );
};