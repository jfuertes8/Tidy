import React, {useState} from "react";
import { StyleSheet, View, Image, TouchableWithoutFeedback, Modal, FlatList } from "react-native";

import colors from "../../config/colors";
import CategorySelector from "../other/CategorySelector";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../texts/AppText";
import ScreenTitle from "../texts/ScreenTitle";
import ListItemSeparator from "../other/ListItemSeparator";

function PickerField({ items, onSelectItem, selectedItem, defaultIcon, defaultText, modalTitle }) {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', flex: 1, alignItems: "center"}}>
            <Image style={styles.pickedIcon} source={selectedItem ? selectedItem.icon : defaultIcon} />
            <AppText>{selectedItem ? selectedItem.label : defaultText}</AppText>
          </View>
            <MaterialCommunityIcons name='chevron-up' size={18} />
        </View>
      </TouchableWithoutFeedback>

      {/* We create the modal to be shown when tapping on the Picker */}

      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.sectionTitle}>
          <ScreenTitle>{modalTitle}</ScreenTitle>
        </View>
        <FlatList 
          data={items}
          keyExtractor={item => item.value.toString()}
          renderItem={({ item }) => (
            <CategorySelector 
              title={item.label}
              image={item.icon}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </Modal>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 65,
    backgroundColor: colors.white,
    marginTop: 5,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row'
  },
  pickedColor: {
    width: 20,
    height: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.black,
    backgroundColor: colors.cardBgGreen,
    marginLeft: 18
  },
  pickedIcon: {
    width: 25,
    height: 25,
    marginRight: 15
  },
  sectionTitle: {
    marginLeft: 20,
    marginVertical: 20
  },
});

export default PickerField;
