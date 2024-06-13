import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalInput(props) {
  return (
    <Pressable
      android_ripple={styles.rippleEffect}
      onPress={props.onDeleteItem.bind(this, props.id)}
      //For iPhone devices :
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View>
        <Text style={styles.goalList}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalInput;

//////////////////////

const styles = StyleSheet.create({
  goalList: {
    flexDirection: "column",
    marginTop: 12,
    padding: 6,
    borderRadius: 6,
    backgroundColor: "#FF8787",
    color: "white",
  },

  pressedItem: {
    color: "#994747",
  },

  rippleEffect: {
    color: "#DDDDDD",
  },
});
