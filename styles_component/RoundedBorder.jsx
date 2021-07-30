import React from "react";
import { View } from 'react-native';
import { Surface } from 'react-native-paper';

export const RoundedBorder = ({children}) => {
    return (
    <Surface
        style={{
            
            borderRadius: 10,
            paddingTop: 10,
            width: 400,
            height: 100,
            alignItems: 'center',
            elevation: 5
        
        }}>
        {children}
    </Surface>
    );
    
}