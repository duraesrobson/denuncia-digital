import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { COLORS } from '../styles/global';

const Accordion = ({ title, content, expanded, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.titleContainer} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.icon}>{expanded ? '-' : '+'}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={!expanded}>
        <View style={styles.content}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.darkPurple,
    borderRadius: 8,
    marginVertical: 8,
    overflow: 'hidden',
    elevation: 2,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderColor: COLORS.light,
    backgroundColor: COLORS.primary,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Rajdhani-Bold',
    color: COLORS.orange,
  },
  icon: {
    fontSize: 20,
    color: COLORS.light,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  contentText: {
    fontSize: 18,
    fontFamily: 'Rajdhani-Regular',
    color: COLORS.light,
  },
});

export default Accordion;
