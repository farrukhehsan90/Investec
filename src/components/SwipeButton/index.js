import React, { useState } from 'react';
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

const SwipeButton = ({ onSwipeSuccess }) => {
    const [slidingAnimationX, setSlidingAnimationX] = useState(0);

    const handleMovement = e => {
        if (e.nativeEvent.locationX - 30 > 270) {
            setSlidingAnimationX(0);
        } else {
            setSlidingAnimationX(e.nativeEvent.locationX - 30)
        }
    }

    const handleMovementEnd = e => {
        if (e.nativeEvent.locationX >= 290) {
            onSwipeSuccess();            
        }
        setSlidingAnimationX(0)
    }
    
    return (
        <View style={styles.swipeContainer}>
            <View style={{ ...styles.buttonContainer, paddingLeft: slidingAnimationX }} onTouchMove={handleMovement} onTouchEnd={handleMovementEnd}>
                <View style={styles.iconContainer}>
                    <Icon name="diamond" size={20} color="#ffffff" />
                </View>
            </View>
            <Text style={styles.buttonText}>Slide me to continue</Text>
        </View>
    );
};

export default SwipeButton;