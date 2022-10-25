import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import AppText from "../texts/AppText";
import colors from "../../config/colors";

function FilterTab({title, onPress}) {

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
          <AppText fontSize={12}>
            {title}
          </AppText>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray,
    padding: 8,
    paddingHorizontal: 12,
    marginRight: 12,
    borderRadius: 10
  }
});

export default FilterTab;
